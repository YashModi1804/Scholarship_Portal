import React, { useState } from 'react';
import logo from '../image/logo.png';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
// import { toast } from "react-toastify";
const URL = "http://localhost:8800/api/auth/signup";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        enrollment: "",
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
        console.log(user);
        
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            // const responseData = await response.json();

            if(response.ok) {
                setUser({name: "", enrollment: "", username: "", password: ""});
                toast.success("Register Successful");
                navigate("/");
            } else {
                toast.error("Invalid Data")
            }
        } catch (error) {
            console.log("signup error", error);
        }
    }

    return (
        <div className='Register-container'>
            <div className='Register-top'>National Institute of Technology Srinagar</div>
            <div className='Register-container-wrapper'>
                <div className='Register-container-2'>
                    <img src={logo} alt="Logo" />
                    <h1>Registration Form</h1>
                    <form onSubmit={handleSubmit} >
                        <div className='Register-container-3'>
                            <div className="input-group">
                                <label htmlFor="role">Role</label>
                                <select id="role" className='Register-Drop-box'>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type='text' 
                                    name='name'
                                    id='name'
                                    placeholder='Name'
                                    value={user.name}
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="enrollment">Enrollment</label>
                                <input 
                                    type='text' 
                                    name='enrollment'
                                    id="enrollment" 
                                    placeholder='Enrollment'
                                    required
                                    value={user.enrollment}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type='text' 
                                    name='username'
                                    id="username"
                                    placeholder='Username'
                                    required
                                    value={user.username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type='password' 
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    required
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>                 
                        <button type='submit' className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
