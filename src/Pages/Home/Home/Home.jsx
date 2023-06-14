import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChiefRecommended from "../ChiefRecommended/ChiefRecommended";
import InfoSection from "../InfoSection/InfoSection";
import Menu from "../Menu/Menu";

const Home = () => {
	return (
		<>
		<Banner/> 
		<Category/>
		<InfoSection/>
		<Menu/>
		<br />
		<CallUs/>
		<ChiefRecommended/>
		</>
	);
}

export default Home;
