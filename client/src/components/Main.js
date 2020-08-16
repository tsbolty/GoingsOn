import React from 'react';
// import CreateHappyHour from './CreateHappyHour'
import SpecialDate from './SpecialDate'
import ViewHappyHour from './ViewHappyHour'
import DatePicker from './DatePicker'
import NavBar from './NavBar'
import LocationCard from './LocationCard'
import CreateMondaySpecials from './CreateMondaySpecials'
import CreateProfile from './CreateProfile'


const Main = ()=>{
    return(
        <>
            <NavBar />
            {/* <SpecialDate /> */}
            {/* <ViewHappyHour /> */}
            {/* <LocationCard /> */}
            {/* <DatePicker /> */}
            {/* <CreateMondaySpecials /> */}
            <CreateProfile />
        </>
    )
}

export default Main;