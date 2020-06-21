import React, { useState, useRef } from 'react';
import axios from 'axios';

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const foodSpecial1Ref = useRef()
    // const foodSpecial2Ref = useRef()
    // const foodSpecial3Ref = useRef()
    // const foodSpecial4Ref = useRef()
    // const foodSpecial5Ref = useRef()
    const drinkSpecial1Ref = useRef()
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
            foodSpecial1: foodSpecial1Ref.current.value,
            drinkSpecial: drinkSpecial1Ref.current.value
        })
    }

    return(
        <>
            <input ref={foodSpecial1Ref} placeholder= "Food special (optional)"></input>
            <br />
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
        </>
    )
}

export default CreateHappyHour;