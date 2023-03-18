/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";
function NextArrow({ onClick }) {
	return <button className="slide-arrow monke--arrow" onClick={onClick}></button>;
}

function PrevArrow({ onClick }) {
	return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

export default function CardSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className="monke--slider-section">
			<div className="container" style={{paddingTop:"100px"}}>
				<div className="monke--section-title">
					<div className="monke--default-content content-sm">
						<h2>The Roadmap</h2>
						<p>
						Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 

						</p>
					</div>
				</div>
				<div className="monke--slider-one">
					<Slider {...settings}>
						<div className="monke--card-wrap">
							<div className="monke--card-thumb">
							<img src="/images/all-img/monke52.jpeg" alt="" />
							</div>
							<div className="monke--card-data">
								<h3>Phase 1</h3>
								<p>
								Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 
								</p>
								{/* <div className="monke--card-footer">
									<div className="monke--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="monke--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div> */}
							</div>
						</div>
						<div className="monke--card-wrap">
							<div className="monke--card-thumb">
							<img src="/images/all-img/monke52.jpeg" alt="" />
							</div>
							<div className="monke--card-data">
								<h3>Phase 2</h3>
								<p>
								Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 
								</p>
								{/* <div className="monke--card-footer">
									<div className="monke--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="monke--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div> */}
							</div>
						</div>
						<div className="monke--card-wrap">
							<div className="monke--card-thumb">
							<img src="/images/all-img/monke52.jpeg" alt="" />
							</div>
							<div className="monke--card-data">
								<h3>Phase 3</h3>
								<p>
								Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 
								</p>
								{/* <div className="monke--card-footer">
									<div className="monke--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="monke--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div> */}
							</div>
						</div>
						<div className="monke--card-wrap">
							<div className="monke--card-thumb">
							<img src="/images/all-img/monke52.jpeg" alt="" />
							</div>
							<div className="monke--card-data">
								<h3>Phase 4</h3>
								<p>
								Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 
								</p>
								{/* <div className="monke--card-footer">
									<div className="monke--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="monke--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div> */}
							</div>
						</div>
						<div className="monke--card-wrap">
							<div className="monke--card-thumb">
								<img src="/images/all-img/monke52.jpeg" alt="" />
							</div>
							<div className="monke--card-data">
								<h3>Phase 5</h3>
								<p>
								Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the 
								</p>
								{/* <div className="monke--card-footer">
									<div className="monke--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="monke--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div> */}
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div className="monke--shape1">
				<img src="/images/shape2/shape1.png" alt="" />
			</div>
		</div>
	);
}
