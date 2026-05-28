import React from 'react';
// Yahan hum 'BrowserRouter as Router' use kar rahe hain
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Price from './Price';
import Contact from './Contact';
import Page from './Page';
import ScrollToTop from '../components/ScrollToTop';
import Gellary from './Gellary';


import OnlineClass from './OnlineClass';
import OurTeam from './OurTeam ';
import Appointment from './Appointment';
import Login from './Login';
import Dashboard from './Dashboard';
import AddPackage from './AddPackage';
import PackageList from './PackageList';
import AddMember from './AddMember';
import MemberList from './MemberList';
import AddClass from './AddClass';
import ClassList from './ClassList';

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
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/memberlist" element={<MemberList />} />
        <Route path="/addclass" element={<AddClass />} />
        <Route path="/classlist" element={<ClassList />} />
      </Routes>
    </Router>
  );
}