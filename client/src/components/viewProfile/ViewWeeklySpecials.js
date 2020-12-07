import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewWeeklySpecials = ({ weeklySpecials }) => {
  // const [weeklySpecials, setWeeklySpecials] = useState({})

  // useEffect(() => {
  //   axios.get(`/api/allBusinessInfo/get/${user.email}`)
  //     .then(res => setWeeklySpecials(res.data[0].weeklySpecials[0]))
  // }, [user])

  return (
    <>
        <div>
          <h3>Weekly Specials</h3>
          <table>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
      {weeklySpecials &&
        weeklySpecials.map(day =>(
            <tr>
              <td><strong>{day.foodSpecialHeading}</strong></td>
            </tr>

        ))
        // FIGURE OUT A WAY TO NOT HAVE TO DO SEVERAL MAPS
            // <tr>
            //   <td>{weeklySpecials.mondayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.tuesdayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.wednesdayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.thursdayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.fridayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.saturdayFoodSpecialDescription}</td>
            //   <td>{weeklySpecials.sundayFoodSpecialDescription}</td>
            // </tr>
            // <tr>
            //   <td><strong>{weeklySpecials.mondayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.tuesdayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.wednesdayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.thursdayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.fridayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.saturdayDrinkSpecialHeading}</strong></td>
            //   <td><strong>{weeklySpecials.sundayDrinkSpecialHeading}</strong></td>
            // </tr>
            // <tr>
            //   <td>{weeklySpecials.mondayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.tuesdayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.wednesdayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.thursdayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.fridayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.saturdayDrinkSpecialDescription}</td>
            //   <td>{weeklySpecials.sundayDrinkSpecialDescription}</td>
            // </tr>
          }
          </table>
        </div>
    </>
  )
}

export default ViewWeeklySpecials;