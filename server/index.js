const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const jwt = require('jsonwebtoken'); //jwt
const stripe=require('stripe')(process.env.PAYMENT_SECRET_KEY)
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());

const verifyJWT = (req,res,next)=>{
  const authorization = req.headers.authorization;
  if(!authorization){
    return res.status(401).send({error:true,message:'unauthorized access'})
  }
  //bearer token
  const token = authorization.split(' ')[1];
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
    if(err){
      return res.status(401).send({error:true,message:'unauthorized access'})
    };
    req.decoded=decoded;
    next();
  })

}
// mongo db

const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hh2vhtl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

const foodCollection = client.db('restaurantDB').collection('menu');
const review = client.db('restaurantDB').collection('review');
const cartCollection = client.db('restaurantDB').collection('cart');
const usersCollection = client.db('restaurantDB').collection('users');
const paymentCollection = client.db('restaurantDB').collection('payments');
//------------------------------------------------------------------------------------Token
app.post('/jwt',(req,res)=>{
  const user=req.body;
  const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'5'})
  res.send({token})
})
//------------------------------------------------------------------------------------get all users
app.get('/users',async(req,res)=>{
  const result = await usersCollection.find().toArray();
  res.send(result);
})
//------------------------------------------------------------------------------------check is admin
app.get('/users/admin/:id',verifyJWT,async(req,res)=>{
  const email =req.params.email;
  if(req.decoded.email !== email){
    res.send({admin:false})
  }
  const query ={email:email};
  const user = await usersCollection.findOne(query);
  const result ={admin:user?.role === 'admin'};
  result.send(result);
})
//------------------------------------------------------------------------------------admin role creator -------------------------------------------------
app.patch('/users/admin/:id',async(req,res)=>{
  const id = req.params.id;
  const filter ={_id: new ObjectId(id)};
  const updateDoc={
    $set: {
      role:'admin'
    },
  };
  const result = await usersCollection.updateOne(filter,updateDoc);
  res.send(result);
})
//------------------------------------------------------------------------------------user create 
app.post('/users',async(req,res)=>{
  const user=req.body;
  const query ={email:user.email};
  const exist= await usersCollection.findOne(query);
  if(exist) return res.send({message:'user already exist'});
  const result = await usersCollection.insertOne(user);
  res.send(result);
})

//------------------------------------------------------------------------------------get all food item
app.get('/menu',async(req,res)=>{
  const result = await foodCollection.find().toArray();
  res.send(result); 
})
//------------------------------------------------------------------------------------Add new item to the menu
app.post('/menu',async(req,res)=>{
  const newItem=req.body;
  const result= await foodCollection.insertOne(newItem);
  res.send(result);
})

//-------------------------------------------------------------------------------------all customer reviews
app.get('/reviews',async(req,res)=>{
  const result = await review.find().toArray();
  res.send(result);
})
//-------------------------------------------------------------------------------------user cart data
app.post('/carts',async(req,res)=>{
  const item =req.body;
  const result = await cartCollection.insertOne(item);
  res.send(result)
})
//--------------------------------------------------------------------------------------get cart data
app.get('/carts',verifyJWT,async(req,res)=>{
  const email = req.query.email;
  if(!email){
    res.send([])
  }
  const decodedEmail =req.decoded.email;
  if(email !== decodedEmail){
    return res.status(403).send({error:true,message:'forbidden access'})
  }
  const query= {userEmail:email};
  const result = await cartCollection.find(query).toArray();
  res.send(result);
})

//---------------------------------------------------------------------------------------delete cart data
app.delete('/carts/:id',async(req,res)=>{
  const id = req.params.id;
  const query ={_id: new ObjectId(id)};
  const result = await cartCollection.deleteOne(query);
  res.send(result)

})
//-------------------------------------------------------------------------------------Stripe Payment
app.post('/create-payment-intent',  async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card']
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})
//--------------------------------------------------------------------------------------storing payment histroy
app.post('/payments',async(req,res)=>{
  const payment = req.body;
  const result = await paymentCollection.insertOne(payment);
  const query = {_id:{$in:payment.cartItems.map(id=> new ObjectId(id))}}
  const deleteResult= await cartCollection.deleteMany(query)
  res.send({result,deleteResult})
})
	
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
res.send('server is running')
})


// listen
app.listen(port)
