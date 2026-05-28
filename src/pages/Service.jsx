import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="salon-page bg-light">

      {/* Hero Section - Salon Theme */}
      <section className="hero-section text-white d-flex align-items-center" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        height: '85vh',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center">
          <h5 className="text-uppercase mb-3" style={{ color: '#B88A4A', letterSpacing: '3px' }}>Welcome to Luxury Glow</h5>
          <h1 className="display-3 fw-bold mb-3">Redefine Your Style</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Expert Makeup Artists aur Professional Hair Stylists se payein ek naya look.
            Aapki khoobsurti, hamari pehchan.
          </p>
          <Link
            to="/appointment"
            className="btn btn-lg px-5 py-3 fw-bold shadow text-decoration-none"
            style={{ backgroundColor: '#B88A4A', color: 'white', display: 'inline-block' }}
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <div className="container" style={{ marginTop: '-50px' }}>
        <div className="row g-4 text-center">
          {[
            { label: 'Happy Clients', count: '5000+' },
            { label: 'Expert Stylists', count: '15+' },
            { label: 'Years Experience', count: '10+' }
          ].map((stat, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-lg p-4 bg-white">
                <h2 className="fw-bold" style={{ color: '#B88A4A' }}>{stat.count}</h2>
                <p className="mb-0 text-muted fw-bold text-uppercase small">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-uppercase" style={{ color: '#B88A4A', letterSpacing: '2px' }}>Professional Services</h5>
            <h2 className="display-5 fw-bold text-dark">Our Salon Specialties</h2>
          </div>

          <div className="row g-4">
            {/* Service Card 1: Haircut */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Haircut" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Hair Styling & Cut</h5>
                  <p className="card-text text-muted">Latest trends ke hisaab se haircut aur styling payein. Perfect for any occasion.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <span className="fw-bold text-dark fs-5">Starting ₹499</span>
                    <button className="btn btn-sm px-3 text-white" style={{ backgroundColor: '#B88A4A' }}>Details</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2: Makeup */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Makeup" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Bridal & Party Makeup</h5>
                  <p className="card-text text-muted">High-definition aur waterproof makeup jo aapke special day ko banaye aur bhi khaas.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <span className="fw-bold text-dark fs-5">Starting ₹2999</span>
                    <button className="btn btn-sm px-3 text-white" style={{ backgroundColor: '#B88A4A' }}>Details</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3: Skin Care */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Skin Care" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Premium Facial & Spa</h5>
                  <p className="card-text text-muted">Skin rejuvenation aur relaxing spa treatments se payein glowing aur healthy skin.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <span className="fw-bold text-dark fs-5">Starting ₹999</span>
                    <button className="btn btn-sm px-3 text-white" style={{ backgroundColor: '#B88A4A' }}>Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Salon */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-circle shadow-lg" style={{ width: '450px', height: '450px', objectFit: 'cover' }} alt="Salon Interior" />
            </div>
            <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
              <h5 className="text-uppercase" style={{ color: '#B88A4A' }}>Why Visit Us?</h5>
              <h2 className="display-6 fw-bold mb-4">Experience the Art of Grooming</h2>
              <ul className="list-unstyled">
                <li className="mb-4 d-flex align-items-start">
                  <span className="me-3 fs-4">✨</span>
                  <div>
                    <h6 className="fw-bold">Certified Artists</h6>
                    <p className="text-muted small">Humare stylists certified hain aur industry trends mein update rehte hain.</p>
                  </div>
                </li>
                <li className="mb-4 d-flex align-items-start">
                  <span className="me-3 fs-4">🧴</span>
                  <div>
                    <h6 className="fw-bold">Premium Products</h6>
                    <p className="text-muted small">Hum sirf top-quality international brands (L'Oreal, MAC) use karte hain.</p>
                  </div>
                </li>
                <li className="mb-4 d-flex align-items-start">
                  <span className="me-3 fs-4">🧼</span>
                  <div>
                    <h6 className="fw-bold">Hygiene First</h6>
                    <p className="text-muted small">Har service ke baad tools sanitize hote hain aur disposable items ka use hota hai.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container text-center py-4">
          <h2 className="text-white fw-bold mb-4">Ready for your Transformation?</h2>
          <p className="text-light mb-4">Aaj hi apni seat book karein aur 10% discount payein apni pehli visit par.</p>
          <a href="tel:+911234567890" className="btn btn-outline-light btn-lg px-5">Call Us Now</a>
        </div>
      </section>
    </div>
  );
};

export default Service;