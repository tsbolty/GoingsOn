import React from 'react';

const FilterByKeyword = ({ filterByKeyword })=>{

  const handleInputChange = (e) =>{
    const val = e.target.value
    filterByKeyword(val)
  }
  return(
    <input
    style={{width: '50%', borderRadius: 5}}
    placeholder= "Search by keyword"
    onChange= {handleInputChange}
    />
  )
}

export default FilterByKeyword;