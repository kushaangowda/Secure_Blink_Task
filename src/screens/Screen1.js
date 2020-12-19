import React from "react";
import NavBar from "./components1/navBar";
// import rocketbase from "../assets/Union1.svg";
// import t1 from "../assets/Path 37500.svg";
// import t2 from "../assets/Path 37501.svg";
// import t3 from "../assets/Path 37459.svg";
// import t4 from "../assets/Path 37467.svg";
// import t5 from "../assets/Path 37490.svg";
// import t6 from "../assets/Path 37489.svg";
// import t7 from "../assets/Path 37488.svg";
// import t8 from "../assets/Path 37502.svg";
// import t9 from "../assets/Path 37482.svg";
// import t10 from "../assets/Path 37484.svg";
// import t11 from "../assets/Path 37485.svg";
// import t12 from "../assets/Path 37486.svg";
// import t13 from "../assets/Path 37458.svg";
// import t14 from "../assets/Path 37483.svg";
// import ellipse from "../assets/Ellipse 223.svg";
import Text1 from "./components1/text1";

function Screen1() {
	return (
		<div className="Screen1" id="home">
			<NavBar />
			{/*
				<img src={rocketbase} className="rocketBase" alt="" />
				<img src={t1} className="t1" alt="" />
				<img src={ellipse} className="ellipse" alt="" />
			*/}
			<Text1 />
			{/*
				<img src={t2} className="t2" alt="" />
				<img src={t3} className="t3" alt="" />
				<img src={t4} className="t4" alt="" />
				<img src={t5} className="t5" alt="" />
				<img src={t6} className="t6" alt="" />
				<img src={t7} className="t7" alt="" />
				<img src={t8} className="t8" alt="" />
				<img src={t9} className="t9" alt="" />
				<img src={t10} className="t10" alt="" />
				<img src={t11} className="t11" alt="" />
				<img src={t12} className="t12" alt="" />
				<img src={t13} className="t13" alt="" />
				<img src={t14} className="t14" alt="" />
			*/}
		</div>
	);
}

export default Screen1;
