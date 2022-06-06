import React from 'react'
import AddPlant from './AddPlant/AddPlant'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ShowPlant from './ShowPlant/ShowPlant';
import FetchData from './FetchData/FetchData';
import Login from './Login/Login';
import Register from './Register/Register';
import Navbar from './Navbar/Navbar';


export default function App() {
  return (
    <>
  <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/addplant" element={<AddPlant />} />
          <Route path="/showplant" element={<ShowPlant />} />
          <Route path="/get/allplant" element={<FetchData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
     
  )
}
