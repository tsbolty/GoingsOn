import React from 'react';

const FilterByName= ({filterBusinessByName})=>{

  const handleInputChange = (e) =>{
    const val = e.target.value
    filterBusinessByName(val)
  }

  return(
    <input 
    placeholder= "Search by business name"
    onChange= {handleInputChange} 
    />
  )
}

export default FilterByName