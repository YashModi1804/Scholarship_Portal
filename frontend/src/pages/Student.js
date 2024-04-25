import React from 'react';
import { useState } from 'react';

const StudentPortal = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Profile':
                return <div>Profile content goes here</div>;
            case 'ScholarshipStatus':
                return <div>Scholarship Status content goes here</div>;
            case 'PreviousScholarships':
                return <div>Previous Scholarships content goes here</div>;
            default:
                return null;
        }
    };
    return (
        <div className="student-portal-container">
            <div className="sidebar">
                <div className={`sidebar-item ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => handleTabChange('Profile')}>
                    Profile
                </div>
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
    );
};

export default StudentPortal;
