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
import abc from '../src/img/page-header.jpg';
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
          height: '350px'
        }}
      >
        <div>
          <h1 className="display-3 fw-bold text-dark mb-3">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{color: '#B88A4A'}}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/pages" className="text-decoration-none" style={{color: '#B88A4A'}}>Pages</Link></li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container text-center py-5">
          <h5 className="contact-subtitle" style={{ color: '#B88A4A', fontWeight: 'bold' }}>Contact</h5>
          <h1 className="contact-main-title mb-4">Have Any Query? Contact Us</h1>
                 
         <p className="contact-notice mb-5">
           The contact form is currently inactive. Get a functional and working contact form with Ajax & <br />
           PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <br />
           <a href="#download" className="download-link">Download Now</a>.
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
                    <button type="submit" className="send-message-btn w-100 py-3 fw-bold text-white border-0 shadow" style={{backgroundColor: '#B88A4A', borderRadius: '5px'}}>
                      SEND TO WHATSAPP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;