import React, { useState, useEffect } from 'react';
import HeadlineCard from './homePage/HeadlineCard';
import axios from 'axios'


const Main = ({ user }) => {
  const [data, setData] = useState({})

  const consol = ()=>{
    console.log("something")
    console.log(data.weeklySpecials[0].email)
  }

  useEffect(()=>{
    axios.get(`/api/allBusinessInfo/get/id/5f418285892b2b322814cd90`)
      .then(res => setData(res.data[0]))
  }, [])



  return (
    <>
      {/* <TestUpdate /> */}
      <button onClick= {()=> consol()}>console log</button>
      <HeadlineCard />
      {/* <Cal /> */}
    </>
  )
}

export default Main;