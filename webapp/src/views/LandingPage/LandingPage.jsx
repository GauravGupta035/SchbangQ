import React from "react";

import Header from "../../components/Header/Header";

import "./LandingPage.scss";

const LandingPage = () => {
	return (
		<div className='landing-container'>
			<div className='heading'>
				<Header />
			</div>
			<div className='hero'></div>
			<h2 className='title'>About Us</h2>
			<section className='company-info'>
				<p className='row-content'>
					Lorem duis ea ad magna amet ad veniam reprehenderit quis ea cillum.
					Eiusmod esse ullamco eiusmod eiusmod magna. Lorem non nisi ipsum
					laborum dolor. Nulla anim exercitation cupidatat excepteur adipisicing
					pariatur.
				</p>
				<div className='image'></div>
			</section>
		</div>
	);
};

export default LandingPage;
