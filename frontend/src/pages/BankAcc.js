import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";

const URL = "http://localhost:8800/api/developer/bank_data";

const BankAcc = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNo: '',
    ifscCode: '',
    dateOfJoining: ''
  });
  const [user_longs, setUser_long] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Store the index of the row being edited

  useEffect(()=> {
    axios.get('/getStudents')
  .then(response => {
    const studentsArray = Object.values(response.data); // Convert object values to array
    console.log(studentsArray);
    setUser_long(studentsArray);
  })
  .catch(err => console.log(err));
  },[]);
  

  const handleInputChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    // Set the form data to the values of the row being edited
    setFormData(user_longs[index]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enrollment: formData.enrollment, // Pass enrollment number to identify the student
          bankName: formData.bankName,
          accountNo: formData.accountNo,
          ifscCode: formData.ifscCode,
          dateOfJoining: formData.dateOfJoining
        }),
      });
      
      if(response.ok) {
        setFormData({
          bankName: '',
          accountNo: '',
          ifscCode: '',
          dateOfJoining: ''
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
 
  function dateHandle(dateStr) {
    console.log(dateStr);
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div className="admin-container-content-2 status-container">
        <div className="bankAcc-text">Bank Details</div>
        <div className="admin-content status-content">
          <div className='status-content-1 admin-content-1'>
            <div className="status-session status-session-content ">
              <label htmlFor="session"><span>*</span>Admission Batch</label>
              <select  className='session-Drop-box drop-box'>
                <option value="session">2024</option>
                <option value="session">2023</option>
              </select>
            </div>
            <div className="status-year status-session-content">
              <label htmlFor="year"><span>*</span>Degree</label>
              <select  className='year-Drop-box drop-box'>
                <option value="student">PHD</option>
              </select>
            </div>
            <div className="status-month status-session-content">
              <label htmlFor="month"><span>*</span>Branch</label>
              <select  className='month-Drop-box drop-box'>
                <option value="student">Computer Science Engineer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="admin-buttons">
          <button className='btn' >Show</button>
          <button className='btn' >Report</button>
          <button className='btn' >Account Not Updated</button>
          <button className='btn' >Clear</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Enrollment</th>
              <th>Student Name</th>
              <th>Bank Name</th>
              <th>Account No.</th>
              <th>IFSC Code</th>
              <th>Date of joining</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user_longs.map((user, index) => (
              <tr key={index}>
                <td>{user.enrollment}</td>
                <td>{user.name}</td>
                <td>
                  <input
                    type="text"
                    name='bankName'
                    placeholder='Bank Name'
                    value={index === editIndex ? formData.bankName : user.bankName}
                    required
                    disabled={index !== editIndex}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    name='accountNo'
                    placeholder='Account Number'
                    value={index === editIndex ? formData.accountNo : user.accountNo}
                    required
                    disabled={index !== editIndex}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input 
                    type="text"
                    name='ifscCode'
                    placeholder='IFSC Code'
                    value={index === editIndex ? formData.ifscCode : user.ifscCode}
                    required
                    disabled={index !== editIndex}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input 
                    type="date" 
                    name='dateOfJoining'
                    value={index === editIndex ? formData.dateOfJoining : dateHandle(user.dateOfJoining)}
                    required
                    disabled={index !== editIndex}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  {index === editIndex ? (
                    <button className='btn' type='submit'>Update</button>
                  ) : (
                    <button className='btn' onClick={() => handleEdit(index)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </form>
    </>
  )
}

export default BankAcc;
