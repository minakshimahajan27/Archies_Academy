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

// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaStar, FaQuoteRight, FaCommentAlt } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const ReviewList = () => {
//     const [reviews, setReviews] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // 1. Fetch All Reviews from Backend on Component Mount
//     const fetchReviews = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get('http://localhost:5000/api/admin/reviews/all');
//             if (response.data.success) {
//                 setReviews(response.data.data);
//             }
//         } catch (error) {
//             console.error("Error fetching reviews:", error);
//             toast.error("Reviews load karne me error aaya!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchReviews();
//     }, []);

//     // 2. Delete Review Function (API Integration)
//     const handleDelete = async (id) => {
//         if (window.confirm("Kya aap is review ko delete karna chahte hain?")) {
//             try {
//                 const response = await axios.delete(`http://localhost:5000/api/admin/reviews/delete/${id}`);
//                 if (response.data.success) {
//                     setReviews(reviews.filter(review => review._id !== id));
//                     toast.success("Review successfully delete ho gaya!");
//                 }
//             } catch (error) {
//                 console.error("Error deleting review:", error);
//                 toast.error("Review delete karne me error aaya!");
//             }
//         }
//     };

//     return (
//         <div className="container-fluid p-0">
//             <ToastContainer position="top-right" autoClose={3000} />

//             <h4 className="fw-bold mb-4 text-dark">💬 Client Reviews List ({reviews.length})</h4>

//             {/* Loading State */}
//             {loading ? (
//                 <div className="text-center py-5">
//                     <div className="spinner-border text-warning" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="row g-4">
//                     {reviews.map((r) => (
//                         <div className="col-md-6" key={r._id}>
//                             <div className="card border-0 shadow-sm p-4 h-100 position-relative" style={{ borderRadius: '15px' }}>
//                                 <FaQuoteRight className="position-absolute end-0 top-0 m-3 text-light" size={40} />
                                
//                                 <div className="d-flex align-items-center gap-3 mb-3">
//                                     {/* Client Photo or Default Avatar */}
//                                     <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0" style={{ width: '55px', height: '55px' }}>
//                                         {r.clientPhoto ? (
//                                             <img src={`http://localhost:5000/${r.clientPhoto}`} className="w-100 h-100" alt={r.clientName} style={{ objectFit: 'cover' }} />
//                                         ) : (
//                                             <FaCommentAlt size={22} className="text-muted" />
//                                         )}
//                                     </div>
//                                     <div>
//                                         <h6 className="fw-bold mb-0 text-dark">{r.clientName}</h6>
//                                         <small className="text-primary fw-semibold">{r.serviceUsed}</small>
//                                     </div>
//                                 </div>

//                                 <div className="mb-2">
//                                     {[...Array(5)].map((_, i) => (
//                                         <FaStar key={i} color={i < (r.rating || 5) ? '#FFD700' : '#e4e5e9'} />
//                                     ))}
//                                 </div>

//                                 <p className="text-secondary small italic mb-3">"{r.message}"</p>
                                
//                                 <div className="text-end mt-auto pt-2 border-top">
//                                     <button 
//                                         onClick={() => handleDelete(r._id)}
//                                         className="btn btn-sm btn-outline-danger border-0 shadow-none d-flex align-items-center gap-1 ms-auto"
//                                     >
//                                         <FaTrash size={12} /> Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Empty State */}
//             {!loading && reviews.length === 0 && (
//                 <div className="text-center py-5 bg-white rounded shadow-sm border mt-3">
//                     <FaCommentAlt size={50} className="text-muted mb-3" />
//                     <h5 className="fw-bold text-dark">Koi review nahi mila</h5>
//                     <p className="text-muted small">Abhi tak koi client review post nahi kiya gaya hai.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ReviewList;

