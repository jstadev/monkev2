/* eslint-disable @next/next/no-img-element */
export default function NewsletterSection() {
	return (
		<div className="monke--newslatter-section">
			<div className="container">
				<div className="monke--newslatter-wrap">
					<div className="monke--section-title">
						<div className="monke--default-content content-sm wow fadeInUpX" data-wow-delay=".10s">
							<h2>Subscribe to get the latest news updates about NFTS</h2>
							<p>
								Get regular updates about interesting & secret upcoming NFT projects & events that are
								coming exclusively on our site.
							</p>
						</div>
					</div>
					<div className="monke--newsletter wow fadeInUpX" data-wow-delay=".20s">
						<input type="email" placeholder="Type your email here" />
						<button type="submit" id="monke--submit-btn">
							Subscribe
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
