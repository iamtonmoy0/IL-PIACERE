import loading from '../../assets/loading.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Loading = () => {
	return (
		<div className="flex justify-center my-auto mx-auto pt-[200px] bg-transparent "  >
		<img src={loading} alt="" className='opacity-50' data-aos='fade-up' />
		</div>
	);
}

export default Loading;
