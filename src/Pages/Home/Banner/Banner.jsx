import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
	return (
		<Carousel className="" infiniteLoop centerMode>
                <div className="" >
                    <img src="https://i.ibb.co/3RBp3Kr/01.jpg" />
                </div>
                <div>
                    <img src="home/02.jpg" />
                </div>
                <div>
                    <img src="home/03.png" />
                </div>
		<div>
                    <img src="home/04.jpg" />
                </div>
		<div>
                    <img src="home/05.png" />
                </div>
		<div>
                    <img src="home/06.png" />
                </div>
		
            </Carousel>

	);
}

export default Banner;
