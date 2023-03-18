/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutSection() {
	return (
		<div className="monke--about-section" >
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="monke--swiper-slider-wrap">
							<div className="monke--swiper-slider">
								{/* <div className="swiper-wrapper"> */}
								<Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
									<SwiperSlide>
										<div className="swiper-slide">
											<div className="monke--card-wrap monke--card2">
												<div className="monke--card-thumb">
													<img src="/images/all-img/monke70.jpeg" alt="" />
												</div>
												<div className="monke--card-data">
													<h3>Monkey #70</h3>
													{/* <p>
														<img src="/images/all-img/v4/daimond.png" alt="" /> 0.438 ETH
													</p> */}
													{/* <div className="monke--card-footer">
														<div className="monke--card-footer-data">
															<h4>By Cooper</h4>
														</div>
														<button
															className="monke--btn btn-sm monke--tigger dark-btn"
															type="button"
														>
															<img
																className="black-heart"
																src="/images/svg2/heart-black.svg"
																alt=""
															/>
															<img
																className="red-heart"
																src="/images/svg2/heart-red.svg"
																alt=""
															/>
															10K
														</button>
													</div> */}
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="swiper-slide">
											<div className="monke--card-wrap monke--card2">
												<div className="monke--card-thumb">
													<img src="/images/all-img/monke61.jpeg" alt="" />
												</div>
												<div className="monke--card-data">
													<h3>Monkey #61</h3>
													{/* <p>
														<img src="/images/all-img/v4/daimond.png" alt="" />
														0.438 ETH
													</p>
													<div className="monke--card-footer">
														<div className="monke--card-footer-data">
															<h4>By Howard</h4>
														</div>
														<button className="monke--btn btn-sm monke--tigger" type="button">
															<img
																className="black-heart"
																src="/images/svg2/heart-black.svg"
																alt=""
															/>
															<img
																className="red-heart"
																src="/images/svg2/heart-red.svg"
																alt=""
															/>
															Likes
														</button>
													</div> */}
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="swiper-slide">
											<div className="monke--card-wrap monke--card2">
												<div className="monke--card-thumb">
													<img src="/images/all-img/monke63.jpeg" alt="" />
												</div>
												<div className="monke--card-data">
													<h3>Monkey #63</h3>
													{/* <p>
														<img src="/images/all-img/v4/daimond.png" alt="" /> 0.438 ETH
													</p>
													<div className="monke--card-footer">
														<div className="monke--card-footer-data">
															<h4>0.194 ETH</h4>
														</div>
														<button
															className="monke--btn btn-sm monke--tigger dark-btn"
															type="button"
														>
															<img
																className="black-heart"
																src="/images/svg2/heart-black.svg"
																alt=""
															/>
															<img
																className="red-heart"
																src="/images/svg2/heart-red.svg"
																alt=""
															/>
															2K
														</button>
													</div> */}
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="swiper-slide">
											<div className="monke--card-wrap monke--card2">
												<div className="monke--card-thumb">
													<img src="/images/all-img/monke52.jpeg" alt="" />
												</div>
												<div className="monke--card-data">
													<h3>Monkey #52</h3>
													{/* <p>
														<img src="/images/all-img/v4/daimond.png" alt="" /> 0.438 ETH
													</p>
													<div className="monke--card-footer">
														<div className="monke--card-footer-data">
															<h4>By Jenny</h4>
														</div>
														<button className="monke--btn btn-sm monke--tigger" type="button">
															<img
																className="black-heart"
																src="/images/svg2/heart-black.svg"
																alt=""
															/>
															<img
																className="red-heart"
																src="/images/svg2/heart-red.svg"
																alt=""
															/>
															18K
														</button>
													</div> */}
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
							<div className="monke--double-star">
								<img src="/images/all-img/v4/double-star.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-xl-5 offset-xl-2 col-lg-7 offset-lg-1 d-flex align-items-center" style={{color:"#000 !important"}}>
						<div className="monke--default-content ">
							<h2>About</h2>
							<p>
							In the lush jungles of Raresama, there once lived a troop of 69 monkeys. They lived a simple life, swinging from tree to tree, foraging for food, and playing amongst themselves. 
							</p>
							{/* <div className="monke--btn-wrap">
								<Link href={"#"} legacyBehavior>
									<a className="monke--btn bg-orange">Explore More</a>
								</Link>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
