import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import FilterBusinesses from './FilterBusinesses';

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [typeFilter, setTypeFilter] = useState("")
  let {id} = useParams();

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const typeFilterClick = (e)=>{
    setTypeFilter(e.target.name)
    if(typeFilter === "all"){
      setTypeFilter("")
    }
  }

  const handleFilterSubmit = ()=>{
    axios.get(`/api/allBusinessInfo/get/type/${typeFilter}`)
      .then(res => setBusinessInfo(res.data))
  }

  return (
    <>
      <FilterBusinesses typeFilterClick= {typeFilterClick} handleFilterSubmit= {handleFilterSubmit} />
      {businessInfo && businessInfo.map((item, i) => (
        <div className="card headline-card" key= {item._id}>
          <h4>{`${item.businessName} (${item.businessType})`}</h4>
          <p>{item.businessAddress}</p>
          <a href= {`https://www.google.com/maps/search/?api=1&query=${item.businessAddress.replace(/ /gi, "+").toLowerCase()}`} target= "_blank">Google Maps</a>
          <Link to= {{
            pathname: `/infopage/${item._id}`,
            state: {businessInfo: businessInfo}
          }}
          id= {id}>See All the Deals</Link>
        </div>
      ))}
    </>
  )
}

export default HeadlineCard;