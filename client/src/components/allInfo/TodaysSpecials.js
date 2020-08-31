import React from 'react';
import moment from 'moment';

const TodaysSpecials = ({ specials })=>{
  let today = moment().format('dddd').toLowerCase();

  console.log(specials)

  return(
    <div>
      <h2>Today's Specials:</h2>
      <h4></h4>
    </div>
  )
}

export default TodaysSpecials;