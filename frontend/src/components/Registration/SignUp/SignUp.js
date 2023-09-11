import React, { useState } from 'react';
import './SignUp.css';
import fb from '../../assets/images/facebook-icon.png'
import google from '../../assets/images/google-icon.png'
import close from '../../assets/images/eye-close.png'
import open from '../../assets/images/eye.png'
import register from '../../assets/images/register-img.png'
import Navbar from '../../Navbar';


const SignUp = () => {
  // Define the show/hide state outside the function so it persists between renders.
  const [show, setShow] = useState(false);

  // Handler function to toggle password visibility.
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <><Navbar/>
      <section className='signup'>
        <div className='left'>
          <div className='container'>
            <div className='sign-up-box'>
              <h1 className='form-title'>Sign Up</h1>
              <p>
                Create Account? <span className='sign-link'><a href='/signup'>Sign Up</a></span>
              </p>
            </div>
            <div className='auth-button'>
              <button type='button' className='fb-button'>
                <img className='fb-icon' src={fb} alt='fb-icon'></img>
                Use Facebook
              </button>
              <button type='button' className='fb-button'>
                <img className='google-icon' src={google} alt='fb-icon'></img>
                Use Google
              </button>
            </div>
            <div className='or-divider'>
              <div className='line'></div>
              <p className='divider'>Or</p>
              <div className='line'></div>
            </div>
            <form>
              <div className='form-group group'>
                <label htmlFor='name' className='form-label'>
                  Full Name<span className='star'>*</span>
                </label>
                <input type='name' className='form-control'></input>
              </div>
              <div className='form-group group'>
                <label htmlFor='email' className='form-label'>
                  E-mail<span className='star'>*</span>
                </label>
                <input type='email' className='form-control'></input>
              </div>
              <div className='form-group group-2'>
                <label htmlFor='password' className='form-label'>
                  Password<span className='star'>*</span>
                </label>
                <input
                  type={show ? 'text' : 'password'}
                  className='form-control' style={{position:'relative'}}
                ></input>
                {/* Dynamically change the eye icon based on the show state */}
                <img style={{position:'absolute'}}
                  onClick={handleShow}
                  src={
                    show
                      ? {close}
                      : {open}}
                  alt='Show/Hide Password'
                ></img>
              </div>
              <div className='form-group-check'>
                <input type='checkbox' className='form-check-input'></input>
                <label htmlFor='check' className='form-check-label'>
                  Remember Password
                </label>
              </div>
              <div className='Sign-up-box'>
                <button type='submit' className='button-signup'>
                  Sign Up
                </button>
                <p className='p-gap'>
                  By Signing Up, You Agree To Our{' '}
                  <span><a href=''>Term of Service</a></span>
                </p>
                <p>
                  And Acknowledge That You Have Read Our{' '}
                  <span><a href=''>Privacy Policy</a></span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className='right'>
          <img src={register} alt='Registration Image'></img>
        </div>
      </section>
    </>
  );
};

export default SignUp;
