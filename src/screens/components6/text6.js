import React from "react";
import a2 from "../../assets/Group 35626.svg";
import a61 from "../../assets/Group 35601.svg";
import i61 from "../../assets/React-icon.svg";

function Text6() {
	return (
		<div className="Text6">
			<p className="text6stuff">
				<img src={a2} className="a6" />
				<span className="selected">SELECTED CUSTOMERS</span>
			</p>
			<p className="heading6">
				Check what our client
				<br />
				say about us
			</p>
			<p className="desc6">
				<br />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
			</p>
			<img src={i61} class="i61" />
			<img src={a61} class="a61" />
		</div>
	);
}

export default Text6;
