import React from "react";
// import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from "./ViewWeeklySpecials";

const ViewProfile = ({ profileInfo }) => {
	return (
		<>
			<h2>
				{profileInfo.businessName} {`(${profileInfo.businessType})`}
			</h2>
			<p>{profileInfo.businessAddress}</p>
			{/*<p>________________________________</p>
          <br />
            <ViewEveryDaySpecials user={user} weeklySpecials={profileInfo.weeklySpecials}/> */}
			<br />
			<p>_________________________________</p>
			<ViewWeeklySpecials weeklySpecials={profileInfo.weeklySpecials[0]} />
		</>
	);
};

export default ViewProfile;
