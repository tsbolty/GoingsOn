import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewMondaySpecials from './ViewMondaySpecials';
import LocationCard from './LocationCard'

const CreateMondaySpecials = ()=>{
    const [mondaySpecials, setMondaySpecials] = useState([])

    const postMondaySpecials = ()=>{
        axios.post('/api/dailySpecials/post/monday', mondaySpecials)
        .then(getMondaySpecials)
    }

    const getMondaySpecials = ()=>{
        axios.get('/api/dailySpecials/get/monday')
        .then(res => setMondaySpecials(res.data))
    }
    
    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setMondaySpecials({...mondaySpecials, [nam]: val})
    }

    useEffect(()=>{
        getMondaySpecials()
    }, [])

    return(
        <div>
                Monday:
                <br />
                <input type= "text" 
                name= "mondayFoodSpecialHeading" 
                value= {mondaySpecials.mondayFoodSpecialHeading} 
                onChange= {handleInputChange} 
                placeholder= "Monday Food Special Title" />
                <input type= "text" 
                name= "mondayFoodSpecialDescription" 
                value= {mondaySpecials.mondayFoodSpecialDescription} 
                onChange= {handleInputChange} 
                placeholder= "Monday Food Special Description" />
                <br />
                <input type= "text" 
                name= "mondayDrinkSpecialHeading" 
                value= {mondaySpecials.mondayDrinkSpecialHeading} 
                onChange= {handleInputChange} 
                placeholder= "Monday Drink Special Title"></input>
                <input type= "text" 
                name= "mondayDrinkSpecialDescription" 
                value= {mondaySpecials.mondayDrinkSpecialDescription} 
                onChange= {handleInputChange} 
                placeholder= "Monday Drink Special Description"></input>
                <button onClick= {()=> postMondaySpecials()}>Submit</button>
                <LocationCard mondaySpecials= {mondaySpecials}/>
        </div>
    )
}

export default CreateMondaySpecials