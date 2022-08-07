import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Header from "../../components/Header/Header";
import "./CustomerSignup.scss";

const CustomerSignup = (props) => {
	const [signupCredentials, setSignupCredentials] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setSignupCredentials((prevValue) => {
			return {
				...prevValue,
				[event.target.name]: event.target.value,
			};
		});
	};

	const submitCred = (event) => {
		console.log(signupCredentials.email);
		console.log(signupCredentials.password);
	};

	return (
		<div className='signup-container'>
			<Header />
			<div className='signup-box'>
				<Form>
					<Form.Group>
						<h2>Sign Up</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicUsername'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							className='input-container'
							type='text'
							placeholder='Enter username'
							name='username'
							onChange={handleChange}
							value={signupCredentials.username}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className='input-container'
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={handleChange}
							value={signupCredentials.email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							className='input-container'
							type='password'
							placeholder='Enter password'
							name='password'
							onChange={handleChange}
							value={signupCredentials.password}
						/>
					</Form.Group>
					<div className='btn'>
						<button type='submit' className='submit-btn' onClick={submitCred}>
							Sign Up
						</button>
					</div>
				</Form>
				<p>
					Already have an account? <a href='/customerlogin'>Login</a>
				</p>
			</div>
		</div>
	);
};

export default CustomerSignup;
