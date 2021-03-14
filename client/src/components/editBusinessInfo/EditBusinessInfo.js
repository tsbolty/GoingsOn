import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HeadlineCardContent from "../homePage/HeadlineCardContent";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import states from "../../utils/states.json";
import EditWeeklySpecials from "./EditWeeklySpecials";
import CreateSpecialEvent from "../createProfile/CreateSpecialEvent";
import Col from "../Col";

const EditBusinessInfo = ({ user, profileInfo, setProfileInfo }) => {
	const [businessInfo, setBusinessInfo] = useState({
		...profileInfo
	});
	const [address, setAddress] = useState({
		address: "",
		city: "",
		state: "",
		zip: ""
	});
	const { id } = useParams();

	const handleInputChange = (name, value) => {
		setBusinessInfo({ ...businessInfo, [name]: value });
	};

	const handleAddressChange = (name, value) => {
		setAddress({ ...address, [name]: value });
	};

	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		const newAddress = `${address.address} ${address.city}, ${address.state} ${address.zip}`;

		if (
			address.address.length &&
			address.city.length &&
			address.state.length &&
			address.zip.length
		) {
			setBusinessInfo({
				...businessInfo,
				businessAddress: newAddress,
				mapsLink: `https://www.google.com/maps/search/?api=1&${newAddress
					.replace(/\s+/g, "")
					.toLowerCase()}`
			});
		}

		fetch(`/api/allBusinessInfo/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(businessInfo)
		});
	};

	return (
		<div className='container'>
			<div className='row'>
				<HeadlineCardContent
					businessName={businessInfo.businessName || profileInfo.businessName}
					id={businessInfo._id || profileInfo._id}
					businessType={businessInfo.businessType || profileInfo.businessType}
					businessAddress={
						businessInfo.businessAddress || profileInfo.businessAddress
					}
					specialEvents={
						businessInfo.specialEvents || profileInfo.specialEvents
					}
					businessHeadline={
						businessInfo.businessHeadline || profileInfo.businessHeadline
					}
					weeklySpecials={
						businessInfo.weeklySpecials || profileInfo.weeklySpecials
					}
					styles={{ padding: "0px" }}
					columns='9'
					key={businessInfo._id}
				/>
				<Col size='3'>
					<div className='card'>
						<h3 className='card-title'>
							This is what your card will look like in search results
						</h3>
						<i class='fa fa-arrow-left fa-4x' aria-hidden='true'></i>
					</div>
				</Col>

				<Form onSubmit={handleUpdateSubmit}>
					{["Secondary"].map((variant) => (
						<DropdownButton
							as={ButtonGroup}
							key={variant}
							id={`dropdown-variants-${variant}`}
							variant={variant.toLowerCase()}
							title='New Business Type'>
							<Dropdown.Item
								eventKey='1'
								name='restaurant'
								onClick={(e) =>
									handleInputChange("businessType", e.currentTarget.name)
								}>
								Restaurant
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='2'
								name='bar'
								onClick={(e) =>
									handleInputChange("businessType", e.currentTarget.name)
								}>
								Bar
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='2'
								name='both'
								onClick={(e) =>
									handleInputChange("businessType", e.currentTarget.name)
								}>
								Both
							</Dropdown.Item>
						</DropdownButton>
					))}
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Business Name</Form.Label>
						<Form.Control
							type='name'
							name='businessName'
							onChange={(e) =>
								handleInputChange(e.currentTarget.name, e.currentTarget.value)
							}
							placeholder='Enter New Business Address'
						/>
					</Form.Group>
					<Form.Group controlId='formBasicName'>
						<Form.Label>Headline</Form.Label>
						<Form.Control
							type='name'
							name='businessHeadline'
							onChange={(e) =>
								handleInputChange(e.currentTarget.name, e.currentTarget.value)
							}
							placeholder='Business Headline'
						/>
					</Form.Group>
					<Form.Group controlId='formGridAddress'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							name='address'
							onChange={(e) =>
								handleAddressChange(e.currentTarget.name, e.currentTarget.value)
							}
							placeholder='Street Name and Number'
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group controlId='formGridCity'>
							<Form.Label>City</Form.Label>
							<Form.Control
								name='city'
								onChange={(e) =>
									handleAddressChange(
										e.currentTarget.name,
										e.currentTarget.value
									)
								}
							/>
						</Form.Group>

						<Form.Group controlId='formGridState'>
							<Form.Label>State</Form.Label>
							<Form.Control
								as='select'
								name='state'
								onChange={(e) =>
									handleAddressChange(
										e.currentTarget.name,
										e.currentTarget.value
									)
								}
								defaultValue='Choose...'>
								{states.map((state) => (
									<option value={state.abbreviation}>{state.name}</option>
								))}
							</Form.Control>
						</Form.Group>

						<Form.Group controlId='formGridZip'>
							<Form.Label>Zip</Form.Label>
							<Form.Control
								name='zip'
								onChange={(e) =>
									handleAddressChange(
										e.currentTarget.name,
										e.currentTarget.value
									)
								}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
			<br />
			<p>_______________________________________</p>
			<br />
			<EditWeeklySpecials specials={businessInfo.weeklySpecials} />
			<br />
			<br />
			<CreateSpecialEvent />
		</div>
	);
};

export default EditBusinessInfo;
