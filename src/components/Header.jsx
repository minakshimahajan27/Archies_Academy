// import React, { useState, useEffect } from 'react';


// // Images import karein
// import img2 from '../img/img2.jpg';
// import img3 from '../img/img3.jpg';
// import img4 from '../img/img4.jpg';

// export default function Header() {
//   const slides = [img2, img3, img4];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto Slider Logic: Har 3 seconds mein slide change hogi
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000); // 3000ms = 3 seconds

//     return () => clearInterval(timer); // Component hatne par timer saaf ho jaye
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   return (
//     <header className="hero-header">
//       {/* Background Layer (hero-bg.jpg yahan se control hogi) */}
//       <div className="hero-bg-overlay"></div>

//       <div className="container-fluid h-100 header-content-wrapper">
//         <div className="row h-100 g-0">

//           {/* Left Side: Text Content */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
//             <div className="px-lg-5 text-section">
//               <h2 className="welcome-text">Welcome</h2>
//               <h1 className="main-title">
//                 Archies Beauty <br />
//                 Academy 

//               </h1>

//               <div className="d-flex flex-wrap gap-5 mt-5">
//                 {/* Call Us Section */}
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="custom-icon-box">
//                     <span className="icon-line-1"></span>
//                     <span className="icon-line-2"></span>
//                     📞
//                   </div>
//                   <div>
//                     <small className="contact-label">CALL US</small>
//                     <span className="contact-value">+123456789</span>
//                   </div>
//                 </div>

//                 {/* Mail Us Section */}
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="custom-icon-box">
//                     <span className="icon-line-1"></span>
//                     <span className="icon-line-2"></span>
//                     ✉️
//                   </div>
//                   <div>
//                     <small className="contact-label">MAIL US</small>
//                     <span className="contact-value">info@domain.com</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>


//           {/* Right Side: Auto Slider */}
//           <div className="col-md-6 position-relative d-flex align-items-center justify-content-center overflow-hidden ">
//             <img 
//               src={slides[currentSlide]} 
//               alt="Salon Slide" 
//               className="slider-image"
//             />

//             {/* Navigation Arrows */}
//             <div className="slider-nav-container">
//               <button className="nav-arrow-btn" onClick={prevSlide}> ← </button>
//               <div className="nav-arrow-divider"></div>
//               <button className="nav-arrow-btn" onClick={nextSlide}> → </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// import React, { useState, useEffect } from 'react';

// // Images import karein
// import img2 from '../img/img2.jpg';
// import img3 from '../img/img3.jpg';
// import img4 from '../img/img4.jpg';

// export default function Header() {
//   const slides = [img2, img3, img4];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto Slider Logic: Har 3 seconds mein slide change hogi
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000); // 3000ms = 3 seconds

