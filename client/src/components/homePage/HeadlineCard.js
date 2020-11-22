import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Filter from '../filter/Filter';
import HeadlineCardContent from './HeadlineCardContent';

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [filteredInfo, setFilteredInfo] = useState([])
  const [filterType, setFilterType] = useState("")
  let {id} = useParams();

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

  // const handleFilterSubmit = ()=>{
  //   if(businessTypeFilter){
  //     const filteredBusinessInfo = businessInfo.filter(item => item.businessType === businessTypeFilter)
  //     console.log(filteredBusinessInfo)
  //     return(
  //       <>
  //         {filteredBusinessInfo && filteredBusinessInfo.map((item, i) => (
  //           <div className="card headline-card" key= {item._id}>
  //             <h4>{`${item.businessName} (${item.businessType})`}</h4>
  //             <p>{item.businessAddress}</p>
  //             <a href= {`https://www.google.com/maps/search/?api=1&query=${item.businessAddress.replace(/ /gi, "+").toLowerCase()}`} target= "_blank">Google Maps</a>
  //             <Link to= {{
  //               pathname: `/infopage/${item._id}`,
  //               state: {businessInfo: businessInfo}
  //             }}
  //             id= {id}>See All the Deals</Link>
  //           </div>
  //         ))}
  //       </>
  //     )
  //   }
  // }

  return (
      <>
      <Filter filterType= {filterType} handleFilterTypeClick= {handleFilterTypeClick} filterBusinessType= {filterBusinessType} filterBusinessByName= {filterBusinessByName} /> 
        {/* <button onClick= {()=> setFiltered(!filtered)}>Filter</button> */}
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