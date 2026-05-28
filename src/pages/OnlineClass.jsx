// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';

// const BeautyAcademy = () => {
//   return (
//     <div className="academy-page bg-light">
      
//       {/* Hero Section - Academy Theme */}
//       <section className="hero-section text-white d-flex align-items-center" style={{ 
//           background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
//           backgroundSize: 'cover',
//           height: '75vh',
//           backgroundPosition: 'center'
//         }}>
//         <div className="container text-center">
//           <h5 className="text-uppercase mb-3" style={{ color: '#B88A4A', letterSpacing: '4px' }}>Learn from the Masters</h5>
//           <h1 className="display-3 fw-bold mb-3">Archies Beauty Academy</h1>
//           <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
//             Master International Makeup techniques and Hair Styling from the comfort of your home. 
//             Join our online live classes and become a Certified Beauty Expert today.
//           </p>
//           <div className="d-flex justify-content-center gap-3">
//             <button className="btn btn-warning btn-lg px-4 fw-bold shadow">View Courses</button>
            
//           </div>
//         </div>
//       </section>

//       {/* Course Highlights */}
//       <div className="container" style={{ marginTop: '-60px' }}>
//         <div className="row g-4">
//           {[
//             { title: 'Live Sessions', desc: 'Direct interaction with expert educators in real-time.', icon: '📹' },
//             { title: 'Certification', desc: 'Receive a recognized digital certificate upon completion.', icon: '📜' },
//             { title: 'Career Guidance', desc: 'Personalized help to build your professional portfolio.', icon: '💼' }
//           ].map((item, idx) => (
//             <div className="col-md-4" key={idx}>
//               <div className="card border-0 shadow-lg p-4 text-center h-100">
//                 <div className="fs-1 mb-2">{item.icon}</div>
//                 <h5 className="fw-bold">{item.title}</h5>
//                 <p className="text-muted small mb-0">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Online Courses Section */}
//       <section className="py-5">
//         <div className="container py-5">
//           <div className="row align-items-end mb-5">
//             <div className="col-md-6">
//               <h5 className="text-uppercase" style={{ color: '#B88A4A', letterSpacing: '2px' }}>Start Learning</h5>
//               <h2 className="display-6 fw-bold">Our Online Programs</h2>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <p className="text-muted">Every course includes comprehensive study materials and practical assignments.</p>
//             </div>
//           </div>

//           <div className="row g-4">
//             {/* Course 1 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="card h-100 shadow-sm border-0 position-relative">
//                 <span className="badge position-absolute top-0 end-0 m-3 bg-danger">Best Seller</span>
//                 <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
//                 <div className="card-body p-4">
//                   <div className="d-flex justify-content-between mb-2">
//                     <small className="text-muted">6 Weeks</small>
//                     <small className="text-warning">⭐⭐⭐⭐⭐ (4.8)</small>
//                   </div>
//                   <h5 className="card-title fw-bold">Master Makeup Artistry</h5>
//                   <p className="card-text text-muted small">Learn everything from Basic to Bridal, including Contouring and advanced Eye Makeup.</p>
//                   <hr />
//                   <div className="d-flex justify-content-between align-items-center">
//                     <span className="h5 fw-bold mb-0">₹4,999</span>
//                     <button className="btn btn-dark btn-sm">Join Course</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Course 2 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="card h-100 shadow-sm border-0">
//                 <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
//                 <div className="card-body p-4">
//                   <div className="d-flex justify-content-between mb-2">
//                     <small className="text-muted">4 Weeks</small>
//                     <small className="text-warning">⭐⭐⭐⭐ (4.5)</small>
//                   </div>
//                   <h5 className="card-title fw-bold">Advanced Hair Styling</h5>
//                   <p className="card-text text-muted small">Master chemical treatments, color theory, and modern haircutting techniques.</p>
//                   <hr />
//                   <div className="d-flex justify-content-between align-items-center">
//                     <span className="h5 fw-bold mb-0">₹3,499</span>
//                     <button className="btn btn-dark btn-sm">Join Course</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Course 3 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="card h-100 shadow-sm border-0">
//                 <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
//                 <div className="card-body p-4">
//                   <div className="d-flex justify-content-between mb-2">
//                     <small className="text-muted">3 Weeks</small>
//                     <small className="text-warning">⭐⭐⭐⭐⭐ (4.9)</small>
//                   </div>
//                   <h5 className="card-title fw-bold">Skincare & Aesthetics</h5>
//                   <p className="card-text text-muted small">Expert training in facial techniques, skin analysis, and product knowledge.</p>
//                   <hr />
//                   <div className="d-flex justify-content-between align-items-center">
//                     <span className="h5 fw-bold mb-0">₹2,999</span>
//                     <button className="btn btn-dark btn-sm">Join Course</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Academy Stats / Why Us */}
//       <section className="py-5 text-white" style={{ backgroundColor: '#1a1a1a' }}>
//         <div className="container">
//           <div className="row text-center g-4">
//             <div className="col-6 col-md-3">
//               <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>1200+</h2>
//               <p className="small text-uppercase">Students Trained</p>
//             </div>
//             <div className="col-6 col-md-3">
//               <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>45+</h2>
//               <p className="small text-uppercase">Online Modules</p>
//             </div>
//             <div className="col-6 col-md-3">
//               <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>100%</h2>
//               <p className="small text-uppercase">Placement Support</p>
//             </div>
//             <div className="col-6 col-md-3">
//               <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>24/7</h2>
//               <p className="small text-uppercase">Student Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//      <Footer/>
       
