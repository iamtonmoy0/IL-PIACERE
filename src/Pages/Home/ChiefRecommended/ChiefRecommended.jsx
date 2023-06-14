import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChiefRecommended = () => {
	return (
		<div className="container pt-5 mx-auto">
			<SectionTitle subHeading={"----Should Try----"} heading={"Chief Recommends"} />
			
			<div className="grid grid-cols-3 gap-4">
				<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src="/menu/pizza-bg.jpg" alt="Shoes" className="rounded-xl" />
				</figure>
					<div className="card-body items-center text-center">
					<h2 className="card-title">Pizza</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, veritatis.</p>
					<div className="card-actions">
					<button className="btn bg-red-400 hover:bg-green-500">Order Now</button>
					</div>
					</div>
					</div>


					<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src="/menu/pizza-bg.jpg" alt="Shoes" className="rounded-xl" />
				</figure>
					<div className="card-body items-center text-center">
					<h2 className="card-title">Pizza</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</p>
					<div className="card-actions">
					<button className="btn bg-red-400 hover:bg-green-500">Order Now</button>
					</div>
					</div>
					</div>



					<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src="/menu/pizza-bg.jpg" alt="Shoes" className="rounded-xl" />
				</figure>
					<div className="card-body items-center text-center">
					<h2 className="card-title">Pizza</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolores.</p>
					<div className="card-actions">
					<button className="btn bg-red-400 hover:bg-green-500">Order Now</button>
					</div>
					</div>
					</div>

			</div>
		</div>
	);
}

export default ChiefRecommended;
