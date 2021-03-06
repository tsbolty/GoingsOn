import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FilterByBusinessType from "./FilterByBusinessType";
import FilterByName from "./FilterByName";
import FilterByKeyword from "./FilterByKeyword";

const Filter = ({
	filterType,
	handleFilterTypeClick,
	filterBusinessType,
	filterBusinessByName,
	filterByKeyword
}) => {
	return (
		<>
			{["Secondary"].map((variant) => (
				<DropdownButton
					as={ButtonGroup}
					key={variant}
					id={`dropdown-variants-${variant}`}
					variant={variant.toLowerCase()}
					title='Filter Type'>
					<Dropdown.Item
						eventKey='1'
						name='businessName'
						onClick={handleFilterTypeClick}>
						Business Name
					</Dropdown.Item>
					<Dropdown.Item
						eventKey='2'
						name='keyword'
						onClick={handleFilterTypeClick}>
						Keyword
					</Dropdown.Item>
					<Dropdown.Item
						eventKey='2'
						name='businessType'
						onClick={handleFilterTypeClick}>
						Business Type
					</Dropdown.Item>
				</DropdownButton>
			))}
			{filterType === "businessType" ? (
				<FilterByBusinessType filterBusinessType={filterBusinessType} />
			) : filterType === "businessName" ? (
				<FilterByName filterBusinessByName={filterBusinessByName} />
			) : filterType === "keyword" ? (
				<FilterByKeyword filterByKeyword={filterByKeyword} />
			) : null}
		</>
	);
};

export default Filter;
