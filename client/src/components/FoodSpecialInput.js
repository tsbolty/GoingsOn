import React from 'react';

const FoodSpecialInput = ({ handleInputChange, data, iState }) => {

  // const createInput = ()=>{
  //     const input = document.createElement("input")
  //     const classNameAtt = document.createAttribute("className")
  //     const refAtt = document.createAttribute("ref")
  //     return input.setAttribute.setAttribute(refAtt(iState))
  // }

  return (
    <>
      <input type="text"
        name={`foodSpecialHeading`}
        value={data.foodSpecialHeading}
        className="foodSpecialInput"
        onChange={handleInputChange}
        placeholder="Food special Title"></input>
      <input type="text"
        name={`foodSpecialDescription`}
        value={data.drinkSpecialHeading}
        className="foodSpecialInput"
        onChange={handleInputChange}
        placeholder="Food special description"></input>
    </>
  )
}

export default FoodSpecialInput;