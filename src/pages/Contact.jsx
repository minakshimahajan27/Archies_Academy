// import React from 'react';
// import { Link } from 'react-router-dom';
// import abc from '../src/img/page-header.jpg'; // Aapki image
// import Footer from '../components/Footer';

// const Contact = () => {
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
//                   <h1 className="display-3 fw-bold text-dark mb-3">Contact</h1>
//                   <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb justify-content-center">
//                       <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{color: '#B88A4A'}}>Home</Link></li>
//                       <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{color: '#B88A4A'}}>Pages</Link></li>
//                       <li className="breadcrumb-item active text-muted" aria-current="page">Contact</li>
//                     </ol>
//                   </nav>
//                 </div>
//               </section>
//     <section className="contact-section py-5 ">
//       <div className="container text-center py-5">
//         <h5 className="contact-subtitle">Contact</h5>
//         <h1 className="contact-main-title mb-4">Have Any Query? Contact Us</h1>

//         <p className="contact-notice mb-5">
//           The contact form is currently inactive. Get a functional and working contact form with Ajax & <br />
//           PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <br />
//           <a href="#download" className="download-link">Download Now</a>.
//         </p>

//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <form className="contact-form">
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <input type="text" className="form-control custom-input" placeholder="Your Name" />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="email" className="form-control custom-input" placeholder="Your Email" />
//                 </div>
//                 <div className="col-12">
//                   <input type="text" className="form-control custom-input" placeholder="Subject" />
//                 </div>
//                 <div className="col-12">
//                   <textarea className="form-control custom-input" rows="5" placeholder="Message"></textarea>
//                 </div>
//                 <div className="col-12 mt-4">
//                   {/* Same Design Send Message Button */}
//                   <button type="submit" className="send-message-btn">
//                     SEND MESSAGE
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from 'react'; // useState add kiya
import { Link } from 'react-router-dom';
import abc from '../img/page-header.jpg';
import Footer from '../components/Footer';

const Contact = () => {
  // 1. Form state banayi
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. WhatsApp logic function
  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const ownerNumber = "916269961137"; // Aapka number

    // Sundar message format
    const msg = `*--- NEW CONTACT QUERY ---*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${msg}`;
    window.open(whatsappUrl, "_blank");
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
          marginTop: '-0px'
        }}
      >
        <div>
          <h1 className="display-3 fw-bold text-dark mb-3">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#B88A4A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/gallery" className="text-decoration-none" style={{ color: '#B88A4A' }}>Gallery</Link></li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container text-center py-5">
          <h5 className="contact-subtitle" style={{ color: '#B88A4A', fontWeight: 'bold' }}>Contact</h5>
          <h1 className="contact-main-title mb-4 fs-2">Have Any Query? Contact Us</h1>

          <p className="contact-notice mb-5">
            We'd love to hear from you! Whether you have questions about our beauty courses,
            professional training programs,<br></br> salon services, or admissions, our team is here to help.
            Feel free to contact us by phone, email, or by filling out<br></br> the contact form below.
            We'll get back to you as soon as possible.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* 3. Form onSubmit par function lagaya */}
              <form className="contact-form" onSubmit={handleWhatsAppSend}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control custom-input"
                      placeholder="Your Name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-control custom-input"
                      placeholder="Your Email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      required
                      className="form-control custom-input"
                      placeholder="Subject"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      required
                      className="form-control custom-input"
                      rows="5"
                      placeholder="Message"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="send-message-btn w-100 py-3 fw-bold text-white border-0 shadow" style={{ backgroundColor: '#B88A4A', borderRadius: '5px' }}>
                      SEND TO WHATSAPP
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Google Map Section */}
            {/* <div className="row justify-content-center mb-5 mt-5">
              <div className="col-lg-10">
                <div
                  className="shadow-lg overflow-hidden"
                  style={{
                    borderRadius: "10px",
                    border: "2px solid #B88A4A",
                    width:"100%"
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.424293245757!2d75.56357852503109!3d21.015702430630302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f11415f79e5%3A0x8a4e95f0a7fb1864!2sArchies%20makeup%20studio%20and%20beauty%20academy!5e0!3m2!1sen!2sin!4v1780639973984!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Archies Makeup Studio and Beauty Academy"
                  ></iframe>
                </div>

                <div
                  className="text-center py-4 shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "0 0 20px 20px",
                    borderLeft: "4px solid #B88A4A",
                    borderRight: "4px solid #B88A4A",
                    borderBottom: "4px solid #B88A4A",
                  }}
                >
                  <h4 className="fw-bold mb-2" style={{ color: "#B88A4A" }}>
                    Archies Makeup Studio & Beauty Academy
                  </h4>

                  <p className="mb-0 text-muted">
                    Visit our academy for professional beauty training, makeup courses,
                    salon services, and career guidance.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="container-fluid px-0 mt-5">
  <div
    className="shadow-lg overflow-hidden"
    style={{
      width: "100%",
      borderTop: "2px solid #B88A4A",
      borderBottom: "2px solid #B88A4A",
    }}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.424293245757!2d75.56357852503109!3d21.015702430630302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f11415f79e5%3A0x8a4e95f0a7fb1864!2sArchies%20makeup%20studio%20and%20beauty%20academy!5e0!3m2!1sen!2sin!4v1780639973984!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Archies Makeup Studio and Beauty Academy"
    />
  </div>

  <div
    className="text-center py-4"
    style={{
      backgroundColor: "#fff",
      borderBottom: "2px solid #B88A4A",
    }}
  >
    <h4 className="fw-bold mb-2" style={{ color: "#B88A4A" }}>
      Archies Makeup Studio & Beauty Academy
    </h4>

    <p className="mb-0 text-muted">
      Visit our academy for professional beauty training, makeup courses,
      salon services, and career guidance.
    </p>
  </div>
</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;