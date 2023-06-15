
const FoodCard = ({item}) => {
	const {image,name,recipe}=item;
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
					<button className="btn text-black bg-gray-400 hover:bg-green-500 border-b-red-100">Add To Cart</button>
					</div>
					</div>
					</div>
			
		</>
	);
}

export default FoodCard;
