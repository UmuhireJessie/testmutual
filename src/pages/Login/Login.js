import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import logo from "../../assets/images/biglogo.png";
import './login.css'

const Login = () => {
  return (
    <div>
      <Header />

      <div className="login-card">
        <div className="login-card-left">
          <img src={logo} alt="Logo" />
          <h2>WELCOME BACK TO </h2>
          <h2>QUOTATION MANAGEMENT </h2>
          <h2>SYSTEM</h2>
        </div>
        <div className="login-card-right">
          <div className="login-card-r-child">
            <h3>Login to your Account</h3>
          <form>
            <div className="form-field">
              <input type="email" id="email" placeholder="Email/Phone Number" name="email" required />
            </div>
            <div className="form-field">
              <input type="password" id="password" placeholder="Password" name="password" required />
            </div>
            <a href="/reset-password" className="resetpass">
              Reset Password
            </a>
            <p>
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </form>
          </div>
          <button type="submit">SIGN IN</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
