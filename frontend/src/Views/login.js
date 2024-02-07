/* /frontend/src/Views/login.js */

import axios from 'axios';
import React, { useState } from 'react';
import './style/login.css';

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    const loginDetails = {
      loginEmail,
      loginPassword,
    };

    axios.post("http://localhost:3000/user/login", loginDetails)
      .then((result) => {
        alert(result.data.message);
        localStorage.setItem("token", result.data.token);
        window.location.href = "/homePage";
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          alert(errorMessage);
        } else {
          alert("An error occurred. Please try again later.");
        }
      });
  };

  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    
    <div className="bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Tracking expenses is directly proportional to saving money.</h2>
      <div className="container mx-auto max-w-xl flex items-center justify-center">
        <div id="container" className="relative">
          {showSignUp ? (
            <div className="form-container sign-up-container w-full sm:w-1/2 bg-white p-8">
              <form action="/user/signUp" method="post">
                <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                <span className="text-sm mb-2">Fill your credentials here</span>
                <input type="text" placeholder="Name" name="name" id="name" required className="input mb-2" />
                <input type="email" placeholder="Email" name="email" id="email" required className="input mb-2" />
                <input type="password" id="password" placeholder="Password" name="password" required className="input mb-2" />
                <button id="signUpBtn" className="btn-primary">Sign Up</button>
              </form>
            </div>
          ) : (
            <div className="form-container sign-in-container w-full sm:w-1/2 bg-white p-8 relative">
              <form onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <span className="text-sm mb-2">Use your previous credentials</span>
                <input type="email" placeholder="Email" name="loginEmail" id="loginEmail" required className="input mb-2" />
                <input type="password" placeholder="Password" name="loginPassword" id="loginPassword" required className="input mb-2" />
                <a href="/password/forgotPasswordPage" className="text-blue-500 mb-2">Forgot your password?</a>
                <button id="loginBtn" className="btn-primary">Login</button>
              </form>
            </div>
          )}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="mb-4">To keep connected with us please login with your personal info</p>
                <button id="signIn" className="ghost" onClick={() => setShowSignUp(false)}>Login</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="mb-4">Enter your personal details and start journey with us</p>
                <button id="signUp" className="ghost" onClick={() => setShowSignUp(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
