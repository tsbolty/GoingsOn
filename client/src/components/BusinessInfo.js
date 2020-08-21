import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const BusinessInfo = ({ user })=>{
    const [businessInfo, setBusinessInfo] = useState({})

    useEffect(()=>{
        axios.get(`/api/businessInfo/get/${user.email}`)
            .then(res => setBusinessInfo(res.data[0]))
    }, [user])

    return(
        <>
        {user &&
        <>
            <h2>{businessInfo.businessName} {`(${businessInfo.businessType})`}</h2>
            <p>{businessInfo.businessAddress}</p>
            <br />
            <p>________________________________</p>
            <ViewEveryDaySpecials user= {user}/>
            <br />
            <p>_________________________________</p>
            <ViewWeeklySpecials user= {user}/>
            
        </>
        }
        </>
    )
}

export default BusinessInfo;