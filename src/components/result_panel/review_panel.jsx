import { useState } from "react";
import "../../styles/result.scss";

function review_panel() {
	const [num1, setNum] = useState(0);

	const handleClick = () => {
		setNum(num1 + 1);
	};

	return (
		<div id="review">
			<h1>Result</h1>
			<button onClick={handleClick}>Increment</button>

		</div>
	);
}

export default review_panel;

//whats above is a place holder.
//TODO:
// 1- divide the result panel into 3 sections (Use a flexbox)
// 2- load up and print the information from the input panel
// 3- each flex section will load up a different set of information
