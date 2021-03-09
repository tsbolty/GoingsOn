import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ViewWeeklySpecials from "../viewProfile/ViewWeeklySpecials";

const EditWeeklySpecials = ({ specials }) => {
	const [weeklySpecials, setWeeklySpecials] = useState({ ...specials[0] });
	const [newItems, setNewItems] = useState([]);
	const [currentNew, setCurrentNew] = useState({});
	const [tempItem, setTempItem] = useState({});

	const handleInputChange = (value, day, type) => {
		setCurrentNew({
			...currentNew,
			[day]: { ...weeklySpecials[[day]], [type]: value }
		});
	};

	const handlePreview = (value, day, type) => {
		setWeeklySpecials({ ...weeklySpecials, ...currentNew });
	};

	const handleTypeClick = (name) => {
		let type = name.replace(/\s+/g, "");
		type = type.split("");
		type[0] = type[0].toLowerCase();
		type = type.join("");
		setTempItem({ ...tempItem, type: type, name: name });
	};

	const handleDayClick = (value) => {
		setTempItem({ ...tempItem, day: value });
	};

	const createNewInput = () => {
		if (tempItem.type.length && tempItem.day.length) {
			setNewItems([...newItems, { ...tempItem }]);
		}
	};

	return (
		<div>
			<h1>Weekly Specials</h1>
			<ViewWeeklySpecials weeklySpecials={weeklySpecials} />
			<br />
			<p>___________________________</p>
			<h4>Create a new</h4>
			<Dropdown
				className='btn btn-secondary'
				style={{
					display: "inline-block",
					float: "left",
					color: "rgb(57,96,61)"
				}}>
				<Dropdown.Toggle variant='success' className='btn btn-secondary'>
					Type of special
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item
						name='Food Special Heading'
						onClick={(e) => handleTypeClick(e.currentTarget.name)}>
						Food Special Heading
					</Dropdown.Item>
					<Dropdown.Item
						name='Food Special Description'
						onClick={(e) => handleTypeClick(e.currentTarget.name)}>
						Food Special Description
					</Dropdown.Item>
					<Dropdown.Item
						name='Drink Special Heading'
						onClick={(e) => handleTypeClick(e.currentTarget.name)}>
						Drink Special Heading
					</Dropdown.Item>
					<Dropdown.Item
						name='Drink Special Description'
						onClick={(e) => handleTypeClick(e.currentTarget.name)}>
						Drink Special Description
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<h4> for this day of the week </h4>
			<Dropdown
				className='btn btn-secondary'
				style={{
					display: "inline-block",
					float: "left",
					color: "rgb(57,96,61)"
				}}>
				<Dropdown.Toggle variant='success' className='btn btn-secondary'>
					Day
				</Dropdown.Toggle>
				<Dropdown.Menu onChange={(e) => handleDayClick(e.currentTarget.name)}>
					<Dropdown.Item
						onClick={(e) => handleDayClick(e.currentTarget.name)}
						name='monday'>
						Monday
					</Dropdown.Item>
					<Dropdown.Item
						name='tuesday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						Tuesday
					</Dropdown.Item>
					<Dropdown.Item
						name='wednesday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						wednesday
					</Dropdown.Item>
					<Dropdown.Item
						name='thursday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						Thursday
					</Dropdown.Item>
					<Dropdown.Item
						name='friday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						Friday
					</Dropdown.Item>
					<Dropdown.Item
						name='saturday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						Saturday
					</Dropdown.Item>
					<Dropdown.Item
						name='sunday'
						onClick={(e) => handleDayClick(e.currentTarget.name)}>
						Sunday
					</Dropdown.Item>
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
								onChange={(e) =>
									handleInputChange(e.currentTarget.value, item.day, item.type)
								}
								placeholder={item.name}
								name={item.type}
								data-day={item.day}
							/>
							<button
								onClick={(e) =>
									handlePreview(
										currentNew.value,
										currentNew.day,
										currentNew.type
									)
								}>
								preview
							</button>
						</>
					);
				})}
		</div>
	);
};

export default EditWeeklySpecials;
