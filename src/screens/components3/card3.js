import React from "react";
import icon3 from "../../assets/Group 35621.svg";
import tick from "../../assets/Group 35604.svg";

function Card3() {
	return (
		<div className="Card3">
			<img src={icon3} className="icon3" />
			<span class="heading31">UI/UX Designing</span>
			<p className="desc31">
				Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
				habitant.
			</p>
			<p className="points">
				<img src={tick} className="tick" />
				<span className="pointsdesc">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</span>
			</p>
			<p className="points">
				<img src={tick} className="tick" />
				<span className="pointsdesc">Lorem ipsum dolor sit amet,</span>
			</p>
			<p className="points">
				<img src={tick} className="tick" />
				<span className="pointsdesc">conse ctetur adipi scing elit.</span>
			</p>
			<p className="points">
				<img src={tick} className="tick" />
				<span className="pointsdesc">Lorem ipsum dolor sit amet, conse ctetur</span>
			</p>
		</div>
	);
}

export default Card3;
