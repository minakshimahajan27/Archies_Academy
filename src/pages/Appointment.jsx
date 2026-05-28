
// import React, { useEffect } from 'react';

// export default function Appointment() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="container py-3" style={{ marginTop: '97px' }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-8 col-lg-6">
//                     <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
//                         <div className="card-body p-4">
//                             <h2 className="text-center fw-bold mb-4" style={{ color: '#B88A4A' }}>Book An Appointment</h2>
//                             <form>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Full Name</label>
//                                     {/* custom-input class add ki hai */}
//                                     <input type="text" className="form-control p-3 custom-input" placeholder="Enter your name" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Phone Number</label>
//                                     <input type="tel" className="form-control p-3 custom-input" placeholder="Enter phone number" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Select Service</label>
//                                     <div className="dropdown w-100">
//                                         <button
//                                             className="btn w-100 p-3 text-start custom-input dropdown-toggle d-flex justify-content-between align-items-center"
//                                             type="button"
//                                             data-bs-toggle="dropdown"
//                                             style={{ backgroundColor: 'white' }}
//                                         >
//                                             Hair Styling
//                                         </button>
//                                         <ul className="dropdown-menu w-100 shadow-sm custom-dropdown-menu">
//                                             <li><button className="dropdown-item py-2" type="button">Hair Styling</button></li>
//                                             <li><button className="dropdown-item py-2" type="button">Makeup Artist</button></li>
//                                             <li><button className="dropdown-item py-2" type="button">Skin Care</button></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="form-label fw-bold">Appointment Date</label>
//                                     <input type="date" className="form-control p-3 custom-input" />
//                                 </div>
//                                 <button
//                                     className="btn w-100 py-3 fw-bold text-white shadow"
//                                     style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}
//                                 >
//                                     CONFIRM BOOKING
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React, { useState, useEffect } from 'react';

// export default function Appointment() {
//     // Form data ko store karne ke liye state
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         service: 'Hair Styling',
//         date: ''
//     });

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleWhatsAppMessage = (e) => {
//         e.preventDefault(); // Page refresh hone se rokne ke liye

//         const ownerNumber = "916269961137"; // Yahan apna WhatsApp number country code ke sath likhein (Jaise: 919876543210)

//         // Message ka format
//         const message = `*New Appointment Inquiry*%0A` +
//             `*Name:* ${formData.name}%0A` +
//             `*Phone:* ${formData.phone}%0A` +
//             `*Service:* ${formData.service}%0A` +
//             `*Date:* ${formData.date}`;

//         // WhatsApp URL banana
//         const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;

//         // Naye tab mein WhatsApp open karna
//         window.open(whatsappUrl, "_blank");
//     };

//     return (
//         <div className="container py-3" style={{ marginTop: '97px' }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-8 col-lg-6">
//                     <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
//                         <div className="card-body p-4">
//                             <h2 className="text-center fw-bold mb-4" style={{ color: '#B88A4A' }}>Book An Appointment</h2>

//                             <form onSubmit={handleWhatsAppMessage}>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Full Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         required
//                                         className="form-control p-3 custom-input"
//                                         placeholder="Enter your name"
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Phone Number</label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         required
//                                         className="form-control p-3 custom-input"
//                                         placeholder="Enter phone number"
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Select Service</label>
//                                     <div className="dropdown w-100">
//                                         <button
//                                             className="btn w-100 p-3 text-start custom-input dropdown-toggle d-flex justify-content-between align-items-center"
//                                             type="button"
//                                             data-bs-toggle="dropdown"
//                                             style={{ backgroundColor: 'white' }}
//                                         >
//                                             Hair Styling
//                                         </button>
//                                         <ul className="dropdown-menu w-100 shadow-sm custom-dropdown-menu">
//                                             <li><button className="dropdown-item py-2" type="button">Hair Styling</button></li>
//                                             <li><button className="dropdown-item py-2" type="button">Makeup Artist</button></li>
//                                             <li><button className="dropdown-item py-2" type="button">Skin Care</button></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="form-label fw-bold">Appointment Date</label>
//                                     <input
//                                         type="date"
//                                         name="date"
//                                         required
//                                         className="form-control p-3 custom-input"
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn w-100 py-3 fw-bold text-white shadow"
//                                     style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}
//                                 >
//                                     SEND TO WHATSAPP
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // EmailJS import karein

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Hair Styling',
        date: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Dropdown value change karne ke liye alag function (kyaunki ye button hai)
    const handleServiceChange = (value) => {
        setFormData({ ...formData, service: value });
    };

    const handleBooking = (e) => {
        e.preventDefault();

        // --- 1. EMAIL LOGIC (EmailJS) ---
        // EmailJS Dashboard se ye IDs milengi
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        const emailData = {
            from_name: formData.name,
            phone: formData.phone,
            service: formData.service,
            date: formData.date,
            to_email: 'minakshi27mahajan@gmail.com', // Jaha aapko email chahiye
        };

        emailjs.send(serviceID, templateID, emailData, publicKey)
            .then(() => {
                console.log('Email sent successfully!');
            })
            .catch((err) => {
                console.error('Email failed...', err);
            });

        // --- 2. WHATSAPP LOGIC ---
        const ownerNumber = "916269961137";
        const message = `*--- NEW APPOINTMENT ---*%0A%0A` +
            `Name: ${formData.name}%0A` +
            `Phone: ${formData.phone}%0A` +
            `Service: ${formData.service}%0A` +
            `Date: ${formData.date}%0A%0A` +
            `Please confirm the booking.`;

        const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="container py-3" style={{ marginTop: '97px' }}>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
                        <div className="card-body p-4">
                            <h2 className="text-center fw-bold mb-4" style={{ color: '#B88A4A' }}>Book An Appointment</h2>

                            <form onSubmit={handleBooking}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Full Name</label>
                                    <input type="text" name="name" required className="form-control p-3 custom-input" placeholder="Enter your name" onChange={handleInputChange} />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Phone Number</label>
                                    <input type="tel" name="phone" required className="form-control p-3 custom-input" placeholder="Enter phone number" onChange={handleInputChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Select Service</label>
                                    <div className="dropdown w-100">
                                        <button className="btn w-100 p-3 text-start custom-input dropdown-toggle d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" style={{ backgroundColor: 'white' }}>
                                            {formData.service}
                                        </button>
                                        <ul className="dropdown-menu w-100 shadow-sm custom-dropdown-menu">
                                            <li><button className="dropdown-item py-2" type="button" onClick={() => handleServiceChange('Hair Styling')}>Hair Styling</button></li>
                                            <li><button className="dropdown-item py-2" type="button" onClick={() => handleServiceChange('Makeup Artist')}>Makeup Artist</button></li>
                                            <li><button className="dropdown-item py-2" type="button" onClick={() => handleServiceChange('Skin Care')}>Skin Care</button></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">Appointment Date</label>
                                    <input type="date" name="date" required className="form-control p-3 custom-input" onChange={handleInputChange} />
                                </div>

                                <button type="submit" className="btn w-100 py-3 fw-bold text-white shadow" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
                                    CONFIRM & SEND DETAILS
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}