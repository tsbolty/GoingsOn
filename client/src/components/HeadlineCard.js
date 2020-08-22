import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeadlineCard = ()=>{
    const [businessInfo, setBusinessInfo] = useState([])
    // const [showDaySpecials, setShowDaySpecials] = useState(false)

    useEffect(()=>{
        axios.get('/api/allBusinessInfo/get')
            .then(res => setBusinessInfo(res.data))
    }, [])

    // const handleShowDaySpecialsClick = ()=>{
    //     if(!showDaySpecials){
    //         setShowDaySpecials(true)
    //     }
    //     else{
    //         setShowDaySpecials(false)
    //     }
    // }

    return(
        <>
        {businessInfo && businessInfo.map((item, i) =>(
            <div className= "card headline-card">
                <h4>{`${item.businessName} (${item.businessType})`}</h4>
                <p>{item.businessAddress}</p>
                <br />
                <p>__________________________</p>
                    <div>
                    <h4>Single Day Specials:</h4>
                    {businessInfo[i].daySpecials && businessInfo[i].daySpecials.map(special =>(
                        <>
                        <h5>{special.day}</h5>
                        <h6>{special.foodSpecialHeading}</h6>
                        <p>{special.foodSpecialDescription}</p>
                        <h6>{special.drinkSpecialHeading}</h6>
                        <p>{special.drinkSpecialDescription}</p>
                        </>
                    ))}
                    </div>
            </div>
    ))}
        </>
    )
}

export default HeadlineCard;