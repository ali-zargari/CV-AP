import "../../styles/info.scss";

function experience() {

	return (
		//create a form asking for the user's name, email, address, phone number
		//create a button to submit the form
		//create a button to clear the form
		<>
			<div id="info">
				<h2>Info</h2>
				<form>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" required></input>
					<br></br>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required></input>
					<br></br>
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" name="address" required></input>
					<br></br>
					<label htmlFor="phone">Phone Number:</label>
					<input type="tel" id="phone" name="phone" required></input>
					<br></br>
					<button type="submit">Submit</button>
					<button type="reset">Clear</button>
				</form>
			</div>
		</>
	);
}

export default experience;
