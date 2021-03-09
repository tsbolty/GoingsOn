import React, { useState } from "react";
import HeadlineCardContent from "../homePage/HeadlineCardContent";
import { Form, Button, Col } from "react-bootstrap";
import { useParams } from "react-router";
import states from "../../utils/states.json";

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
		<div>
			<HeadlineCardContent
				businessName={businessInfo.businessName || profileInfo.businessName}
				id={businessInfo._id || profileInfo._id}
				businessType={businessInfo.businessType || profileInfo.businessType}
				businessAddress={
					businessInfo.businessAddress || profileInfo.businessAddress
				}
				daySpecials={businessInfo.daySpecials || profileInfo.daySpecials}
				businessHeadline={
					businessInfo.businessHeadline || profileInfo.businessHeadline
				}
				weeklySpecials={
					businessInfo.weeklySpecials || profileInfo.weeklySpecials
				}
				key={businessInfo._id}
			/>
			<Form onSubmit={handleUpdateSubmit}>
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
					<Form.Group as={Col} controlId='formGridCity'>
						<Form.Label>City</Form.Label>
						<Form.Control
							name='city'
							onChange={(e) =>
								handleAddressChange(e.currentTarget.name, e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>State</Form.Label>
						<Form.Control
							as='select'
							name='state'
							onChange={(e) =>
								handleAddressChange(e.currentTarget.name, e.currentTarget.value)
							}
							defaultValue='Choose...'>
							{states.map((state) => (
								<option value={state.abbreviation}>{state.name}</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId='formGridZip'>
						<Form.Label>Zip</Form.Label>
						<Form.Control
							name='zip'
							onChange={(e) =>
								handleAddressChange(e.currentTarget.name, e.currentTarget.value)
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
	);
};

export default EditBusinessInfo;
