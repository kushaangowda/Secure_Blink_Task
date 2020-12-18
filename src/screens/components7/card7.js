import React from "react";
import bus from "../../assets/bus.png";
import asd from "../../assets/asdasd.png";
import l4d from "../../assets/Layer 4dsasdas.png";
import arr7 from "../../assets/arrow-down-sign-to-navigate-1.svg";

function Card7() {
	return (
		<div className="Card7">
			<div className="card71">
				<img src={bus} className="card71img" />
				<p className="card7heading">Isomorphic Web App</p>
				<p className="card7desc">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
				<a href="#" className="card7links">
					<img src={arr7} className="arr7" />
					<img src={arr7} className="arr7" />
					&nbsp;&nbsp;Read More
				</a>
			</div>
			<div className="card71">
				<img src={asd} className="card71img" />
				<p className="card7heading">Isomorphic Web App</p>
				<p className="card7desc">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
				<a href="#" className="card7links">
					<img src={arr7} className="arr7" />
					<img src={arr7} className="arr7" />
					&nbsp;&nbsp;Read More
				</a>
			</div>
			<div className="card71">
				<img src={l4d} className="card71img" />
				<p className="card7heading">Isomorphic Web App</p>
				<p className="card7desc">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
				<a href="#" className="card7links">
					<img src={arr7} className="arr7" />
					<img src={arr7} className="arr7" />
					&nbsp;&nbsp;Read More
				</a>
			</div>
		</div>
	);
}

export default Card7;
