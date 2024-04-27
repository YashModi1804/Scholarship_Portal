import React, { useState, useEffect } from 'react';
// import user from '../image/user.png'
const Profile = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // Simulated data fetch
        const fetchData = async () => {
            // Replace this with your actual data fetching logic
            const data = [
                { id: 1, 
                  name: 'Akshat Verma', 
                  enrollment:'2022BCSE001',
                  Semester:4,
                  Session:'Spring 2024', 
                  courseName: 'Computer Science',
                  contactNumber: '1234567890',
                  email: 'akshat@example.com',
                  income: 'Rs 50000',
                  category: 'General',
                  permanentAddress: '123, ABC Street, XYZ City'
                }
                // Add more profiles as needed
            ];
            setProfiles(data);
        };

        fetchData();
    }, []);

    return (
        <div className="profile-container">
            <h1 className="profile-title">Student Profiles</h1>
            <div className="profile-table">
                {profiles.map(profile => (
                    <div key={profile.id} className="profile-details">
                        <div className="profile-info">
                            <p><strong>Name:</strong> {profile.name}</p>
                            <p><strong>Enrollment:</strong> {profile.enrollment}</p>
                            <p><strong>Session:</strong> {profile.Session}, Semester {profile.Semester}</p>
                            <p><strong>Course:</strong> {profile.courseName}</p>
                        </div>
                        <div className="profile-contact">
                            <p><strong>Contact Number:</strong> {profile.contactNumber}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Income:</strong> {profile.income}</p>
                            <p><strong>Category:</strong> {profile.category}</p>
                            <p><strong>Permanent Address:</strong> {profile.permanentAddress}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
