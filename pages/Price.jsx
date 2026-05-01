// import React from 'react';
// import { Link } from 'react-router-dom';
// import abc from '../src/img/page-header.jpg'; // Aapki image
// // Images ko import karein (Path check kar lein)
// import p1 from '../src/img/price-1.jpg';
// import p2 from '../src/img/price-2.jpg';
// import p3 from '../src/img/price-3.jpg';
// import p4 from '../src/img/price-4.jpg';
// import p5 from '../src/img/price-5.jpg';
// import p6 from '../src/img/price-6.jpg';
// import Footer from '../components/Footer';

// const pricingList = [
//   { name: "Haircut", price: "$49", img: p1 },
//   { name: "Makeup", price: "$79", img: p2 },
//   { name: "Manicure", price: "$59", img: p3 },
//   { name: "Pedicure", price: "$49", img: p4 },
//   { name: "Massage", price: "$39", img: p5 },
//   { name: "Skin Care", price: "$99", img: p6 },
// ];

// export default function Price() {
//   return (
//      <>    
//           <section 
//                 className="breadcrumb-section d-flex align-items-center justify-content-center text-center"
//                 style={{ 
//                   backgroundImage: ` url(${abc})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: '350px'
//                 }}
//               >
//                 <div>
//                   <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
//                   <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb justify-content-center">
//                       <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{color: '#B88A4A'}}>Home</Link></li>
//                       <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{color: '#B88A4A'}}>Pages</Link></li>
//                       <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
//                     </ol>
//                   </nav>
//                 </div>
//               </section>
//     <section className="pricing-section mt-5 mb-5">
//       <div className="pricing-container-custom d-flex flex-wrap mt-5">
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
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus lacus.
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
//     <Footer/>
//     </>
//   );
// // }
// import React , {useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import abc from '../src/img/page-header.jpg'; 
// import p1 from '../src/img/price-1.jpg';
// import p2 from '../src/img/price-2.jpg';
// import p3 from '../src/img/price-3.jpg';
// import p4 from '../src/img/price-4.jpg';
// import p5 from '../src/img/price-5.jpg';
// import p6 from '../src/img/price-6.jpg';
// import Footer from '../components/Footer';
// import { getAllPackagesService } from '../src/API/service.js';
// const pricingList = [
//   { name: "Haircut", price: "$49", img: p1 },
//   { name: "Makeup", price: "$79", img: p2 },
//   { name: "Manicure", price: "$59", img: p3 },
//   { name: "Pedicure", price: "$49", img: p4 },
//   { name: "Massage", price: "$39", img: p5 },
//   { name: "Skin Care", price: "$99", img: p6 },
// ];

// // Naya Packages Data (Ye aap admin panel se fetch kar sakti hain baad mein)
// const packagesList = [
//   { 
//     title: "Bridal Luxury Package", 
//     price: "₹15,000", 
//     img: p2, 
//     desc: "Complete Bridal Makeup, Hair Styling, and Draping." 
//   },
//   { 
//     title: "Party Glow Combo", 
//     price: "₹5,000", 
//     img: p6, 
//     desc: "Face Cleanup, HD Makeup, and Blow Dry." 
//   },
//   { 
//     title: "Skin Rejuvenation", 
//     price: "₹3,500", 
//     img: p5, 
//     desc: "Premium Facial, Detan, and Head Massage." 
//   }
// ];
// useEffect(() => {
//     const loadData = async () => {
//         const res = await getAllPackagesService();
//         setPackages(res.data); // Backend se jo 'data' key mein array aa raha hai
//     };
//     loadData();
// }, []);

// export default function Price() {
//   return (
//     <>    
//       <section 
//         className="breadcrumb-section d-flex align-items-center justify-content-center text-center"
//         style={{ 
//           backgroundImage: `url(${abc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '350px'
//         }}
//       >
//         <div>
//           <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb justify-content-center">
//               <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{color: '#B88A4A'}}>Home</Link></li>
//               <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{color: '#B88A4A'}}>Pages</Link></li>
//               <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
//             </ol>
//           </nav>
//         </div>
//       </section>

