import React, { useState, useEffect } from 'react';
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const ViewProfile = ({ user, profileInfo }) => {
 
  return (
    <>
      
        <>
          <h2>{profileInfo.businessName `(${profileInfo.businessType})`}</h2>
          <p>{profileInfo.businessAddress}</p>
          <p>________________________________</p>
          <br />
          {/* <ViewEveryDaySpecials user={user} />
          <br />
          <p>_________________________________</p>
          <ViewWeeklySpecials user={user} /> */}

        </>
      
    </>
  )
}

export default ViewProfile;