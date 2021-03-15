import React from "react";

const TodaysSpecials = ({ specials, specialEvents }) => {
	return (
		<div>
			<div style={{ borderStyle: "groove" }} className='row'>
				<div className='col-6'>
					<h2>Today's food special</h2>
					<h3>{specials.foodSpecialHeading}</h3>
					<p>description:</p>
					<p>{specials.foodSpecialDescription}</p>
				</div>
				<div className='col-6'>
					<h2>Today's drink special</h2>
					<h3>{specials.drinkSpecialHeading}</h3>
					<p>description:</p>
					<p>{specials.drinkSpecialDescription}</p>
				</div>
			</div>
			<div>
				<h2>Upcoming special events</h2>
				<div className='row'>
					{specialEvents.length &&
						specialEvents.map((event) => {
							return (
								<div className='col-6' style={{ borderStyle: "groove" }}>
									<h3>{event.headline}</h3>
									<p>{event.description}</p>
									<p>Date: {event.eventDate}</p>
									<p>cost: ${event.cost}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TodaysSpecials;
