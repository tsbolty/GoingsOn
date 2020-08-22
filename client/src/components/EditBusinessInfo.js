import React, { useState, useEffect} from 'react';
import CreateDaySpecials from './CreateDaySpecials';
import CreateProfile from './CreateProfile';
import CreateWeeklySpecials from './CreateWeeklySpecials';
import axios from 'axios';

const EditBusinessInfo = ({ user })=>{
    const [profileInfo, setProfileInfo] = useState([])
    const [daySpecialsInfo, setDaySpecialsInfo] = useState([])
    const [weeklySpecialsInfo, setWeeklySpecialsInfo] = useState([])

    const postAllBusinessInfo = ()=>{
        axios.post("/api/businessInfo/add", {
            email: user.email,
            businessName: profileInfo.businessName,
            businessAddress: profileInfo.businessAddress,
            businessType: profileInfo.businessType,
            day: daySpecialsInfo.day,
            foodSpecialHeading: daySpecialInfo.foodSpecialHeading,
            foodSpecialDescription: daySpecialInfo.foodSpecialDescription,
            drinkSpecialHeading: daySpecialInfo.drinkSpecialHeading,
            drinkSpecialDescription: daySpecialInfo.drinkSpecialDescription,
            mondayFoodSpecialHeading: weeklySpecialsInfo.mondayFoodSpecialHeading,
            mondayFoodSpecialDescription: weeklySpecialsInfo.mondayFoodSpecialDescription,
            mondayDrinkSpecialHeading: weeklySpecialsInfo.mondayDrinkSpecialHeading,
            mondayDrinkSpecialDescription: weeklySpecialsInfo.mondayDrinkSpecialDescription,
            tuesdayFoodSpecialHeading: weeklySpecialsInfo.tuesdayFoodSpecialHeading,
            tuesdayFoodSpecialDescription: weeklySpecialsInfo.tuesdayFoodSpecialDescription,
            tuesdayDrinkSpecialHeading: weeklySpecialsInfo.tuesdayDrinkSpecialHeading,
            tuesdayDrinkSpecialDescription: weeklySpecialsInfo.tuesdayDrinkSpecialDescription,
            wednesdayFoodSpecialHeading: weeklySpecialsInfo.wednesdayFoodSpecialHeading,
            wednesdayFoodSpecialDescription: weeklySpecialsInfo.wednesdayFoodSpecialDescription,
            wednesdayDrinkSpecialHeading: weeklySpecialsInfo.wednesdayDrinkSpecialHeading,
            wednesdayDrinkSpecialDescription: weeklySpecialsInfo.wednesdayDrinkSpecialDescription,
            thursdayFoodSpecialHeading: weeklySpecialsInfo.thursdayFoodSpecialHeading,
            thursdayFoodSpecialDescription: weeklySpecialsInfo.thursdayFoodSpecialDescription,
            thursdayDrinkSpecialHeading: weeklySpecialsInfo.thursdayDrinkSpecialHeading,
            thursdayDrinkSpecialDescription: weeklySpecialsInfo.thursdayDrinkSpecialDescription,
            fridayFoodSpecialHeading: weeklySpecialsInfo.fridayFoodSpecialHeading,
            fridayFoodSpecialDescription: weeklySpecialsInfo.fridayFoodSpecialDescription,
            fridayDrinkSpecialHeading: weeklySpecialsInfo.fridayDrinkSpecialHeading,
            fridayDrinkSpecialDescription: weeklySpecialsInfo.fridayDrinkSpecialDescription,
            saturdayFoodSpecialHeading: weeklySpecialsInfo.saturdayFoodSpecialHeading,
            saturdayFoodSpecialDescription: weeklySpecialsInfo.saturdayFoodSpecialDescription,
            saturdayDrinkSpecialHeading: weeklySpecialsInfo.saturdayDrinkSpecialHeading,
            saturdayDrinkSpecialDescription: weeklySpecialsInfo.saturdayDrinkSpecialDescription,
            sundayFoodSpecialHeading: weeklySpecialsInfo.sundayFoodSpecialHeading,
            sundayFoodSpecialDescription: weeklySpecialsInfo.sundayFoodSpecialDescription,
            sundayDrinkSpecialHeading: weeklySpecialsInfo.sundayDrinkSpecialHeading,
            sundayDrinkSpecialDescription: weeklySpecialsInfo.sundayDrinkSpecialDescription,
        })
    }

    // const handleInputChange = (e)=>{
    //     let nam = e.target.name
    //     let val = e.target.value
    //     setAllBusinessInfo({...allBusinessInfo, [nam]: val})
    // }

    // useEffect(()=>{
    //     setAllBusinessInfo(...profileInfo, ...daySpecialsInfo, ...weeklySpecialsInfo)
    // }, [profileInfo, daySpecialsInfo, weeklySpecialsInfo])

    return(
        <>
        {user &&
        <>
        <CreateProfile setProfileInfo= {setProfileInfo} user= {user}/>
        <CreateDaySpecials setDaySpecialsInfo= {setDaySpecialsInfo} user= {user}/>
        <CreateWeeklySpecials setWeeklySpecialsInfo= {setWeeklySpecialsInfo} user= {user}/>
        <br />
        <button onClick= {postAllBusinessInfo}>Submit All Business Info</button>
        </>
        }
        </>

    )
}

export default EditBusinessInfo;