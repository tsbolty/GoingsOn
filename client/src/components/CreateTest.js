import React, {useRef} from 'react';
import axios from 'axios';

const CreateTest = ({ getTestItems })=>{

    const titleRef = useRef()
    const bodyRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("/api/test/add", {
            title: titleRef.current.value,
            body: bodyRef.current.value
        })
        .then(res => getTestItems())
        .catch(err => console.log("error line 16 CreateTest.js"))
    }

    return(
        <div>
            <input ref={titleRef} placeholder= "title"></input>
            <input ref={bodyRef} placeholder= "body"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CreateTest;