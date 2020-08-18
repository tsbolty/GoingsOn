import React, { useState } from 'react';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap'
import BusinessInfo from './BusinessInfo'

const CreateProfile = ()=>{
    const [businessInfo, setBusinessInfo] = useState({})
    const [businessType, setBusinessType] = useState("")

    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setBusinessInfo({...businessInfo, [nam]: val})
    }

    const submitBusinessInfo = ()=>{
        axios.post('/api/businessInfo/post', {
            businessName: businessInfo.businessName,
            businessAddress: businessInfo.businessAddress,
            businessType: businessType
        })
    }

    const handleBusinessTypeClick = (e)=>{
        let nam = e.target.name
        // let val = e.target.value
        setBusinessType(nam)
    }

    return(
        <>
        <BusinessInfo businessName= {businessInfo.businessName} businessAddress= {businessInfo.businessAddress} businessType= {businessType} />
        <div>
            <input type= "text"
            name= "businessName"
            value= {businessInfo.businessName}
            placeholder= "Business Name"
            onChange= {handleInputChange} />
            <input type= "text"
            name= "businessAddress"
            value= {businessInfo.businessAddress}
            onChange= {handleInputChange}
            placeholder= "Business Address" />
            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Business Type
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item" name= "restaurant" value= {businessInfo.restaurant}>Restaurant</p>
                    <p className="dropdown-item" name= "bar" value= {businessInfo.bar}>Bar</p>
                    <p className="dropdown-item" name= "both" value= {businessInfo.both}>Both</p>
                </div>
            </div> */}
            <Dropdown>
                <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item  name= "restaurant" value= "restaurant" onClick= {handleBusinessTypeClick}>Restaurant</Dropdown.Item>
                    <Dropdown.Item  name= "bar" value= "bar" onClick= {handleBusinessTypeClick}>Bar</Dropdown.Item>
                    <Dropdown.Item name= "both" value= "both" onClick= {handleBusinessTypeClick}>Both</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br />
            <button onClick= {()=> submitBusinessInfo()}>Submit Business Info</button>
        </div>
        </>
    )
}

export default CreateProfile;