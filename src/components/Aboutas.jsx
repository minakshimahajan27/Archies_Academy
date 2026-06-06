// import React from 'react';
// import { Link } from 'react-router-dom';


// export default function About() {
//   return (
//     <>
//       {/* Header / Breadcrumb Section with abc.png background */}


//       {/* Main About Content Section */}
//       <section className="about-section py-5 bg-white">
//         <div className="container py-lg-5">
//           <div className="row g-0 align-items-center">
//           <div className="container text-center py-5"> <h5 className="about-subtitle text-uppercase" style={{color: '#B88A4A', letterSpacing: '2px'}}>About Us</h5></div>

//             {/* Left Side: YouTube Video & Phone Strip */}
//             <div className="col-lg-6">
//               <div className="about-image-wrapper position-relative px-3">
//                 <div className="ratio ratio-16x9 shadow-lg">
//                   <iframe 
//                     src="https://www.youtube.com/embed/MqM3zL1j7Fc?si=6uBzBcUhoYkM6-tl" 
//                     title="YouTube video player" 
//                     frameBorder="0" 
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                     allowFullScreen
//                     className="w-100"
//                     style={{ height: '370px', border: 'none' }}
//                   ></iframe>
//                 </div>

//                 <div className="about-phone-strip d-flex align-items-center mt-5 p-3 shadow-sm border-start border-4 border-gold" style={{backgroundColor: '#f8f9fa'}}>
//                   <div className="phone-box-square " style={{backgroundColor: '#B88A4A', padding: '15px'}}>
//                     <span className="phone-icon-simple text-white">📞</span>
//                   </div>
//                   <div className="ms-4">
//                     <h4 className="mb-0 fw-bold phone-number text-dark">+0123 456 789</h4>
//                     <p className="mb-0 phone-text text-muted">Call us direct 24/7 for a free consultation</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side: Content */}
//             <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
//               <div className="about-content">

//                 <h2 className="about-main-title mb-4 display-5  ">Why People Choose Us!</h2>

//                 <p className="about-description mb-5 text-muted lead">
//                   Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliquyam diam amet diam et eos. 
//                   Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
//                 </p>

