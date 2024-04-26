import React from 'react'
export default function Scholarship(){
    return(
        <>
        <div className="scholarship-detail-student">
        <h1>Scholarship Details PhD</h1>
        <table className='scholarship-details-table'>
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
                <td className='Scholarship-status-active'>Verification Pending</td> 
                <td>APRIL</td>
                <td>2022BCSE001</td>
                <td>CSE</td>
                <td>IV</td>
                <td>xyz</td>
                <td>30</td>
                <td>3200</td>
                <td>4000</td>
                <td>425</td>
                <td>4425</td>
                <td>Sparsh Sharma</td>
              </tr>
              
        </tbody>
      </table>
      </div>
      </>
    )
}