import React, { useEffect, useState } from "react";
import "./style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import BusinessInfoContext from "./context/businessInfoContext";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CreateBusinessInfo from "./components/createProfile/CreateBusinessInfo";
import ViewProfile from "./components/viewProfile/ViewProfile";
import InfoPage from "./components/allInfo/InfoPage";
import EditBusinessInfo from "./components/editBusinessInfo/EditBusinessInfo";
import API from "./utils/API";

//LOOK IN TO USE CONTEXT HOOK TO DEFINE BUSINESS INFO MODEL AND ACCESS THAT THROUGHOUT THE APPLICATION
function App() {
	const { user } = useAuth0();
	const { loading } = useAuth0();
	const [allBusinessInfo, setAllBusinessInfo] = useState([]);
	const [profileInfo, setProfileInfo] = useState({
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

	const getAllBusinessInfo = () => {
		API.getAllBusinessInfo()
			.then((data) => data.json())
			.then((res) => setAllBusinessInfo(res))
			.catch((err) => console.log("fuck"));
	};

	useEffect(() => {
		if (user) {
			API.getUserBusinessInfo(user.email).then((info) => {
				info
					.json()
					.then((data) => {
						if (data) {
							setProfileInfo(data);
						}
					})
					.catch((err) => {
						console.log("fuck", err);
					});
			});
		}
	}, [user]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='App'>
			<header>
				<Router>
					<BusinessInfoContext.Provider value={allBusinessInfo}>
						<NavBar id={profileInfo._id || "69"} />
						<div>
							{user && (
								<>
									<Route path='/createbusinessprofile'>
										<CreateBusinessInfo
											user={user}
											profileInfo={profileInfo}
											setProfileInfo={setProfileInfo}
										/>
									</Route>
									<Route path='/editbusinessprofile/:id'>
										<EditBusinessInfo
											user={user}
											profileInfo={profileInfo}
											setProfileInfo={setProfileInfo}
										/>
									</Route>
									<Route path='/viewbusinessprofile'>
										<ViewProfile profileInfo={profileInfo} />
									</Route>
								</>
							)}
							<Route exact path='/'>
								<Main user={user} getAllBusinessInfo={getAllBusinessInfo} />
							</Route>
							<Route path='/infopage/:id' component={InfoPage} />
						</div>
					</BusinessInfoContext.Provider>
				</Router>
			</header>
		</div>
	);
}

export default App;
