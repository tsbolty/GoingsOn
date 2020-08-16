import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateHappyHour from './CreateHappyHour';

const ViewHappyHour = ({ mondaySpecials })=>{
    const [mondaySpecialsData, setMondaySpecialsData] = useState([])

    const getMondaySpecials = ()=>{
        axios.get('/api/dailySpecials/get/monday')
        .then(res => setMondaySpecialsData(res.data))
    }

    useEffect(()=>{
        getMondaySpecials()
    }, [])

    const handleDelete = (id)=>{
        axios.delete('/api/dailySpecials/delete/monday/' + id)
            .then(res=> getMondaySpecials())
    }

    return(
        <>
        <div className= "card">
        {mondaySpecialsData.map(special=>(
            <>
                <h3>{special.mondayFoodSpecialHeading}</h3>
                <p>{special.mondayFoodSpecialDescription}</p>
                <h3>{special.mondayDrinkSpecialHeading}</h3>
                <p>{special.mondayDrinkSpecialDescription}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </>
        ))}
        </div>
        </>
    )
}

export default ViewHappyHour