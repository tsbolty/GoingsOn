import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateHappyHour from './CreateHappyHour';

const ViewHappyHour = ()=>{
    const [array, setArray] = useState([])

    const getHappyHourSpecials = ()=>{
        axios.get('/api/happyhour/get')
            .then(res => setArray(res.data))
    }

    useEffect(()=>{
        getHappyHourSpecials()
    }, [])

    return(
        <>
        {array.map(special=>(
            <>
                <h3>{special.foodSpecial1}</h3>
                <h3>{special.drinkSpecial1}</h3>
            </>
        ))}
        <CreateHappyHour getHappyHourSpecials= {getHappyHourSpecials}/>
        </>
    )
}

export default ViewHappyHour