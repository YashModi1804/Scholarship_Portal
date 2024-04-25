<<<<<<< HEAD
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AllAdmin from './pages/AllAdmin'
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/AllAdmin' element={<AllAdmin/>}/>
      </Routes>
    </BrowserRouter>
  )
}
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 91b66dd79545fd39ffe1c92f9f04f38bbca7ea3a
