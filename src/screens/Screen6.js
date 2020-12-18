import React from "react";
import lady from "../assets/Ellipse 216.png";
import dots from "../assets/Group 35648.svg";
import Text6 from "./components6/text6";

function Screen6() {
	return (
		<div className="Screen6">
			<div className="profilePic">
				<img src={lady} className="lady" />
				<img src={dots} className="dots" />
			</div>
			<Text6 />
		</div>
	);
}

export default Screen6;
