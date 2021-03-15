import React from "react";

const ViewWeeklySpecials = ({ weeklySpecials }) => {
	console.log(weeklySpecials);
	return (
		<>
			<div>
				<h3>Weekly Specials</h3>
				<table>
					<tr>
						{Object.keys(weeklySpecials).map((day) => (
							<th>{day.charAt(0).toUpperCase() + day.slice(1, day.length)}</th>
						))}
					</tr>
					{Object.keys(weeklySpecials.monday).map((item, i) => {
						return (
							<>
								<tr>
									{Object.keys(weeklySpecials).map((day) => (
										<td>
											{i % 2 === 0 ? (
												<strong>{weeklySpecials[[day]][[item]]}</strong>
											) : (
												weeklySpecials[[day]][[item]]
											)}
										</td>
									))}
								</tr>
							</>
						);
					})}
					{/* <td><strong>{weeklySpecials.tuesday.foodSpecialHeading}</strong></td>
<td><strong>{weeklySpecials.wednesday.foodSpecialHeading}</strong></td>
<td><strong>{weeklySpecials.thursday.foodSpecialHeading}</strong></td>
<td><strong>{weeklySpecials.friday.foodSpecialHeading}</strong></td>
<td><strong>{weeklySpecials.saturday.foodSpecialHeading}</strong></td>
<td><strong>{weeklySpecials.sunday.foodSpecialHeading}</strong></td>
          <tr>
            <td>{weeklySpecials.monday.foodSpecialDescription}</td>
            <td>{weeklySpecials.tuesday.foodSpecialDescription}</td>
            <td>{weeklySpecials.wednesday.foodSpecialDescription}</td>
            <td>{weeklySpecials.thursday.foodSpecialDescription}</td>
            <td>{weeklySpecials.friday.foodSpecialDescription}</td>
            <td>{weeklySpecials.saturday.foodSpecialDescription}</td>
            <td>{weeklySpecials.sunday.foodSpecialDescription}</td>
          </tr>
          <tr>
            <td><strong>{weeklySpecials.monday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.tuesday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.wednesday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.thursday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.friday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.saturday.drinkSpecialHeading}</strong></td>
            <td><strong>{weeklySpecials.sunday.drinkSpecialHeading}</strong></td>
          </tr>
          <tr>
            <td>{weeklySpecials.monday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.tuesday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.wednesday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.thursday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.friday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.saturday.drinkSpecialDescription}</td>
            <td>{weeklySpecials.sunday.drinkSpecialDescription}</td>
          </tr> */}
				</table>
			</div>
		</>
	);
};

export default ViewWeeklySpecials;
