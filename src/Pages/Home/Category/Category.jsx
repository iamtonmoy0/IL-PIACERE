import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const Category = () => {
	return (
		<div className="w-3/4  mx-auto">
	<Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
		<img src="/home/slide1.jpg" alt="" />
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide2.jpg" alt="" /> 
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide3.jpg" alt="" />
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide4.jpg" alt="" /> 
	</SwiperSlide>
        <SwiperSlide>
		<img src="/home/slide5.jpg" alt="" /> 
	</SwiperSlide>
 </Swiper>
		</div>
	);
}

export default Category;
