import React from 'react'
import AddPlant from './AddPlant/AddPlant'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <>
  <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
            <h2><b>Nursery-Plant</b></h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <h4><b>Home</b></h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./addplant">
                    <h4><b>Add Plant</b></h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./searchbook">
                    <h4><b>Search Plant</b></h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/addplant" element={<AddPlant />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
     
  )
}
