import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import FilterByBusinessType from './FilterByBusinessType';
import FilterByName from './FilterByName';
import FilterByKeyword from './FilterByKeyword';

const Filter = ({ filterType, handleFilterTypeClick, filterBusinessType, filterBusinessByName, filterByKeyword })=>{

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
    <FilterByBusinessType filterBusinessType= {filterBusinessType} />
    :
    filterType == "businessName" ?
    <FilterByName filterBusinessByName= {filterBusinessByName} />
    :
    filterType == "keyword" ?
    <FilterByKeyword filterByKeyword= {filterByKeyword} />
    :
    null
    }
    
    </>
  )
}

export default Filter;