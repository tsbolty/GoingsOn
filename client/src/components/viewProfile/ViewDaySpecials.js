import React, { useState } from 'react';
import axios from 'axios';

const ViewDaySpecials = ({ day }) => {
  const [singleDaySpecialsData, setSingleDaySpecialsData] = useState([])

  const getSingleDaySpecials = () => {
    axios.get(`/api/dailySpecials/get/${day}`)
      .then(res => setSingleDaySpecialsData(res.data))
  }

  const handleDelete = (id) => {
    axios.delete('/api/dailySpecials/delete/' + id)
      .then(res => getSingleDaySpecials())
  }

  return (
    <div className="card">
      {singleDaySpecialsData && singleDaySpecialsData.map(special => (
        <>
          <h3>{special.foodSpecialHeading}</h3>
          <p>{special.foodSpecialDescription}</p>
          <h3>{special.drinkSpecialHeading}</h3>
          <p>{special.drinkSpecialDescription}</p>
          <button className="delete-food-special-button" onClick={() => handleDelete(special._id)}>Delete</button>
          <br />
        </>
      ))}
      <button onClick={() => getSingleDaySpecials()}>Get Single Day Specials</button>
    </div>
  )
}

export default ViewDaySpecials;