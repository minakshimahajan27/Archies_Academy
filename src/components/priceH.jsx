// import React from 'react';

// // Images ko import karein (Path check kar lein)
// import p1 from '../img/haircut...jpg';
// import p2 from '../img/makeup...jpeg';
// import p3 from '../img/manicure...jpeg';
// import p4 from '../img/pedicure...jpeg';
// import p5 from '../img/massage...jpeg';
// import p6 from '../img/skin-care...jpeg';

// const pricingList = [
//   { name: "Haircut", price: "Starts From ₹399/-", img: p1 },
//   { name: "Makeup", price: "Starts From ₹1,999/-", img: p2 },
//   { name: "Manicure", price: "Starts From ₹699/-", img: p3 },
//   { name: "Pedicure", price: "Starts From ₹899/-", img: p4 },
//   { name: "Massage", price: "Starts From ₹1,299/-", img: p5 },
//   { name: "Skin Care", price: "Starts From ₹999/-", img: p6 },
// ];

// export default function PriceH() {
//   return (
// <>
//     <section className="pricing-section">
//       <div className="pricing-container-custom d-flex flex-wrap">
//         {/* Left Side: Golden Section */}
//         <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
//           <h5 className="pricing-italic-subtitle">Pricing</h5>
//           <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>

//           {/* Dark Discount Box */}
//           <div className="row gx-2 align-items-center">
//             {/* gx-5 se dono columns ke beech achha gap aayega */}

//             <div className="col-md-6 pt-5">
//               <div className="enjoy-discount-box text-center mb-4">
//                 <p className="mb-1 ">The Art of</p>
//                 <h1 className="display-6 fw-bold">BEAUTY</h1>
//                 <p className="mb-0 italic-font">Experience</p>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <p className="pricing-desc-text mb-4">

//                 Experience premium beauty care with expert professionals, modern techniques, and personalized treatments designed to enhance your natural glow.
//               </p>

//               <div className="about-btn-container">
//                 <div className="custom-frame-btn1">
//                   <button className="btn-read-more-text">READ MORE</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Black List Section */}
//         <div className="pricing-right-list p-5 d-flex flex-column justify-content-center">
//           {pricingList.map((item, index) => (
//             <div key={index} className="pricing-row-item d-flex align-items-center mb-3">
//               <div className="pricing-img-wrapper">
//                 <img src={item.img} alt={item.name} className="pricing-thumb" />
//               </div>
//               <div className="pricing-info d-flex justify-content-between align-items-center w-100">
//                 <div className="pricing-service-title">{item.name}</div>
//                 <div className="pricing-service-val">{item.price}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
    
//  </>
//   );
// }

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Images ko import karein (Path check kar lein)
import p1 from '../img/haircut...jpg';
import p2 from '../img/makeup...jpeg';
import p3 from '../img/manicure...jpeg';
import p4 from '../img/pedicure...jpeg';
import p5 from '../img/massage...jpeg';
import p6 from '../img/skin-care...jpeg';
import { getAllPackagesService } from '../API/service.js';

const pricingList = [
  { name: "Haircut", price: "Starts From ₹399/-", img: p1 },
  { name: "Makeup", price: "Starts From ₹1,999/-", img: p2 },
  { name: "Manicure", price: "Starts From ₹699/-", img: p3 },
  { name: "Pedicure", price: "Starts From ₹899/-", img: p4 },
  { name: "Massage", price: "Starts From ₹1,299/-", img: p5 },
  { name: "Skin Care", price: "Starts From ₹999/-", img: p6 },
];