//       {/* Existing Pricing Section (No Changes Here) */}
//       <section className="pricing-section mt-5 mb-5">
//         <div className="pricing-container-custom d-flex flex-wrap mt-5 shadow-sm">
//           <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
//             <h5 className="pricing-italic-subtitle">Pricing</h5>
//             <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>
//             <div className="row gx-2 align-items-center">
//               <div className="col-md-6 pt-5">
//                 <div className="enjoy-discount-box text-center mb-4">
//                   <p className="mb-1">The Art of</p>
//                   <h1 className="display-6 fw-bold">BEAUTY</h1>
//                   <p className="mb-0 italic-font">Experience</p>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <p className="pricing-desc-text mb-4">
//                   Experience our premium services at the most affordable prices. We use high-quality products for your skin and hair.
//                 </p>
//                 <div className="about-btn-container">
//                   <div className="custom-frame-btn1">
//                     <button className="btn-read-more-text">READ MORE</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="pricing-right-list p-5 d-flex flex-column justify-content-center">
//             {pricingList.map((item, index) => (
//               <div key={index} className="pricing-row-item d-flex align-items-center mb-3">
//                 <div className="pricing-img-wrapper">
//                   <img src={item.img} alt={item.name} className="pricing-thumb" />
//                 </div>
//                 <div className="pricing-info d-flex justify-content-between align-items-center w-100">
//                   <div className="pricing-service-title">{item.name}</div>
//                   <div className="pricing-service-val">{item.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- NAYA SECTION: SPECIAL PACKAGES --- */}
//       <section className="container mb-5 pb-5">
//         <div className="text-center mb-5">
//           <h5 style={{ color: '#B88A4A', fontStyle: 'italic' }}>Special Offers</h5>
//           <h2 className="fw-bold" style={{ letterSpacing: '2px' }}>OUR EXCLUSIVE PACKAGES</h2>
//           <div style={{ width: '60px', height: '3px', background: '#B88A4A', margin: '15px auto' }}></div>
//         </div>

//         <div className="row g-4">
//           {packagesList.map((pkg, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card h-100 border-0 shadow-sm transition-hover" style={{ borderRadius: '15px', overflow: 'hidden' }}>
//                 <div style={{ height: '230px', overflow: 'hidden' }}>
//                   <img src={pkg.img} className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} alt={pkg.title} />
//                 </div>
//                 <div className="card-body p-4 text-center">
//                   <h5 className="fw-bold mb-2">{pkg.title}</h5>
//                   <p className="text-muted small mb-3">{pkg.desc}</p>
//                   <h4 className="fw-bold" style={{ color: '#B88A4A' }}>{pkg.price}</h4>
//                   <button className="btn mt-3 w-100 py-2 fw-bold" 
//                           style={{ border: '2px solid #B88A4A', color: '#B88A4A', borderRadius: '30px', transition: '0.3s' }}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer/>

//       {/* Nayi CSS for Packages Hover */}
//       <style>{`
//         .transition-hover:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
//           transition: 0.3s ease-in-out;
//         }
//         .btn:hover {
//           background: #B88A4A !important;
//           color: white !important;
//         }
//       `}</style>
//     </>
//   );
// }

// import React, { useEffect, useState } from 'react'; // 1. useState add kiya
// import { Link } from 'react-router-dom';
// import abc from '../src/img/page-header.jpg';
// import p1 from '../src/img/price-1.jpg';
// import p2 from '../src/img/price-2.jpg';
// import p3 from '../src/img/price-3.jpg';
// import p4 from '../src/img/price-4.jpg';
// import p5 from '../src/img/price-5.jpg';
// import p6 from '../src/img/price-6.jpg';
// import Footer from '../components/Footer';
// import { getAllPackagesService } from '../src/API/service.js';

