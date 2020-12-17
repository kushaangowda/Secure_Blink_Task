import React from "react";
import arrow from "../../assets/arrow-down-sign-to-navigate-10.svg";

function Text1() {
	return (
		<div className="Text1">
			<p className="text1stuff">
				Web Design
				<br />
				&emsp; &emsp;&emsp;&emsp;&ensp;Web Development
				<br />
				&emsp; &emsp;&emsp;&emsp;&ensp;by SB
			</p>
			<p className="smalltext">
				Our products are fully custom-made, built with the latest technologies
				<br /> and cloud-architectures.
			</p>
			<button className="button1">
				Get Started <img src={arrow} className="arrow" />
				<img src={arrow} className="arrow" />
			</button>
		</div>
	);
}

export default Text1;
