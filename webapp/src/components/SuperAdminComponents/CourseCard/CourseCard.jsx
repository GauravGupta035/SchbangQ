import React from "react";

import "./CourseCard.scss";

const CourseCard = (props) => {
	if (props.registered === "") {
		return (
			<div className='course-card-container'>
				<div className='card-content'>
					<div className='course-image'></div>
					<div className='course-title'>
						<p>Course | {props.taughtBy}</p>
						<h3>{props.title}</h3>
					</div>
					<div className='course-attendance'>
						<h4 className='attendees'>Attendees</h4>
						<p className='attendees-number'>{props.attendees}</p>
						<h4 className='completion-rate'>Completed</h4>
						<p className='completion-rate-number'>{props.completed}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='course-card-container'>
			<div className='card-content'>
				<div className='course-image'></div>
				<div className='course-title'>
					<p>Course | {props.taughtBy}</p>
					<h3>{props.title}</h3>
				</div>
				<div className='course-registered'>
					<h4>Registered</h4>
					<p>{props.registered}</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
