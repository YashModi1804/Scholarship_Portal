import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await fetch('/api/profile'); 
            if (!response.ok) {
                throw new Error('Failed to fetch profile data');
            }
            const data = await response.json();
            setProfileData(data);
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    return (
        <div>
            <h2>Profile</h2>
            {profileData ? (
                <div>
                    <p>Name: {profileData.name}</p>
                    <p>Enrollment: {profileData.enrollment}</p>
                    <p>Course: {profileData.course}</p>
                    <p>Supervisor Name: {profileData.supervisor}</p>
                    <p>Department: {profileData.department}</p>
                </div>
            ) : (
                <p>Loading profile data...</p>
            )}
        </div>
    );
};

export default Profile;
