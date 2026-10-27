import React from 'react';
// Yahan hum 'BrowserRouter as Router' use kar rahe hain
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Service from '../pages/Service';
import About from '../pages/About';
import Price from '../pages/Price';
import Contact from '../pages/Contact';
import Page from '../pages/Page';
import ScrollToTop from '../components/ScrollToTop';
import Gellary from '../pages/Gellary';


import OnlineClass from '../pages/OnlineClass';
import OurTeam from '../pages/OurTeam';
import Appointment from '../pages/Appointment';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AddPackage from '../pages/AddPackage';
import PackageList from '../pages/PackageList';

import AddClass from '../pages/AddClass';
import ClassList from '../pages/ClassList';
import FAQ from './FAQ';
import Allphoto from './Allphoto';
import AddStudent from './Addstudent';
import StudentList from './StudentList';


// Function ka naam 'Router' se badal kar 'AppRouter' kar diya hai
export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<Price />} />
        <Route path="/page" element={<Page />} />
        <Route path="/classes" element={<OnlineClass />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gellary />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addPackage" element={<AddPackage />} />
        <Route path="/PackageList" element={<PackageList />} />
        <Route path="/addstudent" element={<AddStudent/>} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/addclass" element={<AddClass />} />
        <Route path="/classlist" element={<ClassList />} />
         <Route path="/faq" element={<FAQ />} />
         <Route path="/allphoto" element={<Allphoto />} />
      </Routes>
    </Router>
  );
}