import React, { useState, useContext } from "react";
import Filter from "./filter/Filter";
import BusinessInfoContext from "../context/businessInfoContext";
import HeadlineCard from "./homePage/HeadlineCard";

const Main = () => {
	const businessInfo = useContext(BusinessInfoContext);
	const [filteredInfo, setFilteredInfo] = useState();
	const [filterType, setFilterType] = useState("");

	const handleFilterTypeClick = (e) => {
		setFilterType(e.target.name);
	};

	const filterBusinessByName = (name) => {
		if (!name) {
			setFilteredInfo();
		} else {
			const filteredBusinesses = businessInfo.filter((business) => {
				return business.businessName.toLowerCase().includes(name.toLowerCase());
			});
			setFilteredInfo(filteredBusinesses);
		}
	};

	const filterBusinessType = (type) => {
		if (type !== "") {
			const filteredBusinesses = businessInfo.filter((business) => {
				return business.businessType === type;
			});
			setFilteredInfo(filteredBusinesses);
		} else {
			setFilteredInfo();
		}
	};

	const filterByKeyword = (keyword) => {
		if (keyword !== "") {
			const filteredBusinesses = businessInfo.filter((business) => {
				// return Object.values(business.weeklySpecials[0]).includes(keyword.toLowerCase())
				const mondaySpecials = Object.values(business.weeklySpecials[0].monday);
				const tuesdaySpecials = Object.values(
					business.weeklySpecials[0].tuesday
				);
				const wednesdaySpecials = Object.values(
					business.weeklySpecials[0].wednesday
				);
				const thursdaySpecials = Object.values(
					business.weeklySpecials[0].thursday
				);
				const fridaySpecials = Object.values(business.weeklySpecials[0].friday);
				const saturdaySpecials = Object.values(
					business.weeklySpecials[0].saturday
				);
				const sundaySpecials = Object.values(business.weeklySpecials[0].sunday);
				return (
					mondaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					tuesdaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					wednesdaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					thursdaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					fridaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					saturdaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase()) ||
					sundaySpecials
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase())
				);
				// return business.weeklySpecials[0].join(" ").toLowerCase().includes(keyword.toLowerCase())
			});
			setFilteredInfo(filteredBusinesses);
		} else {
			setFilteredInfo();
		}
	};
	return (
		<div className='container'>
			<Filter
				filterType={filterType}
				handleFilterTypeClick={handleFilterTypeClick}
				filterBusinessType={filterBusinessType}
				filterBusinessByName={filterBusinessByName}
				filterByKeyword={filterByKeyword}
			/>
			<div className='row'>
				<br />
				<br />
				<HeadlineCard
					businessInfo={businessInfo}
					filteredInfo={filteredInfo}
					columns='4'
				/>
			</div>
		</div>
	);
};

export default Main;
