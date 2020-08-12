import React from 'react';
// import CreateHappyHour from './CreateHappyHour'
import SpecialDate from './SpecialDate'
import ViewHappyHour from './ViewHappyHour'
import DatePicker from './DatePicker'
import NavBar from './NavBar'

const Main = ()=>{
    return(
        <>
            <NavBar />
            {/* <SpecialDate /> */}
            <ViewHappyHour />
            {/* <DatePicker /> */}
        </>
    )
}

export default Main;