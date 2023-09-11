import React from "react";
import index from "./index.css";
import doctor from "../Images/Mask_group.png";
import How from "../Howwehelp";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Homecontent() {
  return (
    <><Navbar/>
      <div className="main-content">
        <div className="hero">
          <img src={doctor} className="landing-image" />

          <div className="free-assessment">
            <div className="choices">
              <div>Consult.</div>
              <div>Talk.</div>
              <div>Heal.</div>
            </div>
            <div className="description">
              Online Counselling therapy with top psychologists
              <br />
              <br /> Anytime, Anywhere, Any device.
            </div>
            <div className="button-free">
              <button>Take Free Assessment</button>
            </div>
          </div>
        </div>
        <How/>
        
      </div>
      <Footer/>
    </>
  );
}

export default Homecontent;
