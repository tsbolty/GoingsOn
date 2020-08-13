import React, { useState } from 'react';

const MondayFoodSpecials = ()=>{
    const [array, setArray] = useState({value: ""})
    
    
    const gatherData = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setArray({value: val})
    }
    
    const handleSubmit = ()=>{
        gatherData()
    }

    return(
        <form>
            <label>
                Monday:
                <br />
                <textarea type= "text" name= "mondayFoodSpecialHeader" onChange= {()=> gatherData} placeholder= "Monday Food Special Title"></textarea>
                {/* <input type= "text" name= "mondayFoodSpecialDescription" onChange= {()=> gatherData()} placeholder= "Monday Food Special Description"></input> */}
                <button onClick= {()=> handleSubmit()}>Submit</button>
            </label>
        </form>
    )
}

export default MondayFoodSpecials