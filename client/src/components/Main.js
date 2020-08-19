import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import CreateHappyHour from './CreateHappyHour'
import SpecialDate from './SpecialDate'
import ViewHappyHour from './ViewHappyHour'
import DatePicker from './DatePicker'
import NavBar from './NavBar'
import LocationCard from './LocationCard'
import CreateDaySpecials from './CreateDaySpecials'
import CreateProfile from './CreateProfile'
import Map from './map/Map'
import EditBusinessInfo from './EditBusinessInfo'
import BusinessInfo from './BusinessInfo'
import CreateWeeklySpecials from './CreateWeeklySpecials'


const Main = ()=>{

    // const location = {
    //     address: '4500 E Jewell Ave Denver, CO 80222',
    //     lat: 39.681760,
    //     lng: -104.935120,
    // }

    return(
        <>
        {/* <header>
            <NavBar />
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/editbusinessinfo">Edit Profile</Link>
                    </li>
                    <li>
                        <Link to="/businessinfo">View Profile</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/editbusinessinfo">
                        <EditBusinessInfo />
                    </Route>
                    <Route path="/businessinfo">
                        <BusinessInfo />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </header> */}

            {/* <SpecialDate /> */}
            {/* <ViewHappyHour /> */}
            {/* <LocationCard /> */}
            {/* <DatePicker /> */}
            {/* <EditBusinessInfo /> */}
            {/* <SelectSpecialsDay /> */}
            {/* <CreateDaySpecials /> */}
            {/* <CreateProfile /> */}
            {/* <BusinessInfo /> */}
            {/* <CreateWeeklySpecials /> */}
            {/* <Map location={location} zoomLevel={10} /> */}
        </>
    )
}

export default Main;