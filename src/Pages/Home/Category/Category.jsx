import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<div className="w-3/4  mx-auto">
			<SectionTitle subHeading={"-----From 11.00 am to 10.00 pm-----"} heading={"Order now"}/>
	<Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-4"
      >
        <SwiperSlide>
		<img src="/home/slide1.jpg" alt="" />
		<h3 className="text-4xl uppercase text-white -mt-16 text-center">Salads</h3>
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide2.jpg" alt="" /> 
		<h3 className="text-4xl uppercase text-white -mt-16 text-center">Pizzas</h3>
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide3.jpg" alt="" />
		<h3 className="text-4xl uppercase text-white -mt-16 text-center">Soups</h3>
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide4.jpg" alt="" />
		<h3 className="text-4xl uppercase text-white -mt-16 text-center">Desserts</h3> 
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide5.jpg" alt="" />
		<h3 className="text-4xl uppercase text-white -mt-16 text-center">Salads</h3> 
	</SwiperSlide>
 </Swiper>
		</div>
	);
}

export default Category;
