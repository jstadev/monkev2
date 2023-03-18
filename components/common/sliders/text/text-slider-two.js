/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderTwo() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="monke--text-slider-section">
			<div className="monke--text-slider">
				<Slider {...settings}>
					<div className="monke--text-slider-data">
						{/* <div className="monke--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div> */}
						<h3>SALES ARE OPEN!</h3>
					</div>
					<div className="monke--text-slider-data">
						{/* <div className="monke--text-slider-icon"> */}
							{/* <img src="/images/all-img/v3/daimond.png" alt="" />
						</div> */}
						<h3>SALES ARE OPEN!</h3>
					</div>
					<div className="monke--text-slider-data">
						{/* <div className="monke--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div> */}
						<h3>SALES ARE OPEN!</h3>
					</div>
					<div className="monke--text-slider-data">
						{/* <div className="monke--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div> */}
						<h3>SALES ARE OPEN!</h3>
					</div>
					<div className="monke--text-slider-data">
						{/* <div className="monke--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div> */}
						<h3>SALES ARE OPEN!</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
}
