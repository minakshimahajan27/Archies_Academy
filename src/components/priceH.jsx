import React from 'react';

// Images ko import karein (Path check kar lein)
import p1 from '../img/haircut...jpg';
import p2 from '../img/makeup...jpeg';
import p3 from '../img/manicure...jpeg';
import p4 from '../img/pedicure...jpeg';
import p5 from '../img/massage...jpeg';
import p6 from '../img/skin-care...jpeg';

const pricingList = [
  { name: "Haircut", price: "Starts From ₹399/-", img: p1 },
  { name: "Makeup", price: "Starts From ₹1,999/-", img: p2 },
  { name: "Manicure", price: "Starts From ₹699/-", img: p3 },
  { name: "Pedicure", price: "Starts From ₹899/-", img: p4 },
  { name: "Massage", price: "Starts From ₹1,299/-", img: p5 },
  { name: "Skin Care", price: "Starts From ₹999/-", img: p6 },
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

  );
}