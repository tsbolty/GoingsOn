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
                        {/* <h5><strong>{special.day}</strong></h5>
                        <div className= "row">
                            <div classname= "col">
                                <p><strong>{special.foodSpecialHeading}</strong></p>
                                <p >{special.foodSpecialDescription}</p>
                            </div>
                            <div className= "col">
                                <p><strong>{special.drinkSpecialHeading}</strong></p>
                                <p>{special.drinkSpecialDescription}</p>
                            </div>
                        </div> */}
                        </>
                    ))}
                    </div>
            </div>
    ))}
        </>
    )
}

export default HeadlineCard;