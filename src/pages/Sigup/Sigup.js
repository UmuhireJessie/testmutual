import React from "react";
import Header from "../../components/Header/Header.js";
import logo from "../../assets/images/biglogo.png";
import './signup.css'

const SignUp = () => {
  return (
    <div>
      <Header />

      <div className="signup-card">
        <div className="signup-card-left">
          <img src={logo} alt="Logo" />
          <h2>WELCOME TO </h2>
          <h2>QUOTATION MANAGEMENT </h2>
          <h2>SYSTEM</h2>
        </div>
        <div className="signup-card-right">
          <div className="signup-card-r-child">
            <h3>Create New Account</h3>
          <form>
            <div className="form-field">
              <input type="text" id="firstName" placeholder="First Name" name="firstName" required />
            </div>
            <div className="form-field">
              <input type="text" id="lastName" placeholder="Last Name" name="lastName" required />
            </div>
            <div className="form-field">
              <input type="email" id="email" placeholder="Email" name="email" required />
            </div>
            <div className="form-field">
              <input type="text" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" required />
            </div>
            <div className="form-field">
              <input type="password" id="password" placeholder="Password" name="password" required />
            </div>
            <p>
              Have an account already? <a href="/">Sign in</a>
            </p>
          </form>
          </div>
          <button type="submit">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
