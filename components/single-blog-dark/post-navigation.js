/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function PostNavigation() {
	return (
		<div className="monke--post-navigation-wrap">
			<Link href={"#"}>
				<div className="monke--post-navigation nav-previous">
					<div className="monke--post-navigation-icon">
						<img src="/images/svg2/arrow-left-white.svg" alt="" />
					</div>
					<div className="monke--post-navigation-data">
						<p>Previous post</p>
						<span>What does the NFT Ecosystem look like after the Boom?</span>
					</div>
				</div>
			</Link>
			<Link href={"#"}>
				<div className="monke--post-navigation nav-next">
					<div className="monke--post-navigation-data">
						<p>Next post</p>
						<span>Metaverse Launch: Let’s take a step back with data!</span>
					</div>
					<div className="monke--post-navigation-icon">
						<img src="/images/svg2/arrow-right-white.svg" alt="" />
					</div>
				</div>
			</Link>
		</div>
	);
}
