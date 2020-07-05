import React, { useState } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const [iState, setIState] = useState(1)
    const [foodSpecialHeading, setFoodSpecialHeading] = useState([])
    const [foodSpecialDescription, setFoodSpecialDescription] = useState({})
    const [drinkSpecialHeading, setDrinkSpecialHeading] = useState({})
    const [drinkSpecialDescription, setDrinkSpecialDescription] = useState({})
    const specialInputEl = document.querySelectorAll("specialInput")

    // Add buttons to create input elements. Include the ability to grab value of input and post it to database with the rest of the info
    // figure out how to scale additional food and drink specials and their key value pairs for database.

    const handleSpecialSubmit= ()=>{

        axios.post("/api/happyhour/add", {
            foodSpecial1Heading: foodSpecialHeading,
            foodSpecial1Description: foodSpecialDescription,
            drinkSpecial1Heading: drinkSpecialHeading,
            drinkSpecial1Description: drinkSpecialDescription
        }).then(setFoodSpecialHeading(""), setFoodSpecialDescription(""), setDrinkSpecialHeading(""), setDrinkSpecialDescription(""))
        // .then redirect to another page. Currently does not reset text fields
    }

    

    const handleFoodHeadingInputChange = (event) => {
        // const name = event.target.name
        const value = event.target.value;
        return setFoodSpecialHeading(value)
    }

    const handleFoodDescriptionInputChange = (event) => {
        const value = event.target.value;
        return setFoodSpecialDescription(value)
    }

    const handleDrinkHeadingInputChange = (event) => {
        const value = event.target.value;
        return setDrinkSpecialHeading(value)
    }
    
    const handleDrinkDescriptionInputChange = (event) => {
        const value = event.target.value;
        return setDrinkSpecialDescription(value)
    }

    const addFoodSpecialInput = ()=>{
        return React.createElement('h1', {}, "Hello")
        // React.createElement('input', {name: 'foodSpecialHeading', className: 'foodSpecialInput', placeholder: 'Food special title'}, 'an input')
        // return document.querySelectorAll("foodSpecials").appendChild(<FoodSpecialInput handleFoodHeadingInputChange= {handleFoodHeadingInputChange()} handleFoodDescriptionInputChange= {handleFoodDescriptionInputChange()}/>)
    }

    return(
        <>
        <ul className= "foodSpecials">
            <li>
                <input name= "foodSpecial1Heading" className= "foodSpecialInput" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
                <input name= "foodSpecial1Description" className= "foodSpecialInput" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>
            </li>
        </ul>
            <button onClick= {()=> addFoodSpecialInput()}>Add another food special</button>
            {/* <FoodSpecialInput iState= {iState} setIState= {setIState} /> */}
            <br />
            <input name= "drinkSpecial1" className= "drinkSpecialInput" onChange= {handleDrinkHeadingInputChange} placeholder= "Drink special Title"></input>
            <input name = "drinkSpecial1Description" className= "drinkSpecialInput" onChange= {handleDrinkDescriptionInputChange} placeholder= "Drink special description"></input>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
        </>
    )
}

export default CreateHappyHour;