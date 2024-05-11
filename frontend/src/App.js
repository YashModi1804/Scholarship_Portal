import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Student from './pages/Student'
import AllAdmin from './pages/AllAdmin';
import Status from "./pages/status";
import BankAcc from './pages/BankAcc';
import InsertStudentData from './pages/developer.js';
import Admin from './pages/Admin.js';
import Admin_details from './pages/Admin_details.js';
import AdminLogin from './pages/AdminLogin.js';
import Home from './pages/Home.js';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
        <Route path="/allAdmin" element={<AllAdmin />} />
        <Route path="/status" element={<Status/>}/>
        <Route path="/bankAcc" element={<BankAcc/>}/>
        <Route path="/studentDetails" element={<InsertStudentData/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin_details" element={<Admin_details/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
