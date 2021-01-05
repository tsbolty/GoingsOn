import React from 'react';

const FilterByName= ({filterBusinessByName})=>{

  const handleInputChange = (e) =>{
    const val = e.target.value
    filterBusinessByName(val)
  }

  return(
    <input 
    style={{width: '50%', borderRadius: 5}}
    placeholder= "Search by business name"
    onChange= {handleInputChange} 
    />
  )
}

export default FilterByName