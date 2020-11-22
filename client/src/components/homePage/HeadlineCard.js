import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../filter/Filter';
import HeadlineCardContent from './HeadlineCardContent';

// THIS COMPONENT WILL RENDER ALL BUSINESS INFO. FILTEREDINFO WILL UPDATE WITH CORRECT FILTERED RESULTS BY NAME, BUT NEED A WAY TO MAKE THIS COMPONENT RERENDER WHEN FILTERED INFO CHANGES.

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [filteredInfo, setFilteredInfo] = useState([])
  const [filterType, setFilterType] = useState("")
  const [showFiltered, setShowFiltered] = useState(false)

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const handleFilterTypeClick = (e)=>{
    setFilterType(e.target.name)
    if(filterType === "businessName"){
      filterBusinessType(filterType)
    } else if(filterType === "businessName"){
      filterBusinessByName()
    }
  }

  const filterBusinessByName = (name)=>{
    const filteredBusinesses = businessInfo.filter(business =>{
      return business.businessName.includes(name)
    })
    setFilteredInfo(filteredBusinesses)
  }

  const filterBusinessType = (type) =>{
    const filteredBusinesses = businessInfo.filter(business =>{
      return business.type == type
    })
    setFilteredInfo(filteredBusinesses)
  }

  return (
      <>
      <Filter filterType= {filterType} handleFilterTypeClick= {handleFilterTypeClick} filterBusinessType= {filterBusinessType} filterBusinessByName= {filterBusinessByName} /> 
        <br/>
        <br/>
        {!filteredInfo ? businessInfo && filteredInfo.map((item) => (
          <HeadlineCardContent businessName= {item.businessName} id= {item._id} businessType= {item.businessType} businessAddress= {item.businessAddress} daySpecials= {item.daySpecials} weeklySpecials= {item.weeklySpecials} />
        ))
        :
        businessInfo && businessInfo.map((item) => (
          <HeadlineCardContent businessName= {item.businessName} id= {item._id} businessType= {item.businessType} businessAddress= {item.businessAddress} daySpecials= {item.daySpecials} weeklySpecials= {item.weeklySpecials} />
        ))
      }
      </>
  )
}

export default HeadlineCard;