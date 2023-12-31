import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const imageToken= import.meta.env.VITE_image_token;
const AddItem = () => {
	// const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${imageToken}`;

    const onSubmit=data=>{
        const formData = new FormData();
        formData.append('image',data.image[0])
        fetch(imageHostingUrl,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgRes=>{
            const imgUrl = imgRes.data.display_url;
            const {name,price,category,recipe}=data;
            const newItem = {name,price,category,recipe,image:imgUrl};
            console.log(newItem)
            // console.log(imgUrl)
            fetch('http://localhost:3000/menu',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('item added')
                }
            })
        })
	// console.log(data)
}
// console.log(imageToken)
	return (
		<div className="w-full bg-slate-50 ">
			<Helmet>
				<title>Add Item</title>
			</Helmet>
			<SectionTitle subHeading={'----Add A New Item----'} heading={'Item Field'}/>
			<form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto">
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-md mt-4 bg-red-300  hover:bg-lime-300 ml-96" type="submit" value="Add Item" />
            </form>

		</div>
	);
}

export default AddItem;
