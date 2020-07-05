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
                <h3>{special.foodSpecial1}</h3>
                <h3>{special.drinkSpecial1}</h3>
                <button onClick = {()=> handleDelete(special._id)}>Delete</button>
            </>
        ))}
        </>
    )
}

export default ViewHappyHour