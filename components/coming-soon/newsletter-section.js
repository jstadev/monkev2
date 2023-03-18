export default function NewsletterSection() {
	return (
		<div className="monke-newsletter">
			<input type="email" placeholder="Enter your email" />
			<button type="submit" id="monke-submit-btn">
				Get Notified
			</button>
			<p>We do not share your information with any third party & no spam</p>
		</div>
	);
}
