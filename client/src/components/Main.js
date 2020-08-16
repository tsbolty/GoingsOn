import React from 'react';
// import CreateHappyHour from './CreateHappyHour'
import SpecialDate from './SpecialDate'
import ViewHappyHour from './ViewHappyHour'
import DatePicker from './DatePicker'
import NavBar from './NavBar'
import LocationCard from './LocationCard'
import CreateMondaySpecials from './CreateMondaySpecials'
import CreateProfile from './CreateProfile'
import Map from './map/Map'


const Main = ()=>{

    const location = {
        address: '4500 E Jewell Ave Denver, CO 80222',
        lat: 39.681760,
        lng: -104.935120,
    }

    return(
        <>
            <NavBar />
            {/* <SpecialDate /> */}
            {/* <ViewHappyHour /> */}
            {/* <LocationCard /> */}
            {/* <DatePicker /> */}
            {/* <CreateMondaySpecials /> */}
            {/* <CreateProfile /> */}
            <Map location={location} zoomLevel={10} />        </>
    )
}

export default Main;