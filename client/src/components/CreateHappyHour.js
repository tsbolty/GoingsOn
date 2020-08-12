import React, { useState, reactDOM } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

// Look into react hook to create a template for each food and drink special. store gereric values for element in state, then use those values to create an element template. Store each of those objects in an array and loop through that array to display input fields on the page. store all objects in state. use index to establish individual classnames and id's

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const [iState, setIState] = useState(1)
    const [foodSpecialHeading, setFoodSpecialHeading] = useState({})
    const [foodSpecialDescription, setFoodSpecialDescription] = useState({})
    const [drinkSpecialHeading, setDrinkSpecialHeading] = useState({})
    const [drinkSpecialDescription, setDrinkSpecialDescription] = useState({})
    const [addInput, setAddInput] = useState(false)

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
        setAddInput(true)
    }

    // THE FOLLOWING COMMENT TAKES A NEW APPROACH TO STORING AND PASSING SPECIALS. HOPING TO SCALE UP
    // const handleSubmitSpecials = (e)=>{
    //     e.preventDefault()
    //     setArray()
    // }

    // const array = [
    // {
    //     foodSpecial1Heading: "food special heading",
    //     foodSpecial1Description: "food special description",
    //     drinkSpecial1Heading: "drink special heading",
    //     drinkSpecial1Description: "drink special description"
    // },
    // {
    //     foodSpecial2Heading: "food special heading",
    //     foodSpecial2Description: "food special description",
    //     drinkSpecial2Heading: "drink special heading",
    //     drinkSpecial2Description: "drink special description"
    // }
    // ]

    return(
        <>
        <ul className= "create-food-specials">
            <li>
                <input name= "foodSpecial1Heading" className= "foodSpecialInput special-input" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
                <input name= "foodSpecial1Description" className= "foodSpecialInput special-input" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>
            </li>
            {addInput
            ?
            <li>
                <input name= "foodSpecial2Heading" className= "foodSpecialInput special-input" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
                <input name= "foodSpecial2Description" className= "foodSpecialInput special-input" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>
            </li>
            :
            null
            }
        </ul>
            <button onClick= {()=> addFoodSpecialInput()}>Add another food special</button>
            <br />
        <ul className= "create-drink-specials">
            <li>
                <input name= "drinkSpecial1" className= "drinkSpecialInput special-input" onChange= {handleDrinkHeadingInputChange} placeholder= "Drink special Title"></input>
                <input name = "drinkSpecial1Description" className= "drinkSpecialInput special-input" onChange= {handleDrinkDescriptionInputChange} placeholder= "Drink special description"></input>
            </li>
        </ul>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
            <br />
            <br />
        </>
    )
}

export default CreateHappyHour;