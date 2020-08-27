import React from 'react';

const FullPageDailySpecials = ({ specials }) => {

  const tableStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
  
  return (
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
    </div>
  )
}

export default FullPageDailySpecials;