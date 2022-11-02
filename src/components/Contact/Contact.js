import React, { useRef } from "react";
import "./Contact.scss";
const Contact = () => {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbw_utCamxzvgY7x-JROgLSBWoA4MwDjj3ycIqzIoLIhLe05S5BI9EjRijG0CO7Gujtv/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="contact-item py-5">
      <div className="container">
        <form
          method="post"
          ref={formRef}
          onSubmit={handleSubmit}
          name="google-sheet"
          className="row w-75"
          style={{ margin: "auto" }}
        >
          <h2 className="text-center text-white py-5">Get in touch</h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Name *</label> <br />
                <input type="text" name="name" className="contact-form-item" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Organisation *</label>{" "}
                <br />
                <input
                  type="text"
                  name="organisation"
                  className="contact-form-item"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Position *</label> <br />
                <input
                  type="text"
                  name="position"
                  className="contact-form-item"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Email *</label> <br />
                <input type="text" name="email" className="contact-form-item" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Subject *</label> <br />
                <input
                  name="subject"
                  type="text"
                  className="contact-form-item"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            s
            <div className="col-md-12 col-sm-12 py-4 px-5 form-item">
              <label className="contact-form-label">Message *</label> <br />
              <textarea rows={3} name="message" className="w-100" />
            </div>
            <div className="col-md-3 col-sm-12 py-4 px-5 form-item">
              <button type="submit" className="btn btn-submit w-100 border-0 ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
