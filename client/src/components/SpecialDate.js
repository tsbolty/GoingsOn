import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
 
const SpecialDate = () => {
  const [date, setDate] = useState({})
 
  const onChange = date => setDate(date)
 
  return (
    <div>
      <DatePicker
        onChange={()=> onChange()}
        value={date}
      />
    </div>
  );
  
}

export default SpecialDate;