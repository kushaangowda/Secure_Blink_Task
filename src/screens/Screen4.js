import React from "react";
import Card4 from "./components4/card4";
import t41 from "../assets/Group 35700.svg";

function Screen4() {
	return (
		<div className="Screen4">
			<p className="heading4">Workflow</p>
			<p className="desc4">
				Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
				habitant.
			</p>
			<Card4 />
			<img src={t41} className="t41" />
		</div>
	);
}

export default Screen4;
