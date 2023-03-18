/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function CommunicationSection() {
	return (
		<div className="monke--feature-section monke--section-padding2 white-version">
			<div className="container">
				<div className="monke--section-title">
					<div className="monke--default-content content-sm content-black">
						<h2>Prefer to reach out directly?</h2>
						<p>
							Nexto is a universal marketplace that has been working with NFTS Art since 2002. we are
							ready to change the world with NFTs!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-md-6">
						<div
							className="monke--iconbox-wrap monke--iconbox-wrap3 monke--iconbox-wrap5 wow fadeInUpX"
							data-wow-delay="0s"
						>
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/contact/icon01.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Careers</h4>
								<p>the job or series of jobs that you do during your working making progress</p>
								<Link href={"#"}>
									Join our team
									<img src="/images/svg2/arrow-right-black.svg" alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div
							className="monke--iconbox-wrap monke--iconbox-wrap3 monke--iconbox-wrap5 wow fadeInUpX"
							data-wow-delay=".10s"
						>
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/contact/icon02.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Help & Support</h4>
								<p>Help and support desk support refers to the process of information support</p>
								<Link href={"#"}>
									Contact support
									<img src="/images/svg2/arrow-right-black.svg" alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div
							className="monke--iconbox-wrap monke--iconbox-wrap3 monke--iconbox-wrap5 wow fadeInUpX"
							data-wow-delay=".20s"
						>
							<div className="monke--iconbox-thumb">
								<img src="/images/all-img/contact/icon03.png" alt="" />
							</div>
							<div className="monke--iconbox-data">
								<h4>Ask Question</h4>
								<p>Questions is a game for people to get to know each other better and played</p>
								<Link href={"#"}>
									Ask questions
									<img src="/images/svg2/arrow-right-black.svg" alt="" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
