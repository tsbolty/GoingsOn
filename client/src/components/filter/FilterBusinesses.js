import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';


const FilterBusinesses = ({ filterBusinessType })=>{

  return(
    <>
      <Dropdown>
        <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item name= "restaurant" onClick= {()=> filterBusinessType}>Restaurants</Dropdown.Item>
          <Dropdown.Item name= "bar" onClick= {()=> filterBusinessType}>Bar</Dropdown.Item>
          <Dropdown.Item name= "both" onClick= {()=> filterBusinessType}>Both</Dropdown.Item>
          <Dropdown.Item name= "" onClick= {()=> filterBusinessType}>All</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <button onClick= {handleFil+terSubmit}>Submit Filter</button> */}
    </>
  )
}

export default FilterBusinesses;