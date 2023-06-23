import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import './CheckOut.css'

const CheckOut = ({price,cart}) => {
	const stripe =useStripe();
	const elements=useElements();
	const {user}=useAuth()
	const [cardError,setCardError]=useState('');
	const [clientSecret,setClientSecret]=useState('')
	const [processing,setProcessing]=useState(false)
        const [transactionId, setTransactionId] = useState('');

	useEffect(()=>{
		axios.post('http://localhost:3000/create-payment-intent',{price})
		// .then(res=>res.json())
		.then(data=>{
			setClientSecret(data.data.clientSecret)
		})
	},[price])

	const handleSubmit=async(event)=>{
		event.preventDefault();
		if(!stripe || !elements){
			return
		}
		const card = elements.getElement(CardElement);
		if(card=== null){
			return
		}
		// console.log('test' ,card)
		const {error,paymentMethod}= await stripe.createPaymentMethod({
			type:'card',
			card
		})
		if(error){
			console.log('error',error)
			setCardError(error.message)
		}else{
			console.log('method ',paymentMethod)
		}
		setProcessing(true)
		const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
			payment_method:{
				card:card,
				billing_details:{
					name:user?.displayName || 'Unknown',
					email:user?.email || 'Unknown' 
				}
			}
		});
		if(confirmError){
			console.log(confirmError)
		}
		setProcessing(false)
		if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
        //     save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
	axios.post('http://localhost:3000/payments',payment)
	.then(res =>{
		console.log(res.data)
		if(res.data.insertedId){
			alert('added')
		}
          })
	}
		
	}

	return (
		<>
			<form className="w-2/3 mx-auto pt-10" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn active:bg-lime-500 btn-md btn-primary border-0 text-white bg-red-400 self-center hover:bg-blue-400 mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p  className="text-red-600"> {cardError} </p>}
     {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

		</>
  );
}
	


export default CheckOut;