/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeFour() {
	return (
		<footer className="monke--foote2-section" style={{ backgroundImage: "url(/images/all-img/v4/footer-bg.png)" }}>
			<div className="container">
				<div className="monke--footer-top">
					<div className="monke--default-content content-black">
						<h2 className="wow fadeInUpX" data-wow-delay="0s">
							Join our NFTs community
						</h2>
						<p className="wow fadeInUpX" data-wow-delay="0.15s">
							Meet artists & collectors for platform updates and get dozens of our extraordinary art
							collections in the world’s largest NFT marketplace.
						</p>
						<div className="monke--btn-wrap wow fadeInUpX" data-wow-delay="0.25s">
							<Link href={"#"} legacyBehavior>
								<a className="monke--btn bg-orange">Join Our Discord</a>
							</Link>
						</div>
						<div className="monke--star">
							<img src="/images/all-img/v4/star-black.png" alt="" />
						</div>
					</div>
				</div>
				<div className="monke--footer-middle">
					<div className="row">
						<div className="col-xl-3 col-lg-2">
							<div className="monke--footer-logo">
								<img src="/images/logo/logo-black.svg" alt="" />
							</div>
						</div>
						<div className="col-xl-6 col-lg-8">
							<div className="monke--footer-menu2">
								<ul>
									<li>
										<Link href={"#"}> Demos </Link>
									</li>
									<li>
										<Link href={"about-us"}> About Us </Link>
									</li>
									<li>
										<Link href={"#"}> Collections </Link>
									</li>
									<li>
										<Link href={"#"}> Pages </Link>
									</li>
									<li>
										<Link href={"contact"}> Contact </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-2">
							<div className="monke--social-icon monke--social-icon2">
								<ul>
									<li>
										<Link href={"#"}>
											<img src="/images/social2/twitter.svg" alt="" />
										</Link>
									</li>
									<li>
										<Link href={"#"}>
											<img src="/images/social2/facebook.svg" alt="" />
										</Link>
									</li>
									<li>
										<Link href={"#"}>
											<img src="/images/social2/github.svg" alt="" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="monke--footer-bottom monke--footer-bottom2">
					<div className="row">
						<div className="col-lg-6">
							<p>&copy; Copyright 2022, All Rights Reserved by Mthemeus</p>
						</div>
						<div className="col-lg-6">
							<div className="monke--footer-menu">
								<ul>
									<li>
										<Link href={"#"}> Terms </Link>
									</li>
									<li>
										<Link href={"#"}> Privacy Policy </Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
