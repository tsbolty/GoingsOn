import React from 'react';

const CreateTest = ()=>{

    const handleSubmit = (e)=>{
        e.preventDefault()

    }

    return(
        <div>
            <input ref={title} placeholder= "title"></input>
            <input ref={body} placeholder= "body"></input>
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default CreateTest;