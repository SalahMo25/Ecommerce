import React from "react";
import "./Home.module.css";
import welcome from "../../imags/welcome2.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div class="container-fluid py-5 d-flex justify-content-end vh-100 my-5 w-100">
        <div class="row">
          <div class="col-md-7">
            <div class="image">
              <img src={welcome} alt="" class="w-75" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="py-5 d-flex flex-column">
              <h2 class="mb-2">Hello, friends.</h2>
              <h3 class="mb-5">
                We are happy to have you with us and wish you happy times in our
                Smart System.
              </h3>
              <p>Don't have an account ?</p>
              <Link to="/signup" className="loginLink">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign up
              </Link>
              <p class="mt-5">Have an account ?</p>
              <Link to="/login" className="loginLink">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </Link>
              <div class="icon-container w-75 mt-5 d-flex align-items-center justify-content-between m-auto">
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
