import React, { useState } from "react";
import CreateDaySpecials from "./CreateDaySpecials";
import CreateProfile from "./CreateProfile";
import CreateWeeklySpecials from "./CreateWeeklySpecials";
import Col from "../Col";
// import PreviewInfo from "./PreviewInfo";
import HeadlineCardContent from "../homePage/HeadlineCardContent";
import ViewWeeklySpecials from "../viewProfile/ViewWeeklySpecials";
import API from "../../utils/API";
import history from "../../utils/history";

const CreateBusinessInfo = ({ user, profileInfo, setProfileInfo, auth }) => {
	const [newProfileInfo, setNewProfileInfo] = useState({
		email: "",
		businessName: "",
		businessAddress: "",
		businessType: "",
		businessHeadline: "",
		mapsLink: "",
		specialEvents: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			tuesday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			wednesday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			thursday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			friday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			saturday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			sunday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			}
		}
	});

	const postAllBusinessInfo = () => {
		const mapAddress = newProfileInfo.businessAddress
			.replace(/\s+/g, "")
			.toLowerCase();

		API.createNewBusiness(
			profileInfo.email,
			newProfileInfo,
			mapAddress,
			user.id
		)
			.then((res) => {
				console.log("created a new business");
				alert("You just created a new user :)");
				history.push("/");
			})
			.catch((err) => alert("Something went wrong trying to create that user"));
	};

	return (
		<>
			{user && (
				<div className='container'>
					{/* <PreviewInfo newProfileInfo= {newProfileInfo}/> */}
					<div className='row'>
						<HeadlineCardContent
							businessName={newProfileInfo.businessName}
							id={newProfileInfo._id}
							businessType={newProfileInfo.businessType}
							businessAddress={newProfileInfo.businessAddress}
							businessHeadline={newProfileInfo.businessHeadline}
							columns='9'
						/>
					</div>
					<div className='row'>
						<Col size='12'>
							<CreateProfile
								profileInfo={newProfileInfo}
								setProfileInfo={setNewProfileInfo}
								user={user}
							/>
							<button onClick={postAllBusinessInfo}>
								Submit All Business Info
							</button>
						</Col>
					</div>
					<br />
					<p>___________________________________________________________</p>
					<CreateDaySpecials user={user} />
					{/* <CreateWeeklySpecials user={user} /> */}
					<ViewWeeklySpecials weeklySpecials={newProfileInfo.weeklySpecials} />
					<div className='row'>
						<CreateWeeklySpecials setProfileInfo={setNewProfileInfo} />
					</div>
					<br />
				</div>
			)}
		</>
	);
};

export default CreateBusinessInfo;
