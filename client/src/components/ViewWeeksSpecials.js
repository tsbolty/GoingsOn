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
            .then(res=> getWeeksDaySpecials())
    }

    return(
        <div className= "card">
            {weeksSpecialsData && weeksSpecialsData.map(special=>(
            <>
                <h2>{special.day}</h2>
                <h3>{special.foodSpecialHeading}</h3>
                <p>{special.foodSpecialDescription}</p>
                <h3>{special.drinkSpecialHeading}</h3>
                <p>{special.drinkSpecialDescription}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </>
        ))}
        <button onClick= {()=> getWeeksSpecials()}>Get All Days Specials</button>
        </div>
    )
}

export default ViewWeeksSpecials;