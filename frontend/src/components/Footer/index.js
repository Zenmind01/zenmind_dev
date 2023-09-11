import React from "react";
import index from "./index.css";
import logo from "../Images/pink_zen 1.png";
import ig from "../Images/iglogo.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <div className="footer-content-left">
            <img src={logo} style={{ height: "60px" }} />
            <div>Follow Our Social Media</div>
            <div className="social-logos">
              <img src={ig} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
            <div style={{fontSize:'18px',fontWeight:'bold'}}>Contact Us</div>
            <div>For Urgent Help Call</div>
            <div>+91 XXXX8989XX</div>
            </div>
          </div>
          <div className="footer-content-right">
           <div>About Us</div>
           <div>For Individual</div>
           <div>For Corporate</div>
           <div>Terms Of Service</div>
           <div>Privacy Policy</div>

          </div>
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'80px',fontSize:'24px'}}>
        Copyright @ 2023, All Right Reversed

        </div>
      </div>
    </>
  );
}

export default Footer;
