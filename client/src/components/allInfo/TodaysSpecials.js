import React from 'react';
import moment from 'moment';

const TodaysSpecials = ({ specials })=>{
  let today = moment().format('dddd').toLowerCase();
  // let { sundayFoodSpecialHeading } = specials;
  console.log(specials.weeklySpecials)

  return(
    <div>
      <h2>Today's Specials:</h2>
      {/* <h4>{specials.weeklySpecials[0].sundayFoodSpecialHeading}</h4> */}
      <p></p>
      <br />
      <h4>{`specials.${today}DrinkSpecialHeading`}</h4>
      <p>{`specials.${today}DrinkSpecialDescription`}</p>
    </div>
  )
}

export default TodaysSpecials;