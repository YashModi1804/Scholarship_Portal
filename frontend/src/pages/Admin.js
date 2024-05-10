import React, { useEffect, useState } from 'react';
import axios from "axios";
import jsPDF from 'jspdf';
import month from 'months'
import html2canvas from 'html2canvas';


const Admin = ({ enrollment }) => {
    const [details, setDetails] = useState(null); // Initialize details as an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchScholarshipDetails = async () => {
        try {
            const response = await axios.get(`/api/student_details_user/${"2022PHACSE000"}`);
            setDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching scholarship details:', error);
            setLoading(false);
        }
    };

        fetchScholarshipDetails();
    }, [enrollment]);

    const handleDownloadPDF = () => {
        const input = document.getElementById('pdf-table');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 210;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save("download.pdf");
            });
    };

    const handleVerificationToggle = async () => {
        try {
            // Assuming you have a unique identifier like student ID
            const updatedResponse = await axios.put(`/api/update_hod_verification/verify/${details._id}`);
            const updatedDetails = { ...details, verification_hod: true }; // Correct way to update state immutably
            setDetails(updatedDetails);
        } catch (error) {
            console.error('Error updating verification status:', error);
        }
    };
    

    if (loading) {
        return <p>Loading scholarship details...</p>;
    }

    return (
        <>
            <div className="scholarship-details">
            <h2>Scholarship Details</h2>
            <table>
                <thead>
                    <tr>
                        {/* <th>Status</th> */}
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
                        {/* <td>{details.verification_supervisor ? 'Under Process' : 'Verification Pending'}</td> */}
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
                            {/* Button to toggle verification status */}
                            {
                            details.validation_supervisor ?
                            (<button onClick={handleVerificationToggle} disabled={details.verification_hod} >
                                Verify
                            </button>): ""
                            }
                        </td>
                        <td>{details.verification_hod ? 'Verified' : 'Not Verified'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Admin;
