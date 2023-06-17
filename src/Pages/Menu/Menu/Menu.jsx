import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import Loading from "../../Loading/Loading";

const Menu = () => {
const [menu,loading]=useMenu()
if(loading){
	return <Loading/>
}
const offer = menu.filter(m=>m.category==='offered');
const soup = menu.filter(m=>m.category==='soup');
const dessert = menu.filter(m=>m.category==='dessert');
const salad = menu.filter(m=>m.category==='salad');
const pizza = menu.filter(m=>m.category==='pizza');
	return (
		<div>
			<Helmet>
				<title>Menu</title>
			</Helmet>
			<Cover img={menuImg} title='Our Menu' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ad.' />
			<SectionTitle subHeading={"----Don't Miss----"} heading={"Todays offer"} />
			<MenuCategory items={offer}></MenuCategory>
			
			<MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
			<MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
			<MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
			<MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
			



		</div>
	);
}

export default Menu;
