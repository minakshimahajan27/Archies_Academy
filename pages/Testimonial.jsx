import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Team images (aapne pehle jo use ki thi)
import p1 from '../src/img/img2.jpg';
import p2 from '../src/img/img3.jpg';
import p3 from '../src/img/img4.jpg';
import p4 from '../src/img/img4.jpg';

const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "Lily Taylor", profession: "Profession", img: p1 },
    { id: 2, name: "Ava Brown", profession: "Profession", img: p2 },
    { id: 3, name: "Amelia Jones", profession: "Profession", img: p3 },
    { id: 4, name: "Olivia Smith", profession: "Profession", img: p4 },
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container text-center py-5">
        <h5 className="testi-subtitle">Testimonial</h5>
        <h1 className="testi-title mb-5">What Clients Say!</h1>

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
            <SwiperSlide key={item.id}>
              <div className="testi-card">
                <i className="fa fa-quote-left quote-icon-top"></i>
                <p className="testi-text">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
                  Clita erat ipsum et lorem et sit.
                </p>
                <div className="client-meta">
                  <div className="client-img-frame">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h4 className="client-name">{item.name}</h4>
                  <p className="client-prof">{item.profession}</p>
                </div>
                {/* Bottom Quote Background */}
                <i className="fa fa-quote-right quote-icon-bottom"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Custom Square Arrows (As per screenshot) --- */}
        <div className="d-flex justify-content-center mt-5 gap-3">
          <button className="custom-prev arrow-btn"><i className="fa fa-chevron-left"></i></button>
          <button className="custom-next arrow-btn"><i className="fa fa-chevron-right"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;