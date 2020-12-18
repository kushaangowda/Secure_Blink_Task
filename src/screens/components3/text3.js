import React from "react";
import a23 from "../../assets/Group 35626.svg";

function Text3() {
	return (
		<div className="Text3">
			<p className="text3stuff">
				<img src={a23} className="a23" />
				<span className="aboutus">OUR SERVICES</span>
			</p>
			<p className="heading3">Transforming your ideas into Reality</p>
			<button className="link3">Web Development</button>
			<button className="link3">Mobile Development</button>
			<button className="link3 activelink3">UI/UX Designing</button>
			<button className="link3">Branding</button>
			<button className="link3">Cloud Technology</button>
		</div>
	);
}

export default Text3;
