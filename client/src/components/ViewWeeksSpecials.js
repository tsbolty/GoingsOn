import React, { useState } from 'react';
import axios from 'axios';

const ViewWeeksSpecials = ()=>{
    const [weeksSpecialsData, setWeeksSpecialsData] = useState([])

    const getWeeksSpecials = ()=>{
        axios.get('/api/dailySpecials/get')
            .then(res => setWeeksSpecialsData(res.data))
    }

    const handleDelete = (id)=>{
        axios.delete('/api/dailySpecials/delete/' + id)
            .then(res=> getWeeksSpecials())
    }

    return(
        <div className= "card">
            {weeksSpecialsData && weeksSpecialsData.map(special=>(
            <div key= {special._id}>
                <h2 className= "weekly-special-day">{special.day}</h2>
                <h4>{special.foodSpecialHeading}</h4>
                <p>{special.foodSpecialDescription}</p>
                <h4>{special.drinkSpecialHeading}</h4>
                <p>{special.drinkSpecialDescription}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </div>
        ))}
        <button onClick= {()=> getWeeksSpecials()}>Get All Days Specials</button>
        </div>
    )
}

export default ViewWeeksSpecials;