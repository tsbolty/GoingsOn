import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';


const FilterBusinesses = ({ typeFilterClick, handleFilterSubmit })=>{

  return(
    <>
      <Dropdown>
        <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item name= "restaurant" onClick= {typeFilterClick}>Restaurants</Dropdown.Item>
          <Dropdown.Item name= "bar" onClick= {typeFilterClick}>Bar</Dropdown.Item>
          <Dropdown.Item name= "both" onClick= {typeFilterClick}>Both</Dropdown.Item>
          <Dropdown.Item name= "" onClick= {typeFilterClick}>All</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button onClick= {handleFilterSubmit}>Submit Filter</button>
    </>
  )
}

export default FilterBusinesses;