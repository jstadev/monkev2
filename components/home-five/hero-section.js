import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
	return (
		<div className="monke--hero-section3" style={{ backgroundImage: "url(/images/all-img/v5/hero-bg2.png)" }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="monke--hero-content monke--hero-content3">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								New-gen of digital currency
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.15s">
								Get started with one of the easiest and most secure platforms for buying, selling,
								trading, and earning cryptocurrency in one place.
							</p>
							<div className="monke--btn-wrap monke--hero-btn wow fadeInUpX" data-wow-delay="0.25s">
								<Link href={"/"} legacyBehavior>
									<a className="monke--btn bg-blue active">Get Started</a>
								</Link>
								<Link href={"/"} legacyBehavior>
									<a className="monke--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="monke--thumb-three">
							<div className="monke--hero-thumb monke--hero-thumb3">
								<img
									className="wow fadeInUpX"
									data-wow-delay="0.20s"
									src="/images/all-img/v5/hero-thumb.png"
									alt=""
								/>
								<div className="monke--bitcoin bitcoin-one">
									<img src="/images/all-img/v5/bitcoin1.png" alt="" />
								</div>
								<div className="monke--bitcoin bitcoin-two">
									<img src="/images/all-img/v5/bitcoin2.png" alt="" />
								</div>
								<div className="monke--bitcoin bitcoin-three">
									<img src="/images/all-img/v5/bitcoin3.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="monke--circle-shape circle-one">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="monke--circle-shape circle-two">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
