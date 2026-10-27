// import React, { useState } from 'react';
// import { FaTrash, FaStar, FaQuoteRight } from 'react-icons/fa';

// const ReviewList = () => {
//     const [reviews, setReviews] = useState([
//         { id: 1, name: 'Sonia Khan', service: 'Bridal Makeup', msg: 'Amazing service! Archana maam is best.', rating: 5 },
//         { id: 2, name: 'Neha Varma', service: 'Party Makeup', msg: 'Loved my look, everyone praised it.', rating: 4 },
//     ]);

//     return (
//         <div className="container-fluid p-0">
//             <div className="row g-4">
//                 {reviews.map((r) => (
//                     <div className="col-md-6" key={r.id}>
//                         <div className="card border-0 shadow-sm p-4 h-100 position-relative">
//                             <FaQuoteRight className="position-absolute end-0 top-0 m-3 text-light" size={40} />
//                             <div className="mb-2">
//                                 {[...Array(5)].map((_, i) => (
//                                     <FaStar key={i} color={i < r.rating ? '#FFD700' : '#e4e5e9'} />
//                                 ))}
//                             </div>
//                             <h6 className="fw-bold mb-1">{r.name}</h6>
//                             <small className="text-muted mb-2 d-block">{r.service}</small>
//                             <p className="text-secondary small italic">"{r.msg}"</p>
//                             <div className="text-end mt-2">
//                                 <button className="btn btn-sm btn-outline-danger border-0 shadow-none">
//                                     <FaTrash className="me-1" /> Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// export default ReviewList;

import React, { useState, useEffect } from 'react';
import { FaTrash, FaStar, FaQuoteRight, FaCommentAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    // 1. Fetch All Reviews from Backend on Component Mount
    const fetchReviews = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/admin/reviews/all');
            if (response.data.success) {
                setReviews(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
            toast.error("Reviews load karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // 2. Delete Review Function (API Integration)
    const handleDelete = async (id) => {
        if (window.confirm("Kya aap is review ko delete karna chahte hain?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/admin/reviews/delete/${id}`);
                if (response.data.success) {
                    setReviews(reviews.filter(review => review._id !== id));
                    toast.success("Review successfully delete ho gaya!");
                }
            } catch (error) {
                console.error("Error deleting review:", error);
                toast.error("Review delete karne me error aaya!");
            }
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer position="top-right" autoClose={3000} />

            <h4 className="fw-bold mb-4 text-dark">💬 Client Reviews List ({reviews.length})</h4>

            {/* Loading State */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {reviews.map((r) => (
                        <div className="col-md-6" key={r._id}>
                            <div className="card border-0 shadow-sm p-4 h-100 position-relative" style={{ borderRadius: '15px' }}>
                                <FaQuoteRight className="position-absolute end-0 top-0 m-3 text-light" size={40} />
                                
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    {/* Client Photo or Default Avatar */}
                                    <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0" style={{ width: '55px', height: '55px' }}>
                                        {r.clientPhoto ? (
                                            <img src={`http://localhost:5000/${r.clientPhoto}`} className="w-100 h-100" alt={r.clientName} style={{ objectFit: 'cover' }} />
                                        ) : (
                                            <FaCommentAlt size={22} className="text-muted" />
                                        )}
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">{r.clientName}</h6>
                                        <small className="text-primary fw-semibold">{r.serviceUsed}</small>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color={i < (r.rating || 5) ? '#FFD700' : '#e4e5e9'} />
                                    ))}
                                </div>

                                <p className="text-secondary small italic mb-3">"{r.message}"</p>
                                
                                <div className="text-end mt-auto pt-2 border-top">
                                    <button 
                                        onClick={() => handleDelete(r._id)}
                                        className="btn btn-sm btn-outline-danger border-0 shadow-none d-flex align-items-center gap-1 ms-auto"
                                    >
                                        <FaTrash size={12} /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && reviews.length === 0 && (
                <div className="text-center py-5 bg-white rounded shadow-sm border mt-3">
                    <FaCommentAlt size={50} className="text-muted mb-3" />
                    <h5 className="fw-bold text-dark">Koi review nahi mila</h5>
                    <p className="text-muted small">Abhi tak koi client review post nahi kiya gaya hai.</p>
                </div>
            )}
        </div>
    );
};

export default ReviewList;