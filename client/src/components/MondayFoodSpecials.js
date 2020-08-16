import React, { useState } from 'react';
import axios from 'axios';

const MondayFoodSpecials = ()=>{
    const [mondaySpecials, setMondaySpecials] = useState({})

    const postMondaySpecials = ()=>{
        axios.post('/api/dailySpecials/post/monday', mondaySpecials)
    }
    
    const console = ()=>{
        axios.get('/api/dailySpecials/get/monday')
        .then(res => console.log(res.data))
    }
    
    const gatherData = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setMondaySpecials({...mondaySpecials, [nam]: val})
    }

    return(
        <div>
                Monday:
                <br />
                <input type= "text" 
                name= "mondayFoodSpecialHeading" 
                value= {mondaySpecials.mondayFoodSpecialHeading} 
                onChange= {gatherData} 
                placeholder= "Monday Food Special Title"></input>
                <input type= "text" 
                name= "mondayFoodSpecialDescription" 
                value= {mondaySpecials.mondayFoodSpecialDescription} 
                onChange= {gatherData} 
                placeholder= "Monday Food Special Description"></input>
                <br />
                <input type= "text" 
                name= "mondayDrinkSpecialHeading" 
                value= {mondaySpecials.mondayDrinkSpecialHeading} 
                onChange= {gatherData} 
                placeholder= "Monday Drink Special Title"></input>
                <input type= "text" 
                name= "mondayDrinkSpecialDescription" 
                value= {mondaySpecials.mondayDrinkSpecialDescription} 
                onChange= {gatherData} 
                placeholder= "Monday Drink Special Description"></input>
                <button onClick= {()=> postMondaySpecials()}>Submit</button>

        </div>
    )
}

export default MondayFoodSpecials