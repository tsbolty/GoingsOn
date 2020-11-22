import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import FilterBusinesses from './FilterBusinesses';


const FilterType = ({ filterBusinessType })=>{
  const [typeOfFilter, setTypeOfFilter] = useState("")
  
  useEffect(()=>{
    filterBusinessType(typeOfFilter)
  }, [typeOfFilter])

  return(
    <>
    <Dropdown>
      <Dropdown.Toggle variant= "success">Filter Type</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item name= "restaurantName" onclick= {()=> setTypeOfFilter("restaurantName")}>Restaurant Name</Dropdown.Item>
        <Dropdown.Item name= "businessType" onclick= {()=> setTypeOfFilter("buinessType")}>Business Type</Dropdown.Item>
        <Dropdown.Item name= "keyword" onclick= {()=> setTypeOfFilter("keyword")}>Keyword</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {typeOfFilter == "businessType" &&
    <FilterBusinesses filterBusinessType= {filterBusinessType} />
    }
    </>
  )
}

export default FilterType;