//                 {/* Stats Grid */}
//                 <div className="row g-4 mb-5">
//                   <div className="col-sm-6">
//                     <div className="stat-card p-4 text-center border shadow-sm">
//                       <div className="stat-icon-wrapper mb-3">
//                         <svg width="45" height="45" viewBox="0 0 24 24" fill="#B88A4A"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/></svg>
//                       </div>
//                       <h2 className="stat-number fw-bold" style={{color: '#B88A4A'}}>25</h2>
//                       <p className="stat-label fw-bold small text-uppercase">Years Experience</p>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="stat-card p-4 text-center border shadow-sm">
//                       <div className="stat-icon-wrapper mb-3">
//                         <svg width="45" height="45" viewBox="0 0 24 24" fill="#B88A4A"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
//                       </div>
//                       <h2 className="stat-number fw-bold" style={{color: '#B88A4A'}}>999</h2>
//                       <p className="stat-label fw-bold small text-uppercase">Happy Customers</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Read More Button with Custom Frame */}
//                  <div className="about-btn-container">
//                <div className="custom-frame-btn">
//                   <button className="btn-read-more-text">READ MORE</button>
//                </div>
//              </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import archiesVideo from '../img/archies video.mp4';
export default function About() {
  return (
    <>
      {/* Header / Breadcrumb Section with abc.png background */}

      {/* Main About Content Section */}
      <section className="about-section py-4 py-lg-5 bg-white">

        {/* --- Advanced Responsive CSS Queries --- */}
        <style>{`
          /* Base Adjustments for smooth fluid scaling */
          
          
          /* Mobile Device Optimization (up to 767px) */
          @media (max-width: 767px) {
            .about-section {
              padding-top: 1.8rem !important;
              {/* padding-bottom: 2rem !important; */}
            }
            .about-subtitle-wrapper {
              padding-top: 1rem !important;
              padding-bottom: 1.5rem !important;
            }
            .about-image-wrapper {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .about-phone-strip {
              margin-top: 1.5rem !important;
              padding: 12px !important;
            }
            .phone-box-square {
              padding: 10px !important;
            }
            .phone-number {
              font-size: 1.2rem !important;
            }
            .phone-text {
              font-size: 11px !important;
            }
            .stat-card {
              padding: 1.25rem 0.75rem !important;
            }
            .stat-number {
              font-size: 1.6rem !important;
            }
           {/* .custom-frame-btn{
              display: flex;
              align-items: center;
              justify-content: center;
             width: 100px;
             height: 40px;
           } */}
           .custom-frame-btn {
  display: flex; /* Purana waala */
  align-items: center; /* Purana waala */
  justify-content: center; /* Purana waala */
  width: 100px; /* Purana waala */
  height: 40px; /* Purana waala */
  
  /* Yeh do lines naye jodiye */
  margin: 0 auto; 
  display: flex !important; /* display: block ki jagah flex ko center karne ke liye margin auto kaam karega agar width fix ho */
}
           .btn-read-more-text {
              font-size: 9.1px;
             }

          }

          /* Tablet Device Alignment (768px to 991px) */
          @media (min-width: 768px) and (max-width: 991px) {
            .about-image-wrapper {
              max-width: 650px;
              margin: 0 auto;
            }
            .about-content {
              margin-top: 3rem;
              text-align: center;
            }
            .about-phone-strip {
              justify-content: center;
              max-width: 500px;
              margin-left: auto;
              margin-right: auto;
            }
            {/* .about-btn-container {
              display: flex;
              justify-content: center;
            } */}
          }
        `}</style>

        <div className="container py-2 py-lg-4">

          {/* Section Header Title */}
          <div className="container text-center pb-3 pb-lg-4 about-subtitle-wrapper">
            <h5 className="all-subtitle text-uppercase">
              About Us
            </h5>
          </div>

          <div className="row g-0 align-items-center">

            {/* Left Side: YouTube Video & Phone Strip */}
            <div className="col-lg-6">
              <div className="about-image-wrapper position-relative px-2 px-md-3">


                <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden" style={{ background: '#000' }}>
                  <video
                    src={archiesVideo}
                    autoPlay      // Video apne aap chalne lagega
                    muted         // Voice bilkul nahi aayegi (Autoplay ke liye zaruri hai)
                    loop          // Video khatam hone ke baad baar-baar chalega
                    playsInline   // Mobile browsers (iPhone/Android) par bhi autoplay chalega
                    controls      // Agar aap chahti hain ki user video ko rok sake (ise hata bhi sakti hain)
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', height: '400px' }}
                  />
                </div>

                {/* Responsive Support Strip */}
                <div className="about-phone-strip d-flex align-items-center mt-4 mt-lg-5 p-3 shadow-sm border-start border-4 border-gold rounded-end" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="phone-box-square flex-shrink-0" style={{ backgroundColor: '#B88A4A', padding: '15px', borderRadius: '4px' }}>
                    <span className="phone-icon-simple text-white d-block">📞</span>
                  </div>
                  <div className="ms-3 ms-sm-4">
                    <h4 className="mb-0 fw-bold phone-number text-dark">+919422577198</h4>
                    <p className="mb-0 phone-text text-muted small">Call us direct 24/7 for a free consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Narrative & Milestones Content */}
            <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
              <div className="about-content">

                <h2 className="all-main-title mb-3 mb-lg-4 ">
                  Why People Choose Us!
                </h2>

                <p
                  className="about-description mb-4 mb-lg-5 text-muted lead"
                  style={{ lineHeight: '1.7' }}
                >
                  At Archies Beauty Academy, Salon & Makeup Studio, we are dedicated to
                  enhancing beauty, confidence, and professional skills. Our expert team
                  provides premium beauty services including Bridal Makeup, Hair Styling,
                  Hair Colour, Skin Treatments, Nail Art, and more. We also offer
                  government-certified beauty courses designed to help aspiring beauty
                  professionals build successful careers. With experienced trainers,
                  modern techniques, practical learning, and a commitment to customer
                  satisfaction, we have become a trusted destination for beauty services
                  and professional beauty education.
                </p>

                {/* Grid Framework for Counters / Statistics */}
                <div className="row g-3 g-sm-4 mb-4 mb-lg-5">
                  <div className="col-6">
                    <div className="stat-card p-4 text-center border shadow-sm bg-white rounded">
                      <div className="stat-icon-wrapper mb-2">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#B88A4A">
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" />
                        </svg>
                      </div>
                      <h2 className="stat-number fw-bold mb-1" style={{ color: '#B88A4A' }}>25</h2>
                      <p className="stat-label fw-bold small text-uppercase text-secondary m-0">Years Experience</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-card p-4 text-center border shadow-sm bg-white rounded">
                      <div className="stat-icon-wrapper mb-2">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#B88A4A">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                      </div>
                      <h2 className="stat-number fw-bold mb-1" style={{ color: '#B88A4A' }}>9999+</h2>
                      <p className="stat-label fw-bold small text-uppercase text-secondary m-0">Happy Customers</p>
                    </div>
                  </div>
                </div>

                {/* Call-to-action button trigger */}
                <div className="about-btn-container">
                  <div className="custom-frame-btn">
                    <Link to="/about" className="btn-read-more-text text-decoration-none">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}