import React from "react";
import g71 from "../assets/Group 35649.svg";
import g72 from "../assets/Group 35701.svg";
import Card7 from "./components7/card7";

function Screen7() {
	return (
		<div className="Screen7" id="caseStudies">
			<img src={g71} className="g71" />
			<p className="heading4 h7">Case Studies</p>
			<p className="desc4 d7">
				Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
				habitant.
			</p>
			<img src={g72} className="g72" />
			<Card7 />
			<div className="center">
				<button className="btn7">View All</button>
			</div>
		</div>
	);
}

export default Screen7;
