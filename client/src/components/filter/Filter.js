import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import FilterByBusiness from './FilterByBusiness';
import FilterByName from './FilterByName';

const Filter = ({ filterType, handleFilterTypeClick, filterBusinessType, filterBusinessByName })=>{

  return(
    <>
    <Dropdown style={{display: "inline-block", float: "left"}}>
      <Dropdown.Toggle variant= "success">Filter Type</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item name= "businessName" onClick= {handleFilterTypeClick}>Business Name</Dropdown.Item>
        <Dropdown.Item name= "businessType" onClick= {handleFilterTypeClick}>Business Type</Dropdown.Item>
        <Dropdown.Item name= "keyword" onClick= {handleFilterTypeClick}>Keyword</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {filterType == "businessType" ?
    <FilterByBusiness filterBusinessType= {filterBusinessType} />
    :
    filterType == "businessName" ?
    <FilterByName filterBusinessByName= {filterBusinessByName} />
    :
    null
    }
    
    </>
  )
}

export default Filter;