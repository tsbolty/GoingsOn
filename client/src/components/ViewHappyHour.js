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
        <div className= "card">
        {array.map(special=>(
            <>
                <h3 className= "food-special-heading">{special.foodSpecial1Heading}</h3>
                <p className= "food-special-description">{special.foodSpecial1Description}</p>
                <h3 className= "drink-special-heading">{special.drinkSpecial1Heading}</h3>
                <p className= "drink-special-description">{special.drinkSpecial1Description}</p>
                <button className= "delete-food-special-button" onClick = {()=> handleDelete(special._id)}>Delete</button>
                <br />
            </>
        ))}
        </div>
        </>
    )
}

export default ViewHappyHour