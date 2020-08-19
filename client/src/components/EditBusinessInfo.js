import React from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';

const EditBusinessInfo = ({ user })=>{
    return(
        <>
        <CreateProfile user= {user}/>
        <CreateDaySpecials user= {user}/>
        <CreateWeeklySpecials user= {user}/>
        </>
    )
}

export default EditBusinessInfo;