// const pricingList = [
//   { name: "Haircut", price: "$49", img: p1 },
//   { name: "Makeup", price: "$79", img: p2 },
//   { name: "Manicure", price: "$59", img: p3 },
//   { name: "Pedicure", price: "$49", img: p4 },
//   { name: "Massage", price: "$39", img: p5 },
//   { name: "Skin Care", price: "$99", img: p6 },
// ];

// export default function Price() {
//   // 2. State banayi data store karne ke liye
//   const [packages, setPackages] = useState([]);

//   // 3. useEffect ko function ke ANDAR laya
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const res = await getAllPackagesService();
//         if (res.success) {
//           setPackages(res.data);
//         }
//       } catch (error) {
//         console.error("Data load nahi hua:", error);
//       }
//     };
//     loadData();
//   }, []);

//   return (
//     <>
//       <section
//         className="breadcrumb-section d-flex align-items-center justify-content-center text-center"
//         style={{
//           backgroundImage: `url(${abc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '350px'
//         }}
//       >
//         <div>
//           <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb justify-content-center">
//               <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#B88A4A' }}>Home</Link></li>
//               <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{ color: '#B88A4A' }}>Pages</Link></li>
//               <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
//             </ol>
//           </nav>
//         </div>
//       </section>

//       {/* Pricing Section (Services) */}
//       <section className="pricing-section mt-5 mb-5">
//         <div className="pricing-container-custom d-flex flex-wrap mt-5 shadow-sm">
//           <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
//             <h5 className="pricing-italic-subtitle">Pricing</h5>
//             <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>
//             <div className="row gx-2 align-items-center">
//               <div className="col-md-6 pt-5">
//                 <div className="enjoy-discount-box text-center mb-4">
//                   <p className="mb-1">The Art of</p>
//                   <h1 className="display-6 fw-bold">BEAUTY</h1>
//                   <p className="mb-0 italic-font">Experience</p>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <p className="pricing-desc-text mb-4">
//                   Experience our premium services at the most affordable prices.
//                 </p>
//                 <div className="about-btn-container">
//                   <div className="custom-frame-btn1">
//                     <button className="btn-read-more-text">READ MORE</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="pricing-right-list p-5 d-flex flex-column justify-content-center">
//             {pricingList.map((item, index) => (
//               <div key={index} className="pricing-row-item d-flex align-items-center mb-3">
//                 <div className="pricing-img-wrapper">
//                   <img src={item.img} alt={item.name} className="pricing-thumb" />
//                 </div>
//                 <div className="pricing-info d-flex justify-content-between align-items-center w-100">
//                   <div className="pricing-service-title">{item.name}</div>
//                   <div className="pricing-service-val">{item.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SPECIAL PACKAGES SECTION (Now Dynamic) --- */}
//       <section className="container mb-5 pb-5">
//         <div className="text-center mb-5">
//           <h5 style={{ color: '#B88A4A', fontStyle: 'italic' }}>Special Offers</h5>
//           <h2 className="fw-bold" style={{ letterSpacing: '2px' }}>OUR EXCLUSIVE PACKAGES</h2>
//           <div style={{ width: '60px', height: '3px', background: '#B88A4A', margin: '15px auto' }}></div>
//         </div>

//         <div className="row g-4">
//           {/* 4. 'packages' state ko map kiya */}
//           {packages.length > 0 ? packages.map((pkg, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card h-100 border-0 shadow-sm transition-hover" style={{ borderRadius: '15px', overflow: 'hidden' }}>
//                 <div style={{ height: '230px', overflow: 'hidden' }}>
//                   {/* <img 
//                     src={pkg.packageImage} // Backend ki key 'packageImage' hai
//                     className="card-img-top w-100 h-100" 
//                     style={{ objectFit: 'cover' }} 
//                     alt={pkg.packageName} 
//                   /> */}
//                   <img
//                     src={pkg.packageImage.startsWith('http') ? pkg.packageImage : `http://localhost:5000/uploads/${pkg.packageImage}`}
//                     className="card-img-top w-100 h-100"
//                     style={{ objectFit: 'cover' }}
//                     alt={pkg.packageName}
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=No+Image'; }} // Agar image na mile toh ye dikhe
//                   />
//                 </div>
//                 <div className="card-body p-4 text-center">
//                   <h5 className="fw-bold mb-2">{pkg.packageName}</h5>
//                   <p className="text-muted small mb-3">{pkg.description}</p>
//                   <h4 className="fw-bold" style={{ color: '#B88A4A' }}>₹{pkg.price}</h4>
//                   <button className="btn mt-3 w-100 py-2 fw-bold"
//                     style={{ border: '2px solid #B88A4A', color: '#B88A4A', borderRadius: '30px' }}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )) : (
//             <p className="text-center">No packages available right now.</p>
//           )}
//         </div>
//       </section>

