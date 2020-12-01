import React, { useState, useEffect } from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';
import PreviewInfo from './PreviewInfo';
import HeadlineCardContent from '../homePage/HeadlineCardContent';
import axios from 'axios';

const CreateBusinessInfo = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState({
    email: "",
    businessName: "",
    businessAddress: "",
    businessType: "",
    businessHeadline: "",
    mapsLink: ""
  })

  const postAllBusinessInfo = () => {
    axios.post("/api/allBusinessInfo/add", {
      email: user.email,
      businessName: profileInfo.businessName,
      businessAddress: profileInfo.businessAddress,
      businessType: profileInfo.businessType,
      businessHeadline: profileInfo.businessHeadline,
      mapsLink: `https://www.google.com/maps/search/?api=1&${profileInfo.mapsAddress}`
    })
  }

  return (
    <>
      {user &&
        <>
          {/* <PreviewInfo profileInfo= {profileInfo}/> */}
          <HeadlineCardContent businessName= {profileInfo.businessName} id= {profileInfo._id} businessType= {profileInfo.businessType} businessAddress= {profileInfo.businessAddress} businessHeadline= {profileInfo.businessHeadline} />
          <CreateProfile profileInfo= {profileInfo} setProfileInfo={setProfileInfo} user={user} />
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