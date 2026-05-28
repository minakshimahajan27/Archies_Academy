import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <>
      {/* Header / Breadcrumb Section with abc.png background */}
    

      {/* Main About Content Section */}
      <section className="about-section py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row g-0 align-items-center">
            
            {/* Left Side: YouTube Video & Phone Strip */}
            <div className="col-lg-6">
              <div className="about-image-wrapper position-relative px-3">
                <div className="ratio ratio-16x9 shadow-lg">
                  <iframe 
                    src="https://www.youtube.com/embed/MqM3zL1j7Fc?si=6uBzBcUhoYkM6-tl" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-100"
                    style={{ height: '350px', border: 'none' }}
                  ></iframe>
                </div>
                
                <div className="about-phone-strip d-flex align-items-center mt-4 p-3 shadow-sm border-start border-4 border-gold" style={{backgroundColor: '#f8f9fa'}}>
                  <div className="phone-box-square" style={{backgroundColor: '#B88A4A', padding: '15px'}}>
                    <span className="phone-icon-simple text-white">📞</span>
                  </div>
                  <div className="ms-4">
                    <h4 className="mb-0 fw-bold phone-number text-dark">+0123 456 789</h4>
                    <p className="mb-0 phone-text text-muted">Call us direct 24/7 for a free consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
              <div className="about-content">
                <h5 className="about-subtitle text-uppercase" style={{color: '#B88A4A', letterSpacing: '2px'}}>About Us</h5>
                <h1 className="about-main-title mb-4 display-5 fw-bold text-dark">Why People Choose Us!</h1>
                
                <p className="about-description mb-5 text-muted lead">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliquyam diam amet diam et eos. 
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                </p>

                {/* Stats Grid */}
                <div className="row g-4 mb-5">
                  <div className="col-sm-6">
                    <div className="stat-card p-4 text-center border shadow-sm">
                      <div className="stat-icon-wrapper mb-3">
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="#B88A4A"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/></svg>
                      </div>
                      <h2 className="stat-number fw-bold" style={{color: '#B88A4A'}}>25</h2>
                      <p className="stat-label fw-bold small text-uppercase">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="stat-card p-4 text-center border shadow-sm">
                      <div className="stat-icon-wrapper mb-3">
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="#B88A4A"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                      <h2 className="stat-number fw-bold" style={{color: '#B88A4A'}}>999</h2>
                      <p className="stat-label fw-bold small text-uppercase">Happy Customers</p>
                    </div>
                  </div>
                </div>

                {/* Read More Button with Custom Frame */}
                 <div className="about-btn-container">
               <div className="custom-frame-btn">
                  <button className="btn-read-more-text">READ MORE</button>
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