import React from "react";
import g1 from "../assets/Group 35699.svg";
import g2 from "../assets/Group 35698.svg";
import g3 from "../assets/Group 35650.svg";
import Text2 from "./components2/text2";

function Screen2() {
	return (
		<div className="Screen2">
			<img src={g1} className="g1" />
			<img src={g2} className="g2" />
			<Text2 />
			<img src={g3} className="g3" />
		</div>
	);
}

export default Screen2;
