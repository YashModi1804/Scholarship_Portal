import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ScholarshipDetails = ({ enrollment }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScholarshipDetails = async () => {
            try {
                const response = await axios.get(`/api/student_details_user/${"2022PHACSE051"}`);
                setDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching scholarship details:', error);
                setLoading(false);
            }
        };

        fetchScholarshipDetails();
    }, [enrollment]);

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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{details.verification_supervisor ? 'Under Process' : 'Verification Pending'}</td>
                        <td>{details.month}</td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipDetails;
