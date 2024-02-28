import React from "react";
import contactstyle from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <section className={contactstyle.contact}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className={contactstyle.head}>
                <h1 className={contactstyle.one}>CONTACT ME</h1>
                <div className={contactstyle.dividercustom}>
                  <div className={contactstyle.divider}></div>
                  <div className="divider-custom-icon px-3">
                    {" "}
                    <i className="fas fa-star fs-2"></i>
                  </div>
                  <div className={contactstyle.divider}></div>
                </div>
              </div>
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label className={contactstyle.label}>Name</label>
                    <input
                      className={contactstyle.formcontrol}
                      id="name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label className={contactstyle.label}>Email Address</label>
                    <input
                      className={contactstyle.formcontrol}
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label className={contactstyle.label}>Phone Number</label>
                    <input
                      className={contactstyle.formcontrol}
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label className={contactstyle.label}>Message</label>
                    <textarea
                      className={contactstyle.formcontrol}
                      id="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="form-group">
                  <button
                    className="btn btn-success btn-x1 px-4 py-3 "
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
