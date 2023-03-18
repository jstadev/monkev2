/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import CountUp from "react-countup";
export default function CounterOneSection() {
	return (
		<div className="monke-counter-section bg-gray-800">
			<div id="monke-counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-xl-7">
						<div className="monke-counter-wrap">
							<div className="monke-counter-data wow fadeInUpX" data-wow-delay=".10s">
								<h2>
									<span className="monke-counter">
										<CountUp end={83} />
									</span>
									<strong>M</strong>
								</h2>
								<p>Total successful projects completed</p>
							</div>
							<div className="monke-counter-data wow fadeInUpX" data-wow-delay=".20s">
								<h2>
									<span className="monke-counter">
										<CountUp end={6} />
									</span>
									<strong>M</strong>
								</h2>
								<p>Satisfied clients around the world</p>
							</div>
							<div className="monke-counter-data wow fadeInUpX" data-wow-delay=".30s">
								<h2>
									<span className="monke-counter">
										<CountUp end={7} />
									</span>
									<strong>%</strong>
								</h2>
								<p>Our company's success rate</p>
							</div>
						</div>
					</div>
					<div className="col-xl-5 d-flex align-items-center">
						<div className="monke-default-content content-white">
							<h2>Take a look at what we've accomplished</h2>
							<div className="monke-counter-rating">
								<ul>
									<li>
										<img src="/images/all-img/about/trustpilot.png" alt="" />
									</li>
									<li>
										<img src="/images/svg/star1.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg/star1.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg/star1.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg/star1.svg" alt="" />
									</li>
									<li>
										<img src="/images/svg/star1.svg" alt="" />
									</li>
									<li>4.9/5 Rating</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
