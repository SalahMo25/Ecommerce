import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark text-light fixed-top text-uppercase navbar-shrink">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white fs-3 py-2" to="home">
            Start React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white pe-4 fs-5 fw-bold"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white pe-4 fs-5 fw-bold"
                  aria-current="page"
                  to="Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
        <div class="container px-5 d-flex justify-content-start">
          <h1 class="logo">
            <Link to="/home">SMART SYSTEM</Link>
          </h1>
        </div>
      </nav>
    </>
  );
}
