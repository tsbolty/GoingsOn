import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewDaySpecials = ({ day })=>{
    const [daySpecialsData, setDaySpecialsData] = useState([])

    const getDaySpecials = ()=>{
        axios.get('/api/dailySpecials/get', {params: {day}})
        .then(res => setDaySpecialsData(res.data))
    }

    const logDaySpecials = ()=>{
        console.log(daySpecialsData)
    }

    const handleDelete = (id)=>{
        axios.delete('/api/dailySpecials/delete/' + id)
            .then(res=> getDaySpecials())
    }

    return(
        <>
        <div className= "card">
            {daySpecialsData &&
        daySpecialsData.map(special=>(
            <>
                <h3>{special.foodSpecialHeading}</h3>
                <p>{special.foodSpecialDescription}</p>
                <h3>{special.drinkSpecialHeading}</h3>
                <p>{special.drinkSpecialDescription}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </>
        ))}
        <button onClick= {()=> getDaySpecials()}>Get</button>
        <button onClick= {()=> logDaySpecials()}>Log</button>
        </div>
        </>
    )
}

export default ViewDaySpecials;