import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import logo from '../image/logo.png';
const URL = "http://localhost:8800/api/auth/signin";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const responseData = await response.json();

            if(response.ok) {
                setUser({username: "", password: "",});
                navigate("/student");
                toast.success("Login Successful");
                localStorage.setItem("userId", responseData.userId);
            } else {
                toast.error(responseData.message? responseData.message: "Invalid Credentials");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='login-container'>
            <div className='login-top'>National Institute of Technology Srinagar</div>
            <div className='login-container-wrapper'>
                <div className='login-container-2'>
                    <img src={logo} alt="Logo"></img>
                    <h1>Scholarship Portal</h1>
                    <h3>Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='login-container-3'>
                            <label htmlFor="username">Username</label>
                            <input 
                              type='text' 
                              name='username'
                              id='username'
                              placeholder='Username'
                              required
                              value={user.username}
                              onChange={handleInput}
                            />
                            <label htmlFor="username">Password</label>
                            <input 
                              type='password'
                              name='password' 
                              placeholder='Password'
                              id='password'
                              required
                              value={user.password}
                              onChange={handleInput}
                            />
                        </div>
                        <button id='login-btn' type='submit' className='btn' >Submit</button>
                        <div className='Lower-buttons'>
                        <Link to="/register">
                            <button className='register'>Register</button>
                        </Link>
                        <button className='forget-password'>Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;