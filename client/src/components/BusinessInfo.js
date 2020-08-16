import React from 'react';

const BusinessInfo = (props)=>{
    return(
        <>
            <h2>{props.businessName} {props.businessType.length > 0 && `(${props.businessType})`}</h2>
            <p>{props.businessAddress}</p>
        </>
    )
}

export default BusinessInfo;