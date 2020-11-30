import React from 'react';
import { Dropdown } from 'react-bootstrap';


const FilterByBusinessType = ({ filterBusinessType })=>{

  return(
    <>
      <Dropdown style= {{display: "inline-block", float: "left"}}>
        <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item name= "restaurant" onClick= {()=> filterBusinessType("restaurant")}>Restaurants</Dropdown.Item>
          <Dropdown.Item name= "bar" onClick= {()=> filterBusinessType("bar")}>Bar</Dropdown.Item>
          <Dropdown.Item name= "both" onClick= {()=> filterBusinessType("both")}>Both</Dropdown.Item>
          <Dropdown.Item name= "" onClick= {()=> filterBusinessType("")}>All</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <button onClick= {handleFil+terSubmit}>Submit Filter</button> */}
    </>
  )
}

export default FilterByBusinessType;