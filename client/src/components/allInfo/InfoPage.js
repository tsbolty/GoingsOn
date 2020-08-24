import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "../../react-auth0-spa";
import HeadlineDailySpecialsCard from '../homePage/HeadlineDailySpecialsCard';
import HeadlineWeeklySpecialsCard from '../homePage/HeadlineWeeklySpecialsCard';

// CURRENTLY THIS COMPONENT IS A CHILD COMPONENT OF HEADLINECARD. PROBABLY SHOULDN'T HAVE A PARENT COMPONENT IF IT'S GOING TO BE IT'S OWN PAGE. WILL NEED TO RE-TOOL
const InfoPage = ({ businessInfo, item, i })=>{
  const [specials, setSpecials] = useState([])

  const { user } = useAuth0();

  useEffect(()=>{
    axios.get(`/api/allBusinessInfo/get/${user.email}`)
      .then(res => setSpecials(res.data))
  }, [])

  return(
    <div>
      <HeadlineDailySpecialsCard businessInfo= {specials} i= {i} />
      <br />
      <HeadlineWeeklySpecialsCard businessInfo= {specials} i={i} />
    </div>
  )
}

export default InfoPage;