import React, { useState, useEffect } from 'react';
import { FaPlayCircle, FaImages, FaSpinner } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllMediaService } from '../API/service.js';

export default function Allphoto() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterCategory, setFilterCategory] = useState('All');

    // --- API: Fetch All Media ---
    const fetchMedia = async () => {
        try {
            setLoading(true);
            const res = await getAllMediaService();
            if (res.success && res.data) {
                setGalleryItems(res.data);
            } else if (Array.isArray(res)) {
                setGalleryItems(res);
            } else if (res.data) {
                setGalleryItems(res.data);
            }
        } catch (err) {
            console.error("Error fetching media:", err);
            toast.error("Media load karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    // Category filter logic
    const filteredItems = filterCategory === 'All' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filterCategory);

    return (
        <div className="container-fluid py-4 px-4" style={{ backgroundColor: '#fcfcfc', minHeight: '100vh' }}>
            <ToastContainer />

            {/* Gallery Header */}
            <div className="text-center mb-5">
                <h2 className="fw-bold text-dark mb-2" style={{ letterSpacing: '1px' }}>ARCHIES BEAUTY ACADEMY GALLERY</h2>
                <div style={{ width: '600px', height: '3px', backgroundColor: '#B88A4A', margin: '0 auto 20px auto' }}></div>
                
                {/* Category Filter Pills */}
                <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
                    {['All', 'Bridal', 'Groom','Party', 'Studio', 'Classes'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`btn px-4 py-2 rounded-pill fw-semibold transition-all shadow-sm ${filterCategory === cat ? 'text-white' : 'btn-outline-dark bg-white'}`}
                            style={{ 
                                backgroundColor: filterCategory === cat ? '#B88A4A' : 'transparent',
                                borderColor: '#B88A4A',
                                fontSize: '0.85rem'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="text-center py-5">
                    <FaSpinner className="fa-spin text-muted" size={40} />
                    <p className="text-muted mt-3 fw-semibold">Gallery load ho rahi hai...</p>
                </div>
            ) : (
                <>
                    {/* Media Grid */}
                    <div className="row g-4">
                        {filteredItems.map((item) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                                <div 
                                    className="card border-0 shadow-sm overflow-hidden position-relative h-100" 
                                    style={{ 
                                        borderRadius: '16px', 
                                        backgroundColor: '#000',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    {/* Type Badge Overlay */}
                                    <span className="badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow" 
                                          style={{ backgroundColor: item.mediaType === 'video' ? 'rgba(220, 53, 69, 0.9)' : 'rgba(184, 138, 74, 0.9)', zIndex: 3, fontSize: '0.7rem' }}>
                                        {item.mediaType === 'video' ? <FaPlayCircle className="me-1" /> : <FaImages className="me-1" />} 
                                        {item.mediaType?.toUpperCase()}
                                    </span>

                                    {/* Media Box */}
                                    <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                        {item.mediaType === 'photo' ? (
                                            <img 
                                                src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
                                                alt="Gallery Item" 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                                                onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found"; }}
                                            />
                                        ) : (
                                            <video 
                                                src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                controls
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-5 bg-white rounded shadow-sm border mt-4">
                            <FaImages size={50} className="text-muted mb-3" />
                            <h5 className="fw-bold text-dark">Koi media nahi mila</h5>
                            <p className="text-muted small">Is category me abhi koi media uplabdh nahi hai.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}