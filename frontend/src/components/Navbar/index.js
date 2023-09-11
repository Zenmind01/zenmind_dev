import React from "react";
import index from './index.css'
import zenlogo from '../Images/pink_zen 1.png'
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    const setselected=(event)=>{
        const div =document.querySelectorAll('.options');
        div.forEach(function(div){
            div.classList.remove('fontweight6')
        })
        event.target.classList.add('fontweight6')

    }
    const gohome=()=>{
      
        navigate("/home")
    }
    const gosignup=()=>{
      
        navigate("/Signup")
    }
    const gologin=()=>{
      
        navigate("/login")
    }
    const gotoabout=()=>{
        navigate('/about')
    }
    const contact = ()=>{
        navigate('/contactus')
    }
    return(
        <>
        <div className="Navbar">
            <div className="Navbar-content">
                <div className="logo">
                    <img src={zenlogo} className="main-logo"/>
                </div>
                <div className="nav-options">
                    <div onClick={gohome} className="options" >Home </div>
                    <div onClick={gotoabout} className="options">About Us</div>
                    <div onClick={setselected} className="options">Our Counselors</div>
                    <div onClick={contact} className="options">Contact Us </div>
                    <div className="auth1" onClick={gosignup}>Sign Up </div>
                    <div className="auth2" onClick={gologin}>Login</div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Navbar;