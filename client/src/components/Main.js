import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import Filter from "./filter/Filter";
import BusinessInfoContext from "../context/businessInfoContext";
import HeadlineCard from "./homePage/HeadlineCard";
import API from "../utils/API";
// import CreateSpecialEvent from "./createProfile/CreateSpecialEvent";

const Main = ({ setAllBusinessInfo }) => {
	const businessInfo = useContext(BusinessInfoContext);
	const [filteredInfo, setFilteredInfo] = useState();
	const [filterType, setFilterType] = useState("");

	const handleFilterTypeClick = (e) => {
		setFilterType(e.target.name);
	};

	useEffect(() => {
		API.getAllBusinessInfo()
			.then((data) => data.json())
			.then((res) => setAllBusinessInfo(res))
			.catch((err) => console.log("fuck"));
	}, [setAllBusinessInfo]);

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
				const arr = [];
				arr.push(
					Object.entries(business.weeklySpecials).map((item) => {
						return Object.values(item[1]).join("").toLowerCase();
					})
				);
				return arr.join("").includes(keyword.toLowerCase());
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
			{/* <CreateSpecialEvent /> */}
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Main);
