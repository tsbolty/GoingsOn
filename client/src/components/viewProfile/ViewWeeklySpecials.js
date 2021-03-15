import React from "react";

const ViewWeeklySpecials = ({ weeklySpecials }) => {
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
				</table>
			</div>
		</>
	);
};

export default ViewWeeklySpecials;
