import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import "./StaffLogin.scss";

const StaffLogin = (props) => {
	const navigate = useNavigate();

	const [staffLoginCredentials, setStaffLoginCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setStaffLoginCredentials((prevValue) => {
			return {
				...prevValue,
				[event.target.name]: event.target.value,
			};
		});
	};

	const submitCred = (event) => {
		console.log(staffLoginCredentials.email);
		console.log(staffLoginCredentials.password);

		navigate("/superadmindashboard");
	};

	return (
		<div className='staff-login-container'>
			<Header />
			<div className='staff-login-box'>
				<Form>
					<Form.Group>
						<h2>Staff Log In</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className='input-container'
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={handleChange}
							value={staffLoginCredentials.email}
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
							value={staffLoginCredentials.password}
						/>
					</Form.Group>
					<div className='btn'>
						<button type='submit' className='submit-btn' onClick={submitCred}>
							Log In
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default StaffLogin;
