import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ViewWeeklySpecials from "../viewProfile/ViewWeeklySpecials";

const EditWeeklySpecials = ({ specials }) => {
	const [weeklySpecials, setWeeklySpecials] = useState({ ...specials[0] });
	const [newItems, setNewItems] = useState([]);
	const [tempItem, setTempItem] = useState({});

	const handleInputChange = (name, day, type) => {
		// NEED TO GRAB NEW DATA ON CHANGE OF NEW INPUT ELEMENT. STORE IN TEMP (PROBABLY WEEKLY SPECIALS) THEN WAIT FOR SUBMIT FOR PUT ROUTE.
	};

	const handleTypeClick = (e) => {
		setTempItem({ type: e.currentTarget.value, name: e.currentTarget.name });
	};

	const handleDayClick = (value) => {
		setTempItem({ day: value });
	};

	const createNewInput = () => {
		if (tempItem.type.length && tempItem.day.length) {
			setNewItems([...newItems, { ...tempItem }]);
		}
	};

	console.log(weeklySpecials);
	return (
		<div>
			<h1>Weekly Specials</h1>
			<ViewWeeklySpecials weeklySpecials={weeklySpecials} />
			<br />
			<p>___________________________</p>
			<p>Create a new</p>
			<Dropdown
				className='btn btn-secondary'
				style={{
					display: "inline-block",
					float: "left",
					color: "rgb(57,96,61)"
				}}>
				{/* <Dropdown.Toggle variant='success' className='btn btn-secondary'>
					Filter Type
				</Dropdown.Toggle> */}
				<Dropdown.Menu onChange={handleTypeClick}>
					<Dropdown.Item value='foodSpecialHeading' name='Food Special Heading'>
						Food Special Heading
					</Dropdown.Item>
					<Dropdown.Item
						value='foodSpecialDescription'
						name='Food Special Description'>
						Food Special Description
					</Dropdown.Item>
					<Dropdown.Item
						value='drinkSpecialHeading'
						name='Drink Special Heading'>
						Drink Special Heading
					</Dropdown.Item>
					<Dropdown.Item
						value='drinkSpecialDescription'
						name='Drink Special Description'>
						Drink Special Description
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<h1> for this day of the week </h1>
			<Dropdown
				className='btn btn-secondary'
				style={{
					display: "inline-block",
					float: "left",
					color: "rgb(57,96,61)"
				}}>
				{/* <Dropdown.Toggle variant='success' className='btn btn-secondary'>
					Filter Type
				</Dropdown.Toggle> */}
				<Dropdown.Menu onChange={handleDayClick}>
					<Dropdown.Item name='monday'>Monday</Dropdown.Item>
					<Dropdown.Item name='tuesday'>Tuesday</Dropdown.Item>
					<Dropdown.Item name='wednesday'>wednesday</Dropdown.Item>
					<Dropdown.Item name='thursday'>Thursday</Dropdown.Item>
					<Dropdown.Item name='friday'>Friday</Dropdown.Item>
					<Dropdown.Item name='saturday'>Saturday</Dropdown.Item>
					<Dropdown.Item name='sunday'>Sunday</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<button onClick={createNewInput}>Create New Input</button>
			<br />
			<br />
			<p>_______________________________________</p>
			{newItems.length &&
				newItems.map((item) => {
					return (
						<>
							<h5>{item.name}</h5>
							<input
								onChange={() =>
									handleInputChange.bind(item.name, item.day, item.type)
								}
								placeholder={item.name}
								name={item.type}
								data-day={item.day}
							/>
						</>
					);
				})}
		</div>
	);
};

export default EditWeeklySpecials;
