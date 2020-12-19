import React from "react";
import a2 from "../../assets/Group 35626.svg";
import arrow2 from "../../assets/arrow-down-sign-to-navigate.svg";

function Text2() {
	return (
		<div className="Text2" id="about">
			<p className="text2stuff">
				<img src={a2} className="a2" />
				<span className="aboutus">ABOUT US</span>
			</p>
			<p className="heading2">Great Digital Agency</p>
			<p className="desc1">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</p>
			<p className="desc2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
			</p>
			<button className="btn2">
				Get Started
				<img src={arrow2} className="arrow21" />
				<img src={arrow2} className="arrow2" />
			</button>
		</div>
	);
}

export default Text2;
