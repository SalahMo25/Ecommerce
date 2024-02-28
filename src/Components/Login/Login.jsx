import React from "react";
import "../Login/Login.module.css";

import login from "../../imags/login.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      {" "}
      <div className="container py-5 d-flex justify-content-end vh-100 my-5 w-100">
        <div className="row mt-2">
          <div className="col-lg-7">
            <div className="image">
              <img src={login} alt="" className="w-75" />
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="box bg-white w-100 px-5 pb-5 rounded-2 text-center">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2 className="mb-5 mt-3 text-start">Sign In</h2>
              <div className="form-content form-content d-flex align-items-center mb-3">
                <i className="fa-solid fa-envelope fa-xl me-3"></i>
                <div className="w-100">
                  <input
                    type="email"
                    id="userEmail"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              <div className="form-content d-flex align-items-center mb-3">
                <i className="fa-solid fa-lock fa-xl me-3"></i>
                <div className="w-100 position-relative">
                  <input
                    name="password"
                    type="password"
                    id="userPassword"
                    className="form-control"
                    placeholder="Enter Your Password"
                  />
                  <div className="toggle-password-btn position-absolute">
                    <button
                      className="border-0 "
                      type="button"
                      id="togglePassword"
                    >
                      <i className="fa-solid fa-eye-slash "></i>
                    </button>
                  </div>
                </div>
              </div>

              <p id="alertMassage" className="d-none"></p>

              <button className="btn w-100 mt-3">Sign In</button>
              <p className="p-login mt-3 mb-5 text-center">
                You have an account?
                <Link to="/signup">Sign Up</Link>
              </p>
              <div className="icon-container w-75 mt-5 d-flex align-items-center justify-content-between m-auto">
                <div className="icon-f">
                  <i className="fa-brands fa-facebook-f fs-5"></i>
                </div>
                <div className="icon-g">
                  <i className="fa-brands fa-google fs-5"></i>
                </div>
                <div className="icon-t">
                  <i className="fa-brands fa-twitter fs-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
