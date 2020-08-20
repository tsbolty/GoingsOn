import React, { useState } from 'react';
import axios from 'axios';

const TestUpdate = ()=>{
    const [data, setData] = useState({})

    const postData = ()=>{
        axios.post("/api/test/add", data)
    }

    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setData({...data, [nam]: val})
    }

    return(
        <>
        <input type= "text"
        name= "firstObject"
        value= {data.firstObject}
        onChange= {handleInputChange}
        placeholder= "first object" />
        <input type= "text"
        name= "secondObject"
        value= {data.secondObject}
        onChange= {handleInputChange}
        placeholder= "second object" />
        <button onClick= {postData}>Post</button>
        </>
    )
}

export default TestUpdate;