//     </div>
//   );
// };

// export default BeautyAcademy;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const BeautyAcademy = () => {

  // WhatsApp Function
  const handleWhatsApp = (courseName) => {
    const phoneNumber = "917020489915"; // <--- Apna WhatsApp Number yahan likhein (with 91)
    const message = `Hello Archies Beauty Academy, I want to join the "${courseName}" online course. Please share the details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="academy-page bg-light">
      
      {/* Hero Section - Academy Theme */}
      <section className="hero-section text-white d-flex align-items-center" style={{ 
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundSize: 'cover',
          height: '75vh',
          backgroundPosition: 'center'
        }}>
        <div className="container text-center">
          <h5 className="text-uppercase mb-3" style={{ color: '#B88A4A', letterSpacing: '4px' }}>Learn from the Masters</h5>
          <h1 className="display-3 fw-bold mb-3">Archies Beauty Academy</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
            Master International Makeup techniques and Hair Styling from the comfort of your home. 
            Join our online live classes and become a Certified Beauty Expert today.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-warning btn-lg px-4 fw-bold shadow">View Courses</button>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <div className="container" style={{ marginTop: '-60px' }}>
        <div className="row g-4">
          {[
            { title: 'Live Sessions', desc: 'Direct interaction with expert educators in real-time.', icon: '📹' },
            { title: 'Certification', desc: 'Receive a recognized digital certificate upon completion.', icon: '📜' },
            { title: 'Career Guidance', desc: 'Personalized help to build your professional portfolio.', icon: '💼' }
          ].map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-lg p-4 text-center h-100">
                <div className="fs-1 mb-2">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Courses Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-end mb-5">
            <div className="col-md-6">
              <h5 className="text-uppercase" style={{ color: '#B88A4A', letterSpacing: '2px' }}>Start Learning</h5>
              <h2 className="display-6 fw-bold">Our Online Programs</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-muted">Every course includes comprehensive study materials and practical assignments.</p>
            </div>
          </div>

          <div className="row g-4">
            {/* Course 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 position-relative">
                <span className="badge position-absolute top-0 end-0 m-3 bg-danger">Best Seller</span>
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-muted">6 Weeks</small>
                    <small className="text-warning">⭐⭐⭐⭐⭐ (4.8)</small>
                  </div>
                  <h5 className="card-title fw-bold">Master Makeup Artistry</h5>
                  <p className="card-text text-muted small">Learn everything from Basic to Bridal, including Contouring and advanced Eye Makeup.</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 fw-bold mb-0">₹4,999</span>
                    <button 
                      className="btn btn-dark btn-sm"
                      onClick={() => handleWhatsApp("Master Makeup Artistry")}
                    >
                      Join Course
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-muted">4 Weeks</small>
                    <small className="text-warning">⭐⭐⭐⭐ (4.5)</small>
                  </div>
                  <h5 className="card-title fw-bold">Advanced Hair Styling</h5>
                  <p className="card-text text-muted small">Master chemical treatments, color theory, and modern haircutting techniques.</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 fw-bold mb-0">₹3,499</span>
                    <button 
                      className="btn btn-dark btn-sm"
                      onClick={() => handleWhatsApp("Advanced Hair Styling")}
                    >
                      Join Course
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Hair Course" />
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-muted">3 Weeks</small>
                    <small className="text-warning">⭐⭐⭐⭐⭐ (4.9)</small>
                  </div>
                  <h5 className="card-title fw-bold">Skincare & Aesthetics</h5>
                  <p className="card-text text-muted small">Expert training in facial techniques, skin analysis, and product knowledge.</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 fw-bold mb-0">₹2,999</span>
                    <button 
                      className="btn btn-dark btn-sm"
                      onClick={() => handleWhatsApp("Skincare & Aesthetics")}
                    >
                      Join Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Stats / Why Us */}
      <section className="py-5 text-white" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>1200+</h2>
              <p className="small text-uppercase">Students Trained</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>45+</h2>
              <p className="small text-uppercase">Online Modules</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>100%</h2>
              <p className="small text-uppercase">Placement Support</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>24/7</h2>
              <p className="small text-uppercase">Student Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
        
    </div>
  );
};

export default BeautyAcademy;