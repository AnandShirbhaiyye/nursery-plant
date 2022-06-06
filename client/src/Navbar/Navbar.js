import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-plant ">
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
                {/* <li className="nav-item">
                  <Link className="nav-link" to="./showplant">
                    <h4><b>Show Plant</b></h4>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="./get/allplant">
                    <h4><b>Show Plants</b></h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse navbar-sizing" id="navbarNav" style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="./login">
                    <h4 className='nav_register'><b>Login</b></h4>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="./register">
                    <h4 className='nav_register'><b>Register</b></h4>
                  </Link>
                </li>
              </ul>
                
                </div>
          </div>
        </nav>
   </>
  )
}
