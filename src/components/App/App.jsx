import "../../styles/App.scss";
import { useEffect , useState} from "react";
import Info from "../input_panel/input_panel.jsx";
import Review from "../review_panel/review_panel.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Result from "../result_panel/result_panel.jsx";


function App() {
	const [personalInfo, setPersonalInfo] = useState(0);



	useEffect(() => {
		const adjustHeight = () => {
			document.body.style.height = window.innerHeight + "px";
		};

		window.addEventListener("resize", adjustHeight);
		adjustHeight(); // Initial adjustment

		// Cleanup listener when the component unmounts
		return () => window.removeEventListener("resize", adjustHeight);
	}, []);




	return (
		<>
			<Header />
			<div id="content">
				<Info onFormSubmit={setPersonalInfo}/>
				<Review personalInfo={personalInfo}/>
			</div>
			<Result />
			<Footer />
		</>
	);
}

export default App;
