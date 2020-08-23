import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBusinesses from './FilterBusinesses';
import HeadlineDailySpecialsCard from './HeadlineDailySpecialsCard'
import HeadlineWeeklySpecialsCard from './HeadlineWeeklySpecialsCard'

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
          <a href= {`https://www.google.com/maps/search/?api=1&query=${item.businessAddress.replace(/ /gi, "+").replace(/,/gi, "%2C").toLowerCase()}`} target= "_blank">Google Maps</a>
          <p>__________________________</p>
          <HeadlineDailySpecialsCard businessInfo= {businessInfo} i= {i} />
          <br />
          <HeadlineWeeklySpecialsCard businessInfo= {businessInfo} i={i} />
        </div>
      ))}
    </>
  )
}

export default HeadlineCard;