import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiBaseUrl } from "../../../config";

import Header from "../../../components/Header/Header";
import "./Login.scss";

const SuperLogin = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitCred = async (event) => {
		const payload = {
			email,
			password,
		};
		axios
			.post(`${ApiBaseUrl}/super/login`, payload)
			.then((response) => {
				navigate("/superadmindashboard");
			})
			.catch((err) => {
				if (err.response) {
					alert(err.response.data.message);
				}
			});
		event.preventDefault();
	};

	return (
		<div className='super-login-container'>
			<Header />
			<div className='super-login-box'>
				<Form>
					<Form.Group>
						<h2>Super Admin Log In</h2>
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

export default SuperLogin;
