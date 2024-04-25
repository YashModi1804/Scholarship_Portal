import React from 'react'
const AllAdmin = () => {
  return (
    <>
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
            <tr>
              <td>2022BCSE074-Sumit Kumar</td>
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
        </thead>
     </table>
    </>
  )
}

export default AllAdmin