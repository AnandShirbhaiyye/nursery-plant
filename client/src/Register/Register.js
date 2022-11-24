import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <>
    <div className='bg-color'>
       <div className='container'>
           <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <div className="card-border p-4 mt-3 mb-3">
              <h2 className="text-center">Register</h2>
              <form>
              <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>FirstName :</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter FirstName"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>LastName :</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter LastName"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="email">
                    <h6>Email address</h6>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>Phone-Number :</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone-Number"
                    style={{ height: "45px" }}
                    required
                  />
                </div>


                <div className="form-group mt-3">
                  <label htmlFor="password">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <button
                  class="btn btn-warning w-100 mt-5"
                  type="submit"
                  style={{ height: "45px" }}
                >
                  <b>Register</b>
                </button>

                <p className="text-center mt-2 ">
                  Already have Account ? <a  className="regis_now" href="./login"> <b>Login</b></a>
                </p>
              </form>
              
            </div>
            </div>
            </div>
            {/* <div className='col-md-6'>
             hiiii
            </div> */}
           </div>
       </div>
       </>
  )
}


{/* <div className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">


            <div className="card card_register" style={{backgroundColor:"#2a8896"}}>
              <h2 className="text-center">Register</h2>
              <form>
              <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>FirstName :</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter FirstName"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>LastName :</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter LastName"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="email">
                    <h6>Email address</h6>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="firstname">
                    <h6>Phone-Number :</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone-Number"
                    style={{ height: "45px" }}
                    required
                  />
                </div>


                <div className="form-group mt-3">
                  <label htmlFor="password">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    style={{ height: "45px" }}
                    required
                  />
                </div>

                <button
                  class="btn btn-warning w-100 mt-5"
                  type="submit"
                  style={{ height: "45px" }}
                >
                  <b>Register</b>
                </button>

                <p className="text-center mt-2 ">
                  Already have Account ? <a  className="regis_now" href="./login"> <b>Login</b></a>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
      </div> */}
