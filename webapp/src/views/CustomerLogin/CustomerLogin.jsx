import React from 'react'
import Header from "../../components/Header/Header";
import "./CustomerLogin.scss";

function CustomerLogin() {
  return (
    <div className='login-container'>
        <Header/>
        <div className='login-box'>
            <h1>Login</h1>
            <div className="input-container">
                <input id="textbox" type="text" name="uname" placeholder="Username / Email ID" required />
            </div>
            <div className="input-container">
                <input id="textbox" type="password" name="pass" placeholder="Password" required />
            </div>
            <div className="button-container">
                <input id="submit" type="submit" value="Login"/>
            </div>
            <h2 class="hr-lines"> OR </h2>
            
            <button id='google'>Continue with Google</button>
            <h5>Don't have an account? <a href='/customersignup'>Create an account</a></h5>
        </div>
    </div>
  )
}

export default CustomerLogin