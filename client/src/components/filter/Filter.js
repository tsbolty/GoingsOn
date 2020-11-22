import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import FilterBusinesses from './FilterBusinesses';


const Filter = ({ filterType, filterBusinessType, handleFilterTypeClick })=>{
  const [typeOfFilter, setTypeOfFilter] = useState("")
  
  // useEffect(()=>{
  //   filterBusinessType(typeOfFilter)
  // }, [typeOfFilter])

  return(
    <>
    <Dropdown>
      <Dropdown.Toggle variant= "success">Filter Type</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item name= "restaurantName" onClick= {handleFilterTypeClick}>Restaurant Name</Dropdown.Item>
        <Dropdown.Item name= "businessType" onClick= {handleFilterTypeClick}>Business Type</Dropdown.Item>
        <Dropdown.Item name= "keyword" onClick= {handleFilterTypeClick}>Keyword</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {filterType == "businessType" &&
    <FilterBusinesses filterBusinessType= {filterBusinessType} />
    }
    </>
  )
}

export default Filter;