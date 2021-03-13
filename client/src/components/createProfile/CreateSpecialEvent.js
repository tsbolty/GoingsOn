import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";
import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

	const handleInputChange = (name, value) => {
		setEvent({ ...event, [name]: value });
	};

	const handleFormSubmit = () => {
		axios
			.post(`/api/specialevents/post/${user.email}`, {
				...event,
				email: user.email
			})
			.then(
				(res) => res.statusText === "OK" && alert("Event creation went well")
			)
			.catch((err) => alert(err));
	};

	return (
		<Form>
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
			{!free && (
				<Form.Group controlId='formGridZip'>
					<Form.Label>Cost</Form.Label>
					<Form.Control placeholder='Event Cost' />
				</Form.Group>
			)}
			<Form.Group id='formGridCheckbox'>
				<Form.Check
					onClick={() => {
						setFree(!free);
						setEvent({ ...event, cost: 0 });
					}}
					type='checkbox'
					label='Free?'
				/>
			</Form.Group>
			<Button onClick={handleFormSubmit} size='sm'>
				Submit Event
			</Button>
		</Form>
	);
};

export default CreateSpecialEvent;
