import React, { useEffect } from 'react';
import axios from 'axios';
import HeadlineDailySpecialsCard from '../homePage/HeadlineDailySpecialsCard';
import HeadlineWeeklySpecialsCard from '../homePage/HeadlineWeeklySpecialsCard';

// CURRENTLY THIS COMPONENT IS A CHILD COMPONENT OF HEADLINECARD. PROBABLY SHOULDN'T HAVE A PARENT COMPONENT IF IT'S GOING TO BE IT'S OWN PAGE. WILL NEED TO RE-TOOL
const InfoPage = ({ businessInfo, item, i })=>{

  return(
    <div>
      <HeadlineDailySpecialsCard businessInfo= {businessInfo} i= {i} />
      <br />
      <HeadlineWeeklySpecialsCard businessInfo= {businessInfo} i={i} />
    </div>
  )
}

export default InfoPage;