//       <Footer />

//       <style>{`
//         .transition-hover:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
//           transition: 0.3s ease-in-out;
//         }
//         .btn:hover {
//           background: #B88A4A !important;
//           color: white !important;
//         }
//       `}</style>
//     </>
//   );
// // }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import abc from '../src/img/page-header.jpg';
import p1 from '../src/img/price-1.jpg';
import p2 from '../src/img/price-2.jpg';
import p3 from '../src/img/price-3.jpg';
import p4 from '../src/img/price-4.jpg';
import p5 from '../src/img/price-5.jpg';
import p6 from '../src/img/price-6.jpg';
import Footer from '../components/Footer';
import { getAllPackagesService } from '../src/API/service.js';

const pricingList = [
  { name: "Haircut", price: "$49", img: p1 },
  { name: "Makeup", price: "$79", img: p2 },
  { name: "Manicure", price: "$59", img: p3 },
  { name: "Pedicure", price: "$49", img: p4 },
  { name: "Massage", price: "$39", img: p5 },
  { name: "Skin Care", price: "$99", img: p6 },
];

export default function Price() {
  const [packages, setPackages] = useState([]);

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

  return (
    <>
      <section
        className="breadcrumb-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${abc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px'
        }}
      >
        <div>
          <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#B88A4A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{ color: '#B88A4A' }}>Pages</Link></li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="pricing-section mt-5 mb-5">
        <div className="pricing-container-custom d-flex flex-wrap mt-5 shadow-sm">
          <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
            <h5 className="pricing-italic-subtitle">Pricing</h5>
            <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>
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
                  Experience our premium services at the most affordable prices.
                </p>
                <div className="about-btn-container">
                  <div className="custom-frame-btn1">
                    <button className="btn-read-more-text">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

      <section className="container mb-5 pb-5">
        <div className="text-center mb-5">
          <h5 style={{ color: '#B88A4A', fontStyle: 'italic' }}>Special Offers</h5>
          <h2 className="fw-bold" style={{ letterSpacing: '2px' }}>OUR EXCLUSIVE PACKAGES</h2>
          <div style={{ width: '60px', height: '3px', background: '#B88A4A', margin: '15px auto' }}></div>
        </div>

        <div className="row g-4">
          {packages.length > 0 ? packages.map((pkg, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm transition-hover" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img
                    // Backend port 8000 hai aur folder /uploads/
                    src={pkg.packageImage.startsWith('http')
                      ? pkg.packageImage
                      : `http://localhost:5000/uploads/${pkg.packageImage}`}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    alt={pkg.packageName}
                    // Agar path galat ho toh broken image ki jagah placeholder dikhega
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-2">{pkg.packageName}</h5>
                  <p className="text-muted small mb-3">{pkg.description}</p>
                  <h4 className="fw-bold" style={{ color: '#B88A4A' }}>₹{pkg.price}</h4>
                  <button className="btn mt-3 w-100 py-2 fw-bold"
                    style={{ border: '2px solid #B88A4A', color: '#B88A4A', borderRadius: '30px' }}>
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <p className="text-center">No packages available right now.</p>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .transition-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          transition: 0.3s ease-in-out;
        }
        .btn:hover {
          background: #B88A4A !important;
          color: white !important;
        }
      `}</style>
    </>
  );
}
