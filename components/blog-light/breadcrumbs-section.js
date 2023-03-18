/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbsSection() {
	return (
		<div className="monke--breadcrumbs-section">
			<div className="monke--breadcrumbs-data center-content">
				<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Blog & Resources
				</h1>
				<p className="wow fadeInUpX" data-wow-delay="0.10s">
					Your source of market analysis, news, developments, and project reviews for the NFT ecosystem.
					Discover and keep up to date with the latest NFT news and events. Nexto is the best place to
					analyze, track and discover NFTs.
				</p>
				<div className="monke--newsletter monke--search wow fadeInUpX" data-wow-delay="0.20s">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="monke--submit-btn">
						Search
					</button>
					<button id="monke--search-btn">
						<img src="/images/svg2/search.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}
