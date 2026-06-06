import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Team images (aapne pehle jo use ki thi)
import p1 from '../img/img2.jpg';
import p2 from '../img/img3.jpg';
import p3 from '../img/img4.jpg';
import p4 from '../img/img4.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      profession: "Bridal Makeup Client",
      img: p1,
      review:
        "Amazing experience! My bridal makeup looked flawless and lasted throughout the event. Highly recommended for every bride."
    },
    {
      id: 2,
      name: "Sneha Patil",
      profession: "Beauty Academy Student",
      img: p2,
      review:
        "The training was excellent with hands-on practice. The trainers were supportive and helped me build confidence in makeup artistry."
    },
    {
      id: 3,
      name: "Pooja Verma",
      profession: "Salon Client",
      img: p3,
      review:
        "Professional staff, hygienic environment, and premium products. I always leave feeling refreshed and satisfied."
    },
    {
      id: 4,
      name: "Anjali Deshmukh",
      profession: "Professional Makeup Course Student",
      img: p4,
      review:
        "One of the best beauty academies. The practical sessions and expert guidance helped me start my career successfully."
    },
    {
      id: 5,
      name: "Kavita Joshi",
      profession: "Hair Styling Client",
      img: p1,
      review:
        "I loved my new hairstyle and the overall experience. The team was professional, attentive, and delivered exactly the look I wanted."
    },
    {
      id: 6,
      name: "Meera Patil",
      profession: "Beauty Service Client",
      img: p2,
      review:
        "Excellent service, friendly staff, and a relaxing atmosphere. Every visit is a wonderful experience, and I always leave feeling confident and refreshed."
    }
  ]

  return (
    <section className="testimonial-section ">
      <div className="container text-center py-5">
        <h5 className="all-subtitle text-uppercase">Testimonial</h5>
        <h1 className="all-main-title mb-5">What Clients Say!</h1>

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
                  {item.review}
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