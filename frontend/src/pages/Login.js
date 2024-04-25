import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const username_change = (event) => {
        setUsername(event.target.value);
    };

    const password_change = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
    };

    return (
        <div className='login-container'>
            <div className='login-top'>National Institute of Technology Srinagar</div>
            <div className='login-container-wrapper'>
                <div className='login-container-2'>
                    <img src={logo} alt="Logo"></img>
                    <h1>Scholarship Portal</h1>
                    <h3>Sign In</h3>
                    <div className='login-container-3'>
                        <span>Username</span>
                        <input type='text' value={username} onChange={username_change}></input>
                        <span>Password</span>
                        <input type='password' value={password} onChange={password_change}></input>
                    </div>
                    <button type='submit' className='submit' onClick={handleSubmit}>Submit</button>
                    <div className='Lower-buttons'>
                    <Link to="/register">
                        <button className='register'>Register</button>
                    </Link>
                    <button className='forget-password'>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}