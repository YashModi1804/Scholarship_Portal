import React from 'react'

const status = () => {
  return (
    <>
       <div className="admin-container-content-2 status-container">
        <div className="status-text">
            <h1 className='bankAcc-text'>Status</h1> <br />
            <p><span>NOTE: *</span>Once the Supervisor, process and locks the scholarship of students for a month from Schloarship Entry Step,</p>
            <p>it is sent to the student for verification to ensure it is correct.</p>
            <p>Once student verifies it, it will show in this section. Supervisor, then finally approves it and it is sent to the HOD.</p>
        </div>
        <div className="admin-content status-content">
            <div className='status-content-1 admin-content-1'>
                <div className="status-session status-session-content ">
                    <label htmlFor="session"><span>*</span>Session</label>
                    <select  className='session-Drop-box drop-box'>
                    <option value="session">SPRING 2024</option>
                    <option value="session">AUTUMN 2024</option>
                    </select>
                </div>
                <div className="status-year status-session-content">
                    <label htmlFor="year"><span>*</span>Year</label>
                    <select  className='year-Drop-box drop-box'>
                    <option value="student">2024</option>
                    <option value="admin">2023</option>
                    </select>
                </div>
                <div className="status-month status-session-content">
                    <label htmlFor="month"><span>*</span>Month</label>
                    <select  className='month-Drop-box drop-box'>
                    <option value="student">April</option>
                    <option value="admin">March</option>
                    </select>
                </div>
            </div>
      </div>
      <div className="admin-buttons">
        <button className='btn' >Show</button>
        <button className='btn' >Status Report</button>
        </div>
      </div>
    </>
  )
}

export default status