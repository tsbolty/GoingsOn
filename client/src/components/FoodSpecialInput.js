import React from 'react';

const FoodSpecialInput = ( { handleFoodHeadingInputChange ,handleFoodDescriptionInputChange })=>{

    // const createInput = ()=>{
    //     const input = document.createElement("input")
    //     const classNameAtt = document.createAttribute("className")
    //     const refAtt = document.createAttribute("ref")
    //     return input.setAttribute.setAttribute(refAtt(iState))
    // }
    
    return(
        <>
            <input name= "foodSpecial1Heading" className= "foodSpecialInput" onChange= {handleFoodHeadingInputChange} placeholder= "Food special Title"></input>
            <input name = "foodSpecial1Description" className= "foodSpecialInput" onChange= {handleFoodDescriptionInputChange} placeholder= "Food special description"></input>

        </>
    )
}

export default FoodSpecialInput;