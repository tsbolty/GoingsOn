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
		daySpecials: [],
		weeklySpecials: []
	});

	useEffect(() => {
		fetch("/api/allBusinessInfo/get")
			.then((data) => data.json())
			.then((res) => setAllBusinessInfo(res))
			.catch((err) => console.log("fuck"));
	}, []);

	useEffect(() => {
		if (user) {
			fetch(`/api/allBusinessInfo/get/email/${user.email}`).then((info) => {
				info.json().then((data) => {
					if (data) {
						setProfileInfo(data);
					}
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
						<NavBar user={user} />
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
										<ViewProfile profileInfo={profileInfo} user={user} />
									</Route>
								</>
							)}
							<Route exact path='/'>
								<Main user={user} />
							</Route>
							<Route path='/infopage/:id'>
								<InfoPage />
							</Route>
						</div>
					</BusinessInfoContext.Provider>
				</Router>
			</header>
		</div>
	);
}

export default App;
