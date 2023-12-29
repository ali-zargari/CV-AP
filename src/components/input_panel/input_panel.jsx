import "../../styles/info.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

function InfoPanel(props) {

	const input = {
		name: "",
		email: "",
		phone: "",
		website: "",
		address: "",
		summary: "",
		education: [],
		experience: [],
		skills: [],
	};

	const [activeTabs, setActiveTabs] = useState([false, false]);
	const [personalInfo, setPersonalInfo] = useState({ ...input, name: "test", email: "test", phone: "test" });
	const [educationInfo, setEducationInfo] = useState({ ...input, education: [{ school: "test", degree: "test", start: "test", end: "test" }] });
	const [experienceInfo, setExperienceInfo] = useState({ ...input, experience: [{ company: "test", position: "test", start: "test", end: "test" }] });


	const toggleTab = (index, event) => {
		event.stopPropagation();
		let newActiveTabs = [...activeTabs];
		newActiveTabs[index] = !newActiveTabs[index];
		setActiveTabs(newActiveTabs);
	};

	const handleSubmit = event => {
		event.preventDefault();

		const data = {
			name: event.target.name.value,
			email: event.target.email.value,
			phone: event.target.phone.value,
		};

		setPersonalInfo({ ...personalInfo, data});

		props.onFormSubmit(data);

	};

	return (
		<div id="info">
			<div className={`tab ${activeTabs[0] ? "active" : ""}`}>
				<h2 onClick={(event) => toggleTab(0, event)}>Tab 1</h2>
				{activeTabs[0] &&
					<form className="form" onSubmit={handleSubmit}>
						<label>
							<p>Name:</p>
							<input type="text" name="name" />
						</label>
						<label>
							<p>Email:</p>
							<input type="email" name="email" />
						</label>
						<label>
							<p>Phone Number</p>
							<input type="number" name="phone" />
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

// this makes sure that the onFormSubmit is a function
InfoPanel.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,

};

export default InfoPanel;