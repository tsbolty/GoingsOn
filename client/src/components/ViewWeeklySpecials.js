import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewWeeklySpecials = ({ user })=>{
    const [weeklySpecials, setWeeklySpecials] = useState({})

    useEffect(()=>{
        axios.get(`/api/weeklySpecials/get/${user.email}`)
            .then(res => setWeeklySpecials(res.data[0]))
    }, [user])

    return(
        <>
        <div>
        <h3>Monday</h3>
            <h4>{weeklySpecials.mondayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.mondayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.mondayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.mondayDrinkSpecialDescription}</p>
            <br />
            <h3>Tuesday</h3>
            <h4>{weeklySpecials.tuesdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.tuesdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.tuesdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.tuesdayDrinkSpecialDescription}</p>
            <br />
            <h3>Wednesday</h3>
            <h4>{weeklySpecials.wednesdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.wednesdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.wednesdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.wednesdayDrinkSpecialDescription}</p>
            <br />
            <h3>Thursday</h3>
            <h4>{weeklySpecials.thursdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.thursdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.thursdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.thursdayDrinkSpecialDescription}</p>
            <br />
            <h3>Friday</h3>
            <h4>{weeklySpecials.fridayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.fridayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.fridayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.fridayDrinkSpecialDescription}</p>
            <br />
            <h3>Saturday</h3>
            <h4>{weeklySpecials.saturdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.saturdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.saturdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.saturdayDrinkSpecialDescription}</p>
            <br />
            <h3>Sunday</h3>
            <h4>{weeklySpecials.sundayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.sundayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.sundayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.sundayDrinkSpecialDescription}</p>
        </div>
        </>
    )
}

export default ViewWeeklySpecials;