import React from "react";
import "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle p-2 "
                href="#!"
              >
                {" "}
                <i className="fab fa-fw fs-5 p-1 fa-facebook-f"></i>{" "}
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle p-2"
                href="#!"
              >
                {" "}
                <i className="fab fa-fw fs-5 p-1 fa-twitter"></i>{" "}
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle p-2"
                href="#!"
              >
                <i className="fab fa-fw fs-5 p-1 fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle p-2"
                href="#!"
              >
                <i className="fab fa-fw fs-5 p-1 fa-dribbble"></i>{" "}
              </a>
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="endfooter t-center w-100 bg-dark text-light py-4 text-center ">
        <div class="container">
          <small>Copyright © Your Website 2021</small>
        </div>
      </div>
    </>
  );
}
