import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeadlineDailySpecialsCard from '../homePage/HeadlineDailySpecialsCard';
import HeadlineWeeklySpecialsCard from '../homePage/HeadlineWeeklySpecialsCard';

// CURRENTLY THIS COMPONENT IS A CHILD COMPONENT OF HEADLINECARD. PROBABLY SHOULDN'T HAVE A PARENT COMPONENT IF IT'S GOING TO BE IT'S OWN PAGE. WILL NEED TO RE-TOOL
const InfoPage = ({ email }) => {
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    axios.get(`/api/allBusinessInfo/get/${email}`)
      .then(res => setSpecials(res.data))
  }, [])

  const tableStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  }

  return (
    <>
      <div className="headline-daily-specials">
        <h4>Single Day Specials:</h4>
        {specials.daySpecials && specials.daySpecials.map(special => (
          <div className={`day-specials`}>
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
          </div>
        ))}
        <br />
        <p>_________________________________________</p>
        <div className="headline-weekly-specials">
          <h4>Weekly Specials</h4>
          {specials.weeklySpecials && specials.weeklySpecials.map(special => (
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
          ))}
        </div>
      </div>
    </>
  )
}

export default InfoPage;