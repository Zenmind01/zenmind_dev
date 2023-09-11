import React from "react";
import index from "./index.css";
import pc from "../Images/Layer_1-2.png";
import quotes from "../Images/Group 5.png";
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
            </div>
            <div className="v-1">
              <button>View All Counselors</button>
            </div>
          </div>

          <div className="w-2">
            <div className="w-2-content">
              <div className="w-header">Join The Community </div>
              <div className="w-desc">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, labore
                et dolore magna aliqua Ut enim ad.
              </div>
            </div>
            <div className="v-2">
              <button>View All Counselors</button>
            </div>
          </div>
          <div className="w-3">
            <div className="w-3-content">
              <div className="w-header">Chat With Chatbot</div>
              <div className="w-desc">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, labore
                et dolore magna aliqua Ut enim ad.
              </div>
            </div>
            <div className="v-3">
              <button>View All Counselors</button>
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
