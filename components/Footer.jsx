// import React from 'react';

// import logoImg from '../src/img/logo.png'; 

// const Footer = () => {
//   return (
//     <footer className="footer-section">
//       <div className="container py-5">
//         <div className="row g-0"> {/* g-0 for tight alignment with the center line */}
          
//           {/* --- LEFT PART --- */}
//           <div className="col-lg-4 col-md-12 pe-lg-5 mb-5 mb-lg-0">
//             <div className="footer-logo mb-4">
//               <img src={logoImg} alt="Salone Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
//             </div>
//             <p className="footer-desc mb-4">
//               Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. 
//               Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.
//             </p>
//             <div className="contact-info mb-4">
//               <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
//               <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
//               <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
//             </div>
//             <div className="d-flex pt-2 gap-2">
//               <div className="social-box"><a href="#"><i className="fab fa-twitter"></i></a></div>
//               <div className="social-box"><a href="#"><i className="fab fa-facebook-f"></i></a></div>
//               <div className="social-box"><a href="#"><i className="fab fa-linkedin-in"></i></a></div>
//               <div className="social-box"><a href="#"><i className="fab fa-instagram"></i></a></div>
//             </div>
//           </div>

//           {/* --- RIGHT PART (With Vertical Line) --- */}
//           <div className="col-lg-8 col-md-12 ps-lg-5 border-start-custom">
//             <div className="row mt-5">
//               {/* Quick Links */}
//               <div className="col-md-6 mb-5">
//                 <h4 className="footer-title mb-4">Quick Links</h4>
//                 <div className="footer-links">
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>About Us</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Contact Us</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Our Services</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Terms & Condition</a>
//                 </div>
//               </div>
              
//               {/* Popular Links */}
//               <div className="col-md-6 mb-5">
//                 <h4 className="footer-title mb-4">Popular Links</h4>
//                 <div className="footer-links">
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>About Us</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Contact Us</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Our Services</a>
//                   <a href="#"><i className="fa fa-chevron-right me-2"></i>Terms & Condition</a>
//                 </div>
//               </div>

//               {/* Newsletter Row (Full Width of the right part) */}
//               <div className="col-12 mt-2">
//                 <h4 className="footer-title mb-4">Newsletter</h4>
//                 <div className="position-relative w-100 mb-3">
//                   <input className="form-control newsletter-input w-100" type="text" placeholder="Enter Your Email" />
//                   <button type="button" className="btn-newsletter">
//                     <i className="fa fa-paper-plane"></i>
//                   </button>
//                 </div>
//                 <p className="footer-desc">Diam sed sed dolor stet amet eirmod</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <div className="copyright-section mt-5 border-top border-secondary">
//         <div className="container py-4">
//           <div className="row">
//             <div className="col-md-6 text-center text-md-start">
//               &copy; <a href="#" className="gold-text text-decoration-none">Your Site Name</a>, All Right Reserved.
//             </div>
//             <div className="col-md-6 text-center text-md-end">
//               Designed By <a href="#" className="gold-text border-bottom text-decoration-none">Minakshi Mahajan</a>. Distributed By <a href="#" className="gold-text border-bottom text-decoration-none">ThemeWagon</a>.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaUser } from 'react-icons/fa'; // Login icon ke liye
import logoImg from '../src/img/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-0"> 
          
          {/* --- LEFT PART --- */}
          <div className="col-lg-4 col-md-12 pe-lg-5 mb-5 mb-lg-0">
            <div className="footer-logo mb-4">
              <img src={logoImg} alt="Salone Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>
            <p className="footer-desc mb-4">
              Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. 
              Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.
            </p>
            <div className="contact-info mb-4">
              <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
            </div>
            <div className="d-flex pt-2 gap-2">
              <div className="social-box"><a href="#"><i className="fab fa-twitter"></i></a></div>
              <div className="social-box"><a href="#"><i className="fab fa-facebook-f"></i></a></div>
              <div className="social-box"><a href="#"><i className="fab fa-linkedin-in"></i></a></div>
              <div className="social-box"><a href="#"><i className="fab fa-instagram"></i></a></div>
            </div>
          </div>

          {/* --- RIGHT PART --- */}
          <div className="col-lg-8 col-md-12 ps-lg-5 border-start-custom">
            <div className="row mt-5">
              
              {/* Quick Links with LOGIN */}
              <div className="col-md-6 mb-5">
                <h4 className="footer-title mb-4">Quick Links</h4>
                <div className="footer-links">
                  {/* --- LOGIN LINK ADDED HERE --- */}
                   <a href="/login"><i className="fa fa-chevron-right me-2"></i>Login</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>About Us</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Contact Us</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Our Services</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Terms & Condition</a>
                </div>
              </div>
              
              {/* Popular Links */}
              <div className="col-md-6 mb-5">
                <h4 className="footer-title mb-4">Popular Links</h4>
                <div className="footer-links">
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>About Us</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Contact Us</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Our Services</a>
                  <a href="#"><i className="fa fa-chevron-right me-2"></i>Terms & Condition</a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-12 mt-2">
                <h4 className="footer-title mb-4">Newsletter</h4>
                <div className="position-relative w-100 mb-3">
                  <input className="form-control newsletter-input w-100" type="text" placeholder="Enter Your Email" />
                  <button type="button" className="btn-newsletter">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
                <p className="footer-desc">Diam sed sed dolor stet amet eirmod</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="copyright-section mt-5 border-top border-secondary">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              &copy; <a href="#" className="gold-text text-decoration-none">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="#" className="gold-text border-bottom text-decoration-none">Minakshi Mahajan</a>. Distributed By <a href="#" className="gold-text border-bottom text-decoration-none">ThemeWagon</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;