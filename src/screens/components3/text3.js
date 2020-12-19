import React from "react";
import a23 from "../../assets/Group 35626.svg";

function Text3({ change }) {
	return (
		<div className="Text3">
			<p className="text3stuff">
				<img src={a23} className="a23" />
				<span className="aboutus">OUR SERVICES</span>
			</p>
			<p className="heading3">Transforming your ideas into Reality</p>
			<button className="link3" onClick={() => change("Web Development")}>
				Web Development
			</button>
			<button className="link3" onClick={() => change("Mobile Development")}>
				Mobile Development
			</button>
			<button className="link3" onClick={() => change("UI/UX Designing")}>
				UI/UX Designing
			</button>
			<button className="link3" onClick={() => change("Branding")}>
				Branding
			</button>
			<button className="link3" onClick={() => change("Cloud Technology")}>
				Cloud Technology
			</button>
		</div>
	);
}

export default Text3;
