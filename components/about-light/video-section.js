/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSection() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="monke--video-section3 monke--section-padding">
			<div className="container">
				<div className="monke--video-wrap">
					<div className="monke--video-column">
						<div className="monke--video-thumb wow fadeInUpX" data-wow-delay=".10s">
							<img src="/images/all-img/about2/video-thumb2.png" alt="" />
						</div>
						<div className="monke--video-thumb wow fadeInUpX" data-wow-delay=".20s">
							<img src="/images/all-img/about2/video-thumb3.png" alt="" />
						</div>
					</div>
					<div className="monke--popup" onClick={() => setOpen(true)}>
						<img src="/images/all-img/about2/play-button-orange.png" alt="" />
						<div className="monke--play-btn">
							<img src="/images/all-img/about2/play.png" alt="" />
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
