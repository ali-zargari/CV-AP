import { useState } from "react";
import "../../styles/info.scss";

function info_panel() {
	const [num1, setNum] = useState(0);

	const handleClick = () => {
		setNum(num1 + 1);
	};

	return (
		<div className="info">
			<h1>Info Panel</h1>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
}

export default info_panel;
