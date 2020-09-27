import React, { useState, useEffect } from 'react';
import "./Login.css";
import { Redirect } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleLogin = () => {
        if (email.length > 0 && password.length > 0) {
            if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                if (email === "test@test.com" && password === "test123") {
                    setLoginError(false)
                    setRedirect(true)
                    localStorage.setItem("email", email);
                    localStorage.setItem("token", "adsjkfhdf6ADFfsadfaASDF344FG$#dgdfg")
                }
                else {
                    setLoginError(true)
                }
            }
            else {
                setemailError(true)
            }
        }
        else {
            if (email.length === 0 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setemailError(true);
            }
            if (password.length === 0) {
                setpasswordError(true);
            }
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setRedirect(true)
        }
    })

    if (redirect) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div className="loginFormContainer">
            <div className="loginForm">
                <div className="loginHeader">
                    Login
                </div>
                <div className="loginInput">
                    <input type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setemailError(false)
                            setLoginError(false)
                        }}
                        placeholder="Enter your email"
                    />
                    {
                        emailError ?
                            <div className="errorMessage">* Please provide a valid email address.</div>
                            : null
                    }
                </div>
                <div className="loginInput">
                    <input type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setpasswordError(false)
                            setLoginError(false)
                        }}
                        placeholder="Enter your password"
                    />
                    {
                        passwordError ? <div className="errorMessage">* Password is required.</div> : null
                    }
                </div>
                <button className="loginButton"
                    onClick={handleLogin}
                >
                    Login
                </button>
                {
                    loginError ? <div className="errorMessage" style={{ fontSize: '13px' }}>Wrong email or password.</div> : null
                }
            </div>
        </div>
    )
}
