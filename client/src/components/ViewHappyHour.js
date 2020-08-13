import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateHappyHour from './CreateHappyHour';

const ViewHappyHour = ()=>{
    const [array, setArray] = useState([])

    const getHappyHourSpecials = ()=>{
        axios.get('/api/happyhour/get')
            .then(res => setArray(res.data))
    }

    const handleDelete = (id)=>{
        axios.delete('/api/happyhour/delete' + id)
            .then(res=> getHappyHourSpecials())
    }

    useEffect(()=>{
        getHappyHourSpecials()
    }, [])

    return(
        <>
        <CreateHappyHour getHappyHourSpecials= {getHappyHourSpecials}/>
        {array.map(special=>(
            <>
                <h3 className= "food-special-heading">{special.foodSpecialHeading}</h3>
                <p className= "food-special-description">{special.foodSpecialDescription}</p>
                <h3 className= "drink-special-heading">{special.drinkSpecialHeading}</h3>
                <p className= "drink-special-description">{special.drinkSpecialDescription}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </>
        ))}
        </>
    )
}

export default ViewHappyHour