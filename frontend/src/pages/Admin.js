import React, { useEffect, useState } from 'react';
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const URL = "http://localhost:8800/api/studentDetails/scholarshipDetail";

const Admin = ({ enrollment }) => {
    const [details, setDetails] = useState([]); // Initialize details as an empty array
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

    const handleVerificationToggle = async (studentIndex) => {
        try {
            // Assuming you have a unique identifier like student ID
            const studentId = details[studentIndex].id;
            const updatedResponse = await axios.put(`/api/update_student_verification/verify/${details._id}`);
            const updatedDetails = [...details];
            updatedDetails[studentIndex] = { ...updatedDetails[studentIndex], verification_hod: true };
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
            {details && details.length > 0 ? (
                <div className='admin-container'>
                    <div className='admin-top'>Scholarship Verification Page</div>
                    <div className="admin-container-content">
                        <div className="admin-container-content-2">
                            <div className="admin-buttons">
                                <button className='btn'>Excel Report</button>
                                <button className='btn' onClick={handleDownloadPDF}>Pdf Report</button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div id="pdf-table">
                            <table>
                            <thead>
              <tr>
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
                <th>Action</th>
              </tr>
            </thead>
                                {/* Render table headers */}
                                <tbody>
                                    {details.map((student, index) => (
                                        <tr key={index}>
                                            {/* Render student details */}
                                            <td>{student.enrollment}-{student.name}</td>
                  <td>{student.branch}</td>
                  <td>IV</td>
                  <td>{student.accountNo}</td>
                  <td>{student.totalDays}</td>
                  <td>{student.entitlement}</td>
                  <td>{student.actualScholarship}</td>
                  <td>{student.hra}</td>
                  <td>{student.netAmount}</td>
                  <td>xyz</td>
                  <td>
                            {/* Button to toggle verification status */}
                            <button onClick={handleVerificationToggle} disabled={details.verification_hod} >
                                Verify
                            </button>
                        </td>
                        <td>{details.verification_hod ? 'Verified' : 'Not Verified'}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            ) : (
                <p>No scholarship details found for this student</p>
            )}
        </>
    );
}

export default Admin;
