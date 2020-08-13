import React, { useState } from 'react';

const MondayFoodSpecials = ()=>{
    const [array, setArray] = useState([])
    
    
    const gatherData = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setArray({[nam]: val})
    }
    
    const handleSubmit = ()=>{
        console.log(array)
    }

    return(
        <form>
            <input type= "text" name= "mondayFoodSpecialHeader" onChange= {()=> gatherData} placeholder= "Monday Food Special Title"></input>
            {/* <input type= "text" name= "mondayFoodSpecialDescription" onChange= {()=> gatherData()} placeholder= "Monday Food Special Description"></input> */}
            <button onClick= {()=> handleSubmit()}>Submit</button>
        </form>
    )
}

export default MondayFoodSpecials