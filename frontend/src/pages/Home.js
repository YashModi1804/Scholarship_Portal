import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-section">
          <div className="home-user home-section-common">
            <div className="user-logo"><FaUserGraduate className='home-logo' /></div>
            <div>User</div>
          </div>
          <div className="home-admin home-section-common">
            <div className="admin-logo"><FaUser className='home-logo' id='home-logo-admin' /></div>
            <div>Admin</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home