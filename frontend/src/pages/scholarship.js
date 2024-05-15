import React, { useState, useEffect } from 'react';
import axios from 'axios';
import month from 'months';

const ScholarshipDetails = ({ enrollment }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScholarshipDetails = async () => {
            try {
                const userId = localStorage.getItem("userId");
                const response_user = await axios.get(`/api/get_user/${userId}`);
                const {enrollment} = response_user.data;
                const response = await axios.get(`/api/student_details_user/${enrollment}`);
                setDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching scholarship details:', error);
                setLoading(false);
            }
        };

        fetchScholarshipDetails();
    }, [enrollment]);

    // Function to handle student verification status toggle
    const handleVerificationToggle = async () => {
        try {
            // Update student verification status in the backend
    
            // Refresh details after updating verification status
            const updatedResponse = await axios.put(`/api/update_student_verification/verify/${details._id}`);
            const updatedDetails = { ...details, verification_student: true }; // Assuming the verification_student field should be set to true after verification
            setDetails(updatedDetails);
        } catch (error) {
            console.error('Error updating verification status:', error);
        }
    };
    


    if (loading) {
        return <p>Loading scholarship details...</p>;
    }

    if (!details) {
        return <p>No scholarship details found for this student</p>;
    }

    return (
        <div className="scholarship-details">
            <h2>Scholarship Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Month</th>
                        <th>Reg No-Name</th>
                        <th>Branch</th>
                        <th>Semester</th>
                        <th>Bank A/C</th>
                        <th>Total Days</th>
                        <th>Entitlement</th>
                        <th>Actual Scholarship</th>
                        <th>HRA @18% of Scholarship</th>
                        <th>Net Amount</th>
                        <th>Supervisor</th>
                        <th>Student Verification</th> {/* New column for verification status */}
                        <th>check</th> {/* New column for verification status */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{details.verification_supervisor ? 'Under Process' : 'Verification Pending'}</td>
                        <td>{month[new Date().getMonth()]}</td> {/* Displaying month name */}
                        <td>{details.enrollment}</td>
                        <td>{details.branch}</td>
                        <td>{details.semester}</td>
                        <td>{details.bankAccount}</td>
                        <td>{details.totalDays}</td>
                        <td>{details.entitlement}</td>
                        <td>{details.actualScholarship}</td>
                        <td>{details.hra}</td>
                        <td>{details.netAmount}</td>
                        <td>{details.supervisor}</td>
                        <td>
                            {
                            details.verification_supervisor ? 
                            (
                                details.verification_student ? (<button className='btn' onClick={handleVerificationToggle} disabled={details.verification_student} 
                                style={{backgroundColor:'transparent', color: '#4285f4', cursor:'not-allowed' }}>Verified</button>) : 
                                (<button className='btn' onClick={handleVerificationToggle} disabled={details.verification_student} >Verify</button>)
                            ): ""
                            }
                            </td>
                        {/* <td>
                            {
                            details.verification_student ? (<button className='btn' onClick={handleVerificationToggle} disabled={details.verification_student} >Verified</button>) : 'Not Verified'
                            }
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipDetails;
