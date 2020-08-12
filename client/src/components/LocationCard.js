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
            <br />
            <button onClick= {showWeeklySpecials}>Weekly Specials</button>
            <br />
            {specialEvents && <button onClick= {showSpecialEvents}>Special Events</button>}
            {dailySpecials
            &&
            <>
                <h2>Daily Specials</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Special</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>BOGO Pizza</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>All You Can Drink</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>Fish Fry</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>Martini Thursday</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>Prime Rib Special</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>Bottomless Mimossas</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Brunch</td>
                        </tr>
                    </tbody>
                </table>
            </>
            }
            {weeklySpecials
            &&
            <>
                <h2>Weekly Specials</h2>
                <table className= "weekly-specials weekly-specials-table">
                    <thead>
                        <tr className= "specials-table-row">
                            <th>Day</th>
                            <th>Special</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className= "specials-table-row">
                            <td>Monday
                            </td>
                            <td>BOGO Pizza</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Tuesday</td>
                            <td>All you can drink</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Wednesday</td>
                            <td>Fish fry</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Thursday</td>
                            <td>Martini Thursday</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Friday</td>
                            <td>Prime Rib Special</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Saturday</td>
                            <td>Botomless mimossas</td>
                        </tr>
                        <tr className= "specials-table-row">
                            <td>Sunday</td>
                            <td>Brunch</td>
                        </tr>
                    </tbody>
                </table>
            </>
            }
            {specialEvents
            &&
            <>
            {specialEvents.map(event=>(
            <div className= "special-events" key= {Math.floor(Math.random * 1000)}>
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