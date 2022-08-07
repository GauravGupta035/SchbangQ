import React from "react";

import "./MilestoneCard.scss";

const MilestoneCard = () => {
	return (
		<div className='milestone-container'>
			<h4>Milestone Card</h4>
			<div className='deadline'>30/07/2022</div>
			<div className='completion-status'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					class='bi bi-check'
					viewBox='0 0 16 16'
				>
					<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
				</svg>
				<p className='completed'>Completed</p>
			</div>
			<div className='assigner'>
				<p className='assigned-by'>Assigned by</p>
				<div className='assigner-profile'></div>
				<p className='assigner-name'>Assigner Name</p>
			</div>
		</div>
	);
};

export default MilestoneCard;
