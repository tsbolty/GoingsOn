import React, { useState } from 'react';

const MondayFoodSpecials = ()=>{
    const [state, setState] = useState({})
    
    
    const gatherData = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setState({...state, [nam]: val})
    }

    return(
        <form>
            <label>
                Monday:
                <br />
                <input type= "text" name= "mondayFoodSpecialHeader" value= {state.mondayFoodSpecialHeader} onChange= {gatherData} placeholder= "Monday Food Special Title"></input>
                <input type= "text" name= "mondayFoodSpecialDescription" value= {state.mondayFoodSpecialDescription} onChange= {gatherData} placeholder= "Monday Food Special Description"></input>
                <button>Submit</button>
            </label>
        </form>
    )
}

export default MondayFoodSpecials