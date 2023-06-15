import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChiefRecommended from "../ChiefRecommended/ChiefRecommended";
import Featured from "../Featured/Featured";
import InfoSection from "../InfoSection/InfoSection";
import Testimonials from "../Testimonials/Testimonials";
import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
	return (
		<>
		<Helmet>
			<title>
				Home
			</title>
		</Helmet>
		<Banner/> 
		<Category/>
		<InfoSection/>
		<PopularMenu/>
		<br />
		<CallUs/>
		<ChiefRecommended/>
		<Featured/>
		<Testimonials/>
		</>
	);
}

export default Home;
