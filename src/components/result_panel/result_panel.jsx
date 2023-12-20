import { useState } from "react";
import "../../styles/result.scss";

function result_panel() {
	const [num1, setNum] = useState(0);

	const handleClick = () => {
		setNum(num1 + 1);
	};

	return (
		<div className="result">
			<h1>Result</h1>
			<button onClick={handleClick}>Increment</button>

		</div>
	);
}

export default result_panel;