import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaStar, FaCommentAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // 1. Fetch All Reviews
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

    // 2. Delete Review
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

    // Open Edit Modal
    const handleEditOpen = (review) => {
        setSelectedReview({ ...review });
        setShowEditModal(true);
    };

    // 3. Handle Update Submit
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('clientName', selectedReview.clientName);
            formData.append('serviceUsed', selectedReview.serviceUsed);
            formData.append('message', selectedReview.message);
            formData.append('rating', selectedReview.rating);

            if (selectedReview.newPhoto) {
                formData.append('file', selectedReview.newPhoto);
            }

            const response = await axios.put(`http://localhost:5000/api/admin/reviews/update/${selectedReview._id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.success) {
                setReviews(reviews.map(r => r._id === selectedReview._id ? response.data.data : r));
                toast.success("Review details update ho gayi!");
                setShowEditModal(false);
            }
        } catch (error) {
            console.error("Error updating review:", error);
            toast.error("Review update karne me error aaya!");
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
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table align-middle mb-0">
                            <thead className="table-light text-uppercase fs-7">
                                <tr>
                                    <th className="py-3 ps-4">Client</th>
                                    <th>Service</th>
                                    <th>Rating</th>
                                    <th>Message</th>
                                    <th className="text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((r) => (
                                    <tr key={r._id}>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                                                    {r.clientPhoto ? (
                                                        <img src={`http://localhost:5000/${r.clientPhoto}`} className="w-100 h-100" alt={r.clientName} style={{ objectFit: 'cover' }} />
                                                    ) : (
                                                        <FaCommentAlt size={18} className="text-muted" />
                                                    )}
                                                </div>
                                                <h6 className="fw-bold mb-0 text-dark">{r.clientName}</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-light text-primary border px-2 py-1">{r.serviceUsed}</span>
                                        </td>
                                        <td>
                                            <div className="text-nowrap">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} size={14} color={i < (r.rating || 5) ? '#FFD700' : '#e4e5e9'} />
                                                ))}
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-secondary small mb-0 text-truncate" style={{ maxWidth: '250px' }}>"{r.message}"</p>
                                        </td>
                                        <td className="text-end pe-4">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button 
                                                    onClick={() => handleEditOpen(r)}
                                                    className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1 shadow-sm"
                                                    style={{ borderRadius: '6px' }}
                                                >
                                                    <FaEdit size={11} /> Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(r._id)}
                                                    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1 shadow-sm"
                                                    style={{ borderRadius: '6px' }}
                                                >
                                                    <FaTrash size={11} /> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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

            {/* Edit Modal */}
            {showEditModal && selectedReview && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                            <div className="modal-header border-0 pb-0">
                                <h5 className="modal-title fw-bold text-dark mt-2">✏️ Edit Review Details</h5>
                                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                            </div>
                            <div className="modal-body p-4">
                                <form onSubmit={handleEditSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Client Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={selectedReview.clientName} 
                                            onChange={(e) => setSelectedReview({ ...selectedReview, clientName: e.target.value })} 
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Service Taken</label>
                                        <select 
                                            className="form-select"
                                            value={selectedReview.serviceUsed}
                                            onChange={(e) => setSelectedReview({ ...selectedReview, serviceUsed: e.target.value })}
                                        >
                                            <option value="Bridal Makeup">Bridal Makeup</option>
                                            <option value="Party Makeup">Party Makeup</option>
                                            <option value="Hair Styling">Hair Styling</option>
                                            <option value="Academy Course">Academy Course</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Rating (1 to 5)</label>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            max="5" 
                                            className="form-control" 
                                            value={selectedReview.rating} 
                                            onChange={(e) => setSelectedReview({ ...selectedReview, rating: e.target.value })} 
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Review Message</label>
                                        <textarea 
                                            className="form-control" 
                                            rows="3"
                                            value={selectedReview.message} 
                                            onChange={(e) => setSelectedReview({ ...selectedReview, message: e.target.value })} 
                                            required 
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Update Photo (Optional)</label>
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            accept="image/*"
                                            onChange={(e) => setSelectedReview({ ...selectedReview, newPhoto: e.target.files[0] })} 
                                        />
                                    </div>
                                    <div className="d-grid gap-2 mt-4">
                                        <button type="submit" className="btn text-white fw-bold py-2" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
                                            SAVE CHANGES
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewList;