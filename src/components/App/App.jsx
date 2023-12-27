import "../../styles/App.scss";
import { useEffect, useState } from "react";
import Info from "../input_panel/input_panel.jsx";
import Review from "../review_panel/review_panel.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Result from "../result_panel/result_panel.jsx";

function App() {
	//const [count, setCount] = useState(0);



	useEffect(() => {
		const adjustHeight = () => {
			document.body.style.height = window.innerHeight + "px";
		};

		window.addEventListener("resize", adjustHeight);
		adjustHeight(); // Initial adjustment

		// Cleanup listener when the component unmounts
		return () => window.removeEventListener("resize", adjustHeight);
	}, []);

	const[info, setInfo] = useState();
	const[review, setReview] = useState();
	const[result, setResult] = useState();

	const handleInfoChange = (event) => {
		setInfo(event.target.value);
	};


	const handleResultChange = (event) => {
		setResult(event.target.value);
		setResult(review);
	};

	return (
		<>
			<Header />
			<div id="content">
				<Info onInfoChange={handleInfoChange}/>
				<Review onReviewChange={setResult}/>
			</div>
			<Result onResultChange={{handleResultChange}}/>
			<Footer />
		</>
	);
}

export default App;
