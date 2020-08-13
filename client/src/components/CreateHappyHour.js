import React, { useState, reactDOM } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

// Look into react hook to create a template for each food and drink special. store gereric values for element in state, then use those values to create an element template. Store each of those objects in an array and loop through that array to display input fields on the page. store all objects in state. use index to establish individual classnames and id's

const CreateHappyHour = ({ getHappyHourSpecials })=>{
    const [iState, setIState] = useState(1)
    const [data, setData] = useState([])
    const [foodSpecialHeading, setFoodSpecialHeading] = useState({})
    const [foodSpecialDescription, setFoodSpecialDescription] = useState({})
    const [drinkSpecialHeading, setDrinkSpecialHeading] = useState({})
    const [drinkSpecialDescription, setDrinkSpecialDescription] = useState({})
    const [addInput, setAddInput] = useState(false)

    // Add buttons to create input elements. Include the ability to grab value of input and post it to database with the rest of the info
    // figure out how to scale additional food and drink specials and their key value pairs for database.

    const handleSpecialSubmit= ()=>{

        axios.post("/api/happyhour/add", data).then(console.log("success"))
        // ).then(setFoodSpecialHeading(""), setFoodSpecialDescription(""), setDrinkSpecialHeading(""), setDrinkSpecialDescription(""))
        // .then redirect to another page. Currently does not reset text fields
    }

    // const addFoodSpecialInput = ()=>{
    //     setAddInput(true)
    // }

    const handleInputChange = (e)=>{
        let nam = e.target.name;
        let val = e.target.value;
        setData({...data, [nam]: val})
    }

    

    return(
        <>
        <ul className= "create-food-specials">
            <li>
                <input type= "text" 
                name= "foodSpecial1Heading"
                value= {data.foodSpecial1Heading}
                className= "foodSpecialInput special-input" 
                onChange= {handleInputChange} 
                placeholder= "Food special Title" />
                <input type= "text"
                name= "foodSpecial1Description" 
                value= {data.foodSpecial1Description}
                className= "foodSpecialInput special-input" 
                onChange= {handleInputChange} 
                placeholder= "Food special description" />
            </li>
            {/* {addInput
            ?
            <li>
                <input name= "foodSpecial2Heading" className= "foodSpecialInput special-input" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
                <input name= "foodSpecial2Description" className= "foodSpecialInput special-input" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>
            </li>
            :
            null
            } */}
        </ul>
            {/* <button>Add another food special</button> */}
            <br />
        <ul className= "create-drink-specials">
            <li>
                <input type= "text"
                name= "drinkSpecial1Heading"
                value= {data.drinkSpecial1Heading}
                className= "drinkSpecialInput special-input"
                onChange= {handleInputChange}
                placeholder= "Drink special Title" />
                <input type= "text"
                name= "drinkSpecial1Description" 
                value= {data.drinkSpecial1Description}
                className= "drinkSpecialInput special-input" 
                onChange= {handleInputChange} 
                placeholder= "Drink special description" />
            </li>
        </ul>
            <br />
            <button onClick= {()=> handleSpecialSubmit()}>submit specials</button>
            {/* <br />
            <br /> */}
        </>
    )
}

export default CreateHappyHour;