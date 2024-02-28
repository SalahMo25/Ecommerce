import React from "react";
import signup from "../../imags/signUp.png";
import "../Signup/Signup.module.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div class="container py-5 d-flex justify-content-end vh-100 my-5 w-100">
        <div class="row mt-2">
          <div class="col-lg-7">
            <div class="image">
              <img src={signup} alt="" class="w-75" />
            </div>
          </div>
          <div class="col-lg-4 ">
            <div class="box bg-white w-100 px-5 pb-5 rounded-2 text-center">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2 class="mb-5 mt-3 text-start">Sign Up</h2>
              <div class="form-content d-flex align-items-center mb-3">
                <i class="fa-solid fa-user fa-xl me-3"></i>
                <div class="w-100">
                  <input
                    type="text"
                    id="userName"
                    class="form-control "
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <p class="nameErrorMessage d-none">
                Name must start with capital letter &amp; at least 3 letter
              </p>
              <div class="form-content form-content d-flex align-items-center mb-3">
                <i class="fa-solid fa-envelope fa-xl me-3"></i>
                <div class="w-100">
                  <input
                    type="email"
                    id="userEmail"
                    class="form-control "
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <p class="emailErrorMessage d-none">Invalid email</p>
              <div class="form-content d-flex align-items-center mb-3">
                <i class="fa-solid fa-lock fa-xl me-3"></i>
                <div class="w-100 position-relative">
                  <input
                    type="password"
                    id="userPassword"
                    class="form-control "
                    placeholder="Enter Your Password"
                  />
                  <div class="toggle-password-btn position-absolute">
                    <button class="border-0 " type="button" id="togglePassword">
                      <i class="fa-solid fa-eye-slash "></i>
                    </button>
                  </div>
                </div>
              </div>
              <p class="passwordErrorMessage d-none">
                Password must be at least 8 letter
              </p>

              <button class="btn w-100 mt-3">Sign Up</button>
              <p class="  mt-3 mb-5 text-center ">
                You have an account?
                <Link to="/login">Login</Link>
              </p>
              <div class="icon-container w-75 mt-5 d-flex align-items-center justify-content-between m-auto ">
                <div class="icon-f">
                  <i class="fa-brands fa-facebook-f fs-5"></i>
                </div>
                <div class="icon-g">
                  <i class="fa-brands fa-google fs-5"></i>
                </div>
                <div class="icon-t">
                  <i class="fa-brands fa-twitter fs-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
