import React, { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import moment from 'moment';
import axios from 'axios';
import HeadlineDailySpecialsCard from '../homePage/HeadlineDailySpecialsCard';
import HeadlineWeeklySpecialsCard from '../homePage/HeadlineWeeklySpecialsCard';
import FullPageWeeklySpecials from './FullPageWeeklySpecials';
import FullPageDailySpecials from './FullPageDailySpecials';
import TodaysSpecials from './TodaysSpecials';

const InfoPage = () => {
  const [specials, setSpecials] = useState([])
  let {id} = useParams();
  const today = moment().format("dddd").toLowerCase();

  useEffect(function() {
    axios.get(`/api/allBusinessInfo/get/id/${id}`)
      .then(res => setSpecials(res.data[0]))
  }, [])

  //  WONT LET ME DO ANYTHING PAST WEEKLY SPECIALS. CANNOT EVEN CONSOLE LOG ANY CHILD OBJECT OF WEEKLY SPECIALS (_ID AND EMAIL INCLUDED)
  console.log(specials.weeklySpecials)

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