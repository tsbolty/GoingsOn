import React, { useEffect, useState } from "react";
import "./style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import BusinessInfoContext from "./context/businessInfoContext";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CreateBusinessInfo from "./components/createProfile/CreateBusinessInfo";
import ViewProfile from "./components/viewProfile/ViewProfile";
import InfoPage from "./components/allInfo/InfoPage";
import EditBusinessInfo from "./components/editBusinessInfo/EditBusinessInfo";
import API from "./utils/API";
import NewNav from "./components/NewNav";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App(props) {
	const [allBusinessInfo, setAllBusinessInfo] = useState([]);
	const { user, isAuthenticated } = props.auth;

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

	useEffect(() => {
		if (isAuthenticated) {
			API.getUserBusinessInfo(user.id).then((info) => {
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

	return (
		<div className='App'>
			<header>
				<Router>
					<BusinessInfoContext.Provider value={allBusinessInfo}>
						{/* <NavBar id={profileInfo._id || "69"} /> */}
						<NewNav />
						<Landing />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login'>
							<Login />
						</Route>
						<Switch>
							<PrivateRoute exact path='/dashboard' component={Dashboard} />
						</Switch>
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
								<Main user={user} setAllBusinessInfo={setAllBusinessInfo} />
							</Route>
							<Route path='/infopage/:id' component={InfoPage} />
						</div>
					</BusinessInfoContext.Provider>
				</Router>
			</header>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps)(App);
