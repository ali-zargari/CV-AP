import "../../styles/result.scss";

function review_panel(props) {


	console.log(props);

	return (
		<div id="review">
			<h1>Review</h1>

			<div className="section" id={"personal_item"}>
				<h2>Personal Info</h2>
				<div className={"item_container"}>

				</div>
			</div>

			<div className="section" id={"education_item"}>
				<h2>Education</h2>
				<div className={"item_container"}>

				</div>
			</div>

			<div className="section" id={"experience_item"}>
				<h2>Work Experience</h2>
				<div className={"item_container"}>
					{
						//
					}
				</div>
			</div>

		</div>
	);
}


export default review_panel;

//whats above is a place holder.
//TODO:
// 1- divide the result panel into 3 sections (Use a flexbox)
// 2- load up and print the information from the input panel
// 3- each flex section will load up a different set of information
