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
import days from "@stdlib/time-days-in-month";
// import logo from '../image/logo.png';

const URL = "http://localhost:8800/api/studentDetails/scholarshipDetail";

const AllAdmin = () => {
  const [user_longs, setUser_long] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    enrollment: '',
    semester: '',
    branch: '',
    bankAccount: '',
    totalDays : '',
    entitlement : '',
    actualScholarship : '',
    hra : '',
    netAmount : ''
  });
  
  const [details, setDetails] = useState(null);
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
    }, []);

    // Function to handle student verification status toggle
    const handleVerificationToggle = async () => {
        try {
            // Update student verification status in the backend
    
            // Refresh details after updating verification status
            const updatedResponse = await axios.put(`/api/update_supervisor_verification/verify/${details._id}`);
            const updatedDetails = { ...details, verification_supervisor: true }; // Assuming the verification_student field should be set to true after verification
            setDetails(updatedDetails);
        } catch (error) {
            console.error('Error updating verification status:', error);
        }
    };
  useEffect(()=> {
    axios.get('/getStudents')
  .then(response => {
    const studentsArray = Object.values(response.data); // Convert object values to array
    // console.log(studentsArray);
    setUser_long(studentsArray);
  })
  .catch(err => console.log(err));
  },[]);

  const handleShowTable = () => {
    // setShowTable(true);
  };

  const handleInputChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]:value,
    })
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
  
      console.log("response : ", response);
      
      if(response.ok) {
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
        setEditIndex(null); // Reset the edit index after successful update
      } else {
        toast.error("Invalid Data");
      }
  
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(user_longs[index]);
  }

  const handleDownloadPDF = () => {
    // Select the element which you want to convert to pdf
    const input = document.getElementById('pdf-table');

    // Create a canvas
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
  // State to track checkbox state for each row
  const [checkedRows, setCheckedRows] = useState(Array(user_longs.length).fill(false));
  // State to track totalDays for each row
  const [totalDays, setTotalDays] = useState(Array(user_longs.length).fill(''));

  const handleFullDayCheckbox = (e, index) => {
    const updatedCheckedRows = [...checkedRows];
    updatedCheckedRows[index] = e.target.checked;
    setCheckedRows(updatedCheckedRows);

    // If checkbox is checked, update the totalDays state for the corresponding row
    if(e.target.checked) {
      const updatedTotalDays = [...totalDays];
      updatedTotalDays[index] = days(); // Set total days here
      setTotalDays(updatedTotalDays);
    }
  };

  const handleStatusPage = () => {
    navigate('/status'); // Navigate to the status page
  };

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
                <div className="line"><CiBank /> Bank's Details</div>
              </div>
            </div>
          </div>
          <div className="admin-container-content-2">
            <div className="admin-content">
              <div className='admin-content-1'>
                <label htmlFor="session"><span>*</span>Session</label>
                <select  className='session-Drop-box drop-box'>
                  <option value="session">SPRING 2024</option>
                  <option value="session">AUTUMN 2024</option>
                </select>
                <label htmlFor="year"><span>*</span>Year</label>
                <select  className='year-Drop-box drop-box'>
                  <option value="student">2024</option>
                  <option value="admin">2023</option>
                </select>
                <label htmlFor="month"><span>*</span>Month</label>
                <select  className='month-Drop-box drop-box'>
                  <option value="student">April</option>
                  <option value="admin">March</option>
                </select>
              </div>
              <div className='admin-content-2'>
                <label htmlFor="degree"><span>*</span>Degree</label>
                <select  className='degree-Drop-box drop-box'>
                  <option value="student">PhD</option>
                </select>
                <label htmlFor="branch"><span>*</span>Branch</label>
                <select  className='branch-Drop-box drop-box'>
                  <option value="student">Computer Science Engineering</option>            </select>
              </div>
            </div>
            <div className="admin-buttons">
              <button className='btn' onClick={handleShowTable}>Show</button>
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
                <th>Full</th>
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
              {user_longs.map((student, index) => (
                <tr key={index}>
                  <td>{student.enrollment}-{student.name}</td>
                  <td>{student.branch}</td>
                  <td>IV</td>
                  <td>{student.accountNo}</td>
                  <td><input
                    type="checkbox"
                    className='checkbox'
                    disabled={index !== editIndex}
                    checked={checkedRows[index]}
                    onChange={(e) => handleFullDayCheckbox(e, index)}                 
                  /></td>
                  <td><input 
                    type="number" 
                    name='totalDays'
                    id='totalDays'
                    required
                    disabled={index !== editIndex && !checkedRows[index]} // Disable input if checkbox is not checked
                    value={totalDays[index]? totalDays[index]: student.totalDays} // Use 
                    onChange={(e) => handleInputChange(e, index)}
                  /></td>
                  <td><input 
                    type="number"
                    name='entitlement'
                    id='entitlement'
                    required
                    disabled={index !== editIndex}
                    value={index === editIndex ? formData.entitlement : student.entitlement}
                    onChange={(e) => handleInputChange(e, index)}
                  /></td>
                  <td><input
                    type="number"
                    name='actualScholarship'
                    id='actualScholarship'
                    required
                    disabled={index !== editIndex}
                    value={index === editIndex ? formData.actualScholarship : student.actualScholarship}
                    onChange={(e) => handleInputChange(e, index)}
                  /></td>
                  <td><input
                    type="number" 
                    name='hra'
                    id='hra'
                    required
                    disabled={index !== editIndex}
                    // value={index === editIndex ? formData.hra : student.hra}
                    onChange={(e) => handleInputChange(e, index)}
                  /></td>
                  <td><input
                    type="number" 
                    name='netAmount'
                    id='netAmount'
                    required
                    disabled={index !== editIndex}
                    value={index === editIndex ? formData.netAmount : student.netAmount}
                    onChange={(e) => handleInputChange(e, index)}
                  /></td>
<<<<<<< HEAD
                  <td>xyz</td>
=======
                  <td>Sparsh Sharma</td>
>>>>>>> 50969f9ad0683121450e1e0c404b0fccb463e3dc
                  <td>
                    {index === editIndex ? (
                      <button className='btn' type='submit' onClick={handleVerificationToggle} disabled={details.verification_supervisor}>Update</button>
                    ) : (
                      <button className='btn' onClick={() => handleEdit(index)}>Edit</button>
                    )}
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
