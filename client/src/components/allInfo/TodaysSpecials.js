import React from 'react';
import moment from 'moment';

const TodaysSpecials = ({ specials })=>{
  let today = moment().format('dddd').toLowerCase();


  return(
    <div>
      {specials.weeklySpecials &&
      <>
      <h2>Today's Specials:</h2>
      <h4>{specials.weeklySpecials[0][today].foodSpecialHeading}</h4>
      <p>{specials.weeklySpecials[0][today].foodSpecialDescription}</p>
      <br />
      <h4>{specials.weeklySpecials[0][today].drinkSpecialHeading}</h4>
      <p>{specials.weeklySpecials[0][today].drinkSpecialDescription}</p>
      </>
      }
    </div>
  )
}

export default TodaysSpecials;