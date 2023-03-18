/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function ContactFormSection() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="section monke-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-5 col-lg-6 col-md-10">
						<div className="monke-default-content contact-page">
							<h2>Have any questions? We will talk to you sincerely anytime</h2>
							<p>
								If you have any questions about subscription or usage, please fill out the form and our
								team will get back to you within 24 hours.
							</p>
							<div className="monke-contact-info">
								<ul>
									<li>
										<Link href="tel:123">
											<div className="monke-contact-info-icon">
												<img src="/images/social/call.svg" alt="" />
											</div>
											<h5>Call us</h5>
											<p>+088-234-6534-563</p>
										</Link>
									</li>
									<li>
										<Link href="mailto:name@email.com">
											<div className="monke-contact-info-icon">
												<img src="/images/social/email.svg" alt="" />
											</div>
											<h5>Email us</h5>
											<p>example@gmail.com</p>
										</Link>
									</li>
									<li>
										<Link href="">
											<div className="monke-contact-info-icon">
												<img src="/images/social/map.svg" alt="" />
											</div>
											<h5>Office address</h5>
											<p>4132 Thornridge City, New York.</p>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 offset-xl-1">
						<div className="monke-contact-wrap  wow fadeInUpX">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="monke-input-field">
									<label>Your name</label>
									<input
										type="text"
										placeholder="Your Name*"
										{...register("name", { required: true })}
										aria-invalid={errors.name ? "true" : "false"}
									/>
									{errors.name?.type === "required" && (
										<p role="alert" className="error">
											First name is required
										</p>
									)}
								</div>
								<div className="monke-input-field">
									<label>Email address</label>
									<input
										type="email"
										placeholder="Your Email*"
										{...register("email", { required: true })}
										aria-invalid={errors.email ? "true" : "false"}
									/>
									{errors.email?.type === "required" && (
										<p role="alert" className="error">
											Email is required
										</p>
									)}
								</div>
								<div className="monke-input-field">
									<label>Write your message</label>
									<textarea
										name="textarea"
										placeholder="Write your comment*"
										{...register("comment")}
									></textarea>
								</div>
								<button id="monke-input-submit" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
