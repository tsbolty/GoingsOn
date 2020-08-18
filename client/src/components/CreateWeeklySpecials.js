import React, { useState } from 'react';
import axios from 'axios';

const CreateWeeklySpecials = ()=>{
    const [weeklySpecials, setWeeklySpecials] = useState({})

    const handleInputChange = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        setWeeklySpecials({...weeklySpecials, [nam]: val})
    }

    const handlePostSubmit = ()=>{
        // Will need to add validation to make sure each key value pair gets passed, not just the ones that have text.
        axios.post('/api/weeklySpecials/add', weeklySpecials)
    }

    return(
        <>
        <div>
            <h2>Create Weekly Specials Here:</h2>
            <h4>Monday:</h4>
            <input type= "text" 
            name= "mondayFoodSpecialHeading" 
            value= {weeklySpecials.mondayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "mondayFoodSpecialDescription" 
            value= {weeklySpecials.mondayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "mondayDrinkSpecialHeading" 
            value= {weeklySpecials.mondayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "mondayDrinkSpecialDescription" 
            value= {weeklySpecials.mondayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Tuesday:</h4>
            <input type= "text" 
            name= "tuesdayFoodSpecialHeading" 
            value= {weeklySpecials.tuesdayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "tuesdayFoodSpecialDescription" 
            value= {weeklySpecials.tuesdayFoodSpecialDescription}
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "tuesdayDrinkSpecialHeading" 
            value= {weeklySpecials.tuesdayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "tuesdayDrinkSpecialDescription" 
            value= {weeklySpecials.tuesdayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Wednesday:</h4>
            <input type= "text" 
            name= "wednesdayFoodSpecialHeading" 
            value= {weeklySpecials.wednesdayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "wednesdayFoodSpecialDescription" 
            value= {weeklySpecials.wednesdayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "wednesdayDrinkSpecialHeading" 
            value= {weeklySpecials.wednesdayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "wednesdayDrinkSpecialDescription" 
            value= {weeklySpecials.wednesdayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Thursday:</h4>
            <input type= "text" 
            name= "thursdayFoodSpecialHeading" 
            value= {weeklySpecials.thursdayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "thursdayFoodSpecialDescription" 
            value= {weeklySpecials.thursdayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "thursdayDrinkSpecialHeading" 
            value= {weeklySpecials.thursdayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "thursdayDrinkSpecialDescription" 
            value= {weeklySpecials.thursdayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Friday:</h4>
            <input type= "text" 
            name= "fridayFoodSpecialHeading" 
            value= {weeklySpecials.fridayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "fridayFoodSpecialDescription" 
            value= {weeklySpecials.fridayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "fridayDrinkSpecialHeading" 
            value= {weeklySpecials.fridayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "fridayDrinkSpecialDescription" 
            value= {weeklySpecials.fridayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Saturday:</h4>
            <input type= "text" 
            name= "saturdayFoodSpecialHeading" 
            value= {weeklySpecials.saturdayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "saturdayFoodSpecialDescription" 
            value= {weeklySpecials.saturdayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "saturdayDrinkSpecialHeading" 
            value= {weeklySpecials.saturdayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "saturdayDrinkSpecialDescription" 
            value= {weeklySpecials.saturdayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
            <h4>Sunday:</h4>
            <input type= "text" 
            name= "sundayFoodSpecialHeading" 
            value= {weeklySpecials.sundayFoodSpecialHeading}
            onChange= {handleInputChange}
            placeholder= "Food Special Title" />
            <input type= "text" 
            name= "sundayFoodSpecialDescription" 
            value= {weeklySpecials.sundayFoodSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Food Special Description" />
            <input type= "text" 
            name= "sundayDrinkSpecialHeading" 
            value= {weeklySpecials.sundayDrinkSpecialHeading}
            onChange= {handleInputChange} 
            placeholder= "Drink Special Title"></input>
            <input type= "text" 
            name= "sundayDrinkSpecialDescription" 
            value= {weeklySpecials.sundayDrinkSpecialDescription} 
            onChange= {handleInputChange} 
            placeholder= "Drink Special Description"></input>
            <br />
        </div>
        <div>
            <br />
            <h2>Preview:</h2>
            <h3>Monday</h3>
            <h4>{weeklySpecials.mondayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.mondayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.mondayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.mondayDrinkSpecialDescription}</p>
            <br />
            <h3>Tuesday</h3>
            <h4>{weeklySpecials.tuesdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.tuesdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.tuesdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.tuesdayDrinkSpecialDescription}</p>
            <br />
            <h3>Wednesday</h3>
            <h4>{weeklySpecials.wednesdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.wednesdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.wednesdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.wednesdayDrinkSpecialDescription}</p>
            <br />
            <h3>Thursday</h3>
            <h4>{weeklySpecials.thursdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.thursdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.thursdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.thursdayDrinkSpecialDescription}</p>
            <br />
            <h3>Friday</h3>
            <h4>{weeklySpecials.fridayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.fridayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.fridayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.fridayDrinkSpecialDescription}</p>
            <br />
            <h3>Saturday</h3>
            <h4>{weeklySpecials.saturdayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.saturdayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.saturdayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.saturdayDrinkSpecialDescription}</p>
            <br />
            <h3>Sunday</h3>
            <h4>{weeklySpecials.sundayFoodSpecialHeading}</h4>
            <p>{weeklySpecials.sundayFoodSpecialDescription}</p>
            <h4>{weeklySpecials.sundayDrinkSpecialHeading}</h4>
            <p>{weeklySpecials.sundayDrinkSpecialDescription}</p>
        </div>
        <br />
        <button onClick= {()=> handlePostSubmit()}>Post</button>
        </>
    )
}

export default CreateWeeklySpecials;