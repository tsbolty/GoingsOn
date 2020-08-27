import React, { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import HeadlineDailySpecialsCard from '../homePage/HeadlineDailySpecialsCard';
import HeadlineWeeklySpecialsCard from '../homePage/HeadlineWeeklySpecialsCard';
import FullPageWeeklySpecials from './FullPageWeeklySpecials';
import FullPageDailySpecials from './FullPageDailySpecials';

// CURRENTLY THIS COMPONENT IS A CHILD COMPONENT OF HEADLINECARD. PROBABLY SHOULDN'T HAVE A PARENT COMPONENT IF IT'S GOING TO BE IT'S OWN PAGE. WILL NEED TO RE-TOOL
const InfoPage = () => {
  const [specials, setSpecials] = useState([])
  let {id} = useParams();

  useEffect(() => {
    axios.get(`/api/allBusinessInfo/get/id/${id}`)
      .then(res => setSpecials(res.data[0]))
  }, [])

  return (
    <>
      <div>
        <h1>{specials.businessName} {`(${specials.businessType})`}</h1>
        <p>{specials.businessAddress}</p>
        <a href= {`https://www.google.com/maps/search/?api=1&query=${specials.businessAddress}`} target= "_blank">Google Maps</a>
        <br />
        <p>_______________________________________</p>
      </div>
      <FullPageDailySpecials specials= {specials} />
      <br />
      <p>_________________________________________</p>
      <FullPageWeeklySpecials specials= {specials} />
    </>
  )
}

export default InfoPage;