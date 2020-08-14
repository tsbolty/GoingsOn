import React, { useState } from 'react';
import axios from 'axios';
import FoodSpecialInput from './FoodSpecialInput'

const CreateHappyHour = ()=>{
    const [iState, setIState] = useState(1)
    const [data, setData] = useState([])
    const [addInput, setAddInput] = useState(false)

    const handleSpecialSubmit= ()=>{
        axios.post("/api/happyhour/add", data)
    }

    const handleInputChange = (e)=>{
        let nam = e.target.name;
        let val = e.target.value;
        setData({...data, [nam]: val})
    }
    
    // const [foodSpecialInputs, setFoodSpecialInputs] = useState([
    // <>
    //     <input type= "text" 
    //     name= "foodSpecial1Heading"
    //     value= {data.foodSpecial1Heading}
    //     className= "foodSpecialInput special-input" 
    //     onChange= {handleInputChange}
    //     placeholder= "Food special Title" />
    //     <input type= "text"
    //     name= "foodSpecial1Description" 
    //     value= {data.foodSpecial1Description}
    //     className= "foodSpecialInput special-input" 
    //     onChange= {handleInputChange} 
    //     placeholder= "Food special description" />
    // </>])
    
    const input = React.createElement("input", {
            type: "text" ,
            name: "foodSpecial2Heading",
            value: data.foodSpecial2Heading,
            className: "foodSpecialInput special-input",
            onChange: handleInputChange
        })

    const addFoodSpecialInput = ()=>{
        // setFoodSpecialInputs(...foodSpecialInputs, <FoodSpecialInput handleInputChange = {handleInputChange} data= {data} iState= {iState} />)
    }

    return(
        <>
        <ul>
            <li id= "food-special-inputs">
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
            <button onClick= {()=> addFoodSpecialInput()}>Add another food special</button>
            <br />
        </ul>    
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