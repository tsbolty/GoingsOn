import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeadlineCard = ()=>{
    const [businessInfo, setBusinessInfo] = useState([])
    // const [showDaySpecials, setShowDaySpecials] = useState(false)

    useEffect(()=>{
        axios.get('/api/allBusinessInfo/get')
            .then(res => setBusinessInfo(res.data))
    }, [])

    const tableStyle = {
        paddingLeft: "20px",
        paddingRight: "20px"
    }

    // const handleShowDaySpecialsClick = ()=>{

    // }

    return(
        <>
        {businessInfo && businessInfo.map((item, i) =>(
            <div className= "card headline-card">
                <h4>{`${item.businessName} (${item.businessType})`}</h4>
                <p>{item.businessAddress}</p>
                <p>__________________________</p>
                    <div>
                    <h4>Single Day Specials:</h4>
                    {businessInfo[i].daySpecials && businessInfo[i].daySpecials.map(special =>(
                        <>
                        <h5><strong>{special.day}</strong></h5>
                        <table >
                            <tr>
                                <th style= {tableStyle}>{special.foodSpecialHeading}</th>
                                <th style= {tableStyle}>{special.drinkSpecialHeading}</th>
                            </tr>
                            <tr>
                                <td style= {tableStyle}>{special.foodSpecialDescription}</td>
                                <td style= {tableStyle}>{special.drinkSpecialDescription}</td>
                            </tr>
                        </table>
                        </>
                    ))}
                    </div>
            </div>
    ))}
        </>
    )
}

export default HeadlineCard;