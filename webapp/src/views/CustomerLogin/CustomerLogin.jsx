import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Header from "../../components/Header/Header";
import "./CustomerLogin.scss";

const CustomerLogin = (props) => {
	const [loginCredentials, setLoginCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setLoginCredentials((prevValue) => {
			return {
				...prevValue,
				[event.target.name]: event.target.value,
			};
		});
	};

	const submitCred = (event) => {
		console.log(loginCredentials.email);
		console.log(loginCredentials.password);
	};

	return (
		<div className='login-container'>
			<Header />
			<div className='login-box'>
				<Form>
					<Form.Group>
						<h2>Log In</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className='input-container'
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={handleChange}
							value={loginCredentials.email}
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
							value={loginCredentials.password}
						/>
					</Form.Group>
					<div className='btn'>
						<button type='submit' className='submit-btn' onClick={submitCred}>
							Log In
						</button>
					</div>

					<p className='hr-lines'> OR </p>
					<div className='btn'>
						<button className='google'>Continue with Google</button>
					</div>
				</Form>
				<p>
					Don't have an account? <a href='/customersignup'>Create an account</a>
				</p>
			</div>
		</div>
	);
};

export default CustomerLogin;
