import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEveryDaySpecials = ({ user })=>{
    const [everyDaySpecialsData, setEveryDaySpecialsData] = useState([])

    useEffect(()=>{
        axios.get(`/api/dailySpecials/get/${user.email}`)
        .then(res => setEveryDaySpecialsData(res.data))
    }, [user])

    const getEveryDaySpecials = ()=>{
        axios.get(`/api/dailySpecials/get/${user.email}`)
            .then(res => setEveryDaySpecialsData(res.data))
    }

    const handleDelete = (id)=>{
        axios.delete('/api/dailySpecials/delete/' + id)
            .then(res=> getEveryDaySpecials())
    }

    return(
        <div className= "card">
            {everyDaySpecialsData && everyDaySpecialsData.map(special=>(
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
        </div>
    )
}

export default ViewEveryDaySpecials;