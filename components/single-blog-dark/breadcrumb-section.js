/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function BreadcrumbSection() {
	return (
		<div className="monke--breadcrumbs-section">
			<div className="monke--breadcrumbs-data">
				<h1>NFTs & Japanese Culture: a rising, diverse community</h1>
				<p>
					The Japanese NFT community is in its early days. In this article, we’ll provide an overview of the
					community from the standpoint of cultural exports, namely the mangaverse and gaming.
				</p>
				<div className="monke--blog-meta">
					<ul>
						<li>
							<Link href={"#"}>
								<img src="assets/images/svg2/calendar.svg" alt="" /> Art & Analusis
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<img src="assets/images/svg2/clock.svg" alt="" /> July 18, 2022
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
