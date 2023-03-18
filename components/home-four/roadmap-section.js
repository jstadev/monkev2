/* eslint-disable @next/next/no-img-element */
export default function RoadmapSection() {
	return (
		<div className="monke--roadmap-section monke--roadmap-v2">
			<div className="container">
				<div className="monke--section-title">
					<div className="monke--default-content content-white">
						<h2>The Roadmap</h2>
						<p>
						The roadmap outlines our upcoming and completed plans, but this is not the end of our initiatives. There is always a possibility that we will develop additional plans in the future.

						</p>
					</div>
				</div>
				<div className="row" style={{color:"white"}}>
					<div className="col-xl-3 col-md-6">
						<div className="monke--iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/v4/icon1.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Phase 1</h4>
								<span>Artwork Launch</span>
								<p>Launch of the collection's artwork on Raresama.</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="monke--iconbox-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/v4/icon2.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Phase 2</h4>
								<span>Website Launch</span>
								<p>Launch of the collection's website.</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="monke--iconbox-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/v4/icon3.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Phase 3</h4>
								<span>Game Development</span>
								<p>Create a fun web3 game for Monkeys holders.</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="monke--iconbox-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/v4/icon4.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Phase 4</h4>
								<span>Gaming League</span>
								<p>Create a own gaming league on the upcoming web3 Moonsama Gaming Platform, where  holders could play for rewards.</p>								
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
