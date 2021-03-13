import React, { useState } from "react";
import axios from "axios";
import Col from "../Col";
import Form from "react-bootstrap/Form";

const CreateWeeklySpecials = ({ user }) => {
	const [weeklySpecials, setWeeklySpecials] = useState({
		monday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		tuesday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		wednesday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		thursday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		friday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		saturday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		},
		sunday: {
			foodSpecialHeading: "",
			foodSpecialDescription: "",
			drinkSpecialHeading: "",
			drinkSpecialDescription: ""
		}
	});

	let weekArr = Object.entries(weeklySpecials);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const day = e.target.getAttribute("data-day");
		setWeeklySpecials({
			...weeklySpecials,
			[day]: { ...weeklySpecials[[day]], [name]: value }
		});
	};

	const handlePostSubmit = () => {
		axios.post(`/api/weeklySpecials/add/${user.email}`, {
			email: user.email,
			...weeklySpecials
		});
	};

	return (
		<>
			<h2 className='col-12' style={{ padding: "20, 0" }}>
				Create Weekly Specials Here:
			</h2>
			<br />
			{weekArr.map(([day, specials]) => {
				return (
					<>
						<Col size='4'>
							<h2>{day.charAt(0).toUpperCase() + day.slice(1, day.length)}</h2>
							<Form>
								{Object.entries(specials).map(([key, value]) => (
									<Form.Group>
										<Form.Control
											type='text'
											placeholder={`${
												key.includes("food") ? "Food" : "Drink"
											} Special ${
												key.includes("Description") ? "Description" : "Title"
											}`}
											name={key}
											value={value}
											onChange={handleInputChange}
											data-day={day}
										/>
									</Form.Group>
								))}
							</Form>
						</Col>
					</>
				);
			})}
			<br />
			<div className='row'>
				<Col size='12'>
					<button onClick={() => handlePostSubmit()}>
						Post Weekly Specials
					</button>
				</Col>
			</div>
		</>
	);
};

export default CreateWeeklySpecials;
