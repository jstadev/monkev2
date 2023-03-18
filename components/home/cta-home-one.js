/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function CtaHomeOne() {
	return (
		<div className="monke-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="monke-default-content large-content">
							<h2>Download now to invest crypto safely</h2>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="monke-cta-app-btn-wrap">
							<Link href={"contact"} legacyBehavior>
								<a className="monke-app-btn wow fadeInUpX" data-wow-delay="0s">
									<img src="/images/all-img/app-store.png" alt="" />
								</a>
							</Link>
							<Link href={"contact"} legacyBehavior>
								<a className="monke-app-btn wow fadeInUpX" data-wow-delay=".20s">
									<img src="/images/all-img/play-store.png" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
