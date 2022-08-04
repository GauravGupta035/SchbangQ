import React from "react";

import "./EmployeeHeader.scss";

const EmployeeHeader = () => {
	return (
		<div>
			<header>
				<div className='header-content'>
					<a href='#default' className='logo'>
						SchbangQ
					</a>
					<div className='header-right'>
						<a className='nav-link' href='/employeelogin'>
							Dashboard
						</a>
						<a className='nav-link active' href='/community'>
							Community
						</a>
						<a className='nav-link' href='/store'>
							Store
						</a>
						<a className='nav-link' href='/profile'>
							Profile
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default EmployeeHeader;
