import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const URL="http://localhost:8800/api/admin_details/admin/create"
const AdminForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        department: '',
        position: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
                body: JSON.stringify(formData),
              });
              const responseData = await response.json();
            //   console.log("response : ", response);
            if(response.ok) {
                setFormData({
                    username: '',
                    password: '',
                    name: '',
                    department: '',
                    position: ''
                });
                toast.success('Student data inserted successfully!');
               
            } else {
                toast.error(responseData.message? responseData.message: "Fill the Input properly")
            }
        } catch (error) {
            // Handle errors
            console.error('Error inserting student data:', error);
            // Optionally, display an error message to the user
            toast.error('Error inserting student data. Please try again later.');
        }
    };
    

    return (
        <div className="container">
            <h2>Create Admin User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required />
                </div>
                <button type="submit">Create Admin User</button>
            </form>
        </div>
    );
};

export default AdminForm;
