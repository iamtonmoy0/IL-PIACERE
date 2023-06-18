import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import {  LOGIN } from "../../../Routes/RoutePath";
import useCart from "../../../hooks/useCart";

const FoodCard = ({item}) => {
	const {image,name,recipe,_id,price}=item;
	const {user}=useContext(AuthContext);
	const navigate=useNavigate(); //navigation
	const location =useLocation();//location
	const [,refetch] = useCart();//from use Cart refresh functionality
	const handleItem = (item)=>{
		if(user){
			const cartItem={itemId:_id,name,image,price,userEmail:user.email}
			fetch('https://il-piacere-server.vercel.app/carts',{
				method:'POST',
				headers:{
					'content-type':'application/json'
				},
				body: JSON.stringify(cartItem)
			})
			.then(res=>res.json())
			.then(data=>{
				if(data.insertedId){
					refetch();//refetching the data if anyone add to cart from useCart 
					Swal.fire({
						position: 'top-end',
					icon: 'success',
					title: 'item saved to cart',
					showConfirmButton: false,
					timer: 1500
				})
				}
			})
		}
		else{
			Swal.fire({
			title: 'Please Login to order',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#82CD47',
			cancelButtonColor: '	#FF6347',
			confirmButtonText: 'Login here'
			}).then((result) => {
			if (result.isConfirmed) {
			navigate(LOGIN,{state:{from:location}})
			}
			})
		}

	}
	return (
		<>
		<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src={image} alt="Shoes" className="rounded-xl" />
				</figure>
					<div className="card-body items-center text-center">
					<h2 className="card-title">{name}</h2>
					<p>{recipe}</p>
					<div className="card-actions">
					<button onClick={()=>handleItem(item)} className="btn text-black bg-gray-400 hover:bg-green-500 border-b-red-100">Add To Cart</button>
					</div>
					</div>
					</div>
			
		</>
	);
}

export default FoodCard;
