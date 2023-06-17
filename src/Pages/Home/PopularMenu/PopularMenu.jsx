
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import Loading from "../../Loading/Loading";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu,loading]=useMenu();
	if(loading) return <Loading/>;
	const popular =menu.filter(m=>m.category==='popular') //from hooks
	
	return (
		<div className="pt-5 ">
			<SectionTitle subHeading={"----Popular Items----"} heading={"From Our menu"}/>
			<div className="grid grid-cols-2 gap-10 justify-center pt-4 container mx-auto">
			{
				popular.map(item=><MenuItem key={item._id} item={item} />)
			}
			</div>
			
		</div>
	);
}

export default PopularMenu ;
