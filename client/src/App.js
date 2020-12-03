import React, { useEffect, useState } from 'react';
import './style.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main'
import NavBar from './components/NavBar'
import CreateBusinessInfo from './components/createProfile/CreateBusinessInfo'
import ViewProfile from './components/viewProfile/ViewProfile'
import InfoPage from './components/allInfo/InfoPage'
import EditBusinessInfo from './components/editBusinessInfo/EditBusinessInfo';

//LOOK IN TO USE CONTEXT HOOK TO DEFINE BUSINESS INFO MODEL AND ACCESS THAT THROUGHOUT THE APPLICATION

function App() {
  const [profileInfo, setProfileInfo] = useState({
    email: "",
    businessName: "",
    businessAddress: "",
    businessType: "",
    businessHeadline: "",
    mapsLink: "",
    daySpecials: [],
    weeklySpecials: []
  })

  const { user } = useAuth0();
  const { loading } = useAuth0();

  const getInitialInfo = () => {
    fetch(`/api/allBusinessInfo/get/email/${user.email}`).then(info => {
      info.json().then(async data => {
        if (data) {
          await setProfileInfo({
            email: data.email,
            businessName: data.businessName,
            businessAddress: data.businessAddress,
            businessType: data.businessType,
            businessHeadline: data.businessHeadline,
            mapsLink: data.mapsLink,
            daySpecials: data.daySpecials,
            weeklySpecials: data.weeklySpecials
          })
          console.log(data)
          console.log(profileInfo)
        }
      })
    })

  }

  useEffect(() => {
    getInitialInfo()
  }, [user])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <Router>
          <NavBar />
          <div>
            {user &&
              <>
                <Route path="/createbusinessprofile">
                  <CreateBusinessInfo user={user} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
                </Route>
                <Route path="/editbusinessprofile">
                  <EditBusinessInfo user={user} />
                </Route>
                <Route path="/viewbusinessprofile">
                  <ViewProfile profileInfo={profileInfo} user={user} />
                </Route>
              </>

            }
            <Route exact path="/">
              <Main user={user} />
            </Route>
            <Route path="/infopage/:id">
              <InfoPage />
            </Route>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
