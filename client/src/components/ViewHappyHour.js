import React, { useState, useEffect } from "react";
import CreateHappyHour from "./CreateHappyHour";
import API from "../utils/API";

const ViewHappyHour = () => {
	const [array, setArray] = useState([]);

	const getHappyHourSpecials = () => {
		API.getHappyHour()
			.then((data) => data.json())
			.then((res) => setArray(res.data));
	};

	useEffect(() => {
		getHappyHourSpecials();
	}, []);

	return (
		<>
			<CreateHappyHour getHappyHourSpecials={getHappyHourSpecials} />
			<div className='card'>
				{array.map((special) => (
					<>
						<h3 className='food-special-heading'>
							{special.foodSpecial1Heading}
						</h3>
						<p className='food-special-description'>
							{special.foodSpecial1Description}
						</p>
						<h3 className='drink-special-heading'>
							{special.drinkSpecial1Heading}
						</h3>
						<p className='drink-special-description'>
							{special.drinkSpecial1Description}
						</p>
						<button
							className='delete-food-special-button'
							onClick={() =>
								API.deleteHappyHour(special._id).then((res) =>
									getHappyHourSpecials()
								)
							}>
							Delete
						</button>
						<br />
					</>
				))}
			</div>
		</>
	);
};

export default ViewHappyHour;
