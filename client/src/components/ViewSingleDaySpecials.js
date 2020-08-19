// THIS DOCUMENT SEEMS A BIT REDUNDANT. IT DOES THE SAME THING AS VIEWEVERYDAYSPECIALS.JS WITH THE ADDED FEATURE OF BEING ABLE TO PASS A DAY AS PARAMETERS AND DISPLAY ONLY THAT SINGLE DAY. COMMENTING OUT FOR NOW UNTIL I FIND A SPECIFIC NEED FOR THIS.

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth0 } from "../react-auth0-spa";

// const ViewSingleDaySpecials = ({ day })=>{
//     const [daySpecials, setDaySpecials] = useState([])
//     const { user } = useAuth0;

//     useEffect(()=>{
//         axios.get(`/api/dailySpecials/get/${user.email}/${day}`)
//         .then(res => setDaySpecials(res.data))
//     }, [])

//     return(
//         <>
//         {daySpecials.map(data =>(
//         <>
//             <h2>{`${data.day}'s specials`}</h2>
//             <h4>{data.foodSpecialHeading}</h4>
//             <p>{data.foodSpecialDescription}</p>
//             <h4>{data.drinkSpecialHeading}</h4>
//             <p>{data.drinkSpecialDescription}</p>
//             <br />
//             <p>_________________________________________________</p>
//             </>
//             ))}
//         </>
//     )
// }

// export default ViewSingleDaySpecials;