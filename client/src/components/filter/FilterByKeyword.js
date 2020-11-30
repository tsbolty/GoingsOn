import React from 'react';

const FilterByKeyword = ({ filterByKeyword })=>{

  const handleInputChange = (e) =>{
    const val = e.target.value
    filterByKeyword(val)
  }
  return(
    <input
    placeholder= "Search by keyword"
    onChange= {handleInputChange}
    />
  )
}

export default FilterByKeyword;