import React, { useState } from "react";
import ViewWeeklySpecials from "../viewProfile/ViewWeeklySpecials";
import WeeklySpecialsInput from "./WeeklySpecialsInput";

const EditWeeklySpecials = ({ specials }) => {
	const [weeklySpecials, setWeeklySpecials] = useState({ ...specials });

	return (
		<div>
			<h1>Weekly Specials</h1>
			<ViewWeeklySpecials weeklySpecials={weeklySpecials} />
			<br />
			<p>___________________________</p>
			<WeeklySpecialsInput
				weeklySpecials={weeklySpecials}
				setWeeklySpecials={setWeeklySpecials}
			/>
		</div>
	);
};

export default EditWeeklySpecials;
