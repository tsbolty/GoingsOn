import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,
  Route, Link } from "react-router-dom";
import axios from 'axios';
import FilterBusinesses from './FilterBusinesses';
import HeadlineDailySpecialsCard from './HeadlineDailySpecialsCard'
import HeadlineWeeklySpecialsCard from './HeadlineWeeklySpecialsCard'
import InfoPage from '../allInfo/InfoPage';

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [typeFilter, setTypeFilter] = useState("")

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const typeFilterClick = (e)=>{
    setTypeFilter(e.target.name)
  }

  const handleFilterSubmit = ()=>{
    axios.get(`/api/allBusinessInfo/get/type/${typeFilter}`)
      .then(res => setBusinessInfo(res.data))
  }

  return (
    <>
      <FilterBusinesses typeFilterClick= {typeFilterClick} handleFilterSubmit= {handleFilterSubmit}/>
      {businessInfo && businessInfo.map((item, i) => (
        <div className="card headline-card">
          <h4>{`${item.businessName} (${item.businessType})`}</h4>
          <p>{item.businessAddress}</p>
          <a href= {`https://www.google.com/maps/search/?api=1&query=${item.businessAddress.replace(/ /gi, "+").toLowerCase()}`} target= "_blank">Google Maps</a>
          <Link to= {`/infopage/${item._id}`} email= {item.email}>See All the Deals</Link>
          <Route path= {`/infopage/${item._id}`} component= {InfoPage} email= {item.email}/>
          {/* <p>__________________________</p>
          <HeadlineDailySpecialsCard businessInfo= {businessInfo} i= {i} />
          <br />
          <HeadlineWeeklySpecialsCard businessInfo= {businessInfo} i={i} /> */}
        </div>
      ))}
    </>
  )
}

export default HeadlineCard;