export default function PriceH() {
  const [packages, setPackages] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getAllPackagesService();
        if (res.success) {
          setPackages(res.data);
        }
      } catch (error) {
        console.error("Data load nahi hua:", error);
      }
    };
    loadData();
  }, []);

  // Auto-scroll effect for packages slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: 355, behavior: 'smooth' }); // Ek card ki width + gap
          }
        }
      }, 3000); // Har 3 second mein auto-scroll hoga
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, [packages]);

  // Function to handle WhatsApp Booking
  const handleWhatsAppBooking = (packageName, packagePrice) => {
    const phoneNumber = "919876543210"; // Apna WhatsApp number yaha daalein (Country code ke sath, bina '+' ke)
    const message = encodeURIComponent(`Hello, I want to book the package *${packageName}* priced at *₹${packagePrice}*. Please guide me with the further process.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <section className="pricing-section">
        <div className="pricing-container-custom d-flex flex-wrap">
          {/* Left Side: Golden Section */}
          <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
            <h5 className="pricing-italic-subtitle">Pricing</h5>
            <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>

            {/* Dark Discount Box */}
            <div className="row gx-2 align-items-center">
              <div className="col-md-6 pt-5">
                <div className="enjoy-discount-box text-center mb-4">
                  <p className="mb-1">The Art of</p>
                  <h1 className="display-6 fw-bold">BEAUTY</h1>
                  <p className="mb-0 italic-font">Experience</p>
                </div>
              </div>

              <div className="col-md-6">
                <p className="pricing-desc-text mb-4">
                  Experience premium beauty care with expert professionals, modern techniques, and personalized treatments designed to enhance your natural glow.
                </p>

                <div className="about-btn-container">
                  <div className="custom-frame-btn1">
                    <button className="btn-read-more-text">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Black List Section */}
          <div className="pricing-right-list p-5 d-flex flex-column justify-content-center">
            {pricingList.map((item, index) => (
              <div key={index} className="pricing-row-item d-flex align-items-center mb-3">
                <div className="pricing-img-wrapper">
                  <img src={item.img} alt={item.name} className="pricing-thumb" />
                </div>
                <div className="pricing-info d-flex justify-content-between align-items-center w-100">
                  <div className="pricing-service-title">{item.name}</div>
                  <div className="pricing-service-val">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers / Exclusive Packages Auto-Slider Section */}
      <section className="container my-5 py-4">
        <div className="text-center mb-5">
          <h5 style={{ color: '#B88A4A', fontStyle: 'italic', fontSize: '1.2rem' }}>Special Offers</h5>
          <h2 className="fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>OUR EXCLUSIVE PACKAGES</h2>
          <div style={{ width: '70px', height: '3px', background: '#B88A4A', margin: '15px auto' }}></div>
        </div>

        {/* Auto Scrollable Slider Container */}
        <div 
          className="packages-slider-container" 
          ref={sliderRef}
        >
          {packages.length > 0 ? (
            <div className="packages-track">
              {packages.map((pkg, index) => (
                <div key={index} className="package-slide-item">
                  <div className="card h-100 border-0 shadow-lg package-card" style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff' }}>
                    
                    {/* Package Image Container */}
                    <div className="position-relative" style={{ height: '230px', overflow: 'hidden' }}>
                      <img
                        src={pkg.packageImage.startsWith('http')
                          ? pkg.packageImage
                          : `http://localhost:5000/uploads/${pkg.packageImage}`}
                        className="w-100 h-100 package-img"
                        style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        alt={pkg.packageName}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                        }}
                      />
                      <span className="position-absolute top-0 end-0 m-3 badge px-3 py-2 fw-bold" style={{ background: '#B88A4A', color: '#fff', borderRadius: '20px', fontSize: '0.85rem' }}>
                        Special
                      </span>
                    </div>

                    {/* Package Details */}
                    <div className="card-body p-4 d-flex flex-column justify-content-between text-center">
                      <div>
                        <h4 className="fw-bold mb-2 text-dark">{pkg.packageName}</h4>
                        <p className="text-muted small mb-3" style={{ minHeight: '45px', lineHeight: '1.5' }}>
                          {pkg.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="fw-bold mb-3" style={{ color: '#B88A4A' }}>₹{pkg.price}</h3>
                        <button 
                          onClick={() => handleWhatsAppBooking(pkg.packageName, pkg.price)}
                          className="btn w-100 py-2 fw-bold custom-book-btn"
                        >
                          BOOK ON WHATSAPP
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted fs-5">No packages available right now.</p>
            </div>
          )}
        </div>
      </section>

      {/* Component Specific CSS */}
      <style>{`
        .packages-slider-container {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 25px;
          scroll-behavior: smooth;
          scrollbar-width: none;
        }

        .packages-slider-container::-webkit-scrollbar {
          display: none;
        }

        .packages-track {
          display: flex;
          gap: 25px;
          width: max-content;
          padding: 10px 5px;
        }

        .package-slide-item {
          width: 330px;
          flex-shrink: 0;
        }

        .package-card {
          border: 1px solid rgba(184, 138, 74, 0.2) !important;
          transition: all 0.3s ease-in-out;
        }

        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(184, 138, 74, 0.2) !important;
        }

        .package-card:hover .package-img {
          transform: scale(1.08);
        }

        .custom-book-btn {
          border: 2px solid #B88A4A !important;
          color: #B88A4A !important;
          background: transparent !important;
          border-radius: 30px !important;
          transition: all 0.3s ease-in-out;
        }

        .custom-book-btn:hover {
          background: #B88A4A !important;
          color: #ffffff !important;
          box-shadow: 0 5px 15px rgba(184, 138, 74, 0.4);
        }
      `}</style>
    </>
  );
}