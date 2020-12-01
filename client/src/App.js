import React, { useState } from 'react';
import './style.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import axios from 'axios';
import Main from './components/Main'
import NavBar from './components/NavBar'
import CreateBusinessInfo from './components/createProfile/CreateBusinessInfo'
import BusinessInfo from './components/viewProfile/BusinessInfo'
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
    mapsLink: ""
  })
  
  const { user } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


  const getInitialInfo = async ()=>{
    let info;
    try{
      info = await axios.get(`/api/allBusinessInfo/get/email/${user.email}`)
      setProfileInfo({
        ...profileInfo,
        email: info.data[0].email,
        businessName: info.data[0].businessName,
        businessAddress: info.data[0].businessAddress,
        businessType: info.data[0].businessType,
        businessHeadline: info.data[0].businessHeadline,
        mapsLink: info.data[0].mapsLink
      })
    } catch(err){
      info = {}
      console.log("There's probably no information in the database yet")
    }
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
                        <CreateBusinessInfo user= {user} profileInfo= {profileInfo} setProfileInfo= {setProfileInfo} />
                    </Route>
                    <Route path="/editbusinessprofile">
                      <EditBusinessInfo user= {user} />
                    </Route>
                    <Route path="/businessinfo">
                        <BusinessInfo user= {user}/>
                    </Route>
                  </>
                  }
                  <Route exact path="/">
                      <Main user= {user}/>
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
