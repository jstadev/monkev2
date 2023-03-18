import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ContentWithPhotoSection() {
	return (
		<div className="section bg-warning-300 monke-section-padding2 z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="monke-apps-thumb" id="rotatetwo">
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/mocup1.png"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="monke-default-content large-content">
							<h2>Build a portfolio with popular coins</h2>
							<p>
								To achieve a diversified portfolio, look for asset classes that have low or negative
								correlations so that if moves down, the other tends to it. ETFs and mutual funds are
								easy ways to select asset.
							</p>
							<p>
								The best way to start a crypto portfolio is to have at least a 60% stake in Bitcoin
								&Ethereum which you can easily do with this app.
							</p>
							<div className="monke-btn-wrap">
								<Link href={"contact"} legacyBehavior>
									<a className="monke-btn">Get Started</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="monke-shape3">
				<img src="/images/shape/shape2.png" alt="" />
			</div>
		</div>
	);
}
