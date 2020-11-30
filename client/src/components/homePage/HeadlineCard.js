import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../filter/Filter';
import HeadlineCardContent from './HeadlineCardContent';

// THIS COMPONENT WILL RENDER ALL BUSINESS INFO. FILTEREDINFO WILL UPDATE WITH CORRECT FILTERED RESULTS BY NAME, BUT NEED A WAY TO MAKE THIS COMPONENT RERENDER WHEN FILTERED INFO CHANGES.

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [filteredInfo, setFilteredInfo] = useState()
  const [filterType, setFilterType] = useState("")

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const handleFilterTypeClick = (e)=>{
    setFilterType(e.target.name)
  }

  const filterBusinessByName = (name)=>{
    if(!name){
      setFilteredInfo()
    } else {
      const filteredBusinesses = businessInfo.filter(business =>{
        return business.businessName.toLowerCase().includes(name.toLowerCase())
      })
      setFilteredInfo(filteredBusinesses)
    }
  }

  const filterBusinessType = (type) =>{
    if(type !== ""){
    const filteredBusinesses = businessInfo.filter(business =>{
      return business.businessType === type
    })
    setFilteredInfo(filteredBusinesses)
    } else {
      setFilteredInfo()
    }
  }

  const filterByKeyword = (keyword)=>{
    if(keyword !== ""){
      const filteredBusinesses = businessInfo.filter(business =>{
        // return Object.values(business.weeklySpecials[0]).includes(keyword.toLowerCase())
        const mondaySpecials = Object.values(business.weeklySpecials[0].monday)
        const tuesdaySpecials = Object.values(business.weeklySpecials[0].tuesday)
        const wednesdaySpecials = Object.values(business.weeklySpecials[0].wednesday)
        const thursdaySpecials = Object.values(business.weeklySpecials[0].thursday)
        const fridaySpecials = Object.values(business.weeklySpecials[0].friday)
        const saturdaySpecials = Object.values(business.weeklySpecials[0].saturday)
        const sundaySpecials = Object.values(business.weeklySpecials[0].sunday)
        return (mondaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || tuesdaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || wednesdaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || thursdaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || fridaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || saturdaySpecials.toString().toLowerCase().includes(keyword.toLowerCase())
        || sundaySpecials.toString().toLowerCase().includes(keyword.toLowerCase()))
        // return business.weeklySpecials[0].join(" ").toLowerCase().includes(keyword.toLowerCase())
      })
      setFilteredInfo(filteredBusinesses)
    }
    else{
      setFilteredInfo()
    }
  }

  return (
      <>
        <Filter filterType= {filterType} handleFilterTypeClick= {handleFilterTypeClick} filterBusinessType= {filterBusinessType} filterBusinessByName= {filterBusinessByName} filterByKeyword= {filterByKeyword}/> 
        <br/>
        <br/>
        {businessInfo && filteredInfo ? filteredInfo.map((item) => (
          <HeadlineCardContent businessName= {item.businessName} id= {item._id} businessType= {item.businessType} businessAddress= {item.businessAddress} daySpecials= {item.daySpecials} weeklySpecials= {item.weeklySpecials} />
        ))
        :
         businessInfo.map((item) => (
          <HeadlineCardContent businessName= {item.businessName} id= {item._id} businessType= {item.businessType} businessAddress= {item.businessAddress} daySpecials= {item.daySpecials} weeklySpecials= {item.weeklySpecials} />
        ))
      }
      </>
  )
}

export default HeadlineCard;