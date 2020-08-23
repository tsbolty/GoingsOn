import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeadlineCard = () => {
  const [businessInfo, setBusinessInfo] = useState([])

  useEffect(() => {
    axios.get('/api/allBusinessInfo/get')
      .then(res => setBusinessInfo(res.data))
  }, [])

  const tableStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  }

  return (
    <>
      {businessInfo && businessInfo.map((item, i) => (
        <div className="card headline-card">
          <h4>{`${item.businessName} (${item.businessType})`}</h4>
          <p>{item.businessAddress}</p>
          <p>__________________________</p>
          <div className="headline-daily-specials">
            <h4>Single Day Specials:</h4>
            {businessInfo[i].daySpecials && businessInfo[i].daySpecials.map(special => (
              <>
                <h5><strong>{special.day}</strong></h5>
                <table >
                  <tr>
                    <th style={tableStyle}>{special.foodSpecialHeading}</th>
                    <th style={tableStyle}>{special.drinkSpecialHeading}</th>
                  </tr>
                  <tr>
                    <td style={tableStyle}>{special.foodSpecialDescription}</td>
                    <td style={tableStyle}>{special.drinkSpecialDescription}</td>
                  </tr>
                </table>
              </>
            ))}
          </div>
          <br />
          <div className="headline-weekly-specials">
            <h4>Weekly Specials</h4>
            {businessInfo[i].weeklySpecials && businessInfo[i].weeklySpecials.map(special => (
              <>
                <table>
                  <tr>
                    <th style={tableStyle} className="weekly-specials-table-header">Monday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Tuesday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Wednesday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Thursday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Friday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Saturday</th>
                    <th style={tableStyle} className="weekly-specials-table-header">Sunday</th>
                  </tr>
                  <tr>
                    <td style={tableStyle}><strong>{special.mondayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.tuesdayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.wednesdayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.thursdayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.fridayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.saturdayFoodSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.sundayFoodSpecialHeading}</strong></td>
                  </tr>
                  <tr>
                    <td style={tableStyle}>{special.mondayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.tuesdayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.wednesdayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.thursdayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.fridayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.saturdayFoodSpecialDescription}</td>
                    <td style={tableStyle}>{special.sundayFoodSpecialDescription}</td>
                  </tr>
                  <tr>
                    <td style={tableStyle}><strong>{special.mondayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.tuesdayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.wednesdayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.thursdayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.fridayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.saturdayDrinkSpecialHeading}</strong></td>
                    <td style={tableStyle}><strong>{special.sundayDrinkSpecialHeading}</strong></td>
                  </tr>
                  <tr>
                    <td style={tableStyle}>{special.mondayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.tuesdayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.wednesdayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.thursdayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.fridayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.saturdayDrinkSpecialDescription}</td>
                    <td style={tableStyle}>{special.sundayDrinkSpecialDescription}</td>
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