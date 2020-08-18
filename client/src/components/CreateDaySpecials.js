import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewDaySpecials from './ViewDaySpecials'
import { Dropdown } from 'react-bootstrap';

const CreateDaySpecials = ()=>{
    const [daySpecials, setDaySpecials] = useState([])
    const [day, setDay] = useState("")

    const postDaySpecials = ()=>{
        axios.post('/api/dailySpecials/post', {
            day: day,
            foodSpecialHeading: daySpecials.foodSpecialHeading,
            foodSpecialDescription: daySpecials.foodSpecialDescription,
            drinkSpecialHeading: daySpecials.drinkSpecialHeading,
            drinkSpecialDescription: daySpecials.drinkSpecialDescription
        })
    }

    // const getDaySpecials = ()=>{
    //     axios.get(`/api/dailySpecials/get/${day}`)
    //     .then(res => setDaySpecials(res.data))
    // }
    
    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setDaySpecials({...daySpecials, [nam]: val})
    }

    const handleDayChosenClick = (e)=>{
        setDay(e.target.name)
    }

    // useEffect(()=>{
    //     getDaySpecials()
    // }, [day])

    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant= "success" id= "dropdown-basic">Day
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item  name= "monday" onClick= {handleDayChosenClick}>Monday</Dropdown.Item>
                    <Dropdown.Item  name= "tuesday" onClick= {handleDayChosenClick}>Tuesday</Dropdown.Item>
                    <Dropdown.Item  name= "wednesday" onClick= {handleDayChosenClick}>Wednesday</Dropdown.Item>
                    <Dropdown.Item  name= "thursday" onClick= {handleDayChosenClick}>Thursday</Dropdown.Item>
                    <Dropdown.Item  name= "friday" onClick= {handleDayChosenClick}>Friday</Dropdown.Item>
                    <Dropdown.Item  name= "saturday" onClick= {handleDayChosenClick}>Saturday</Dropdown.Item>
                    <Dropdown.Item  name= "sunday" onClick= {handleDayChosenClick}>Sunday</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <h3>{day}</h3>
            <br />
            <input type= "text" 
            name= "foodSpecialHeading" 
            value= {daySpecials.foodSpecialHeading} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "foodSpecialDescription" 
            value= {daySpecials.foodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <br />
            <input type= "text" 
            name= "drinkSpecialHeading" 
            value= {daySpecials.drinkSpecialHeading} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "drinkSpecialDescription" 
            value= {daySpecials.drinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <button onClick= {()=> postDaySpecials()}>Submit</button>
            <ViewDaySpecials day= {day}/>
        </div>
    )
}

export default CreateDaySpecials