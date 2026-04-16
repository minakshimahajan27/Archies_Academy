import React, { useState, useEffect } from 'react';


// Images import karein
import img2 from '../src/img/img2.jpg';
import img3 from '../src/img/img3.jpg';
import img4 from '../src/img/img4.jpg';

export default function Header() {
  const slides = [img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider Logic: Har 3 seconds mein slide change hogi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(timer); // Component hatne par timer saaf ho jaye
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <header className="hero-header">
      {/* Background Layer (hero-bg.jpg yahan se control hogi) */}
      <div className="hero-bg-overlay"></div>

      <div className="container-fluid h-100 header-content-wrapper">
        <div className="row h-100 g-0">
          
          {/* Left Side: Text Content */}
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
            <div className="px-lg-5 text-section">
              <h2 className="welcome-text">Welcome</h2>
              <h1 className="main-title">
                Archies Beauty <br />
                Academy 
               
              </h1>

              <div className="d-flex flex-wrap gap-5 mt-5">
                {/* Call Us Section */}
                <div className="d-flex align-items-center gap-3">
                  <div className="custom-icon-box">
                    <span className="icon-line-1"></span>
                    <span className="icon-line-2"></span>
                    📞
                  </div>
                  <div>
                    <small className="contact-label">CALL US</small>
                    <span className="contact-value">+123456789</span>
                  </div>
                </div>

                {/* Mail Us Section */}
                <div className="d-flex align-items-center gap-3">
                  <div className="custom-icon-box">
                    <span className="icon-line-1"></span>
                    <span className="icon-line-2"></span>
                    ✉️
                  </div>
                  <div>
                    <small className="contact-label">MAIL US</small>
                    <span className="contact-value">info@domain.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

          {/* Right Side: Auto Slider */}
          <div className="col-md-6 position-relative d-flex align-items-center justify-content-center overflow-hidden">
            <img 
              src={slides[currentSlide]} 
              alt="Salon Slide" 
              className="slider-image"
            />

            {/* Navigation Arrows */}
            <div className="slider-nav-container">
              <button className="nav-arrow-btn" onClick={prevSlide}> ← </button>
              <div className="nav-arrow-divider"></div>
              <button className="nav-arrow-btn" onClick={nextSlide}> → </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}