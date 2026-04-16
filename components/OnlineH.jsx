// import React from 'react';

// const OnlineH = () => {
//   return (
//     <div style={{ backgroundColor: '#fff', padding: '80px 0' }}>
//       <div className="container">
//         {/* Section Heading - Matching your Home Page Style */}
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase" style={{ color: '#B88A4A', letterSpacing: '3px', fontWeight: 'bold' }}>Training & Certification</h6>
//           <h2 className="display-5 fw-bold" style={{ color: '#1a1a1a', fontFamily: 'serif' }}>Join Our Online Classes</h2>
//           <div style={{ width: '60px', height: '3px', backgroundColor: '#B88A4A', margin: '20px auto' }}></div>
//         </div>

//         <div className="row g-4 align-items-center">
//           {/* Left Side: Video or Image */}
//           <div className="col-lg-6">
//             <div className="position-relative shadow-lg rounded overflow-hidden">
//               <img 
//                 src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" 
//                 className="img-fluid w-100" 
//                 alt="Academy Training" 
//                 style={{ transition: '0.5s all' }}
//               />
//               <div className="position-absolute top-50 start-50 translate-middle">
//                 <button className="btn btn-light rounded-circle p-4 shadow-lg" style={{ width: '80px', height: '80px' }}>
//                   <span style={{ color: '#B88A4A', fontSize: '24px' }}>▶</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Course Details */}
//           <div className="col-lg-6 ps-lg-5">
//             <h3 className="fw-bold mb-4" style={{ fontFamily: 'serif' }}>Master the Art of Beauty from Home</h3>
//             <p className="text-muted mb-4">
//               Archies Academy laya hai aapke liye special online modules. Chahe aap beginner hon ya professional, hamari classes aapki skills ko next level par le jayengi.
//             </p>

//             <div className="row g-3 mb-5">
//               {[
//                 { title: 'HD Makeup Pro', price: '₹2,999' },
//                 { title: 'Hair Styling Expert', price: '₹1,999' },
//                 { title: 'Bridal Masterclass', price: '₹4,499' }
//               ].map((course, i) => (
//                 <div className="col-12" key={i}>
//                   <div className="d-flex justify-content-between align-items-center p-3 border-start border-4 shadow-sm" style={{ borderColor: '#B88A4A', backgroundColor: '#fdfbf7' }}>
//                     <h6 className="mb-0 fw-bold">{course.title}</h6>
//                     <span className="fw-bold" style={{ color: '#B88A4A' }}>{course.price}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="btn btn-lg px-5 py-3 text-white shadow-lg" style={{ backgroundColor: '#1a1a1a', borderRadius: '0', border: '1px solid #B88A4A' }}>
//               ENROLL IN ACADEMY
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnlineH;


import React from 'react';

const OnlineH = () => {

  // WhatsApp Function
  const handleEnrollClick = () => {
    const phoneNumber = "917020489915"; // Aapka number
    const message = "Hello Archies Beauty Academy, I am interested in enrolling in your Online Academy. Please share the admission details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase" style={{ color: '#B88A4A', letterSpacing: '3px', fontWeight: 'bold' }}>Training & Certification</h6>
          <h2 className="display-5 fw-bold" style={{ color: '#1a1a1a', fontFamily: 'serif' }}>Join Our Online Classes</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#B88A4A', margin: '20px auto' }}></div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Left Side: Video or Image */}
          <div className="col-lg-6">
            <div className="position-relative shadow-lg rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" 
                className="img-fluid w-100" 
                alt="Academy Training" 
                style={{ transition: '0.5s all' }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <button className="btn btn-light rounded-circle p-4 shadow-lg" style={{ width: '80px', height: '80px' }}>
                  <span style={{ color: '#B88A4A', fontSize: '24px' }}>▶</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Course Details */}
          <div className="col-lg-6 ps-lg-5">
            <h3 className="fw-bold mb-4" style={{ fontFamily: 'serif' }}>Master the Art of Beauty from Home</h3>
            <p className="text-muted mb-4">
              Archies Academy laya hai aapke liye special online modules. Chahe aap beginner hon ya professional, hamari classes aapki skills ko next level par le jayengi.
            </p>

            <div className="row g-3 mb-5">
              {[
                { title: 'HD Makeup Pro', price: '₹2,999' },
                { title: 'Hair Styling Expert', price: '₹1,999' },
                { title: 'Bridal Masterclass', price: '₹4,499' }
              ].map((course, i) => (
                <div className="col-12" key={i}>
                  <div className="d-flex justify-content-between align-items-center p-3 border-start border-4 shadow-sm" style={{ borderColor: '#B88A4A', backgroundColor: '#fdfbf7' }}>
                    <h6 className="mb-0 fw-bold">{course.title}</h6>
                    <span className="fw-bold" style={{ color: '#B88A4A' }}>{course.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Integration Button */}
            <button 
              onClick={handleEnrollClick}
              className="btn btn-lg px-5 py-3 text-white shadow-lg d-flex align-items-center gap-2" 
              style={{ backgroundColor: '#1a1a1a', borderRadius: '0', border: '1px solid #B88A4A' }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="20" />
              ENROLL IN ACADEMY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineH;