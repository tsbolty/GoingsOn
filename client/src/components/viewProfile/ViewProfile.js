import React, { useState, useEffect } from 'react';
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const ViewProfile = ({ user, profileInfo }) => {
 
console.log(profileInfo.weeklySpecials)
  return (
    <>
          <h2>{profileInfo.businessName} {`(${profileInfo.businessType})`}</h2>
          <p>{profileInfo.businessAddress}</p>
          <p>________________________________</p>
          <br />
           {/* <ViewEveryDaySpecials user={user} weeklySpecials={profileInfo.weeklySpecials}/> */}
          <br />
          <p>_________________________________</p>
          <ViewWeeklySpecials user={user} weeklySpecials= {profileInfo.weeklySpecials[0]}/>      
    </>
  )
}

export default ViewProfile;