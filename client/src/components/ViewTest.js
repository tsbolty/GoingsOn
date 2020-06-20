import React, {useState, useEffect} from 'react';
import CreateTest from './CreateTest';
import axios from 'axios';

const ViewTest = ()=>{
    const [array, setArray] = useState([])
    
    const getTestItems = ()=>{
        axios.get("/api/test/get")
            .then(res => setArray(res.data))
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        getTestItems()
    }, [])

    const handleDelete = (id)=>{
        axios.delete('/api/test/test/' + id)
        .then(res => getTestItems())
    }

    return(
        <div>
            <CreateTest getTestItems= {getTestItems}/>
            <br />
            <br />
            <ul>
            {array.map(item=>(
                <li key= {item._id}>
                    <h2>{item.title}</h2>
                    <h2>{item.body}</h2>
                    <button onClick= {()=> handleDelete(item._id)}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ViewTest;