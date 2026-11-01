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

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import p1 from '../img/haircut...jpg';
// import p2 from '../img/makeup...jpeg';
// import p3 from '../img/manicure...jpeg';
// import p4 from '../img/pedicure...jpeg';
// import p5 from '../img/massage...jpeg';
// import p6 from '../img/skin-care...jpeg';
// import Footer from '../components/Footer';
// import abc from '../img/page-header.jpg';
// import { getAllPackagesService } from '../API/service.js';

// const pricingList = [
//   { name: "Haircut", price: "Starts From ₹399/-", img: p1 },
//   { name: "Makeup", price: "Starts From ₹1,999/-", img: p2 },
//   { name: "Manicure", price: "Starts From ₹699/-", img: p3 },
//   { name: "Pedicure", price: "Starts From ₹899/-", img: p4 },
//   { name: "Massage", price: "Starts From ₹1,299/-", img: p5 },
//   { name: "Skin Care", price: "Starts From ₹999/-", img: p6 },
// ];


// export default function Price() {
//   const [packages, setPackages] = useState([]);

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
//           height: '350px',
//            marginTop:'-0px'
//         }}
//       >
//         <div>
//           <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb justify-content-center">
//               <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#B88A4A' }}>Home</Link></li>
//               <li className="breadcrumb-item"><Link to="/gallery" className="text-decoration-none" style={{ color: '#B88A4A' }}>Gallery</Link></li>
//               <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
//             </ol>
//           </nav>
//         </div>
//       </section>

//      <section className="pricing-section my-5">
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

//       <section className="container mb-5 pb-5">
//         <div className="text-center mb-5">
//           <h5 style={{ color: '#B88A4A', fontStyle: 'italic' }}>Special Offers</h5>
//           <h2 className="fw-bold" style={{ letterSpacing: '2px' }}>OUR EXCLUSIVE PACKAGES</h2>
//           <div style={{ width: '60px', height: '3px', background: '#B88A4A', margin: '15px auto' }}></div>
//         </div>

//         <div className="row g-4">
//           {packages.length > 0 ? packages.map((pkg, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card h-100 border-0 shadow-sm transition-hover" style={{ borderRadius: '15px', overflow: 'hidden' }}>
//                 <div style={{ height: '320px', overflow: 'hidden' }}>
//                   <img
//                     // Backend port 8000 hai aur folder /uploads/
//                     src={pkg.packageImage.startsWith('http')
//                       ? pkg.packageImage
//                       : `http://localhost:5000/uploads/${pkg.packageImage}`}
//                     className="card-img-top w-100 h-100"
//                     style={{ objectFit: 'cover' }}
//                     alt={pkg.packageName}
//                     // Agar path galat ho toh broken image ki jagah placeholder dikhega
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
//                     }}
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
// }
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import p1 from '../img/haircut...jpg';
import p2 from '../img/makeup...jpeg';
import p3 from '../img/manicure...jpeg';
import p4 from '../img/pedicure...jpeg';
import p5 from '../img/massage...jpeg';
import p6 from '../img/skin-care...jpeg';
import Footer from '../components/Footer';
import abc from '../img/page-header.jpg';
import { getAllPackagesService } from '../API/service.js';

const pricingList = [
  { name: "Haircut", price: "Starts From ₹399/-", img: p1 },
  { name: "Makeup", price: "Starts From ₹1,999/-", img: p2 },
  { name: "Manicure", price: "Starts From ₹699/-", img: p3 },
  { name: "Pedicure", price: "Starts From ₹899/-", img: p4 },
  { name: "Massage", price: "Starts From ₹1,299/-", img: p5 },
  { name: "Skin Care", price: "Starts From ₹999/-", img: p6 },
];

export default function Price() {
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
          // Agar slider ant tak pahunch gaya hai toh wapas shuruat par le aayein, warna aage scroll karein
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: 355, behavior: 'smooth' }); // Ek card ki width + gap
          }
        }
      }, 3000); // Har 3 second me auto scroll hoga
    };

    startAutoScroll();

    // Cleanup interval on unmount
    return () => clearInterval(scrollInterval);
  }, [packages]);

  // Function to handle WhatsApp Booking
  const handleWhatsAppBooking = (packageName, packagePrice) => {
    const phoneNumber = "919876543210"; // Yaha apna WhatsApp number daalein (Country code ke sath, bina '+' ke)
    const message = encodeURIComponent(`Hello, I want to book the package *${packageName}* priced at *₹${packagePrice}*. Please guide me with the further process.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <section
        className="breadcrumb-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${abc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          marginTop:'-0px'
        }}
      >
        <div>
          <h1 className="display-3 fw-bold text-dark mb-3">Prices</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#B88A4A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/gallery" className="text-decoration-none" style={{ color: '#B88A4A' }}>Gallery</Link></li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Prices</li>
            </ol>
          </nav>
        </div>
      </section>

     <section className="pricing-section my-5">
      <div className="pricing-container-custom d-flex flex-wrap">
        {/* Left Side: Golden Section */}
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

        {/* Auto Scrollable Slider Container with ref */}
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
                        <p className="text-muted small mb-3 text-truncate-custom" style={{ minHeight: '45px', lineHeight: '1.5' }}>
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

      <Footer />

      <style>{`
        /* Auto Slider CSS */
        .packages-slider-container {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 25px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox par scrollbar chupane ke liye */
        }

        .packages-slider-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari par scrollbar chupane ke liye taaki clean dikhe */
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

        /* Website Theme Matched Button */
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