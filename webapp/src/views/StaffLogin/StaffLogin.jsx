import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiBaseUrl } from "../../config";

import Header from "../../components/Header/Header";
import "./StaffLogin.scss";

const StaffLogin = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitCred = async (event) => {
		event.preventDefault()
		const payload = {
			email,
			password
		}
		await axios.post(`${ApiBaseUrl}/`, payload).then((response) => {
			alert("Success" + response.status)
		}).catch((err) => {
			if (err.response) {
				console.log(err.response.data)
			}
		})
		// navigate("/superadmindashboard");
	};

	return (
		<div className='staff-login-container'>
			<Header />
			<div className='staff-login-box'>
				<Form>
					<Form.Group>
						<h2>Staff Log In</h2>
					</Form.Group>
					<Form.Group className='mb-3' onSubmit={submitCred}>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className='input-container'
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							className='input-container'
							type='password'
							placeholder='Enter password'
							name='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
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
