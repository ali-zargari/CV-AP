import "../../styles/info.scss";
import React, { useState } from "react";

function InfoPanel(onInfoChange) {
	const [activeTabs, setActiveTabs] = useState([false, false]);

	const toggleTab = (index, event) => {
		event.stopPropagation();
		let newActiveTabs = [...activeTabs];
		newActiveTabs[index] = !newActiveTabs[index];
		setActiveTabs(newActiveTabs);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onInfoChange();
	};

	return (
		<div id="info">
			<div className={`tab ${activeTabs[0] ? "active" : ""}`}>
				<h2 onClick={(event) => toggleTab(0, event)}>Tab 1</h2>
				{activeTabs[0] &&
					<form className="form" onSubmit={handleSubmit}>
						<label>
							Name:
							<input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				}
			</div>
			<div className={`tab ${activeTabs[1] ? "active" : ""}`}>
				<h2 onClick={(event) => toggleTab(1, event)}>Tab 2</h2>
				{activeTabs[1] &&
					<form className="form" onSubmit={handleSubmit}>
						<label>
							Email:
							<input type="text" name="email" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				}
			</div>
		</div>
	);
}

export default InfoPanel;