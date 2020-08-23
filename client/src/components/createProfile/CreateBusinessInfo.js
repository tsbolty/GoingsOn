import React, { useState, useEffect } from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';
import axios from 'axios';

const CreateBusinessInfo = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState([])
  const [daySpecialsInfo, setDaySpecialsInfo] = useState([])
  const [weeklySpecialsInfo, setWeeklySpecialsInfo] = useState([])

  const postAllBusinessInfo = () => {
    axios.post("/api/allBusinessInfo/add", {
      email: user.email,
      businessName: profileInfo.businessName,
      businessAddress: profileInfo.businessAddress,
      businessType: profileInfo.businessType
    })
  }

  return (
    <>
      {user &&
        <>
          <CreateProfile setProfileInfo={setProfileInfo} user={user} />
          <CreateDaySpecials setDaySpecialsInfo={setDaySpecialsInfo} user={user} />
          <CreateWeeklySpecials setWeeklySpecialsInfo={setWeeklySpecialsInfo} user={user} />
          <br />
          <button onClick={postAllBusinessInfo}>Submit All Business Info</button>
        </>
      }
    </>

  )
}

export default CreateBusinessInfo;