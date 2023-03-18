import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function SingleCardSliderTwo({ card }) {
	const [isDarke, setIsDarke] = useState(false);

	return (
		<div className="monke--card-wrap monke--card2">
			<div className="monke--card-thumb">
				<img src={`/images/all-img/v4/${card.img}.jpg`} alt="" />
			</div>
			<div className="monke--card-data">
				<h3>{card.title}</h3>
				<p>
					<img src="/images/all-img/v4/daimond.png" alt="" /> {card.eth} ETH
				</p>
				<div className="monke--card-footer">
					<div className="monke--card-footer-data">
						<h4>{card.name}</h4>
					</div>
					<button
						className={`monke--btn btn-sm monke--tigger ${isDarke ? "dark-btn" : ""}`}
						onClick={() => setIsDarke(!isDarke)}
						type="button"
					>
						<img className="black-heart" src="/images/svg2/heart-black.svg" alt="" />
						<img className="red-heart" src="/images/svg2/heart-red.svg" alt="" /> {card.hart}
					</button>
				</div>
			</div>
		</div>
	);
}
