import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App/App.jsx";
import "../../styles/App.scss";
import bkgnd from "../../assets/images/bkgnd.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// set background image of body

document.body.style.backgroundImage = `url(${bkgnd})`;
