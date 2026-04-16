import React from 'react';

// Images ko import karein (Path check kar lein)
import p1 from '../src/img/price-1.jpg';
import p2 from '../src/img/price-2.jpg';
import p3 from '../src/img/price-3.jpg';
import p4 from '../src/img/price-4.jpg';
import p5 from '../src/img/price-5.jpg';
import p6 from '../src/img/price-6.jpg';

const pricingList = [
  { name: "Haircut", price: "$49", img: p1 },
  { name: "Makeup", price: "$79", img: p2 },
  { name: "Manicure", price: "$59", img: p3 },
  { name: "Pedicure", price: "$49", img: p4 },
  { name: "Massage", price: "$39", img: p5 },
  { name: "Skin Care", price: "$99", img: p6 },
];

export default function PriceH() {
  return (
   
    <section className="pricing-section">
      <div className="pricing-container-custom d-flex flex-wrap">
        {/* Left Side: Golden Section */}
        <div className="pricing-left-box p-5 d-flex flex-column justify-content-center">
          <h5 className="pricing-italic-subtitle">Pricing</h5>
          <h2 className="pricing-main-heading mb-4">Beauty Salon <br /><span className="pricing-bold-title">PRICING</span></h2>

          {/* Dark Discount Box */}
          <div className="row gx-2 align-items-center">
            {/* gx-5 se dono columns ke beech achha gap aayega */}

            <div className="col-md-6 pt-5">
              <div className="enjoy-discount-box text-center mb-4">
                <p className="mb-1 ">The Art of</p>
                <h1 className="display-6 fw-bold">BEAUTY</h1>
                <p className="mb-0 italic-font">Experience</p>
              </div>
            </div>

            <div className="col-md-6">
              <p className="pricing-desc-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus lacus.
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
    
  );
}