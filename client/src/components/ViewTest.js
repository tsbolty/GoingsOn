import React, {useState, useEffect} from 'react';
import CreateTest from './CreateTest'
import axios from 'axios';

const ViewTest = ()=>{
    const [array, setArray] = useState([])
    
    const getTestItems = ()=>{
        axios.get("/api/test/test").then(res => setArray(res.data))
    }
    
    useEffect(()=>{
        getTestItems()
    }, [])

    return(
        <div>
            <ul>
            {array.map(item=>(
                <>
                    <li>{item.title}</li>
                    <li>{item.body}</li>
                </>
            ))}
            </ul>
            <CreateTest getTestItems= {getTestItems}/>
        </div>
    )
}

export default ViewTest;