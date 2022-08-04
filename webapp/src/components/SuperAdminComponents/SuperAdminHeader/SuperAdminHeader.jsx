import React from "react";

import "./SuperAdminHeader.scss";

const SuperAdminHeader = () => {
	return (
		<header>
			<div className='header-content'>
				<a href='#default' className='logo'>
					SchbangQ
				</a>
				<div className='header-right'>
					<a className='nav-link active' href='/superadmindashboard'>
						Dashboard
					</a>
					<a className='nav-link' href='/community'>
						Community
					</a>
					<a className='nav-link' href='/store'>
						Courses
					</a>
					<a className='nav-link' href='/profile'>
						Profile
					</a>
				</div>
			</div>
		</header>
	);
};

export default SuperAdminHeader;
