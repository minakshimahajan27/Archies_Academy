import React from 'react';
// Yahan hum 'BrowserRouter as Router' use kar rahe hain
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
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
       <Route path="/classes" element={<OnlineClass/>} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/gallery" element={<Gellary/>} />
       <Route path="/ourTeam" element={<OurTeam />} />
       <Route path="/appointment" element={<Appointment />} />

       
      </Routes>
    </Router>
  );
}