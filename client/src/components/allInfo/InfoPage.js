import React, { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import FullPageWeeklySpecials from './FullPageWeeklySpecials';
import FullPageDailySpecials from './FullPageDailySpecials';
import TodaysSpecials from './TodaysSpecials';

const InfoPage = () => {
  const [specials, setSpecials] = useState({})
  let {id} = useParams();

  useEffect(function() {
    axios.get(`/api/allBusinessInfo/get/id/${id}`)
      .then(res => setSpecials(res.data[0]))
  }, [])

  return (
    <>
      <div>
        <h1>{specials.businessName} {`(${specials.businessType})`}</h1>
        <p>{specials.businessAddress}</p>
        {/* Will not let me add regex to convert business address to url accepted format. Still works though */}
        <a href= {`https://www.google.com/maps/search/?api=1&query=${specials.businessAddress}`} target= "_blank">Google Maps</a>
        <br />
        <p>_______________________________________</p>
      </div>
      <TodaysSpecials specials= {specials} />
      <br />
      <p>_______________________________________</p>
      <FullPageDailySpecials specials= {specials} />
      <br />
      <p>_________________________________________</p>
      <FullPageWeeklySpecials specials= {specials} />
    </>
  )
}

export default InfoPage;