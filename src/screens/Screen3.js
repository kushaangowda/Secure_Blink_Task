import React, { useState } from "react";
import Text3 from "./components3/text3";
import Card3 from "./components3/card3";

function Screen3() {
	const [title, changeTitle] = useState("UI/UX Design");

	const change = (newTitle) => {
		changeTitle(newTitle);
	};

	return (
		<div className="Screen3" id="services">
			<div className="part1">
				<Text3 change={change} />
			</div>
			<Card3 title={title} />
		</div>
	);
}

export default Screen3;
