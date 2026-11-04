


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// const FashionShowPopup = () => {
//     const [showEvent, setShowEvent] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [step, setStep] = useState('banner'); // 'banner', 'form', 'qr', 'success'

//     // Form State
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         categoryName: '',
//         fee: 0,
//         transactionId: ''
//     });

//     const [loading, setLoading] = useState(false);

//     // 1. Backend se Fashion Show check karega
//     useEffect(() => {
//         const fetchActiveEvent = async () => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/admin/fashionshow/all');
//                 const list = res.data.data || res.data;
                
//                 // Agar backend se data aaya hai aur array khali nahi hai
//                 if (Array.isArray(list) && list.length > 0) {
//                     const latestEvent = list[list.length - 1]; // Sabse new event
                    
//                     if (latestEvent && latestEvent.title) {
//                         setShowEvent(latestEvent);
//                         setIsOpen(true); // Tabhi popup open hoga
//                     } else {
//                         setIsOpen(false);
//                     }
//                 } else {
//                     setIsOpen(false); // Backend me data nahi h to popup close rahega
//                 }
//             } catch (err) {
//                 console.error("Error fetching popup event:", err);
//                 setIsOpen(false); // Error aane par bhi popup nahi dikhega
//             }
//         };
//         fetchActiveEvent();
//     }, []);

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleCategorySelect = (cat) => {
//         setFormData({
//             ...formData,
//             categoryName: cat.categoryName,
//             fee: cat.fee
//         });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (!formData.categoryName) {
//             alert("Kripya registration category select karein!");
//             return;
//         }
//         setStep('qr');
//     };

//     const handlePaymentSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const payload = {
//                 eventId: showEvent._id,
//                 name: formData.name,
//                 email: formData.email,
//                 phone: formData.phone,
//                 categoryName: formData.categoryName,
//                 fee: formData.fee,
//                 transactionId: formData.transactionId
//             };

//             await axios.post('http://localhost:5000/api/admin/fashionshow/register', payload);
//             setStep('success');
//         } catch (err) {
//             console.error("Registration error:", err);
//             alert(err.response?.data?.message || "Registration failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // AGAR DATA NAHI HAIN TO KUCH BHI DISPLAY NAHI HOGA (RETURN NULL)
//     if (!isOpen || !showEvent) return null;

//     // Helper to format image URL correctly if it's a relative path
//     const getImageUrl = (imgPath) => {
//         if (!imgPath) return '';
//         if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
//             return imgPath;
//         }
//         return `http://localhost:5000/${imgPath.replace(/^\/+/, '')}`;
//     };

//     return (
//         <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75" style={{ zIndex: 1200 }}>
//             <div className="bg-white rounded-4 shadow-lg position-relative mx-3 overflow-hidden" style={{ maxWidth: '480px', width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                
//                 {/* Close Button */}
//                 <button
//                     className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-none border-0"
//                     style={{ zIndex: 10 }}
//                     onClick={() => setIsOpen(false)}
//                 >
//                     <FaTimes size={16} />
//                 </button>

//                 <div className="overflow-y-auto p-4">
                    
//                     {/* STEP 1: Banner & Register Button */}
//                     {step === 'banner' && (
//                         <div className="text-center">
//                             <span className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2">✨ Exclusive Event</span>
//                             <h4 className="fw-bold text-dark mb-2">{showEvent.title}</h4>
//                             <p className="text-muted small mb-3">{showEvent.description}</p>

//                             {showEvent.banner && (
//                                 <img src={getImageUrl(showEvent.banner)} alt="Fashion Show Banner" className="w-100 rounded-3 mb-3 shadow-sm" style={{ height: '220px', objectFit: 'cover' }} />
//                             )}

//                             <div className="text-start bg-light p-3 rounded-3 mb-3 small text-secondary">
//                                 <div>📅 <strong>Date:</strong> {new Date(showEvent.eventDate).toLocaleString()}</div>
//                                 <div>📍 <strong>Venue:</strong> {showEvent.venue}</div>
//                             </div>

//                             <button
//                                 className="btn w-100 text-white py-2.5 rounded-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
//                                 style={{ backgroundColor: '#B88A4A' }}
//                                 onClick={() => setStep('form')}
//                             >
//                                 Register Now <FaArrowRight size={14} />
//                             </button>
//                         </div>
//                     )}

//                     {/* STEP 2: Registration Form */}
//                     {step === 'form' && (
//                         <form onSubmit={handleFormSubmit}>
//                             <h5 className="fw-bold text-dark mb-1 text-center">Participant Registration</h5>
//                             <p className="text-muted small text-center mb-3">Apni details bharein aur category select karein</p>

//                             <div className="mb-2">
//                                 <label className="form-label small fw-bold text-dark">Full Name</label>
//                                 <input type="text" name="name" className="form-control form-control-sm rounded-3" value={formData.name} onChange={handleInputChange} required />
//                             </div>

//                             <div className="mb-2">
//                                 <label className="form-label small fw-bold text-dark">Email Address</label>
//                                 <input type="email" name="email" className="form-control form-control-sm rounded-3" value={formData.email} onChange={handleInputChange} required />
//                             </div>

//                             <div className="mb-2">
//                                 <label className="form-label small fw-bold text-dark">Phone Number</label>
//                                 <input type="tel" name="phone" className="form-control form-control-sm rounded-3" value={formData.phone} onChange={handleInputChange} required />
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-dark mb-1">Category & Fee Select Karein</label>
//                                 <div className="d-flex flex-column gap-2">
//                                     {showEvent.categories?.map((cat, idx) => (
//                                         <div
//                                             key={idx}
//                                             className={`p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center ${formData.categoryName === cat.categoryName ? 'border-warning bg-warning bg-opacity-10' : 'bg-light'}`}
//                                             onClick={() => handleCategorySelect(cat)}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <span className="fw-semibold small text-dark">{cat.categoryName}</span>
//                                             <span className="fw-bold" style={{ color: '#B88A4A' }}>₹{cat.fee}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="d-flex gap-2">
//                                 <button type="button" className="btn btn-light w-50 py-2 rounded-3 fw-bold border" onClick={() => setStep('banner')}>Back</button>
//                                 <button type="submit" className="btn text-white w-50 py-2 rounded-3 fw-bold" style={{ backgroundColor: '#B88A4A' }}>Next to Pay</button>
//                             </div>
//                         </form>
//                     )}

//                     {/* STEP 3: QR Payment */}
//                     {step === 'qr' && (
//                         <form onSubmit={handlePaymentSubmit}>
//                             <h5 className="fw-bold text-dark mb-1 text-center">Complete Payment</h5>
//                             <p className="text-muted small text-center mb-3">Fee: <strong>₹{formData.fee}</strong> karne ke liye QR Scan Karein</p>

//                             <div className="text-center mb-3">
//                                 {showEvent.qrCode && (
//                                     <img src={getImageUrl(showEvent.qrCode)} alt="Payment QR" className="rounded border bg-white p-2 shadow-sm" style={{ width: '160px', height: '160px', objectFit: 'contain' }} />
//                                 )}
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-dark">Transaction ID / UTR Number</label>
//                                 <input type="text" name="transactionId" className="form-control form-control-sm rounded-3" placeholder="e.g. UPI/TXN12345678" value={formData.transactionId} onChange={handleInputChange} required />
//                             </div>

//                             <div className="d-flex gap-2">
//                                 <button type="button" className="btn btn-light w-50 py-2 rounded-3 fw-bold border" onClick={() => setStep('form')}>Back</button>
//                                 <button type="submit" className="btn text-white w-50 py-2 rounded-3 fw-bold" style={{ backgroundColor: '#B88A4A' }} disabled={loading}>
//                                     {loading ? 'Submitting...' : 'Confirm Payment'}
//                                 </button>
//                             </div>
//                         </form>
//                     )}

//                     {/* STEP 4: Registration Success */}
//                     {step === 'success' && (
//                         <div className="text-center py-4">
//                             <FaCheckCircle size={50} className="text-success mb-3" />
//                             <h4 className="fw-bold text-dark mb-2">Registration Complete! 🎉</h4>
//                             <p className="text-muted small mb-4">Aapka registration aur payment details backend par successfully submit ho gaya hai.</p>
//                             <button
//                                 className="btn text-white px-4 py-2 rounded-3 fw-bold"
//                                 style={{ backgroundColor: '#B88A4A' }}
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 Close Window
//                             </button>
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FashionShowPopup;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react'; // Dynamic QR library

const FashionShowPopup = () => {
    const [showEvent, setShowEvent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('banner'); // 'banner', 'form', 'qr', 'success'

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        categoryName: '',
        fee: 0,
        transactionId: ''
    });

    const [loading, setLoading] = useState(false);

    // 1. Backend se Fashion Show check karega
    useEffect(() => {
        const fetchActiveEvent = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/admin/fashionshow/all');
                const list = res.data.data || res.data;
                
                if (Array.isArray(list) && list.length > 0) {
                    const latestEvent = list[list.length - 1]; // Sabse new event
                    
                    if (latestEvent && latestEvent.title) {
                        setShowEvent(latestEvent);
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                    }
                } else {
                    setIsOpen(false);
                }
            } catch (err) {
                console.error("Error fetching popup event:", err);
                setIsOpen(false);
            }
        };
        fetchActiveEvent();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategorySelect = (cat) => {
        setFormData({
            ...formData,
            categoryName: cat.categoryName,
            fee: cat.fee
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.categoryName) {
            alert("Kripya registration category select karein!");
            return;
        }
        setStep('qr');
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
                eventId: showEvent._id,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                categoryName: formData.categoryName,
                fee: formData.fee,
                transactionId: formData.transactionId
            };

            await axios.post('http://localhost:5000/api/admin/fashionshow/register', payload);
            setStep('success');
        } catch (err) {
            console.error("Registration error:", err);
            alert(err.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen || !showEvent) return null;

    const getImageUrl = (imgPath) => {
        if (!imgPath) return '';
        if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
            return imgPath;
        }
        return `http://localhost:5000/${imgPath.replace(/^\/+/, '')}`;
    };

    // 🌟 UPI Dynamic URI jo QR code ke andar amount aur UPI ID set karegi
    // NOTE: Yahan 'YOUR_UPI_ID@paytm' ki jagah apni real UPI ID daal dein
    const upiID = "YOUR_UPI_ID@paytm"; 
    const payeeName = "Archies Beauty Academy";
    const upiString = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${formData.fee}&cu=INR`;

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75" style={{ zIndex: 1200 }}>
            <div className="bg-white rounded-4 shadow-lg position-relative mx-3 overflow-hidden" style={{ maxWidth: '480px', width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                
                {/* Close Button */}
                <button
                    className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-none border-0"
                    style={{ zIndex: 10 }}
                    onClick={() => setIsOpen(false)}
                >
                    <FaTimes size={16} />
                </button>

                <div className="overflow-y-auto p-4">
                    
                    {/* STEP 1: Banner & Register Button */}
                    {step === 'banner' && (
                        <div className="text-center">
                            <span className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2">✨ Exclusive Event</span>
                            <h4 className="fw-bold text-dark mb-2">{showEvent.title}</h4>
                            <p className="text-muted small mb-3">{showEvent.description}</p>

                            {showEvent.banner && (
                                <img src={getImageUrl(showEvent.banner)} alt="Fashion Show Banner" className="w-100 rounded-3 mb-3 shadow-sm" style={{ height: '220px', objectFit: 'cover' }} />
                            )}

                            <div className="text-start bg-light p-3 rounded-3 mb-3 small text-secondary">
                                <div>📅 <strong>Date:</strong> {new Date(showEvent.eventDate).toLocaleString()}</div>
                                <div>📍 <strong>Venue:</strong> {showEvent.venue}</div>
                            </div>

                            <button
                                className="btn w-100 text-white py-2.5 rounded-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                                style={{ backgroundColor: '#B88A4A' }}
                                onClick={() => setStep('form')}
                            >
                                Register Now <FaArrowRight size={14} />
                            </button>
                        </div>
                    )}

                    {/* STEP 2: Registration Form */}
                    {step === 'form' && (
                        <form onSubmit={handleFormSubmit}>
                            <h5 className="fw-bold text-dark mb-1 text-center">Participant Registration</h5>
                            <p className="text-muted small text-center mb-3">Apni details bharein aur category select karein</p>

                            <div className="mb-2">
                                <label className="form-label small fw-bold text-dark">Full Name</label>
                                <input type="text" name="name" className="form-control form-control-sm rounded-3" value={formData.name} onChange={handleInputChange} required />
                            </div>

                            <div className="mb-2">
                                <label className="form-label small fw-bold text-dark">Email Address</label>
                                <input type="email" name="email" className="form-control form-control-sm rounded-3" value={formData.email} onChange={handleInputChange} required />
                            </div>

                            <div className="mb-2">
                                <label className="form-label small fw-bold text-dark">Phone Number</label>
                                <input type="tel" name="phone" className="form-control form-control-sm rounded-3" value={formData.phone} onChange={handleInputChange} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-dark mb-1">Category & Fee Select Karein</label>
                                <div className="d-flex flex-column gap-2">
                                    {showEvent.categories?.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center ${formData.categoryName === cat.categoryName ? 'border-warning bg-warning bg-opacity-10' : 'bg-light'}`}
                                            onClick={() => handleCategorySelect(cat)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span className="fw-semibold small text-dark">{cat.categoryName}</span>
                                            <span className="fw-bold" style={{ color: '#B88A4A' }}>₹{cat.fee}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-light w-50 py-2 rounded-3 fw-bold border" onClick={() => setStep('banner')}>Back</button>
                                <button type="submit" className="btn text-white w-50 py-2 rounded-3 fw-bold" style={{ backgroundColor: '#B88A4A' }}>Next to Pay</button>
                            </div>
                        </form>
                    )}

                    {/* STEP 3: Dynamic QR Payment */}
                    {step === 'qr' && (
                        <form onSubmit={handlePaymentSubmit}>
                            <h5 className="fw-bold text-dark mb-1 text-center">Complete Payment</h5>
                            <p className="text-muted small text-center mb-2">
                                Scan QR to Pay: <strong style={{ color: '#B88A4A' }}>₹{formData.fee}</strong>
                            </p>

                            {/* 🌟 Dynamic QR Code Render */}
                            <div className="text-center mb-3 bg-light p-3 rounded-3 border d-flex justify-content-center">
                                <QRCodeSVG value={upiString} size={160} level={"H"} includeMargin={true} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-dark">Transaction ID / UTR Number</label>
                                <input type="text" name="transactionId" className="form-control form-control-sm rounded-3" placeholder="e.g. UPI/TXN12345678" value={formData.transactionId} onChange={handleInputChange} required />
                            </div>

                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-light w-50 py-2 rounded-3 fw-bold border" onClick={() => setStep('form')}>Back</button>
                                <button type="submit" className="btn text-white w-50 py-2 rounded-3 fw-bold" style={{ backgroundColor: '#B88A4A' }} disabled={loading}>
                                    {loading ? 'Submitting...' : 'Confirm Payment'}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* STEP 4: Registration Success */}
                    {step === 'success' && (
                        <div className="text-center py-4">
                            <FaCheckCircle size={50} className="text-success mb-3" />
                            <h4 className="fw-bold text-dark mb-2">Registration Complete! 🎉</h4>
                            <p className="text-muted small mb-4">Aapka registration aur payment details backend par successfully submit ho gaya hai.</p>
                            <button
                                className="btn text-white px-4 py-2 rounded-3 fw-bold"
                                style={{ backgroundColor: '#B88A4A' }}
                                onClick={() => setIsOpen(false)}
                            >
                                Close Window
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FashionShowPopup;