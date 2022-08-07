import React from "react";

import email from "../../assets/Email.png";
import text from "../../assets/Text.png";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<div className='left-content'>
					<h3>SchbangQ</h3>
					<p>
						An IT company at heart with focus on solving IT problems with a
						people-centric approach.
					</p>
				</div>
				<div className='right-content'>
					<h3>Contact Us</h3>
					<ul>
						<li>
							<img src={email} alt='email' />
							support@email.com
						</li>
						<li>
							<img src={text} alt='text' />
							+91 123 456 7889
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
