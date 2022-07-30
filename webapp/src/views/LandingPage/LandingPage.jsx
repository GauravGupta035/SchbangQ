import React from "react";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "./LandingPage.scss";


const LandingPage = () => {
	return (
		<div className='landing-container'>
			<Header />
			<div className='hero'></div>
			<h2 className='title'>About Us</h2>
			<section className='about-us'>
				<p className='about-content'>
					Lorem duis ea ad magna amet ad veniam reprehenderit quis ea cillum.
					Eiusmod esse ullamco eiusmod eiusmod magna. Lorem non nisi ipsum
					laborum dolor. Nulla anim exercitation cupidatat excepteur adipisicing
					pariatur.
				</p>
				<div className='about-image'></div>
			</section>
			<section className='mission'>
				<div className='mission-image'></div>
				<p className='mission-content'>
					Lorem duis ea ad magna amet ad veniam reprehenderit quis ea cillum.
					Eiusmod esse ullamco eiusmod eiusmod magna. Lorem non nisi ipsum
					laborum dolor. Nulla anim exercitation cupidatat excepteur adipisicing
					pariatur.
				</p>
			</section>
			<h2 className='title'>Our Services</h2>
			<section className='services'>
				<ServiceCard title='IT Services' />
				<ServiceCard title='Cyber Security' />
				<ServiceCard title='Hardware Innovation' />
				<ServiceCard title='Marketing Innovation' />
				<ServiceCard
					title='Customer Relationship
Management'
				/>
				<ServiceCard
					title='Credit Risk 
Management'
				/>
			</section>
			<Footer />
		</div>
	);
};

export default LandingPage;
