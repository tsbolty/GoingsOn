import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSingleDaySpecials = ({ day })=>{
    const [daySpecials, setDaySpecials] = useState([])

    useEffect(()=>{
        axios.get(`/api/dailySpecials/get/${day}`)
        .then(res => setDaySpecials(res.data))
    }, [])

    return(
        <>
        {daySpecials.map(data =>(
            <h2>{data.mondayFoodSpecialHeading}</h2>
        ))}
        </>
    )
}

export default ViewSingleDaySpecials;