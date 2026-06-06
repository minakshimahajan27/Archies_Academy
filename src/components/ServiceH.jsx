// import React from 'react';


// // Images import karein
// import haircutImg from '../img/haircut.png';
// import makeupImg from '../img/makeup.png';
// import manicureImg from '../img/manicure.png';
// import pedicureImg from '../img/pedicure.png';
// import massageImg from '../img/massage.png';
// import skinCareImg from '../img/skin-care.png';

// const services = [
//   // Yahan "haircut.png" ki jagah haircutImg (variable) likhein
//   { title: "Haircut", img: haircutImg },
//   { title: "Makeup", img: makeupImg },
//   { title: "Manicure", img: manicureImg },
//   { title: "Pedicure", img: pedicureImg },
//   { title: "Massage", img: massageImg },
//   { title: "Skin Care", img: skinCareImg }
// ];

// export default function ServiceH() {
//   return (
//     <section className="services-section py-5">
//       <div className="container text-center py-5">
//         <h5 className="services-subtitle">Our Services</h5>
//         <h1 className="services-main-title mb-5">Explore Our Services</h1>

//         <div className="row g-0 services">
//           {services.map((item, index) => (
//             <div key={index} className="col-lg-4 col-md-6 service-item">
//               <div className="service-img-container mb-4">
//                 {/* Yahan Icon ki jagah Image lagayi hai */}
//                 <img 
//                   src={item.img} 
//                   alt={item.title} 
//                   className="service-custom-img" 
//                 />
//               </div>

//               <h3 className="service-card-title mb-3">{item.title}</h3>
//               <p className="service-description text-muted mb-4">
//                 Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet
//               </p>

//               <div className="d-flex justify-content-center">
//                 <div className="btn-read-more-frame">
//                   <button className="btn-text">READ MORE →</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import haircutImg from '../img/haircut.png';
import makeupImg from '../img/makeup.png';
import manicureImg from '../img/manicure.png';
import pedicureImg from '../img/pedicure.png';
import massageImg from '../img/massage.png';
import skinCareImg from '../img/skin-care.png';
import { Link } from "react-router-dom";

const services = [
  {
    title: "Haircut",
    img: haircutImg,
    description:
      "Professional haircut services tailored to your face shape and style preferences. Get a fresh, trendy look from our expert stylists."
  },
  {
    title: "Makeup",
    img: makeupImg,
    description:
      "Enhance your natural beauty with professional makeup services for weddings, parties, events, and special occasions."
  },
  {
    title: "Manicure",
    img: manicureImg,
    description:
      "Keep your hands beautiful and well-groomed with our relaxing manicure treatments and premium nail care services."
  },
  {
    title: "Pedicure",
    img: pedicureImg,
    description:
      "Refresh and rejuvenate your feet with our luxurious pedicure services designed for comfort, hygiene, and beauty."
  },
  {
    title: "Massage",
    img: massageImg,
    description:
      "Relieve stress and relax your body with therapeutic massage treatments that promote wellness and relaxation."
  },
  {
    title: "Skin Care",
    img: skinCareImg,
    description:
      "Achieve healthy, glowing skin with our advanced skincare treatments, facials, and personalized beauty solutions."
  }
];

export default function ServiceH() {
  return (
    <section className="services-section py-5">

      {/* --- Added Internal CSS Block --- */}
      <style>{`
        .services-section {
             width: 1200px;
             margin-left: auto;
             margin-right: auto;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             max-width: 100%;
              
        }

        .services-section p {
             font-size: 19px;
        }

        /* Typography as per Image */


        .service-item {
             border: 0.5px solid #ececec;
             /* Light grid lines from image */
             padding: 40px 40px;
             transition: all 0.3s ease;
        }

        .service-card-title {
             font-family: 'Playfair Display', serif;
             font-weight: 600;
             font-size: 1.3rem;
        }

        /* Image Styling */
        .service-custom-img {
             width: 60px;
             height: auto;
             transition: transform 0.3s ease;
        }

        .service-item:hover .service-custom-img {
             transform: scale(1.1);
        }

        .service-item:hover {
             background-color: #fdfbfa;
             /* Light tint on hover */
        }

        /* --- Read More Cross Frame Button --- */
        .btn-read-more-frame {
             width: 110px;
             height: 43px;
             background-color: transparent;
             border: 2px solid #B88A4A;
             display: flex;
             align-items: center;
             justify-content: center;
             position: relative;
             transition: 0.3s;
             cursor: pointer;
        }

        .btn-read-more-frame .btn-text {
             background: transparent;
             border: none;
             color: #333;
             font-weight: 700;
             font-size: 11px;
             letter-spacing: 1px;
             z-index: 5;
        }

        .btn-read-more-frame:hover {
             background-color: #B88A4A;
        }

        .btn-read-more-frame:hover .btn-text {
             color: #fff;
        }

        /* Cross Corner Lines */
        .btn-read-more-frame::after {
             content: "";
             position: absolute;
             top: -15px;
             left: -15px;
             right: -15px;
             bottom: -15px;
             background:
                  linear-gradient(to right, #B88A4A 1.5px, transparent 1.5px) 10px 0,
                  linear-gradient(to right, #B88A4A 1.5px, transparent 1.5px) calc(100% - 10px) 0,
                  linear-gradient(to right, #B88A4A 1.5px, transparent 1.5px) 10px 100%,
                  linear-gradient(to right, #B88A4A 1.5px, transparent 1.5px) calc(100% - 10px) 100%,
                  linear-gradient(to bottom, #B88A4A 1.5px, transparent 1.5px) 0 10px,
                  linear-gradient(to bottom, #B88A4A 1.5px, transparent 1.5px) 0 calc(100% - 10px),
                  linear-gradient(to bottom, #B88A4A 1.5px, transparent 1.5px) 100% 10px,
                  linear-gradient(to bottom, #B88A4A 1.5px, transparent 1.5px) 100% calc(100% - 10px);
             background-repeat: no-repeat;
             background-size: 1.5px 100%, 1.5px 100%, 1.5px 100%, 1.5px 100%, 100% 1.5px, 100% 1.5px, 100% 1.5px, 100% 1.5px;
             pointer-events: none;
        }
      `}</style>

      <div className="container text-center py-5">
        <h5 className="all-subtitle text-uppercase mt-5">Our Services</h5>
        <h1 className="all-main-title mb-5">Explore Our Services</h1>

        <div className="row g-0 services">
          {services.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 service-item">
              <div className="service-img-container mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="service-custom-img"
                />
              </div>

              <h3 className="service-card-title mb-3">{item.title}</h3>
              <p className="service-description text-muted mb-4">
                {item.description}
              </p>

              <div className="d-flex justify-content-center">
  <div className="btn-read-more-frame">
    <Link to="/price" className="btn-text text-decoration-none">
      View Pricing →
    </Link>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}