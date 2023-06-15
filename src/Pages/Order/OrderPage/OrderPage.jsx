import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/UseMenu";
import FoodCard from "../FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OrderPage = () => {

	const categories=['salad','pizza','dessert','soup','drinks'];
	const {category}=useParams();
	const initialIndex=categories.indexOf(category);
 const [tabIndex, setTabIndex] = useState(initialIndex);
 const [menu]=useMenu();
 const drinks = menu.filter(m=>m.category==='drinks');
const soup = menu.filter(m=>m.category==='soup');
const dessert = menu.filter(m=>m.category==='dessert');
const salad = menu.filter(m=>m.category==='salad');
const pizza = menu.filter(m=>m.category==='pizza');
	return (
		<>
		<Helmet ><title>Shop</title></Helmet>
		<Cover img={orderImg} title={"Our  Shop"} text={"would you like to try a dish"}/>


			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			<TabList>
				<Tab>Salad</Tab>
				<Tab>Pizza</Tab>
				<Tab>Dessert</Tab>
				<Tab>Soup</Tab>
				<Tab>Drinks</Tab>
				
			</TabList>
			<TabPanel >
				<div className="grid grid-cols-3 gap-4 container mx-auto">
					{
					salad.map(item=><FoodCard key={item.id} item={item}/>)
					}
				</div>
			</TabPanel>
			<TabPanel>
				<div className="grid grid-cols-3 gap-4 container mx-auto">
					{
					pizza.map(item=><FoodCard key={item.id} item={item}/>)
					}
				</div>
			</TabPanel>
			<TabPanel>
				<div className="grid grid-cols-3 gap-4 container mx-auto">
					{
					dessert.map(item=><FoodCard key={item.id} item={item}/>)
					}
				</div>
			</TabPanel>
			<TabPanel>
				<div className="grid grid-cols-3 gap-4 container mx-auto">
					{
					soup.map(item=><FoodCard key={item.id} item={item}/>)
					}
				</div>
			</TabPanel>
			<TabPanel>
				<div className="grid grid-cols-3 gap-4 container mx-auto">
					{
					drinks.map(item=><FoodCard key={item.id} item={item}/>)
					}
				</div>
			</TabPanel>
			
			</Tabs>
		</>
	);
}

export default OrderPage;
