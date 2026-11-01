import React, { useState } from 'react';
import { FaTimes, FaQrcode, FaCloudUploadAlt, FaTicketAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FashionShowModal = ({ event, onClose }) => {
    const [formData, setFormData] = useState({
        studentName: '',
        email: '',
        phone: '',
        transactionId: '',
        paymentScreenshot: null
    });
    const [loading, setLoading] = useState(false);
    const [passGenerated, setPassGenerated] = useState(false);
    const [passData, setPassData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, paymentScreenshot: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('studentName', formData.studentName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('transactionId', formData.transactionId);
        if (formData.paymentScreenshot) {
            data.append('file', formData.paymentScreenshot);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/admin/fashion-show/register', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.success) {
                toast.success("Registration Successful!");
                setPassData(response.data.passDetails);
                setPassGenerated(true);
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast.error(error.response?.data?.message || "Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                    
                    {/* Modal Header */}
                    <div className="modal-header text-white px-4 py-3" style={{ backgroundColor: '#B88A4A' }}>
                        <h5 className="modal-title fw-bold">
                            <FaTicketAlt className="me-2" /> {event.title} - Registration & Pass
                        </h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>

                    {/* Modal Body */}
                    <div className="modal-body p-4">
                        {!passGenerated ? (
                            <div className="row">
                                {/* Event Details & QR Code */}
                                <div className="col-md-5 border-end pe-md-4 text-center">
                                    <h6 className="fw-bold text-dark">{event.venue}</h6>
                                    <p className="text-muted small mb-2">📅 Date: {event.eventDate}</p>
                                    <p className="text-secondary small">{event.description}</p>
                                    
                                    <div className="bg-light p-3 rounded-3 border mt-3">
                                        <p className="fw-bold text-danger mb-1">Registration Fee: ₹{event.registrationFee}</p>
                                        <small className="text-muted d-block mb-2">Scan QR code to pay via UPI</small>
                                        {event.qrCodeImage && (
                                            <img 
                                                src={`http://localhost:5000/${event.qrCodeImage}`} 
                                                alt="Payment QR" 
                                                className="img-fluid rounded border shadow-sm" 
                                                style={{ width: '140px', height: '140px', objectFit: 'cover' }} 
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="col-md-7 ps-md-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold">Full Name</label>
                                            <input type="text" className="form-control form-control-sm" name="studentName" value={formData.studentName} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold">Email</label>
                                            <input type="email" className="form-control form-control-sm" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold">Phone Number</label>
                                            <input type="text" className="form-control form-control-sm" name="phone" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label small fw-bold">UPI Transaction ID / Ref No.</label>
                                            <input type="text" className="form-control form-control-sm" name="transactionId" value={formData.transactionId} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Payment Screenshot (Optional)</label>
                                            <input type="file" className="form-control form-control-sm" accept="image/*" onChange={handleFileChange} />
                                        </div>
                                        <button type="submit" className="btn w-100 text-white fw-bold py-2" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }} disabled={loading}>
                                            {loading ? 'GENERATING PASS...' : 'SUBMIT & GET PASS'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            /* Digital Entry Pass View */
                            <div className="card p-4 border-warning text-center shadow-sm mx-auto" style={{ maxWidth: '450px', borderRadius: '20px', background: '#FFF8F0' }}>
                                <h3 className="fw-bold text-dark mb-1">🎟️ FASHION SHOW ENTRY PASS</h3>
                                <p className="text-muted small mb-3">Archies Beauty Academy Annual Event</p>

                                <div className="bg-white p-3 rounded-3 border mb-3 text-start">
                                    <p className="small mb-1"><strong>Name:</strong> {passData.studentName}</p>
                                    <p className="small mb-1"><strong>Phone:</strong> {passData.phone}</p>
                                    <p className="small mb-0"><strong>Email:</strong> {passData.email}</p>
                                </div>

                                <div className="p-3 bg-dark text-white rounded-3 mb-3">
                                    <small className="d-block text-uppercase text-muted">Unique Pass Code</small>
                                    <h2 className="fw-bold text-warning mb-0">{passData.passCode}</h2>
                                </div>

                                <p className="small text-muted mb-3">Is pass ka screenshot lein aur event entry gate par dikhaayein.</p>
                                <button className="btn btn-dark w-100 py-2 fw-bold" onClick={onClose}>CLOSE</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FashionShowModal;