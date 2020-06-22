import React from 'react';

const FoodSpecialInput = ( { iState })=>{

    const createInput = ()=>{
        const input = document.createElement("input")
        const classNameAtt = document.createAttribute("className")
        const refAtt = document.createAttribute("ref")
        return input.setAttribute.setAttribute(refAtt(iState))
    }
    return(
        <>
            {createInput}
        </>
    )
}

export default FoodSpecialInput;