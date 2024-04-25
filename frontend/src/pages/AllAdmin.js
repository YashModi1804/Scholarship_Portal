import React, { useEffect, useState } from 'react'
import axios from "axios"

const AllAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
      axios.get('/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <div className='admin-container'>
        <div className='admin-top'>Scholarship Entry Page</div>
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
          <button className='btn'>Show</button>
          <button className='btn'>Excel Report</button>
          <button className='btn'>Pdf Report</button>
        </div>
        <div className="scholarship-detail">Scholarship Details PhD</div>
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
            </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              return (<tr>
                <td>{user.enrollment}-{user.username}</td>
                <td>CSE</td>
                <td>IV</td>
                <td>xyz</td>
                <td><input type="checkbox" className='checkbox' /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td>Sparsh Sharma</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </>
  )
}

export default AllAdmin