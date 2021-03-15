import React, { useState, useEffect } from "react";
import { uploadFile } from "react-s3";
import { useAuth0 } from "../../react-auth0-spa";
import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AWS from "../../utils/s3config";
import API from "../../utils/API";

const CreateSpecialEvent = () => {
	const [free, setFree] = useState(false);
	const [event, setEvent] = useState({
		email: "",
		headline: "",
		description: "",
		cost: 0,
		eventDate: ""
	});
	const { user } = useAuth0();

	useEffect(() => {
		if (event.cost !== 0) {
			setFree(false);
		}
	}, [event.cost]);

	const handleInputChange = (name, value) => {
		setEvent({ ...event, [name]: value });
	};

	const handleFormSubmit = () => {
		API.createSpecialEvent(event, user.email)
			.then(
				(res) => res.statusText === "OK" && alert("Event creation went well")
			)
			.catch((err) => alert(err));
	};
	console.log(AWS);
	const handleImageUpload = (e) => {
		console.log(e.target.files[0]);
		uploadFile(e.target.files[0], AWS)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Form>
			<input type='file' onChange={handleImageUpload} />
			<FormGroup>
				<Label for='exampleDate'>Goal End Date</Label>
				<Input
					type='date'
					name='eventDate'
					id='exampleDate'
					placeholder='date placeholder'
					onChange={(e) =>
						handleInputChange(e.currentTarget.name, e.currentTarget.value)
					}
				/>
			</FormGroup>
			<Form.Control
				name='headline'
				onChange={(e) =>
					handleInputChange(e.currentTarget.name, e.currentTarget.value)
				}
				value={event.headline}
				placeholder='Event Headline'
			/>
			<Form.Control
				name='description'
				onChange={(e) =>
					handleInputChange(e.currentTarget.name, e.currentTarget.value)
				}
				value={event.description}
				placeholder='Event Description'
			/>
			{/* {!free && ( */}
			<Form.Group controlId='formGridZip'>
				<Form.Label>Cost</Form.Label>
				<Form.Control
					name='cost'
					value={event.cost}
					onChange={(e) =>
						handleInputChange(e.currentTarget.name, e.currentTarget.value)
					}
					placeholder='Event Cost'
				/>
			</Form.Group>
			{/* )} */}
			<Form.Group id='formGridCheckbox'>
				<Form.Check
					onClick={() => {
						setFree(!free);
						setEvent({ ...event, cost: 0 });
					}}
					type='checkbox'
					label='Free?'
					checked={free}
				/>
			</Form.Group>
			<Button onClick={handleFormSubmit} size='sm'>
				Submit Event
			</Button>
		</Form>
	);
};

export default CreateSpecialEvent;
