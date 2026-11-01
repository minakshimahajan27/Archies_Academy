// import React from 'react'
// import Header from '../components/Header'
// import Aboutas from '../components/Aboutas'
// import ServiceH from '../components/ServiceH'
// import PriceH from '../components/priceH'
// import Gellary from './Gellary'
// import Team from './Team'
// import Testimonial from './testimonial'

// import Footer from '../components/Footer'
// import OnlineH from '../components/OnlineH'

// export default function Home() {
//   return (
//     <div>
//       <Header/>
//       <Aboutas/>
//       <ServiceH/>
//       <OnlineH/>
//       <PriceH/>
//       <Gellary/>
//       <Team/>
//       <Testimonial/>
      
//       <Footer/>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Aboutas from '../components/Aboutas';
import ServiceH from '../components/ServiceH';
import PriceH from '../components/priceH';
import Gellary from './Gellary';
import Team from './Team';
import Testimonial from './testimonial';
import Footer from '../components/Footer';
import OnlineH from '../components/OnlineH';
import FashionShowModal from '../components/FashionShowModal'; // <-- Naya Fashion Show Modal import kiya

export default function Home() {
  const [fashionShow, setFashionShow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Check karein ki Fashion Show active hai ya nahi
  useEffect(() => {
    const checkFashionShow = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/fashion-show/active');
        if (res.data.success && res.data.data) {
          setFashionShow(res.data.data);
        }
      } catch (err) {
        console.error("Fashion show check error", err);
      }
    };
    checkFashionShow();
  }, []);

  return (
    <div>
      {/* Agar Fashion Show active hai toh upar banner dikhega */}
      {fashionShow && (
        <div 
          className="bg-warning text-dark text-center py-2 fw-bold shadow-sm" 
          style={{ cursor: 'pointer', letterSpacing: '0.5px', fontSize: '15px' }} 
          onClick={() => setShowModal(true)}
        >
          🎉 Annual Fashion Show Event is LIVE! Click here to Register & Get Entry Pass 🎉
        </div>
      )}

      <Header />
      <Aboutas />
      <ServiceH />
      <OnlineH />
      <PriceH />
      <Gellary />
      <Team />
      <Testimonial />
      <Footer />

      {/* Fashion Show Registration & Pass Modal */}
      {showModal && fashionShow && (
        <FashionShowModal event={fashionShow} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}