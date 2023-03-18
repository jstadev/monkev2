import React from "react";

export default function CommentRespondSection() {
	return (
		<div className="monke--comment-respond-area">
			<h3>Leave a Reply:</h3>
			<p>Your email address will not be published. Required fields are marked*</p>
			<form action="#">
				<div className="row">
					<div className="col-lg-6">
						<div className="monke--comment-field">
							<input type="text" placeholder="Your Name*" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="monke--comment-field">
							<input type="text" placeholder="Your Email*" />
						</div>
					</div>
				</div>
				<div className="monke--comment-field">
					<input type="url" placeholder="Website*" />
				</div>
				<div className="monke--comment-field">
					<textarea name="textarea" placeholder="Write your comment*"></textarea>
				</div>
				<button id="monke--form-submit-btn" type="submit">
					Post Comment
				</button>
			</form>
		</div>
	);
}
