/* eslint-disable @next/next/no-img-element */

export default function BlockquoteSection() {
	return (
		<div className="monke--blockquote">
			<blockquote>
				<div className="monke--blockquote-icon">
					<img src="/images/all-img/blog2/quote.png" alt="" />
				</div>
				“It is a form of digital ledger.” “The unique identity and ownership of an NFT are verifiable via the
				best blockchain ledger.” “An NFT is a unit of data stored on a digital ledger, called a blockchain,
				which can be sold and traded. Keep calm & collect your NFTs.”
				<div className="monke--blockquote-user">
					<div className="monke--blockquote-user-thumb">
						<img src="/images/all-img/blog2/author1.png" alt="" />
					</div>
					<div className="monke--blockquote-user-data">
						<h4>Esther Howard</h4>
						<p>Founder @ Nexto</p>
					</div>
				</div>
			</blockquote>
		</div>
	);
}
