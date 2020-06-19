import React, { useState } from 'react';

const LocationCard = ()=>{

    const [dailySpecials, setDailySpecials] = useState(false)
    const [weeklySpecials, setWeeklySpecials] = useState(false)
    const [specialEvents, setSpecialEvents] = useState([])

    const showDailySpecials = (e)=>{
        e.preventDefault()
        if(dailySpecials){
            setDailySpecials(false)
        } else if (!dailySpecials){
            setDailySpecials(true)
            setWeeklySpecials(false)
            setSpecialEvents([])
        }
    }

    const showWeeklySpecials = (e)=>{
        e.preventDefault()
        if(weeklySpecials){
            setWeeklySpecials(false)
        } else if (!weeklySpecials){
            setWeeklySpecials(true)
            setDailySpecials(false)
            setSpecialEvents([])
        }
    }

    const showSpecialEvents = (e)=>{
        e.preventDefault()
        if (specialEvents){
            setSpecialEvents([{title: "special event from database", date: "Saturday July 4th, 2020"}])
            setDailySpecials(false)
            setWeeklySpecials(false)
        } 
        else if(!specialEvents.length){
            return false
        }
    }

    return(
        <div className= "card location-card">
            <h2>Business Name</h2>
            <p>123 main st Denver, CO 80202</p>
            <button onClick= {showDailySpecials}>Daily Specials</button>
            <button onClick= {showWeeklySpecials}>Weekly Specials</button>
            {specialEvents && <button onClick= {showSpecialEvents}>Special Events</button>}
            {dailySpecials
            &&
            <ul>
                <h3>Daily Specials</h3>
                <li>Monday: BOGO Pizza</li>
                <li>Tuesday: All you can drink</li>
                <li>Wednesday: Fish fry</li>
                <li>Thursday: Martini Thursday</li>
                <li>Friday: Prime Rib Special</li>
                <li>Saturday: Botomless mimossas</li>
                <li>Sunday: Brunch</li>
            </ul>
            }
            {weeklySpecials
            &&
            <ul>
                <h3>Weekly Specials</h3>
                <li>Monday: BOGO Pizza</li>
                <li>Tuesday: All you can drink</li>
                <li>Wednesday: Fish fry</li>
                <li>Thursday: Martini Thursday</li>
                <li>Friday: Prime Rib Special</li>
                <li>Saturday: Botomless mimossas</li>
                <li>Sunday: Brunch</li>
            </ul>
            }
            {specialEvents
            &&
            <>
            {specialEvents.map(event=>(
            <div key= {Math.floor(Math.random * 1000)}>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
            </div>
            ))}
            </>
            }
        </div>
    )
}

export default LocationCard;