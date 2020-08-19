import React from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';

const EditBusinessInfo = ()=>{
    return(
        <>
        <CreateProfile />
        <CreateDaySpecials />
        <CreateWeeklySpecials />
        </>
    )
}

export default EditBusinessInfo;