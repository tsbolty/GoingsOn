import React from 'react';

const HeadlineDailySpecialsCard = ({ businessInfo, i })=>{

  const tableStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  }

  return(
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
  )
}

export default HeadlineDailySpecialsCard;