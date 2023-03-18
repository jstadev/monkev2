/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="monke--hero-section" style={{ backgroundImage: "url(/images/all-img/v3/hero-bg.png)" }}>
			<div id="monke--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="monke--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
							Welcome to the jungle!

							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.10s">
							Collection of 69 unique Monkeys on Exosama Network.
							</p>
							<div className="monke--btn-wrap monke--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
								<Link href={"https://raresama.com/collections/2109/0xf31a93551b4933a1474df37a89889fc134abf05e"} legacyBehavior>
									<a className="monke--btn bg-gray active">View Artwork</a>
								</Link>
								{/* <Link href={"#"} legacyBehavior>
									<a className="monke--btn bg-gray">View Artwork</a>
								</Link> */}
							</div>
							{/* <div className="monke--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="monke--counter-data">
									<h2>
										<span data-percentage="45" className="monke--counter">
											<CountUp end={45} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artwork</p>
								</div>
								<div className="monke--counter-data">
									<h2>
										<span data-percentage="86" className="monke--counter">
											<CountUp end={86} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Auction</p>
								</div>
								<div className="monke--counter-data">
									<h2>
										<span data-percentage="32" className="monke--counter">
											<CountUp end={32} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artist</p>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-lg-4">
						<div className="monke--hero-right" id="rotateOne">
							<div className="monke--card-wrap">
								<div className="monke--card-thumb">
									<img src="/images/all-img/monke69.jpeg" alt="" />
								</div>
								<div className="monke--card-data">
									<h3>Monkey #69</h3>
									<p>Sales are open</p>
									{/* <div className="monke--card-footer">
										<div className="monke--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="monke--btn btn-sm bg-white">Place a Bid</a>
										</Link>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="monke--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="monke--hero-shape2"></div>
			</div>
		</div>
	);
}
