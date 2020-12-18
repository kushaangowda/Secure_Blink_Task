import React from "react";
import wharr from "../../assets/arrow-down-sign-to-navigate-8.svg";

function Form8() {
	return (
		<div className="Form8">
			<h1>Send Us message</h1>
			<form>
				<p>Your Email*</p>
				<input type="text" />
				<p>Your Name*</p>
				<input type="text" />
				<p>Phone Number</p>
				<input type="text" />
				<p>Subject</p>
				<input type="text" />
				<p>Your Message</p>
				<input type="text" />
				<br />
				<br />
				<input type="checkbox" id="c" value="a"></input>
				<span>By sending this message, you confirm that you have read and agreed to our privacy-policy.</span>
				<br />
				<br />
				<button>
					Get Started&nbsp;&nbsp;
					<img src={wharr} className="wharr" />
					<img src={wharr} className="wharr" />
				</button>
			</form>
		</div>
	);
}

export default Form8;
