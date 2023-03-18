export default function CommentInputSection() {
	return (
		<div className="monke-input-field-section">
			<h5>Leave a comment</h5>
			<form action="#">
				<div className="row">
					<div className="col-md-6">
						<div className="monke-input-field">
							<input type="text" placeholder="Name*" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="monke-input-field">
							<input type="email" placeholder="Email Address*" />
						</div>
					</div>
				</div>
				<div className="monke-input-field">
					<input type="url" placeholder="Your website" />
				</div>
				<div className="monke-input-field">
					<textarea name="textarea" placeholder="Write your comment"></textarea>
				</div>
				<button id="monke-input-submit">Post Comment</button>
			</form>
		</div>
	);
}
