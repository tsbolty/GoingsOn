import React, { useState, useContext } from "react";
import Filter from "../filter/Filter";
import HeadlineCardContent from "./HeadlineCardContent";
import BusinessInfoContext from "../../context/businessInfoContext";
// import { slideInLeft } from "react-animations";
// THIS COMPONENT WILL RENDER ALL BUSINESS INFO. FILTEREDINFO WILL UPDATE WITH CORRECT FILTERED RESULTS BY NAME, BUT NEED A WAY TO MAKE THIS COMPONENT RERENDER WHEN FILTERED INFO CHANGES.

const HeadlineCard = ({ businessInfo, filteredInfo, columns }) => {
	return (
		<>
			{businessInfo && filteredInfo
				? filteredInfo.map((item) => (
						<HeadlineCardContent
							businessName={item.businessName}
							id={item._id}
							businessType={item.businessType}
							businessAddress={item.businessAddress}
							specialEvents={item.specialEvents}
							businessHeadline={item.businessHeadline}
							weeklySpecials={item.weeklySpecials}
							key={item._id}
							columns={columns}
						/>
				  ))
				: businessInfo.map((item) => (
						<HeadlineCardContent
							businessName={item.businessName}
							id={item._id}
							businessType={item.businessType}
							businessAddress={item.businessAddress}
							businessHeadline={item.businessHeadline}
							specialEvents={item.specialEvents}
							weeklySpecials={item.weeklySpecials}
							key={item._id}
							columns={columns}
						/>
				  ))}
		</>
	);
};

export default HeadlineCard;
