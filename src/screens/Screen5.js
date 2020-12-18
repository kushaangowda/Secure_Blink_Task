import React from "react";
import t41 from "../assets/Group 35700.svg";
import Icons from "./components5/icons";

function Screen5() {
	return (
		<div className="Screen5">
			<img src={t41} className="t41" />
			<p className="heading4">Core Technologies</p>
			<p className="desc4">
				Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
				habitant.
			</p>
			<div className="dept">
				<a href="#" className="deptlinks">
					Design
				</a>
				<a href="#" className="deptlinks devlink">
					Development
				</a>
				<a href="#" className="deptlinks">
					Marketing
				</a>
			</div>
			<Icons />
		</div>
	);
}

export default Screen5;
