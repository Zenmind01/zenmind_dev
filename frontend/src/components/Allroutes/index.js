import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Registration/Login/Login";
import Homecontent from "../Home";
import SignUp from '../Registration/SignUp/SignUp'

import Aboutus from "../Aboutus";
import ContactUs from "../Contactus";
export default function Allroutes(){
    return(
       <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Homecontent/>}/>
            <Route path = '/signup' element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
       </Router>
    )
} 