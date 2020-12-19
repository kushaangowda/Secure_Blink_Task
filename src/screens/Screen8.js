import React from "react";
import ft from "../assets/Path 37660.svg";
// import base from "../assets/Path 37456.svg";
// import caller from "../assets/Group 35686.svg";
import Form8 from "./components8/form8";
import Footer from "./components8/footer";

function Screen8() {
	return (
		<div className="Screen8">
			<img src={ft} className="ft" />
			{/*<img src={caller} className="caller" />*/}
			<Form8 />
			{/*<img src={base} className="base" />*/}
			<Footer />
		</div>
	);
}

export default Screen8;
