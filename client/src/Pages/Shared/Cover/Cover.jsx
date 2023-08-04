import { Parallax } from 'react-parallax';
const Cover = ({img,title,text}) => {
	return (
		
		<Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the img"
        strength={-200}
    >
			<div className="hero h-[700px]"  >
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content justify-center">
			<div className="w-[600px] h-40 pt-10 bg-black bg-opacity-40 ">
			<h1 className="mb-5 text-5xl font-bold">{title}</h1>
			<p className="mb-5 capitalize font-serif">{text}</p>
			</div>
			</div>
			</div>

    </Parallax>
		
	);
}

export default Cover;
