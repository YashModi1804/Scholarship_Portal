// React component file (InsertStudentData.jsx)
import React, { useState } from 'react';
import axios from 'axios';
import './developer.css'; // Import CSS file
import { toast } from 'react-toastify';

const URL = "http://localhost:8800/api/developer/students_data";


const InsertStudentData = () => {
    const [formData, setFormData] = useState({
        name: '',
        enrollment: '',
        supervisor: '',
        branch: ''
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
                    name: '',
                    enrollment: '',
                    supervisor: '',
                    branch: ''
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
            <h2>Insert Student Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className='developer-input' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="enrollment">Enrollment:</label>
                    <input  className='developer-input' type="text" id="enrollment" name="enrollment" value={formData.enrollment} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="supervisor">Supervisor:</label>
                    <input className='developer-input' type="text" id="supervisor" name="supervisor" value={formData.supervisor} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Department:</label>
                    <input className='developer-input' type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InsertStudentData;
