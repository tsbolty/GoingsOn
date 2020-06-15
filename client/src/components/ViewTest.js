import React, {useState} from 'react';
import CreateTest from './CreateTest'

const ViewTest = ()=>{
    const [array, setArray] = useState([])
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
            <CreateTest />
        </div>
    )
}

export default ViewTest;