import React from "react";

import "./Header.scss";

const Header = () => {
	return (
		<div>
			<header>
				<div className='header-content'>
					<a href='#default' className='logo'>
						SchbangQ
					</a>
					<div className='header-right'>
						<a className='nav-link' href='/employeelogin'>
							Employee Login
						</a>
						<a className='nav-link' href='/customerlogin'>
							Customer Login
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
