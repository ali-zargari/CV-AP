import { useState } from "react";
import "../../styles/info.scss";

function info_panel() {
	const [num1, setNum] = useState(0);

	const handleClick = () => {
		setNum(num1 + 1);
	};

	return (
		<div className="info">
			<h2>Info Panel</h2>
			<div id="education">
				<button onClick={handleClick}>Increment</button>
			</div>

			<div>

			</div>
		</div>
	);
}

export default info_panel;
