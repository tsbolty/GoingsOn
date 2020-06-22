import React, { useState, useRef } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const [iState, setIState] = useState(1)
    const [foodSpecial, setFoodSpecial] = useState({})
    const [drinkSpecial, setDrinkSpecial] = useState({})

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
            foodSpecial1: foodSpecial,
            drinkSpecial1: drinkSpecial
        })
    }

    // const addFoodSpecialInput = (e)=>{
    //     e.preventDefault()
    //     setIState(iState + 1)
    //     return(
    //         <FoodSpecialInput iState= {iState}/>
    //     )
    // }

    const handleFoodInputChange = (event) => {
        const value = event.target.value;
        return setFoodSpecial(value);
    }

    const handleDrinkInputChange = (event) => {
        const value = event.target.value;
        return setDrinkSpecial(value);
    }

    return(
        <>
            <input name= "foodSpecial1" onChange= {handleFoodInputChange} placeholder= "Food special (optional)"></input>
            {/* <button onClick= {()=> addFoodSpecialInput}>Add another food special</button> */}
            {/* <FoodSpecialInput iState= {iState} setIState= {setIState} /> */}
            <br />
            <input name= "drinkSpecial1" onChange= {handleDrinkInputChange} placeholder= "Drink special (optional)"></input>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
        </>
    )
}

export default CreateHappyHour;