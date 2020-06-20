import React, { useState, useRef } from 'react';

const CreateHappyHour = ()=>{
    const [array, setArray] = useState([])
    const timeRef = useRef()
    const foodSpecial1Ref = useRef()
    const foodSpecial2Ref = useRef()
    const foodSpecial3Ref = useRef()
    const foodSpecial4Ref = useRef()
    const foodSpecial5Ref = useRef()
    const drinkSpecial1Ref = useRef()
    const drinkSpecial2Ref = useRef()
    const drinkSpecial3Ref = useRef()
    const drinkSpecial4Ref = useRef()
    const drinkSpecial5Ref = useRef()
    const drinkSpecial6Ref = useRef()
    const drinkSpecial7Ref = useRef()
    const drinkSpecial8Ref = useRef()
    const drinkSpecial9Ref = useRef()
    const drinkSpecial10Ref = useRef()

    return(
        <>
            <input ref={foodSpecial1Ref} placeholder= "Food special (optional)"></input>
            
            <br />
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
            <input ref={drinkSpecial1Ref} placeholder= "Drink special (optional)"></input>
        </>
    )
}

export default CreateHappyHour;