//     return () => clearInterval(timer); // Component hatne par timer saaf ho jaye
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   return (
//     <header className="hero-header">
//       {/* --- Pure Media Queries for Mobile Screens --- */}
//       <style>{`
//       @media (min-width: 768px) {
        

//           /* Desktop Slider image presentation */
//           .slider-image {
//             width: 100% !important;
//             height: 100% !important;
//             object-fit: cover !important;
//             border-radius: 5px !important;
//             border: 1px solid rgba(230, 185, 110, 0.25);
//             box-shadow: 0 15px 35px rgba(0,0,0,0.6);
            
//           }
         
//         }
//         @media (max-width: 767px) {
//           /* 1. Wrapper Layout Fix */
//           .header-content-wrapper .row {
//             display: flex !important;
//             flex-direction: column !important;
//             height: auto !important;
//             margin-top:170px;
           
//           }
//                     .slider-image {
//              width: 100% !important;
//             height: 100% !important;
//             object-fit: cover !important;
//             border-radius: 5px !important;
//             border: 1px solid rgba(230, 185, 110, 0.25);
//             box-shadow: 0 15px 35px rgba(0,0,0,0.6); 
//             margin-top:-100px
//           }

//  .welcome-text{
//           margin-top:-100px;
//           font-size:1.8rem;
//           }
//           .main-title{
//            font-size:2.1rem;
//           }
//           /* 2. Text Content & Padding Adjustments */
//           .hero-header .p-5 {
//             padding: 1.5rem !important;
//           }
//           .contact-label {
//             display: block !important;
//             line-height: 1.2 !important;
//             margin-bottom: 2px !important;
            
//           }
//           .contact-value {
//             font-size: 13px !important;
//             display: block !important;
//           }

//           /* 3. Slider Height Increase & Object Fit Fix */
//           .hero-header .col-md-6.overflow-hidden {
//             width: 100% !important;
//             height: 600px !important; /* Mobile me image ki height badha di */
//             position: relative !important;
//             padding: 0 15px 25px 15px !important;
//             margin-top:100px;
//           }
//           .slider-image {
//             width: 100% !important;
//             height: 100% !important;
//             object-fit: cover !important; /* Image ko stretch hone se bachayega */
//             border-radius: 12px !important;
            
//           }

//           /* 4. Navigation Arrows positioning */
//           .slider-nav-container {
//             bottom: 40px !important;
//           }
//         }
//       `}</style>

//       {/* Background Layer (hero-bg.jpg yahan se control hogi) */}
//       <div className="hero-bg-overlay"></div>

//       <div className="container-fluid h-100 header-content-wrapper">
//         <div className="row h-100 g-0">

//           {/* Left Side: Text Content */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center ">
//             <div className="px-lg-5 text-section">
//               <h1 className="welcome-text ">Welcome</h1>
//               <h1 className="main-title">
//                 Archies Beauty <br />
//                 Academy
//               </h1>

//               <div className="d-flex flex-wrap gap-5 mt-5">
//                 {/* Call Us Section */}
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="custom-icon-box">
//                     <span className="icon-line-1"></span>
//                     <span className="icon-line-2"></span>
//                     📞
//                   </div>
//                   <div>
//                     <small className="contact-label">CALL US</small>
//                     <span className="contact-value">+919422577198</span>
//                   </div>
//                 </div>

//                 {/* Mail Us Section */}
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="custom-icon-box">
//                     <span className="icon-line-1"></span>
//                     <span className="icon-line-2"></span>
//                     ✉️
//                   </div>
//                   <div>
//                     <small className="contact-label">MAIL US</small>
//                     <span className="contact-value">goldenlooksparlour@gmail.com</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>


//           {/* Right Side: Auto Slider */}
//           <div className="col-md-6 position-relative d-flex align-items-center justify-content-center overflow-hidden ">
//             <img
//               src={slides[currentSlide]}
//               alt="Salon Slide"
//               className="slider-image"
//             />

//             {/* Navigation Arrows */}
//             <div className="slider-nav-container">
//               <button className="nav-arrow-btn" onClick={prevSlide}> ← </button>
//               <div className="nav-arrow-divider"></div>
//               <button className="nav-arrow-btn" onClick={nextSlide}> → </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';

// Images import karein
 import img2 from '../img/img11.jpg';
import img3 from '../img/img12.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img7.jpg';
import img6 from '../img/img8.jpg';
import img7 from '../img/img9.jpg';
import img8 from '../img/img10.jpg';
import img9 from '../img/img13.jpg';
import img10 from '../img/img14.jpg';
import heroBg from '../img/hero-bg.jpg'; // Apni background image ka sahi path yahan check karlein
export default function Header() {
  const slides = [ img4, img3,img5,img6,img7,img8,img9,img10];
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
    <header 
  className="hero-header" 
  style={{ 
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}
>
      {/* --- Pure Media Queries & Fixes for All Devices --- */}
      <style>{`
        /* Global Desktop Settings */
        {/* .hero-header {
            background: url('../src/img/hero-bg.jpg') no-repeat center center;
            background-size: cover;
            height: 100vh;
            width: 100%;
            position: relative;
            overflow: hidden;
        } */}
/* Global Desktop Settings me sirf itna rakhein */
.hero-header {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}
        .hero-bg-overlay {
            position: absolute;
            inset: 0;
            backdrop-filter: blur(1px);
            z-index: 1;
            background: rgba(255, 255, 255, 0.1); /* Background visible rakhne ke liye subtle support */
        }

        .header-content-wrapper {
            position: relative;
            z-index: 2;
        }

        .welcome-text {
            color: #B88A4A;
            font-family: 'serif';
            font-style: italic;
            font-size: 2.4rem;
        }

        .main-title {
            color: #222;
            font-family: 'serif';
            font-size: 3.7rem;
            line-height: 1.1;
        }

        .contact-icon-box {
            border: 1px solid #ddd;
            padding: 10px 15px;
            background: #B88A4A;
            color: white;
        }

        .contact-label {
            color: #B88A4A;
            font-size: 15px;
            text-transform: uppercase;
            display: block;
        }

        .contact-value {
            font-weight: bold;
            color: #222;
        }

        .slider-nav-container {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: #B88A4A;
            display: flex;
            align-items: center;
            padding: 10px 25px;
            z-index: 10;
        }

        .nav-arrow-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0 15px;
        }

        .nav-arrow-divider {
            width: 1px;
            height: 30px;
            background-color: rgba(255, 255, 255, 0.3);
        }

        .custom-icon-box {
            position: relative;
            background-color: #c5a47e;
            color: white;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            z-index: 5;
        }

        .custom-icon-box::after {
            content: "";
            position: absolute;
            top: -10px;
            left: 2px;
            right: 2px;
            bottom: -10px;
            border-left: 1px solid #f9f7f2;
            border-right: 1px solid #f9f7f2;
            z-index: -1;
        }

        .icon-line-1, .icon-line-2 {
            position: absolute;
            width: calc(100% + 20px);
            height: calc(100% + 20px);
            pointer-events: none;
        }

        .icon-line-1 {
            border-top: 3px solid #c5a47e;
            border-bottom: 3px solid #c5a47e;
            top: -4px;
            left: -10px;
            width: calc(100% + 20px);
            height: calc(100% + 8px);
        }

        .icon-line-2 {
            border-left: 3px solid #c5a47e;
            border-right: 3px solid #c5a47e;
            top: -10px;
            left: -4px;
            width: calc(100% + 8px);
            height: calc(100% + 20px);
        }

        @media (min-width: 768px) {
          /* Desktop Slider image presentation */
          .slider-image {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            border-radius: 5px !important;
            border: 1px solid rgba(230, 185, 110, 0.25);
            box-shadow: 0 15px 35px rgba(0,0,0,0.6);
          }
        }

        /* --- Strict Mobile Viewport Fixes (max-width: 767px) --- */
        @media (max-width: 767px) {
          .hero-header {
            height: auto !important;
            min-height: 100vh !important;
            background: url('../src/img/hero-bg.jpg') no-repeat center center !important;
            background-size: cover !important; /* Mobile me background visible rakhne ke liye */
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }

          .header-content-wrapper .row {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            gap: 35px !important;
          }

          .text-section {
            text-align: left !important;

            flex-direction: column !important;
            align-items: center !important;
            margin-top:-40px;
          }

          .welcome-text {
            margin-top: 0px !important; /* Overlap fix */
            font-size: 1.5rem !important;
          }

          .main-title {
            font-size: 2.3rem !important;
            margin-bottom: 15px !important;
          }

          .hero-header .p-5 {
            padding: 1.5rem !important;
          }

          .contact-label {
            display: block !important;
            line-height: 1.2 !important;
            margin-bottom: 2px !important;
          }

          .contact-value {
            font-size: 13px !important;
            display: block !important;
          }

          /* Slider Image mobile visibility container container size */
          .hero-header .col-md-6.position-relative {
            width: 100% !important;
            height: 340px !important; /* Mobile frame height reset */
            padding: 0 20px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .slider-image {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important; /* Puri image layout ke sath fix dikhegi */
            border-radius: 12px !important;
            border: 1px solid rgba(230, 185, 110, 0.25) !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4) !important;
            margin-top: 0px !important; /* Old overlap logic removed */
          }

          .slider-nav-container {
            bottom: 15px !important;
            right: 35px !important;
            padding: 6px 16px !important;
          }
        }
      `}</style>

     

      <div className="container-fluid h-100 header-content-wrapper">
        <div className="row h-100 g-0">

          {/* Left Side: Text Content */}
          <div className="col-md-6 d-flex align-items-center ">
            <div className="px-lg-5 text-section ">
              <h1 className="welcome-text">Welcome</h1>
              <h1 className="main-title">
                Archies Beauty <br />
                Academy
              </h1>

              <div className="d-flex flex-wrap gap-4 gap-lg-5 mt-4 mt-lg-5  justify-content-md-start">
                {/* Call Us Section */}
                <div className="d-flex align-items-center gap-3">
                  <div className="custom-icon-box">
                    <span className="icon-line-1"></span>
                    <span className="icon-line-2"></span>
                    📞
                  </div>
                  <div className="text-start">
                    <small className="contact-label">CALL US</small>
                    <span className="contact-value">+919422577198</span>
                  </div>
                </div>

                {/* Mail Us Section */}
                <div className="d-flex align-items-center gap-3">
                  <div className="custom-icon-box">
                    <span className="icon-line-1"></span>
                    <span className="icon-line-2"></span>
                    ✉️
                  </div>
                  <div className="text-start">
                    <small className="contact-label">MAIL US</small>
                    <span className="contact-value">goldenlooksparlour@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Auto Slider */}
          <div className="col-md-6 position-relative d-flex align-items-center justify-content-center">
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