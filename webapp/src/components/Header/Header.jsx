import React from "react";

import "./Header.scss";

const Header = () => {
	return (
		<div>
			<header>
				<div className='header-content'>
					<a href='#default' class='logo'>
						SchbangQ
					</a>
					<div class='header-right'>
						<a class='nav-link' href='/employeelogin'>
							Employee Login
						</a>
						<a class='nav-link' href='/customerlogin'>
							Customer Login
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
