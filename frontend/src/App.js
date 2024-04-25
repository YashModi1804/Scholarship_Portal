import React from 'react';
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AllAdmin from './pages/AllAdmin'
import Register from './pages/Register';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/AllAdmin' element={<AllAdmin/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
