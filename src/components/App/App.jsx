import "../../styles/App.scss";
import { useState, useEffect } from "react";
import Info from "../input_panel/input_panel.jsx";
import Result from "../result_panel/result_panel.jsx";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(count + 1);
	}, []); // Runs once on mount

	return (
		<>
			<Info />
			<Result />
		</>
	);
}

export default App;
