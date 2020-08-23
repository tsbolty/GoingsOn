import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap'


const CreateProfile = ({ user, setProfileInfo })=>{
    const [businessInfo, setBusinessInfo] = useState([])
    const [businessType, setBusinessType] = useState("")

    // useEffect(()=>{
    //     axios.get(`/api/businessInfo/get/${user.email}`)
    //         .then(res => businessInfo && setBusinessInfo({
    //             businessName: res.data[0].businessName,
    //             businessAddress: res.data[0].businessAddress,
    //             businessType: res.data[0].businessType
    //         }))
    //         .then(setProfileInfo(...businessInfo, businessType))
    // }, [user])

  const searchableAddress = ()=> {
    if(businessInfo.businessAddress){
      setBusinessInfo({...businessInfo, mapsLink: businessInfo.businessAddress.split(" ").join("").toLowerCase()})
      setProfileInfo({...businessInfo, mapsLink: businessInfo.businessAddress.split(" ").join("").toLowerCase()})
    }
  }

    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setBusinessInfo({...businessInfo, [nam]: val,})
        setProfileInfo({...businessInfo, [nam]: val, businessType})
    }

    // const submitBusinessInfo = ()=>{
    //     axios.post('/api/businessInfo/add', {
    //         email: user.email,
    //         businessName: businessInfo.businessName,
    //         businessAddress: businessInfo.businessAddress,
    //         businessType: businessType
    //     })
    // }

    const handleBusinessTypeClick = (e)=>{
        let nam = e.target.name
        setBusinessType(nam)
        setProfileInfo({...businessInfo, businessType: nam})
    }

    return(
        <>
        <div>
            <p>Preview Business Information:</p>
            <h2>{businessInfo.businessName} {businessInfo.businessType ? `(${businessInfo.businessType})` : businessType ? `(${businessType})` : null}</h2>
            <p>{businessInfo.businessAddress}</p>
        </div>
        <div>
            <input type= "text"
            name= "businessName"
            value= {businessInfo.businessName}
            placeholder= "Business Name"
            onChange= {handleInputChange} />
            <input type= "text"
            name= "businessHeadline"
            value= {businessInfo.businessHeadline}
            placeholder= "Headline"
            onChange= {handleInputChange, searchableAddress} />
            <input type= "text"
            name= "businessAddress"
            value= {businessInfo.businessAddress}
            onChange= {handleInputChange}
            placeholder= "Business Address" />
            <br />
            <Dropdown>
                <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item name= "restaurant" value= "restaurant" onClick= {handleBusinessTypeClick}>Restaurant</Dropdown.Item>
                    <Dropdown.Item name= "bar" value= "bar" onClick= {handleBusinessTypeClick}>Bar</Dropdown.Item>
                    <Dropdown.Item name= "both" value= "both" onClick= {handleBusinessTypeClick}>Both</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <button onClick= {()=> submitBusinessInfo()}>Submit Business Info</button> */}            
        </div>
        <br />
        </>
    )
}

export default CreateProfile;