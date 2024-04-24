import React, { useState } from 'react';
import logo from '../image/logo.png';

export default function Register() {
    const [role, setRole] = useState('student');
    const [name, setName] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const RoleChange= (event) => {
        setRole(event.target.value);
    };

    const NameChange= (event) => {
        setName(event.target.value);
    };

    const EnrollmentChange= (event) => {
        setEnrollment(event.target.value);
    };

    const UsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
    };

    return (
        <div className='Register-container'>
            <div className='Register-top'>National Institute of Technology Srinagar</div>
            <div className='Register-container-wrapper'>
                <div className='Register-container-2'>
                    <img src={logo} alt="Logo" />
                    <h1>Registration Form</h1>
                    <h3>Sign Up</h3>
                    <div className='Register-container-3'>
                        <label htmlFor="role">Role</label>
                        <select id="role" value={role} onChange={RoleChange}>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="name">Name</label>
                        <input type='text' id="name" value={name} onChange={NameChange} />
                        <label htmlFor="enrollment">Enrollment</label>
                        <input type='text' id="enrollment" value={enrollment} onChange={EnrollmentChange} />
                        <label htmlFor="username">Username</label>
                        <input type='text' id="username" value={username} onChange={UsernameChange} />
                        <label htmlFor="password">Password</label>
                        <input type='password' id="password" value={password} onChange={PasswordChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
