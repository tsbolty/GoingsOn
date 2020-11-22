import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Filter from '../filter/Filter';

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])
  const [filterType, setFilterType] = useState("")
  let {id} = useParams();

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const handleFilterTypeClick = (e)=>{
    setFilterType(e.target.name)
  }

  const filterBusinessType = (businessName) =>{
    const filteredBusinesses = businessInfo.filter(business =>{
      return business.type == businessName
    })
    setBusinessInfo(filteredBusinesses)
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
      <Filter filterType= {filterType} filterBusinessType= {filterBusinessType} handleFilterTypeClick= {handleFilterTypeClick}/> 
        {/* <button onClick= {()=> setFiltered(!filtered)}>Filter</button> */}
        {businessInfo && businessInfo.map((item) => (
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