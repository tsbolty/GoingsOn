import React, { useState, useEffect } from 'react';
import BusinessInfo from './BusinessInfo'
import axios from 'axios';


const LocationCard = ({ mondaySpecials })=>{

    const [displayDailySpecials, setDisplayDailySpecials] = useState(false)
    const [displayWeeklySpecials, setDisplayWeeklySpecials] = useState(false)
    const [specialEvents, setSpecialEvents] = useState([])
    const [weeklySpecials, setWeeklySpecials] =useState([])

    const getWeeklySpecials = ()=>{
        axios.get('/api/happyhour/get')
        .then(res => setWeeklySpecials(res.data))
    }

    const showDisplayDailySpecials = (e)=>{
        e.preventDefault()
        if(displayDailySpecials){
            setDisplayDailySpecials(false)
        } else if (!displayDailySpecials){
            setDisplayDailySpecials(true)
            setDisplayWeeklySpecials(false)
            setSpecialEvents([])
        }
    }

    const showWeeklySpecials = (e)=>{
        e.preventDefault()
        if(displayWeeklySpecials){
            setDisplayWeeklySpecials(false)
        } else if (!displayWeeklySpecials){
            setDisplayWeeklySpecials(true)
            setDisplayDailySpecials(false)
            setSpecialEvents([])
        }
    }

    const showSpecialEvents = (e)=>{
        e.preventDefault()
        if (specialEvents){
            setSpecialEvents([{title: "special event from database", date: "Saturday July 4th, 2020"}])
            setDisplayDailySpecials(false)
            setDisplayWeeklySpecials(false)
        } 
        else if(!specialEvents.length){
            return false
        }
    }

    return(
        <div className= "card location-card">
            <BusinessInfo businessName= "Business Name" businessAddress= "123 Main st"/>
            <div className= "show-specials-button">
            <button onClick= {showDisplayDailySpecials} className= "btn show-specials-button">Daily Specials</button>
            <button onClick= {showWeeklySpecials} className= "btn show-specials-button">Weekly Specials</button>
            {specialEvents && <button onClick= {showSpecialEvents} className= "btn show-specials-button">Special Events</button>}
            </div>
            {displayDailySpecials
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
                            {mondaySpecials.length > 0 &&
                            <td>{mondaySpecials[0].mondayFoodSpecialHeading}</td>
                            }
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
            {displayWeeklySpecials
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
                            <td>Monday</td>
                            <td>{weeklySpecials.foodSpecial1Heading}</td>
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
            <button onClick= {()=> getWeeklySpecials()}>get weekly specials</button>
        </div>
    )
}

export default LocationCard;