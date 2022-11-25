import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <div className="card-border shadow  p-4 mt-3 mb-3">
                <h2 className="text-center">Loginl</h2>
                <form>
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
                    <b>Login</b>
                  </button>

                  <p className="text-center mt-2">
                    Don't have Account ?{" "}
                    <a className="regis_now" href="./register">
                      {" "}
                      <b>Register Now</b>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
