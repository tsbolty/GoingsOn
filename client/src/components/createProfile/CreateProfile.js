import React from 'react';
import {Dropdown} from 'react-bootstrap'


const CreateProfile = ({ user, profileInfo, setProfileInfo })=>{
    // const [businessInfo, setBusinessInfo] = useState([])
    // const [businessType, setBusinessType] = useState("")

    // useEffect(()=>{
    //     axios.get(`/api/businessInfo/get/${user.email}`)
    //         .then(res => businessInfo && setBusinessInfo({
    //             businessName: res.data[0].businessName,
    //             businessAddress: res.data[0].businessAddress,
    //             businessType: res.data[0].businessType
    //         }))
    //         .then(setProfileInfo(...businessInfo, businessType))
    // }, [user])
  
  const handleInputChange = (e)=>{
    let nam = e.target.name
    let val = e.target.value
    setProfileInfo({...profileInfo, [nam]: val,})
    }

    const handleBusinessTypeClick = (e)=>{
        let nam = e.target.name
        setProfileInfo({...profileInfo, businessType: nam})
    }

    return(
        <>
        <div>
            <input type= "text"
            name= "businessName"
            value= {profileInfo.businessName}
            placeholder= "Business Name"
            onChange= {handleInputChange} />
            <Dropdown>
                <Dropdown.Toggle variant= "success" id= "dropdown-basic">Business Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item name= "restaurant" value= "restaurant" onClick= {handleBusinessTypeClick}>Restaurant</Dropdown.Item>
                    <Dropdown.Item name= "bar" value= "bar" onClick= {handleBusinessTypeClick}>Bar</Dropdown.Item>
                    <Dropdown.Item name= "both" value= "both" onClick= {handleBusinessTypeClick}>Both</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <input type= "text"
            name= "businessHeadline"
            value= {profileInfo.businessHeadline}
            placeholder= "Headline"
            onChange= {handleInputChange} />
            <input type= "text"
            name= "businessAddress"
            value= {profileInfo.businessAddress}
            onChange= {handleInputChange}
            placeholder= "Business Address" />
            <br />
            {/* <button onClick= {()=> submitBusinessInfo()}>Submit Business Info</button> */}            
        </div>
        <br />
        </>
    )
}

export default CreateProfile;