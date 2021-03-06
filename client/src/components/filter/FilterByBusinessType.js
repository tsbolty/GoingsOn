import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FilterByBusinessType = ({ filterBusinessType }) => {
	return (
		<>
			{["Secondary"].map((variant) => (
				<DropdownButton
					as={ButtonGroup}
					key={variant}
					id={`dropdown-variants-${variant}`}
					variant={variant.toLowerCase()}
					title='Business Type'>
					<Dropdown.Item
						eventKey='1'
						name='restaurant'
						onClick={() => filterBusinessType("restaurant")}>
						Restaurants
					</Dropdown.Item>
					<Dropdown.Item
						eventKey='2'
						name='bar'
						onClick={() => filterBusinessType("bar")}>
						Bar
					</Dropdown.Item>
					<Dropdown.Item
						eventKey='2'
						name='both'
						onClick={() => filterBusinessType("both")}>
						Both
					</Dropdown.Item>
					<Dropdown.Item
						eventKey='2'
						name=''
						onClick={() => filterBusinessType("")}>
						All
					</Dropdown.Item>
				</DropdownButton>
			))}
			{/* <button onClick= {handleFil+terSubmit}>Submit Filter</button> */}
		</>
	);
};

export default FilterByBusinessType;
