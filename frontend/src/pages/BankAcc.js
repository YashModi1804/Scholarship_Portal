import React from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';

const URL = "http://localhost:8800/api/bank/bankDetail";

const BankAcc = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNo: '',
    ifscCode: '',
    dateOfJoining: ''
  });

  const [editId, setEditId] = useState(false);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleEdit = () => {
    setEditId(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if(response.ok) {
        setFormData({
          bankName: '',
          accountNo: '',
          ifscCode: '',
          dateOfJoining: ''
        });
        toast.success("Update Successful");
      } else {

        toast.error("Invalid Data");
      }

    } catch (error) {
      console.log("error: ", error);
    }
    // setEditId(false);
  };


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
        {/* <button className='btn' >Submit</button> */}
        <button className='btn' >Report</button>
        <button className='btn' >Acc No Not Updated</button>
        <button className='btn' >Clear</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <table>
            <thead>
              <tr>
                <th>Reg No-Name</th>
                <th>Student Name</th>
                <th>Bank Name</th>
                <th>Account No.</th>
                <th>IFSC Code</th>
                <th>Date of joining</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2022BCSE074</td>
                    <td>Sumit Kumar</td>
                    <td><input 
                      type="text"
                      name='bankName'
                      id='bankName'
                      placeholder='Bank Name'
                      value={formData.bankName}
                      required
                      disabled={!editId}
                      onChange={handleInputChange}
                    /></td>
                    <td><input 
                      type="number" 
                      name='accountNo'
                      id='accountNo'
                      placeholder='Account Number'
                      value={formData.accountNo}
                      required
                      disabled={!editId}
                      onChange={handleInputChange}
                    /></td>
                    <td><input 
                      type="text"
                      name='ifscCode'
                      id='ifscCode'
                      placeholder='IFSC Code'
                      value={formData.ifscCode}
                      required
                      disabled={!editId}
                      onChange={handleInputChange} 
                    /></td>
                    <td><input 
                      type="date" 
                      name='dateOfJoining'
                      id='dateOfJoining'
                      value={formData.dateOfJoining}
                      required
                      disabled={!editId}
                      onChange={handleInputChange} 
                    /></td>
                    <td><div className="action-buttons"><button className='btn'  onClick={handleEdit}>Edit</button>
                    <button type='submit' className='btn'>Update</button></div></td>
                </tr>
            </tbody>
          </table> 
      </form>
    </>
  )
}

export default BankAcc