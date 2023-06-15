import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu,setMenu]=useState([])
	useEffect(()=>{
		fetch('/menu.json')
		.then(res=>res.json())
		.then(data=>{
			const popularItem=data.filter(item=>item.category === 'popular');
			setMenu(popularItem)
		})
	},[])
	return (
		<div className="pt-5 ">
			<SectionTitle subHeading={"----Popular Items----"} heading={"From Our menu"}/>
			<div className="grid grid-cols-2 gap-10 justify-center pt-4 container mx-auto">
			{
				menu.map(item=><MenuItem key={item._id} item={item} />)
			}
			</div>
			
		</div>
	);
}

export default PopularMenu ;
