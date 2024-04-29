// React component file (InsertStudentData.jsx)
import React, { useState } from 'react';
import axios from 'axios';
import './developer.css'; // Import CSS file

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
            // Send a POST request to the backend API to insert the data
            await axios.post('/api/developer/students_data', formData); // Updated API endpoint
            // If successful, clear the form
            setFormData({
                name: '',
                enrollment: '',
                supervisor: '',
                branch: ''
            });
            // Optionally, display a success message or redirect the user
            alert('Student data inserted successfully!');
        } catch (error) {
            // Handle errors
            console.error('Error inserting student data:', error);
            // Optionally, display an error message to the user
            alert('Error inserting student data. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h2>Insert Student Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="enrollment">Enrollment:</label>
                    <input type="text" id="enrollment" name="enrollment" value={formData.enrollment} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="supervisor">Supervisor:</label>
                    <input type="text" id="supervisor" name="supervisor" value={formData.supervisor} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Department:</label>
                    <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InsertStudentData;
