import React, { useState } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

// This file is used to try to dynamically create an input field with with unique name to be saved in state

const CreateHappyHour = () => {
  const [iState, setIState] = useState(1)
  const [data, setData] = useState([])
  const [newInput, setNewInput] = useState(false)

  const handleSpecialSubmit = () => {
    axios.post("/api/happyhour/add", data)
  }

  const handleInputChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setData({ ...data, [nam]: val })
  }

  const input = React.createElement("input", {
    type: "text",
    name: "foodSpecial2Heading",
    value: data.foodSpecial2Heading,
    className: "foodSpecialInput special-input",
    onChange: handleInputChange
  })

  const addFoodSpecialInput = () => {

    // setFoodSpecialInputs(...foodSpecialInputs, <FoodSpecialInput handleInputChange = {handleInputChange} data= {data} iState= {iState} />)
  }

  return (
    <div id="specials-input">
      <input type="text"
        name="foodSpecial1Heading"
        value={data.foodSpecial1Heading}
        className="foodSpecialInput special-input"
        onChange={handleInputChange}
        placeholder="Food special Title" />
      <input type="text"
        name="foodSpecial1Description"
        value={data.foodSpecial1Description}
        className="foodSpecialInput special-input"
        onChange={handleInputChange}
        placeholder="Food special description" />
      <button onClick={() => addFoodSpecialInput()}>Add another food special</button>
      <br />
      <input type="text"
        name="drinkSpecial1Heading"
        value={data.drinkSpecial1Heading}
        className="drinkSpecialInput special-input"
        onChange={handleInputChange}
        placeholder="Drink special Title" />
      <input type="text"
        name="drinkSpecial1Description"
        value={data.drinkSpecial1Description}
        className="drinkSpecialInput special-input"
        onChange={handleInputChange}
        placeholder="Drink special description" />
      <br />
      <button onClick={() => handleSpecialSubmit()}>submit specials</button>
      <br />
      <br />
    </div>
  )
}

export default CreateHappyHour;