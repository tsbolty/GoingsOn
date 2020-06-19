import React, {useState, useEffect} from 'react';
import CreateTest from './CreateTest';
import axios from 'axios';

const ViewTest = ()=>{
    const [array, setArray] = useState([])
    
    const getTestItems = ()=>{
        axios.get("/api/test/get")
            .then(res => setArray(res.data))
            .catch(err => console.log("error line 11 ViewTest.js"))
    }
    
    // useEffect(()=>{
    //     getTestItems()
    // }, [])

    const handleDelete = (e, id)=>{
        e.preventDefault()
        axios.delete('/api/testing/testing/' + id)
        .then(res => getTestItems())
    }

    return(
        <div>
            <CreateTest getTestItems= {getTestItems}/>
            <br />
            <br />
            <ul>
            {array.map(item=>(
                <>
                    <li>
                        <h2>{item.title}</h2>
                        <h2>{item.body}</h2>
                        <button onClick={handleDelete}>Delete</button>
                    </li>
                </>
            ))}
            </ul>
        </div>
    )
}

export default ViewTest;