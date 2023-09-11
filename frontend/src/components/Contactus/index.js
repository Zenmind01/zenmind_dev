import React from "react";
import contact from "../Images/contact.png";
import Navbar from "../Navbar";
import index from "./index.css";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="hero">
          <img
            src={contact}
            className="landing-image"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="contact-us">
          <div className="c-header">Contact Us</div>
          <div className="c-content">
            To create a world where everyone experiences happiness, freedom from
            stress, and relief from anxiety, we must collectively embrace a
            multi-faceted approach that prioritizes the well-being of
            individuals, communities, and the global society as a whole{" "}
          </div>
        </div>
        <div className="form-fill">
          <div className="form-heading">FILL THE FORM</div>
          <div className="name-email">
            <div className="user-name">
                <label for="fname" >Full Name</label>
              <input type="text" name="name" id="fname" placeholder="Enter your Full Name" />
            </div>
            <div className="user-email">
            <label for="email" >Email</label>
              <input type="email" name="email" id="email" placeholder="eg: name@domain.com"/>
            </div>
          </div>
          <div className="query">
            <label for="question">Question</label>
            <textarea  id="question" className="question" placeholder="Write your message"></textarea>
          </div>
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
