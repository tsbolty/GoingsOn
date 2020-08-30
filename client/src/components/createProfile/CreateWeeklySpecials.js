import React, { useState } from 'react';
import axios from 'axios';

const CreateWeeklySpecials = ({ user }) => {
  const [weeklySpecials, setWeeklySpecials] = useState({
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {}
  })

  const handleMondayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, monday: { ...weeklySpecials.monday, [nam]: val}})
  }

  const handleTuesdayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, tuesday: {...weeklySpecials.tuesday, [nam]: val}})
  }

  const handleWednesdayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, wednesday: {...weeklySpecials.wednesday, [nam]: val}})
  }

  const handleThursdayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, thursday: {...weeklySpecials.thursday, [nam]: val}})
  }

  const handleFridayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, friday: {...weeklySpecials.friday, [nam]: val}})
  }

  const handleSaturdayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, saturday: {...weeklySpecials.saturday, [nam]: val}})
  }

  const handleSundayInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setWeeklySpecials({...weeklySpecials, sunday: {...weeklySpecials.sunday, [nam]: val}})
  }

  const handlePostSubmit = () => {
    // Will need to add validation to make sure each key value pair gets passed, not just the ones that have text.
    axios.post(`/api/weeklySpecials/add/${user.email}`, {
      email: user.email,
      monday: {
        foodSpecialHeading: weeklySpecials.monday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.monday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.monday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.monday.drinkSpecialDescription,
      },
      tuesday: {
        foodSpecialHeading: weeklySpecials.tuesday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.tuesday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.tuesday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.tuesday.drinkSpecialDescription,
      },
      wednesday:{
        foodSpecialHeading: weeklySpecials.wednesday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.wednesday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.wednesday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.wednesday.drinkSpecialDescription,
      },
      thursday: {
        foodSpecialHeading: weeklySpecials.thursday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.thursday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.thursday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.thursday.drinkSpecialDescription,
      },
      friday: {
        foodSpecialHeading: weeklySpecials.friday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.friday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.friday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.friday.drinkSpecialDescription,
      },
      saturday: {
        foodSpecialHeading: weeklySpecials.saturday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.saturday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.saturday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.saturday.drinkSpecialDescription,
      },
      sunday: {
        foodSpecialHeading: weeklySpecials.sunday.foodSpecialHeading,
        foodSpecialDescription: weeklySpecials.sunday.foodSpecialDescription,
        drinkSpecialHeading: weeklySpecials.sunday.drinkSpecialHeading,
        drinkSpecialDescription: weeklySpecials.sunday.drinkSpecialDescription
      }
    })
  }

  return (
    <>
      <div>
        <h2>Create Weekly Specials Here:</h2>
        <h4>Monday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.monday.foodSpecialHeading}
          onChange={handleMondayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.monday.foodSpecialDescription}
          onChange={handleMondayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.monday.drinkSpecialHeading}
          onChange={handleMondayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.monday.drinkSpecialDescription}
          onChange={handleMondayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Tuesday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.tuesday.foodSpecialHeading}
          onChange={handleTuesdayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.tuesday.foodSpecialDescription}
          onChange={handleTuesdayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.tuesday.drinkSpecialHeading}
          onChange={handleTuesdayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.tuesday.drinkSpecialDescription}
          onChange={handleTuesdayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Wednesday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.wednesday.foodSpecialHeading}
          onChange={handleWednesdayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.wednesday.foodSpecialDescription}
          onChange={handleWednesdayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.wednesday.drinkSpecialHeading}
          onChange={handleWednesdayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.wednesday.drinkSpecialDescription}
          onChange={handleWednesdayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Thursday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.thursday.foodSpecialHeading}
          onChange={handleThursdayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.thursday.foodSpecialDescription}
          onChange={handleThursdayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.thursday.drinkSpecialHeading}
          onChange={handleThursdayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.thursday.drinkSpecialDescription}
          onChange={handleThursdayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Friday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.friday.foodSpecialHeading}
          onChange={handleFridayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.friday.foodSpecialDescription}
          onChange={handleFridayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.friday.drinkSpecialHeading}
          onChange={handleFridayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.friday.drinkSpecialDescription}
          onChange={handleFridayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Saturday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.saturday.foodSpecialHeading}
          onChange={handleSaturdayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.saturday.foodSpecialDescription}
          onChange={handleSaturdayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.saturday.drinkSpecialHeading}
          onChange={handleSaturdayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.saturday.drinkSpecialDescription}
          onChange={handleSaturdayInputChange}
          placeholder="drink Special Description"></input>
        <br />
        <h4>Sunday:</h4>
        <input type="text"
          name="foodSpecialHeading"
          value={weeklySpecials.sunday.foodSpecialHeading}
          onChange={handleSundayInputChange}
          placeholder="food Special Title" />
        <input type="text"
          name="foodSpecialDescription"
          value={weeklySpecials.sunday.foodSpecialDescription}
          onChange={handleSundayInputChange}
          placeholder="food Special Description" />
        <input type="text"
          name="drinkSpecialHeading"
          value={weeklySpecials.sunday.drinkSpecialHeading}
          onChange={handleSundayInputChange}
          placeholder="drink Special Title"></input>
        <input type="text"
          name="drinkSpecialDescription"
          value={weeklySpecials.sunday.drinkSpecialDescription}
          onChange={handleSundayInputChange}
          placeholder="drink Special Description"></input>
        <br />
      </div>
      <div>
        <br />
        <h2>Preview:</h2>
        <h3>Monday</h3>
        <h4>{weeklySpecials.monday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.monday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.monday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.monday.drinkSpecialDescription}</p>
        <br />
        <h3>Tuesday</h3>
        <h4>{weeklySpecials.tuesday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.tuesday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.tuesday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.tuesday.drinkSpecialDescription}</p>
        <br />
        <h3>Wednesday</h3>
        <h4>{weeklySpecials.wednesday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.wednesday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.wednesday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.wednesday.drinkSpecialDescription}</p>
        <br />
        <h3>Thursday</h3>
        <h4>{weeklySpecials.thursday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.thursday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.thursday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.thursday.drinkSpecialDescription}</p>
        <br />
        <h3>Friday</h3>
        <h4>{weeklySpecials.friday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.friday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.friday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.friday.drinkSpecialDescription}</p>
        <br />
        <h3>Saturday</h3>
        <h4>{weeklySpecials.saturday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.saturday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.saturday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.saturday.drinkSpecialDescription}</p>
        <br />
        <h3>Sunday</h3>
        <h4>{weeklySpecials.sunday.foodSpecialHeading}</h4>
        <p>{weeklySpecials.sunday.foodSpecialDescription}</p>
        <h4>{weeklySpecials.sunday.drinkSpecialHeading}</h4>
        <p>{weeklySpecials.sunday.drinkSpecialDescription}</p>
      </div>
      <br />
      <button onClick={() => handlePostSubmit()}>Post Weekly Specials</button>
    </>
  )
}

export default CreateWeeklySpecials;