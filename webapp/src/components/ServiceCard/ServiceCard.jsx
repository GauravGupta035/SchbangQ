import React from "react";

import "./ServiceCard.scss";

const ServiceCard = (props) => {
	const handleClick = () => {
		console.log("Button cicked");
	};

	return (
		<div className='card-container'>
			<div className='card-content'>
				<h3>{props.title}</h3>
				<ul>
					<li>What we offer. Lorem ipsum</li>
					<li>What we offer. Lorem ipsum</li>
					<li>What we offer. Lorem ipsum</li>
				</ul>
				<button className='know-more' onClick={handleClick}>
					Know More
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
