import React from 'react';

const BusinessInfo = (props)=>{
    return(
        <>
            <h2>{props.businessName}</h2>
            <p>{props.businessAddress}</p>
        </>
    )
}

export default BusinessInfo;