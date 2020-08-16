import React, { useState } from 'react';
import axios from 'axios';
import ViewMondaySpecials from './ViewMondaySpecials';

const CreateMondaySpecials = ()=>{
    const [mondaySpecials, setMondaySpecials] = useState([])

    const postMondaySpecials = ()=>{
        axios.post('/api/dailySpecials/post/monday', mondaySpecials)
    }

    const getMondaySpecials = ()=>{
        axios.get('/api/dailySpecials/get/monday')
        .then(res => setMondaySpecials(...mondaySpecials, res.data))
    }
    
    const handleChange = (e)=>{
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
                onChange= {handleChange} 
                placeholder= "Monday Food Special Title"></input>
                <input type= "text" 
                name= "mondayFoodSpecialDescription" 
                value= {mondaySpecials.mondayFoodSpecialDescription} 
                onChange= {handleChange} 
                placeholder= "Monday Food Special Description"></input>
                <br />
                <input type= "text" 
                name= "mondayDrinkSpecialHeading" 
                value= {mondaySpecials.mondayDrinkSpecialHeading} 
                onChange= {handleChange} 
                placeholder= "Monday Drink Special Title"></input>
                <input type= "text" 
                name= "mondayDrinkSpecialDescription" 
                value= {mondaySpecials.mondayDrinkSpecialDescription} 
                onChange= {handleChange} 
                placeholder= "Monday Drink Special Description"></input>
                <button onClick= {()=> postMondaySpecials()}>Submit</button>
                <ViewMondaySpecials />
        </div>
    )
}

export default CreateMondaySpecials