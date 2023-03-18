/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NewsLetter() {
	return (
		<div className="monke--newslatter-section" >
			<div className="container" style={{paddingTop:"100px"}}>
				<div className="monke--newslatter-wrap" >
					<div className="monke--section-title" >
						<div className="monke--default-content content-sm">
							<h2>Lets collaborate</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							</p>
						</div>
					</div>
					<div className="monke--newsletter">
						<input type="email" placeholder="Type your email here" />
						<button type="submit" id="monke--submit-btn">
							Apply
						</button>
					</div>
				</div>
			</div>
			<div className="monke--shape4">
				<img src="/images/shape2/shape4.png" alt="" />
			</div>
		</div>
	);
}
