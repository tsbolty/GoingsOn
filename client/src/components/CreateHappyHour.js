import React, { useState } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const [iState, setIState] = useState(1)
    const [foodSpecialHeading, setFoodSpecialHeading] = useState({})
    const [foodSpecialDescription, setFoodSpecialDescription] = useState({})
    const [drinkSpecialHeading, setDrinkSpecialHeading] = useState({})
    const [drinkSpecialDescription, setDrinkSpecialDescription] = useState({})
    const specialInputEl = document.querySelectorAll("specialInput")

    // const foodSpecial1Ref = useRef()
    // const foodSpecial2Ref = useRef()
    // const foodSpecial3Ref = useRef()
    // const foodSpecial4Ref = useRef()
    // const foodSpecial5Ref = useRef()
    // const drinkSpecial1Ref = useRef()
    // const drinkSpecial2Ref = useRef()
    // const drinkSpecial3Ref = useRef()
    // const drinkSpecial4Ref = useRef()
    // const drinkSpecial5Ref = useRef()
    // const drinkSpecial6Ref = useRef()
    // const drinkSpecial7Ref = useRef()
    // const drinkSpecial8Ref = useRef()
    // const drinkSpecial9Ref = useRef()
    // const drinkSpecial10Ref = useRef()

    // Add buttons to create input elements. Include the ability to grab value of input and post it to database with the rest of the info

    const handleSpecialSubmit= ()=>{

        axios.post("/api/happyhour/add", {
            foodSpecial1Heading: foodSpecialHeading,
            foodSpecial1Description: foodSpecialDescription,
            drinkSpecial1Heading: drinkSpecialHeading,
            drinkSpecial1Description: drinkSpecialDescription
        }).then(setFoodSpecialHeading(""), setFoodSpecialDescription(""), setDrinkSpecialHeading(""), setDrinkSpecialDescription(""))
        // .then redirect to another page. Currently does not reset text fields
    }

    // const addFoodSpecialInput = (e)=>{
    //     e.preventDefault()
    //     setIState(iState + 1)
    //     return(
    //         <FoodSpecialInput iState= {iState}/>
    //     )
    // }

    const handleFoodHeadingInputChange = (event) => {
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

    return(
        <>
            <input name= "foodSpecial1Heading" className= "specialInput" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
            <input name = "foodSpecial1Description" className= "specialInput" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>
            {/* <button onClick= {()=> addFoodSpecialInput}>Add another food special</button> */}
            {/* <FoodSpecialInput iState= {iState} setIState= {setIState} /> */}
            <br />
            <input name= "drinkSpecial1" className= "specialInput" onChange= {handleDrinkHeadingInputChange} placeholder= "Drink special Title"></input>
            <input name = "drinkSpecial1Description" className= "specialInput" onChange= {handleDrinkDescriptionInputChange} placeholder= "Drink special description"></input>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
        </>
    )
}

export default CreateHappyHour;