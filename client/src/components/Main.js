import React from 'react';
import TestUpdate from './TestUpdate';
import EditBusinessInfo from './EditBusinessInfo'


const Main = ({ user })=>{

    return(
        <>
        {/* <TestUpdate /> */}
        <EditBusinessInfo user= {user}/>
        </>
    )
}

export default Main;