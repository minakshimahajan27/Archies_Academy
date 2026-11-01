import React, { useState, useEffect } from 'react';
import { FaCrown, FaSave, FaCloudUploadAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FashionShowManage = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        eventDate: '',
        venue: '',
        registrationFee: '',
        isActive: true,
        qrCodeImage: null
    });
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch existing event details if any
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/admin/fashion-show/active');
                if (res.data.success && res.data.data) {
                    const data = res.data.data;
                    setEventData({
                        title: data.title || '',
                        description: data.description || '',
                        eventDate: data.eventDate || '',
                        venue: data.venue || '',
                        registrationFee: data.registrationFee || '',
                        isActive: data.isActive,
                        qrCodeImage: null
                    });
                    if (data.qrCodeImage) {
                        setPreview(`http://localhost:5000/${data.qrCodeImage}`);
                    }
                }
            } catch (err) {
                console.error("Error fetching event details", err);
            }
        };
        fetchEvent();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEventData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEventData(prev => ({ ...prev, qrCodeImage: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', eventData.title);
        formData.append('description', eventData.description);
        formData.append('eventDate', eventData.eventDate);
        formData.append('venue', eventData.venue);
        formData.append('registrationFee', eventData.registrationFee);
        formData.append('isActive', eventData.isActive);
        
        if (eventData.qrCodeImage) {
            formData.append('file', eventData.qrCodeImage);
        }

        try {
            const res = await axios.post('http://localhost:5000/api/admin/fashion-show/update', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.data.success) {
                toast.success("Fashion Show details updated successfully!");
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error(err.response?.data?.message || "Failed to update event details!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer position="top-right" autoClose={3000} />
            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Event Title</label>
                        <input type="text" className="form-control" name="title" value={eventData.title} onChange={handleChange} placeholder="e.g. Annual Grand Fashion Show 2026" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Event Date & Time</label>
                        <input type="text" className="form-control" name="eventDate" value={eventData.eventDate} onChange={handleChange} placeholder="e.g. 15th Dec 2026, 6:00 PM" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Venue</label>
                        <input type="text" className="form-control" name="venue" value={eventData.venue} onChange={handleChange} placeholder="e.g. Sayaji Hotel, Indore" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Registration Fee (₹)</label>
                        <input type="number" className="form-control" name="registrationFee" value={eventData.registrationFee} onChange={handleChange} placeholder="e.g. 500" required />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label fw-bold">Event Description</label>
                        <textarea className="form-control" rows="3" name="description" value={eventData.description} onChange={handleChange} placeholder="Event details..." required></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-bold d-block">Payment QR Code</label>
                        <div 
                            className="border bg-light d-flex align-items-center justify-content-center rounded" 
                            style={{ width: '150px', height: '150px', cursor: 'pointer', overflow: 'hidden' }}
                            onClick={() => document.getElementById('qrFile').click()}
                        >
                            {preview ? (
                                <img src={preview} alt="QR Preview" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                            ) : (
                                <div className="text-center text-muted">
                                    <FaCloudUploadAlt size={28} />
                                    <small className="d-block mt-1">Upload QR</small>
                                </div>
                            )}
                        </div>
                        <input type="file" id="qrFile" hidden accept="image/*" onChange={handleFileChange} />
                    </div>

                    <div className="col-md-6 d-flex align-items-center">
                        <div className="form-check form-switch fs-5">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="activeSwitch" 
                                name="isActive" 
                                checked={eventData.isActive} 
                                onChange={handleChange} 
                            />
                            <label className="form-check-label fw-bold ms-2 text-dark fs-6" htmlFor="activeSwitch">
                                {eventData.isActive ? '🟢 Event is ACTIVE (Live on website)' : '🔴 Event is INACTIVE (Hidden)'}
                            </label>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <button type="submit" className="btn text-white fw-bold py-2 w-100" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }} disabled={loading}>
                            <FaSave className="me-2" /> {loading ? 'SAVING...' : 'SAVE EVENT SETTINGS'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FashionShowManage;