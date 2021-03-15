import React, { useState } from "react";
import API from "../../utils/API";

const ViewDaySpecials = ({ day }) => {
	const [singleDaySpecialsData, setSingleDaySpecialsData] = useState([]);

	const getSingleDaySpecials = () => {
		API.getSingleDaySpecials(day).then((res) =>
			setSingleDaySpecialsData(res.data)
		);
	};

	return (
		<div className='card'>
			{singleDaySpecialsData &&
				singleDaySpecialsData.map((special) => (
					<>
						<h3>{special.foodSpecialHeading}</h3>
						<p>{special.foodSpecialDescription}</p>
						<h3>{special.drinkSpecialHeading}</h3>
						<p>{special.drinkSpecialDescription}</p>
						<button
							className='delete-food-special-button'
							onClick={() => API.deleteSingleDaySpecials(special._id)}>
							Delete
						</button>
						<br />
					</>
				))}
			<button onClick={() => getSingleDaySpecials()}>
				Get Single Day Specials
			</button>
		</div>
	);
};

export default ViewDaySpecials;
