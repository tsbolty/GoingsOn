import React, { useState } from 'react';
import axios from 'axios';

const TestUpdate = () => {
  const [data, setData] = useState({})

  const postData = () => {
    axios.post("/api/test/add", data)
  }

  const handleInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setData({ ...data, [nam]: val })
  }

  const handleUpdateData = () => {
    axios.post("/api/test/update", data)
      .then(res => setData(res.data))
      .catch(console.log("something went wrong"))
  }

  return (
    <>
      <h3>{data && data.firstObject}</h3>
      <h3>{data && data.secondObject}</h3>
      <input type="text"
        name="firstObject"
        value={data.firstObject}
        onChange={handleInputChange}
        placeholder="first object" />
      <input type="text"
        name="secondObject"
        value={data.secondObject}
        onChange={handleInputChange}
        placeholder="second object" />
      <button onClick={postData}>Post</button>
      <button onClick={handleUpdateData}>Update Info</button>
    </>
  )
}

export default TestUpdate;