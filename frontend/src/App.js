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