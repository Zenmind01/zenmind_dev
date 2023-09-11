import React from "react";
import index from "./index.css";
import Abt from "../Images/abthero.png";
import Navbar from "../Navbar";
import How from "../Howwehelp";

function Aboutus() {
  return (
    <><Navbar/>
      <div className="main-content">
        <div className="hero">
            <img src={Abt} className="landing-image" style={{borderRadius:'5px'}}/>
        </div>
        <div className="our-miss">
          <div className="our-mission">Our Mission</div>
          <div className="mission-content">
            Ending the stigma surrounding mental health issues and becoming a
            leading name in the field involves a concerted effort on multiple
            fronts. It requires a combination of advocacy, education, policy
            changes, and support from various stakeholders to create a society
            that understands, accepts, and supports individuals facing mental
            health challenges
          </div>
        </div>
        <div className="about-us-div">
            <div className="abt-us">About Us</div>
            <div className="abt-content">
            To create a world where everyone experiences happiness, freedom from stress, and relief from anxiety, we must collectively embrace a multi-faceted approach that prioritizes the well-being of individuals, communities, and the global society as a whole 
            </div>
        </div>
        <div className="our-team">
            <div className="header-team">Meet Our Team</div>
            <div className="team-members">
                <div className="member">
                    <div className="photo-mem">

                    </div>
                    <div className="mem-info">
                        <div className="name-mem">Name Last Name</div>
                        <div className="desig-mem">Designing Head</div>
                    </div>
                </div>
                <div className="member">
                    <div className="photo-mem">

                    </div>
                    <div className="mem-info">
                        <div className="name-mem">Name Last Name</div>
                        <div className="desig-mem">Designing Head</div>
                    </div>
                </div>
                <div className="member">
                    <div className="photo-mem">

                    </div>
                    <div className="mem-info">
                        <div className="name-mem">Name Last Name</div>
                        <div className="desig-mem">Designing Head</div>
                    </div>
                </div>
                <div className="member">
                    <div className="photo-mem">

                    </div>
                    <div className="mem-info">
                        <div className="name-mem">Name Last Name</div>
                        <div className="desig-mem">Designing Head</div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}

export default Aboutus;
