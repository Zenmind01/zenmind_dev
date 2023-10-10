import React from "react";
import index from "./index.css";
import pc from "../Images/Layer_1-2.png";
import profile from "../Images/profile.png";
import quotes from "../Images/Group 5.png";
import star from "../Images/star-mark.png";
import tick from "../Images/tickmark.png";
import {AiFillStar} from "react-icons/ai"

function How() {
  return (
    <>
      <div className="how-section">
        <div className="heading">How We Help</div>

        <div className="widget-head">For Individual</div>
        <div className="widgets">
          <div className="w-1">
            <div className="w-1-content">
              <div className="w-header">Counselling Therapy Session</div>
              <div className="w-desc">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, labore
                et dolore magna aliqua Ut enim ad.
              </div>
              <div className="v-1">
              <button>View All Counselors</button>
            </div>
            </div>
            
          </div>

          <div className="w-2">
            <div className="w-2-content">
              <div className="w-header">Join The Community </div>
              <div className="w-desc">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, labore
                et dolore magna aliqua Ut enim ad.
              </div>
              <div className="v-2">
              <button>View All Counselors</button>
            </div>
            </div>
            
          </div>
          <div className="w-3">
            <div className="w-3-content">
              <div className="w-header">Chat With Chatbot</div>
              <div className="w-desc">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, labore
                et dolore magna aliqua Ut enim ad.
              </div>
              <div className="v-3">
              <button>View All Counselors</button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="mid-conatiner-content-1">
          <h3>Need Help in Finding</h3>
          <h1>THE RIGHT FIT?</h1>
          <div className="mid-rect"></div>
          <p className="mid-conatiner-content-1-p1">You don’t have to do it alone. Take our 
          quick assessment so we can match you to the 
          right therapist?</p>
          <button className="match-btn">Get Matched</button>
        </div>
        <div className="mid-conatiner-content-2">
          <div className="counselors-details">
            
              <div className="counselor-details-main">
                <div className="detail-main-heading">
                  <div className="counselor-profile-img">
                    <img src={profile}></img>
                  </div>
                  <div className="counselor-edu">
                    <h3>Ruhi Sharma</h3>
                    <p>PHD, MSc. in Applies Psychology (RCI Licensed)</p>
                    {/* <p>Psychology (RCI Licensed)</p> */}
                  </div>
                </div>
                

                <div className="counselor-slots">
                  <div className="counselor-profile-img">
                    <img src={star}></img>
                  </div>
                  <div className="counselor-specialisation-content">
                    <h3>Specialization</h3>
                    <p>Anxiety, Depression, Stress, Relationship Issues, Couple Counseling...  Show More</p>
                  </div>
                </div>

                <div className="counselor-slots" >
                  <div  className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div  className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                  <button className="slot-button-1">View Profile</button>
                  <button className="slot-button-2">Book Session</button>
                </div>
              </div>
          </div>

          <div className="counselors-details">
              <div className="counselor-details-main">
              <div className="detail-main-heading">
                  <div className="counselor-profile-img">
                    <img src={profile}></img>
                  </div>
                  <div className="counselor-edu">
                    <h3>Ruhi Sharma</h3>
                    <p>PHD, MSc. in Applies Psychology (RCI Licensed)</p>
                    {/* <p>Psychology (RCI Licensed)</p> */}
                  </div>
                </div>

                <div className="counselor-slots">
                  <div className="counselor-profile-img">
                    <img src={star}></img>
                  </div>
                  <div className="counselor-specialisation-content">
                    <h3>Specialization</h3>
                    <p>Anxiety, Depression, Stress, Relationship Issues, Couple Counseling...  Show More</p>
                    
                  </div>
                </div>
                <div className="counselor-slots" >
                  <div  className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div  className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                  <button className="slot-button-1">View Profile</button>
                  <button className="slot-button-2">Book Session</button>
                </div>
                
              </div>
          </div>
        </div>
      </div>
      <div className="business">
        <div className="b-header">For Business</div>
        <div className="b-content">
          <div className="register-business">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod emporincididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod emporincididunt ut labore et dolore magna aliqua Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
            <div className="register-btn">
              <button>Register For Free</button>
            </div>
          </div>
          <img src={pc} />
        </div>
      </div>
      <div className="reviews">
        <div className="r-header">What People Say About Zenmind</div>
        <div className="reviews-list">
          <div className="review-1">
            <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </div>
          <div className="review-2">
          <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </div>
          <div className="review-3">
          <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </div>
          <div className="review-3">
          <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </div>
          
        </div>
      </div>
      
    </>
  );
}

export default How;
