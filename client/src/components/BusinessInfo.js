import React from 'react';
import ViewEveryDaySpecials from './ViewEveryDaySpecials';
import ViewWeeklySpecials from './ViewWeeklySpecials';

const BusinessInfo = (props)=>{
    return(
        <>
            <h2>{props.businessName} {props.businessType.length > 0 && `(${props.businessType})`}</h2>
            <p>{props.businessAddress}</p>
            <ViewEveryDaySpecials />
            <br />
            <p>______________________________</p>
            <ViewWeeklySpecials />
        </>
    )
}

export default BusinessInfo;