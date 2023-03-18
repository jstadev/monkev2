/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogFilterning() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		isotope.current = new Isotope("#monke--two-column", {
			itemSelector: ".collection-grid-item",
			layoutMode: "fitRows",
		});
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		filterKey === "*"
			? isotope.current.arrange({ filter: `*` })
			: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};

	return (
		<div className="monke--blog-filtering monke--section-padding row pb-0">
			<div className="monke--section-title-wrap col-12">
				<div className="monke--default-content content-sm">
					<h2>Latest articles</h2>
				</div>
				<div className="monke--portfolio-menu">
					<ul className="option-set clear-both" data-option-key="filter">
						<li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
							<span>All</span>
						</li>
						<li onClick={handleFilterKeyChange("analysis")} className={handleActiveClass("analysis")}>
							<span>Art & Analysis</span>
						</li>
						<li onClick={handleFilterKeyChange("collectible")} className={handleActiveClass("collectible")}>
							<span>Collectible</span>
						</li>
						<li onClick={handleFilterKeyChange("metaverse")} className={handleActiveClass("metaverse")}>
							<span>Metaverse</span>
						</li>
						<li onClick={handleFilterKeyChange("utility")} className={handleActiveClass("utility")}>
							<span>Utility</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="monke--portfolio-wrap row" id="monke--two-column">
					<div className="col-lg-6 col-sm-12 collection-grid-item analysis wow fadeInUpX" data-wow-delay="0s">
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog1.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>What does the NFT Ecosystem look like after the Boom?</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author1.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Dianne Russell</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-sm-12 collection-grid-item sports collectible wow fadeInUpX"
						data-wow-delay=".10s"
					>
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog2.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>MegaCryptoPolis distributed $63M to players since 2018 in Metaverse</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author2.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Kathryn Murphy</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-sm-12 collection-grid-item collectible wow fadeInUpX"
						data-wow-delay=".20s"
					>
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog3.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>Always be on time on your NFTs and metaverse event with Dwiss!</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author3.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Dianne Russell</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-sm-12 collection-grid-item metaverse sports wow fadeInUpX"
						data-wow-delay=".30s"
					>
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog4.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>Mekaverse Launch: Let’s take a step back with data!</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author4.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Theresa Webb</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-sm-12 collection-grid-item utility collectible wow fadeInUpX"
						data-wow-delay=".40s"
					>
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog5.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>Ultra Club & NFTs: Is E11even Miami the King of Non-Fungible Nightlife?</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author1.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Arlene McCoy</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-sm-12 collection-grid-item utility wow fadeInUpX"
						data-wow-delay=".50s"
					>
						<div className="monke--blog-wrap">
							<div className="monke--blog-thumb">
								<Link href={"/single-blog-light"}>
									<img src="/images/all-img/blog2/dark/blog6.png" alt="" />
								</Link>
								<div className="monke--blog-badge">Art & Analysis</div>
							</div>
							<div className="monke--blog-content">
								<div className="monke--blog-date">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/calendar.svg" alt="" />
												July 18, 2022
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/svg2/clock.svg" alt="" />5 min read
											</Link>
										</li>
									</ul>
								</div>
								<div className="monke--blog-title">
									<Link href={"/single-blog-light"}>
										<h3>ART Domains open call: exhibit in the metaverse with Roborace</h3>
									</Link>
								</div>
								<p>
									It has now been 6 months since the NFT market saw indicators strongly shaken up,
									with additional over hype a month ago...
								</p>
								<div className="monke--blog-user">
									<div className="monke--blog-user-thumb">
										<img src="/images/all-img/blog2/author1.png" alt="" />
									</div>
									<div className="monke--blog-user-data">
										<span>Marvin McKinney</span>
										<p>Author</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
