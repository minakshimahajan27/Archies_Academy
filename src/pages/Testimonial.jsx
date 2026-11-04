
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Reviews from Backend API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/reviews/all');
        if (response.data.success) {
          setTestimonials(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container text-center py-5">
        <h5 className="all-subtitle text-uppercase">Testimonial</h5>
        <h1 className="all-main-title mb-5">What Clients Say!</h1>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-muted">Abhi tak koi review available nahi hai.</p>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 10000 }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testi-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="testi-card">
                  <i className="fa fa-quote-left quote-icon-top"></i>
                  <p className="testi-text">
                    {item.message}
                  </p>
                  <div className="client-meta">
                    <div className="client-img-frame">
                      {item.clientPhoto ? (
                        <img 
                          src={`http://localhost:5000/${item.clientPhoto}`} 
                          alt={item.clientName} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <img src="../img/img2.jpg" alt={item.clientName} />
                      )}
                    </div>
                    <h4 className="client-name">{item.clientName}</h4>
                    <p className="client-prof">{item.serviceUsed}</p>
                  </div>
                  {/* Bottom Quote Background */}
                  <i className="fa fa-quote-right quote-icon-bottom"></i>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* --- Custom Square Arrows --- */}
        <div className="d-flex justify-content-center mt-5 gap-3">
          <button className="custom-prev arrow-btn"><i className="fa fa-chevron-left"></i></button>
          <button className="custom-next arrow-btn"><i className="fa fa-chevron-right"></i></button>
        </div>
      </div>
    </section>
  );
};

// Yeh line sabse zaroori hai error hatane ke liye:
export default Testimonial;