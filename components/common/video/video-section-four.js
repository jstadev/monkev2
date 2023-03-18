/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionFour() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="monke--video-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6">
						<div className="monke--video-thumb wow fadeInUpX" data-wow-delay="0.10s">
							<img src="/images/all-img/v5/video-thumb.png" alt="" />
							<div className="monke--popup" onClick={() => setOpen(true)}>
								<img src="/images/all-img/v5/play-button.png" alt="" />
								<div className="waves wave-1"></div>
								<div className="waves wave-2"></div>
								<div className="waves wave-3"></div>
							</div>
							<div className="monke--video-shape1">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
							<div className="monke--video-shape2">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-xl-6 d-flex align-items-center">
						<div className="monke--default-content">
							<h2>monke is the most trusted cryptocurrency platform</h2>
							<p>
								monke Cryptocurrency exchanges are websites where individuals can buy, sell, or exchange
								crypto-currencies other digital currency here a monke is a cryptocurrency markets have
								crashed in the last 24 hours.
							</p>
							<p>
								The exchanges can converte a crypto-currencies into major part of a government-backed
								currencies and convert cryptocurrencies.
							</p>
							<div className="monke--btn-wrap">
								<Link href={"#"} legacyBehavior>
									<a className="monke--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
