import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { PiStudent } from "react-icons/pi";
import { SiStatuspage } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const URL = "http://localhost:8800/api/studentDetails/scholarshipDetail";
  


   
const AllAdmin = () => {
  const [scholarshipDetail, setScholarshipDetail] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    enrollment: '',
    semester: '',
    branch: '',
    bankAccount: '',
    totalDays: '',
    entitlement: '',
    actualScholarship: '',
    hra: '',
    netAmount: '',
    verification_supervisor: ''
  });
  const [loading, setLoading] = useState(true);

  // Fetching supervisor details and filtering students
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`/api/get_supervisor/${userId}`);
        const { name, department } = response.data; // Assuming the API returns name and department of the admin user
        const studentsResponse = await axios.get('/getScholarshipDetail');
        const filteredStudents = studentsResponse.data.filter(student => student.supervisor === name && student.branch === department);
        setScholarshipDetail(filteredStudents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching admin details:', error);
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, []);

<<<<<<< HEAD
  // Function to handle student verification status toggle
  // const handleVerificationToggle = async (index) => {
  //   try {
  //     // Update student verification status in the backend
  //     const updatedResponse = await axios.put(`/api/update_supervisor_verification/verify/${scholarshipDetail[index]._id}`);
  //     // Update the specific student's details in the state
  //     setScholarshipDetail({...scholarshipDetail[index], verification_supervisor: true});
  //       // console.log("id ",scholarshipDetail[index]._id);
  //   } catch (error) {
  //     console.error('Error updating verification status:', error);
  //     console.log("id ",scholarshipDetail[index]._id);

  //   }
  // };
  // check

  // Function to handle student verification status toggle
  const handleVerificationToggle = async (index) => {
    try {
      if (scholarshipDetail[index]) { // Use square brackets to access array element
        // Update student verification status in the backend
        const updatedResponse = await axios.put(`/api/update_supervisor_verification/verify/${scholarshipDetail[index]._id}`);
        
        // Update the specific student's details in the state
        const updatedScholarshipDetail = [...scholarshipDetail]; // Make a copy of the state array
        updatedScholarshipDetail[index] = {
          ...updatedScholarshipDetail[index],
          verification_supervisor: true // Update the verification supervisor status
        };
        
        setScholarshipDetail(updatedScholarshipDetail); // Update the state with the modified array
        toast.success("Verification Successful");
      } else {
        console.error('Student data not found at index:', index);
        toast.error("Failed to update verification status: Student data not found");
      }
=======
  const handleVerificationToggle = async (index) => {
    try {
      const student = scholarshipDetail[index];
      const updatedResponse = await axios.put(`/api/update_supervisor_verification/verify/${student._id}`);
      const updatedStudent = { ...student, verification_supervisor: true };
      setScholarshipDetail(prevDetails => prevDetails.map((item, idx) => idx === index ? updatedStudent : item));
>>>>>>> 6ae586ff40a9f0a921c867d2168ed50f636855ad
    } catch (error) {
      console.error('Error updating verification status:', error);
      toast.error("Failed to update verification status");
    }
  };
  
  


  const handleValidationToggle = async (index) => {
    try {
      const student = scholarshipDetail[index];
      const updatedResponse = await axios.put(`/api/update_supervisor_validation/validate/${student._id}`);
      const updatedStudent = { ...student, validation_supervisor: true };
      setScholarshipDetail(prevDetails => prevDetails.map((item, idx) => idx === index ? updatedStudent : item));
    } catch (error) {
      console.error('Error updating validation status:', error);
    }
  };

  useEffect(() => {
    axios.get('/getScholarshipDetail')
      .then(response => {
        setScholarshipDetail(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          enrollment: '',
          semester: '',
          branch: '',
          bankAccount: '',
          totalDays: '',
          entitlement: '',
          actualScholarship: '',
          hra: '',
          netAmount: ''
        });
        toast.success("Update Successful");
        setEditIndex(null);
        // Fetch updated details
        const updatedDetails = await axios.get('/getScholarshipDetail');
        setScholarshipDetail(updatedDetails.data);
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.log("Error updating details: ", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(scholarshipDetail[index]);
  };

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

  const handleStatusPage = () => {
    navigate('/status');
  };

  const handleBankDetail = () => {
    navigate('/BankAcc');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='admin-container'>
        <div className='admin-top'>Scholarship Entry Page</div>
        <div className="admin-container-content">
          <div className="admin-container-content-1">
            <div className="admin-sidebar">
              <div className="admin-sidebar-content">
                <div className="current-admin line"><FaRegUserCircle className='react-icon' /> #Sumit</div>
                <div className="line"><PiStudent /> Student Details</div>
                <div className="line" onClick={handleStatusPage}><SiStatuspage /> Status</div>
                <div className="line" onClick={handleBankDetail}><CiBank /> Bank's Details</div>
              </div>
            </div>
          </div>
          <div className="admin-container-content-2">
            <div className="admin-content">
              <div className='admin-content-1'>
                <label htmlFor="session"><span>*</span>Session</label>
                <select className='session-Drop-box drop-box'>
                  <option value="session">SPRING 2024</option>
                  <option value="session">AUTUMN 2024</option>
                </select>
                <label htmlFor="year"><span>*</span>Year</label>
                <select className='year-Drop-box drop-box'>
                  <option value="student">2024</option>
                  <option value="admin">2023</option>
                </select>
                <label htmlFor="month"><span>*</span>Month</label>
                <select className='month-Drop-box drop-box'>
                  <option value="student">April</option>
                  <option value="admin">March</option>
                </select>
              </div>
              <div className='admin-content-2'>
                <label htmlFor="degree"><span>*</span>Degree</label>
                <select className='degree-Drop-box drop-box'>
                  <option value="student">PhD</option>
                </select>
                <label htmlFor="branch"><span>*</span>Branch</label>
                <select className='branch-Drop-box drop-box'>
                  <option value="student">Computer Science Engineering</option>            
                </select>
              </div>
            </div>
            <div className="admin-buttons">
              <button className='btn' onClick={() => setShowTable(true)}>Show</button>
              <button className='btn'>Excel Report</button>
              <button className='btn' onClick={handleDownloadPDF}>Pdf Report</button>
            </div>
          </div>
        </div>
      </div>
      {showTable && (
        <form onSubmit={handleSubmit}>
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
              <tbody>
                {scholarshipDetail.map((student, index) => (
                  <tr key={index}>
                    <td>{student.enrollment}-{student.name}</td>
                    <td>{student.branch}</td>
                    <td>IV</td>
                    <td>{student.accountNo}</td>
                    <td><input
                      type="number"
                      name='totalDays'
                      id='totalDays'
                      required
                      disabled={index !== editIndex}
                      value={index === editIndex ? formData.totalDays : scholarshipDetail[index]?.totalDays}
                      onChange={handleInputChange}
                    /></td>
                    <td><input
                      type="number"
                      name='entitlement'
                      id='entitlement'
                      required
                      disabled={index !== editIndex}
                      value={index === editIndex ? formData.entitlement : scholarshipDetail[index]?.entitlement}
                      onChange={handleInputChange}
                    /></td>
                    <td><input
                      type="number"
                      name='actualScholarship'
                      id='actualScholarship'
                      required
                      disabled={index !== editIndex}
                      value={index === editIndex ? formData.actualScholarship : scholarshipDetail[index]?.actualScholarship}
                      onChange={handleInputChange}
                    /></td>
                    <td><input
                      type="number"
                      name='hra'
                      id='hra'
                      required
                      disabled={index !== editIndex}
                      value={index === editIndex ? formData.hra : scholarshipDetail[index]?.hra}
                      onChange={handleInputChange}
                    /></td>
                    <td><input
                      type="number"
                      name='netAmount'
                      id='netAmount'
                      required
                      disabled={index !== editIndex}
                      value={index === editIndex ? formData.netAmount : scholarshipDetail[index]?.netAmount}
                      onChange={handleInputChange}
                    /></td>
                    <td>{student.supervisor}</td>
                    <td>
                      <div className='btn-action'>
<<<<<<< HEAD
                        {
                          index === editIndex ?
                            (<button className='btn' type='submit'>Update</button>) :
                            (<button className='btn' onClick={() => handleEdit(index)}>Edit</button>)
                        }
                        {
                          scholarshipDetail[index] && scholarshipDetail[index].verification_supervisor ?
                            (scholarshipDetail[index] && scholarshipDetail[index].verification_student ?
                              (scholarshipDetail[index].validation_supervisor ? (<button className='btn btn-locked'>Locked</button>) :
                                (<button className='btn' onClick={() => handleValidationToggle(scholarshipDetail[index]._id)} disabled={scholarshipDetail[index].validation_supervisor}
                                  style={{ backgroundColor: scholarshipDetail[index].validation_supervisor ? 'transparent' : 'initial', color: '#4285f4' }}
                                >Lock</button>)) :
                              (<button className='btn btn-processed'>Processed</button>)
                            ) :
                            (<button className='btn' onClick={() => handleVerificationToggle(scholarshipDetail(index))} disabled={scholarshipDetail[index] && scholarshipDetail[index].verification_supervisor} >Process</button>)
                        }
=======
                        {index === editIndex ? (
                          <button className='btn' type='submit'>Update</button>
                        ) : (
                          <button className='btn' onClick={() => handleEdit(index)}>Edit</button>
                        )}
                        {scholarshipDetail[index].verification_supervisor ? (
                          scholarshipDetail[index].verification_student ? (
                            scholarshipDetail[index].validation_supervisor ? (
                              <button className='btn btn-locked' disabled>Locked</button>
                            ) : (
                              <button className='btn' onClick={() => handleValidationToggle(index)} disabled={scholarshipDetail[index].validation_supervisor}
                                style={{ backgroundColor: scholarshipDetail[index].validation_supervisor ? 'transparent' : 'initial', color: '#4285f4' }}
                              >Lock</button>
                            )
                          ) : (
                            <button className='btn btn-processed'>Processed</button>
                          )
                        ) : (
                          <button className='btn' onClick={() => handleVerificationToggle(index)} disabled={scholarshipDetail[index].verification_supervisor}>Process</button>
                        )}
>>>>>>> 6ae586ff40a9f0a921c867d2168ed50f636855ad
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      )}
    </>
  )
}

export default AllAdmin;
