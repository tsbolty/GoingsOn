import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "../react-auth0-spa";
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const BusinessInfo = (props)=>{
    const { user } = useAuth0();
    const [businessInfo, setBusinessInfo] = useState({})

    const showBusinessInfo = ()=>{
        axios.get(`/api/businessInfo/get/${user.email}`)
            .then(res => setBusinessInfo(res.data[0]))
    }

    return(
        <>
        {user &&
        <>
            <button onClick= {()=> showBusinessInfo()}>Show Business Info</button>
            <h2>{businessInfo.businessName} {`(${businessInfo.businessType})`}</h2>
            <p>{businessInfo.businessAddress}</p>
            {/* <br />
            <p>________________________________</p>
            <ViewEveryDaySpecials /> */}
            <br />
            <p>_________________________________</p>
            <ViewWeeklySpecials />
            
        </>
        }
        </>
    )
}

export default BusinessInfo;