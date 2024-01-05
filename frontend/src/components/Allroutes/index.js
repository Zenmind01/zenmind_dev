import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Dashboard from "../User-Dash/Dashboard/dashboard";
import Dashbaord2 from "../User-Dash/Dashboard2/dashboard2";
import Session from "../User-Dash/Session/session";
import Community from "../User-Dash/Community/community";
import Community2 from "../User-Dash/Community2/community2";
import Community3 from "../User-Dash/Community3/community3";
import CounsellorDashboard from "../Counsellor-Dash/Dash-counsellor/dashboard";
import CounsellorSession from "../Counsellor-Dash/Session-Counsellor/session";
import SessionClientDetail from "../Counsellor-Dash/Session-Clients-detail/session";
import CounsellorManageCommunity from "../Counsellor-Dash/Counsellor-Manage-Community/community";
import CounsellorCommunity from "../Counsellor-Dash/Counsellor-community/communuty";
import CounsellorCommunityDiscussion from "../Counsellor-Dash/Counsellor-community-discussion/community";
import Profile from "../User-Dash/Profile/profile";
import ProfileSelfAssessment from "../User-Dash/Profile-self-assesment/profile";
import Payment from "../User-Dash/Payment-History/payment";
import Addpayment from "../User-Dash/Payment-add-details/paymentAdd";
import Book from "../Book-Session/book";
import Confirmation from "../Confirmation/confirmation";
import Created from "../Created/created";
import Profilecounsellor from "../Counsellor-Dash/Profile-counsellor/profile";
import PaymentCo from "../Counsellor-Dash/Payment-Counsellor/payment";
import PaymentAddC from "../Counsellor-Dash/Payment-add-details-counsellor/paymentAdd";
import Login from "../Main/Registration/Login/Login";
import Homecontent from "../Main/Home";
import SignUp from "../Main/Registration/SignUp/SignUp";
import Aboutus from "../Main/Aboutus";
import ContactUs from "../Main/Contactus";
import Counsellors from "../Main/Counsellors/Counsellors";
import { AnimatePresence } from "framer-motion";
import axios from "axios";


export default function Allroutes() {
  const location = useLocation();
  const [data,setData] = useState(null)
  
  

  const loggedInRoutes = [

    <Route path="/dashboard" element={<Dashboard data={data}/>} />,
   // {/* <Route path='/' element={<Dashbaord2/>}/> */},
    <Route path="/dashboard2" element={<Dashbaord2 data={data}/>} />,
    <Route path="/session" element={<Session data={data}/>} />,
    <Route path="/community" element={<Community data={data}/>} />,
    <Route path="/community2" element={<Community2 data={data}/>} />,
    <Route path="/community3" element={<Community3 data={data}/>} />,
    <Route path="/dashboard-counsellor" element={<CounsellorDashboard data={data}/>} />,
    <Route path="/session-counsellor" element={<CounsellorSession data={data}/>} />,
    <Route
      path="/session-client-details"
      element={<SessionClientDetail />}
    />,
    <Route
      path="/counsellor-manage-community"
      element={<CounsellorManageCommunity />}
    />,
    <Route path="/counsellor-community" element={<CounsellorCommunity />} />,
    <Route
      path="/counsellor-community-discussion"
      element={<CounsellorCommunityDiscussion />}
    />,
    <Route path="/profile" element={<Profile data={data}/>} />,
    <Route
      path="/profile-self-assessment"
      element={<ProfileSelfAssessment />}
    />,
    <Route path="/payment-history" element={<Payment />} />,
    <Route path="/add-payment-details" element={<Addpayment />} />,
    <Route path="/book-session" element={<Book />} />,
    <Route path="/confirmation" element={<Confirmation />} />,
    <Route path="/created" element={<Created />} />,
    <Route path="/profile-counsellor" element={<Profilecounsellor />} />,
    <Route path="/payment-counsellor" element={<PaymentCo />} />,
    <Route
      path="/add-payment-details-counsellor"
      element={<PaymentAddC />}
    />,

  ];
  //console.log(data)
  
  return (
    <AnimatePresence>
      <Routes >
        { data?(loggedInRoutes):
        (<Route path="/" element={<Login />} />,
        <Route path="/signup" element={<SignUp  />} />,
        <Route path="/Signup" element={<SignUp  />} />,
        <Route path="/login" element={<Login  />} />)  
       }
       <Route path="/home" element={<Homecontent  />} />,
       <Route path="/about" element={<Aboutus  />} />,
        <Route path="/contactus" element={<ContactUs />} />,
        <Route path="/counsellors" element={<Counsellors />} />,
      </Routes>
    </AnimatePresence>
  );
}
