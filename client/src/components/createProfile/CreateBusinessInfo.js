import React, { useContext } from "react";
import CreateDaySpecials from "./CreateDaySpecials";
import CreateProfile from "./CreateProfile";
import CreateWeeklySpecials from "./CreateWeeklySpecials";
import Col from "../Col";
import PreviewInfo from "./PreviewInfo";
import HeadlineCardContent from "../homePage/HeadlineCardContent";
import axios from "axios";
import ViewWeeklySpecials from "../viewProfile/ViewWeeklySpecials";
import BusinessInfoContext from "../../context/businessInfoContext";

const CreateBusinessInfo = ({ user, profileInfo, setProfileInfo }) => {
	const businessInfo = useContext(BusinessInfoContext);
	const postAllBusinessInfo = () => {
		const mapAddress = profileInfo.businessAddress
			.replace(/\s+/g, "")
			.toLowerCase();
		axios.post("/api/allBusinessInfo/add", {
			email: user.email,
			businessName: profileInfo.businessName,
			businessAddress: profileInfo.businessAddress,
			businessType: profileInfo.businessType,
			businessHeadline: profileInfo.businessHeadline,
			mapsLink: `https://www.google.com/maps/search/?api=1&${mapAddress}`
		});
	};

	return (
		<>
			{user && (
				<div className='container'>
					{/* <PreviewInfo profileInfo= {profileInfo}/> */}
					<div className='row'>
						<HeadlineCardContent
							businessName={profileInfo.businessName}
							id={profileInfo._id}
							businessType={profileInfo.businessType}
							businessAddress={profileInfo.businessAddress}
							businessHeadline={profileInfo.businessHeadline}
							columns='9'
						/>
					</div>
					<div className='row'>
						<Col size='12'>
							<CreateProfile
								profileInfo={profileInfo}
								setProfileInfo={setProfileInfo}
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
					<ViewWeeklySpecials weeklySpecials={profileInfo.weeklySpecials} />
					<br />
				</div>
			)}
		</>
	);
};

export default CreateBusinessInfo;
