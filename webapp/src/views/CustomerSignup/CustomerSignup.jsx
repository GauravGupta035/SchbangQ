import React from 'react'
import Header from "../../components/Header/Header";
import "./CustomerSignup.scss";

function CustomerSignup() {
  return (
    <div className='signup-container'>
        <Header/>
        <div className='signup-box'>
            <h1>Sign Up</h1>
            <div className="input-container">
                <input id="textbox" type="text" name="uname" placeholder="Username" required />
            </div>
            <div className="input-container">
                <input id="textbox" type="text" name="uname" placeholder="Email ID" required />
            </div>
            <div className="input-container">
                <input id="textbox" type="password" name="pass" placeholder="Password" required />
            </div>
            <div className="input-container">
                <input id="textbox" type="password" name="pass" placeholder="Re-enter Password" required />
            </div>
            <div className="button-container">
                <input id="submit" type="submit" value="Sign Up"/>
            </div>
            <h2 class="hr-lines"> OR </h2>
            
            <button id='google'>Continue with Google</button>
            <h5>Already have an account? <a href='customerlogin'>Login</a></h5>
        </div>
    </div>
  )
}

export default CustomerSignup