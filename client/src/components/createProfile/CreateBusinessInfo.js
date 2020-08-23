import React, { useState, useEffect } from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';
import axios from 'axios';

const CreateBusinessInfo = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState([])

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
          <button onClick={postAllBusinessInfo}>Submit All Business Info</button>
          <br />
          <p>___________________________________________________________</p>
          <CreateDaySpecials user={user} />
          <CreateWeeklySpecials user={user} />
          <br />
        </>
      }
    </>

  )
}

export default CreateBusinessInfo;