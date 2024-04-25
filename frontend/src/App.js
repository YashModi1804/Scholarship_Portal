import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Student from './pages/Student'
import AllAdmin from './pages/AllAdmin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
        <Route path="/allAdmin" element={<AllAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
