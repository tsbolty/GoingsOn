import React from "react";
import { Link, useParams } from "react-router-dom";

const HeadlineCardContent = ({
	businessName,
	id,
	businessType,
	businessAddress,
	businessHeadline,
	daySpecials,
	weeklySpecials
}) => {
	return (
		<div className='card headline-card' key={id}>
			<h4>{`${businessName} (${businessType})`}</h4>
			<h5>{businessHeadline}</h5>
			<p>{businessAddress}</p>
			{businessAddress && (
				<a
					href={`https://www.google.com/maps/search/?api=1&query=${businessAddress
						.replace(/ /gi, "+")
						.toLowerCase()}`}
					target='_blank'>
					Google Maps
				</a>
			)}
			<Link
				to={{
					pathname: `/infopage/${id}`,
					state: {
						businessInfo: {
							businessName,
							id,
							businessType,
							businessAddress,
							daySpecials,
							weeklySpecials
						}
					}
				}}
				id={id}>
				See All the Deals
			</Link>
		</div>
	);
};

export default HeadlineCardContent;
