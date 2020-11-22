import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import FilterBusinesses from './FilterBusinesses';


const Filter = ({businessInfo, id, setFilterState})=>{
  const [filterType, setFilterType] = useState("")
  const [businessTypeFilter, setBusinessTypeFilter] = useState("")

  const typeFilterClick = (e)=>{
    setBusinessTypeFilter(e.target.name)
    // if(businessTypeFilter === "all"){
    //   setBusinessTypeFilter("")
    // }
  }

  const handleFilterSubmit = ()=>{
    if(businessTypeFilter){
      setFilterState()
      const filteredBusinessInfo = businessInfo.filter(item => item.businessType === businessTypeFilter)
      console.log(filteredBusinessInfo)
      return(
        <>
          <FilterBusinesses typeFilterClick= {typeFilterClick} handleFilterSubmit= {handleFilterSubmit}/>
          {filteredBusinessInfo && filteredBusinessInfo.map((item, i) => (
            <div className="card headline-card" key= {item._id}>
              <h4>{`${item.businessName} (${item.businessType})`}</h4>
              <p>{item.businessAddress}</p>
              <a href= {`https://www.google.com/maps/search/?api=1&query=${item.businessAddress.replace(/ /gi, "+").toLowerCase()}`} target= "_blank">Google Maps</a>
              <Link to= {{
                pathname: `/infopage/${item._id}`,
                state: {businessInfo: filteredBusinessInfo}
              }}
              id= {id}>See All the Deals</Link>
            </div>
          ))}
        </>
      )
    }
  }

  return(
    <>
    <Dropdown>
      <Dropdown.Toggle variant= "success">Filter Type</Dropdown.Toggle>
      <Dropdown.menu>
        <Dropdown.Item name= "restaurantName" >Restaurant Name</Dropdown.Item>
        <Dropdown.Item name= "businessType" >Business Type</Dropdown.Item>
        <Dropdown.Item name= "keyword" >Keyword</Dropdown.Item>
      </Dropdown.menu>
    </Dropdown>
    <FilterBusinesses typeFilterClick= {typeFilterClick} />
    </>
  )
}

export default Filter;