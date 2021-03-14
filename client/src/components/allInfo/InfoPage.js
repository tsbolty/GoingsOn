import React, { useState } from "react";
import moment from "moment";
// import FullPageWeeklySpecials from "./FullPageWeeklySpecials";
// import FullPageDailySpecials from "./FullPageDailySpecials";
import TodaysSpecials from "./TodaysSpecials";

const InfoPage = (props) => {
	const [specials] = useState({
		...props.location.state.businessInfo
	});

	return (
		<>
			<div className='container'>
				<h1>
					{specials.businessName} {`(${specials.businessType})`}
				</h1>
				<p>{specials.businessAddress}</p>
				{/* Will not let me add regex to convert business address to url accepted format. Still works though */}
				<a
					href={`https://www.google.com/maps/search/?api=1&query=${specials.businessAddress}`}
					target='_blank'
					rel='noopener noreferrer'>
					Google Maps
				</a>
				<br />
				<p>_______________________________________</p>
				<TodaysSpecials
					specialEvents={specials.specialEvents}
					specials={
						specials.weeklySpecials[[moment().format("dddd").toLowerCase()]]
					}
				/>
			</div>
			{/* <br />
      <p>_______________________________________</p>
      <FullPageDailySpecials specials= {specials} />
      <br />
      <p>_________________________________________</p>
      <FullPageWeeklySpecials specials= {specials} /> 
		</div>*/}
		</>
	);
};

export default InfoPage;
