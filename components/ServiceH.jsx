import React from 'react';


// Images import karein
import haircutImg from '../src/img/haircut.png';
import makeupImg from '../src/img/makeup.png';
import manicureImg from '../src/img/manicure.png';
import pedicureImg from '../src/img/pedicure.png';
import massageImg from '../src/img/massage.png';
import skinCareImg from '../src/img/skin-care.png';

const services = [
  // Yahan "haircut.png" ki jagah haircutImg (variable) likhein
  { title: "Haircut", img: haircutImg },
  { title: "Makeup", img: makeupImg },
  { title: "Manicure", img: manicureImg },
  { title: "Pedicure", img: pedicureImg },
  { title: "Massage", img: massageImg },
  { title: "Skin Care", img: skinCareImg }
];

export default function ServiceH() {
  return (
    <section className="services-section py-5">
      <div className="container text-center py-5">
        <h5 className="services-subtitle">Our Services</h5>
        <h1 className="services-main-title mb-5">Explore Our Services</h1>
        
        <div className="row g-0 services">
          {services.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 service-item">
              <div className="service-img-container mb-4">
                {/* Yahan Icon ki jagah Image lagayi hai */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="service-custom-img" 
                />
              </div>
              
              <h3 className="service-card-title mb-3">{item.title}</h3>
              <p className="service-description text-muted mb-4">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet
              </p>
              
              <div className="d-flex justify-content-center">
                <div className="btn-read-more-frame">
                  <button className="btn-text">READ MORE →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}