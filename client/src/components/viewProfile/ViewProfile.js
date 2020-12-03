import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const ViewProfile = ({ user, profileInfo }) => {
  // const [businessInfo, setBusinessInfo] = useState({})

  // useEffect(() => {
  //   axios.get(`/api/allBusinessInfo/get/email/${user.email}`)
  //     .then(res => setBusinessInfo(res.data[0]))
  // }, [user])

  return (
    <>
      {user &&
        <>
          <h2>{profileInfo.businessName `(${profileInfo.businessType})`}</h2>
          <p>{profileInfo.businessAddress}</p>
          <p>________________________________</p>
          <br />
          <ViewEveryDaySpecials user={user} />
          <br />
          <p>_________________________________</p>
          <ViewWeeklySpecials user={user} />

        </>
      }
    </>
  )
}

export default ViewProfile;