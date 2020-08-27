import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Cal = () => {
  const [date, setDate] = useState({date: ""})

  const change = (date)=>{
    setDate({date: date})
  }

  return(
    <div>
      <Calendar onChange= {(value)=> setDate({date: value})} />
    </div>
  )
}

export default Cal;