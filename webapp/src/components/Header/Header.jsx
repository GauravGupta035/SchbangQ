import React from "react";
import {Link} from "react-router-dom";

import "./Header.scss";

const Header = () => {
	return (
		<div>
			<header>
				<div className='header-content'>
					<Link to='/' className='logo'>
						SchbangQ
					</Link>
					<div className='header-right'>
						<Link className='nav-link' to='/stafflogin'>
							Staff Login
						</Link>
						<Link className='nav-link' to='/customerlogin'>
							Customer Login
						</Link>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
