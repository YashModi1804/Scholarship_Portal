import React from 'react';
import { useState } from 'react';
import './Student.css'
import Profile from './Profile'
import Scholarship from './scholarship'
import Previous from './Previous_Scholarship'
const StudentPortal = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Profile':
                return <div className='Student-Profile'><Profile/></div>;
            case 'ScholarshipStatus':
                return <div className='Student-Status'><Scholarship/></div>;
            case 'PreviousScholarships':
                return <div className='Student-Previous'><Previous/></div>;
            default:
                return null;
        }
    };
    return (
        <>
        <div className='student-top'>National Institute of Technology Srinagar</div>
        <div className="student-portal-container">
            <div className="sidebar">
                {/* <div className={`sidebar-item ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => handleTabChange('Profile')}>
                    Profile
                </div> */}
                <div className={`sidebar-item ${activeTab === 'ScholarshipStatus' ? 'active' : ''}`} onClick={() => handleTabChange('ScholarshipStatus')}>
                    Scholarship Status
                </div>
                <div className={`sidebar-item ${activeTab === 'PreviousScholarships' ? 'active' : ''}`} onClick={() => handleTabChange('PreviousScholarships')}>
                    Previous Scholarships
                </div>
            </div>
            <div className="main-content">
                {renderTabContent()}
            </div>
        </div>
        </>
    );
};

export default StudentPortal;
