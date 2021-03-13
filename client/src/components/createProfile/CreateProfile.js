import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CreateProfile = ({ profileInfo, setProfileInfo }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfileInfo({ ...profileInfo, [name]: value });
	};

	const handleBusinessTypeClick = (e) => {
		setProfileInfo({ ...profileInfo, businessType: e.target.name });
	};

	return (
		<>
			<div>
				<input
					type='text'
					name='businessName'
					value={profileInfo.businessName}
					placeholder='Business Name'
					onChange={handleInputChange}
				/>
				<Dropdown>
					<Dropdown.Toggle variant='success' id='dropdown-basic'>
						Business Type
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item
							name='restaurant'
							value='restaurant'
							onClick={handleBusinessTypeClick}>
							Restaurant
						</Dropdown.Item>
						<Dropdown.Item
							name='bar'
							value='bar'
							onClick={handleBusinessTypeClick}>
							Bar
						</Dropdown.Item>
						<Dropdown.Item
							name='both'
							value='both'
							onClick={handleBusinessTypeClick}>
							Both
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<input
					type='text'
					name='businessHeadline'
					value={profileInfo.businessHeadline}
					placeholder='Headline'
					onChange={handleInputChange}
				/>
				<input
					type='text'
					name='businessAddress'
					value={profileInfo.businessAddress}
					onChange={handleInputChange}
					placeholder='Business Address'
				/>
				<br />
				{/* <button onClick= {()=> submitBusinessInfo()}>Submit Business Info</button> */}
			</div>
			<br />
		</>
	);
};

export default CreateProfile;
