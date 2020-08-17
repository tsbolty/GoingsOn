import React, { useState, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap'
import axios from 'axios';
import ViewSingleDaySpecials from './ViewSingleDaySpecials'

const SelectSpecialsDay = ()=>{
    const [dayChosen, setDayChosen] = useState("")
    const [mondaySpecials, setMondaySpecials] = useState([])

    const handleDayChosenClick = (e)=>{
        setDayChosen(e.target.name)
    }

    return(
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
            <br />
            {dayChosen === "monday" &&
            <ViewSingleDaySpecials day= {dayChosen}/>
            }
        </Dropdown>
    )
}

export default SelectSpecialsDay