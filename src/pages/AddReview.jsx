// import React, { useState } from 'react';
// import { FaStar, FaQuoteLeft, FaCloudUploadAlt, FaSave } from 'react-icons/fa';

// const AddReview = () => {
//     const [rating, setRating] = useState(5);
//     const [preview, setPreview] = useState(null);
//     const [reviewData, setReviewData] = useState({
//         clientName: '',
//         serviceUsed: 'Bridal Makeup',
//         message: '',
//         clientPhoto: null
//     });

//     const handlePhotoChange = (e) => {
//         const file = e.target.files[0];
//         setReviewData({ ...reviewData, clientPhoto: file });
//         setPreview(URL.createObjectURL(file));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Review saved successfully!");
//         console.log(reviewData, rating);
//     };

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10">
//                     <div className="bg-white p-4 rounded shadow-sm border">
//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 {/* Left Side: Photo Upload */}
//                                 <div className="col-md-4 text-center border-end">
//                                     <label className="fw-bold mb-3 d-block">Client Photo</label>
//                                     <div 
//                                         className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border"
//                                         style={{ width: '150px', height: '150px', overflow: 'hidden', cursor: 'pointer' }}
//                                         onClick={() => document.getElementById('reviewFile').click()}
//                                     >
//                                         {preview ? (
//                                             <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                         ) : (
//                                             <FaCloudUploadAlt size={30} className="text-muted" />
//                                         )}
//                                     </div>
//                                     <input type="file" id="reviewFile" hidden onChange={handlePhotoChange} />
//                                     <small className="text-muted mt-2 d-block">Optional: Client ki photo upload karein</small>
                                    
//                                     {/* Rating Selector */}
//                                     <div className="mt-4">
//                                         <label className="fw-bold d-block mb-2">Rating</label>
//                                         {[1, 2, 3, 4, 5].map((star) => (
//                                             <FaStar 
//                                                 key={star}
//                                                 size={25}
//                                                 style={{ cursor: 'pointer', color: star <= rating ? '#FFD700' : '#e4e5e9' }}
//                                                 onClick={() => setRating(star)}
//                                             />
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Right Side: Details */}
//                                 <div className="col-md-8 ps-md-4">
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Client Name</label>
//                                         <input type="text" className="form-control" placeholder="e.g. Priya Sharma" required />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Service Taken</label>
//                                         <select className="form-select">
//                                             <option>Bridal Makeup</option>
//                                             <option>Party Makeup</option>
//                                             <option>Hair Styling</option>
//                                             <option>Academy Course</option>
//                                         </select>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Review Message</label>
//                                         <textarea 
//                                             className="form-control" 
//                                             rows="4" 
//                                             placeholder="Client ne kya kaha? (e.g. Best experience ever!)"
//                                             required
//                                         ></textarea>
//                                     </div>
//                                     <button 
//                                         type="submit" 
//                                         className="btn w-100 text-white fw-bold py-2 mt-2" 
//                                         style={{ backgroundColor: '#B88A4A' }}
//                                     >
//                                         <FaSave className="me-2" /> POST REVIEW
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddReview;

import React, { useState } from 'react';
import { FaStar, FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddReview = () => {
    const [rating, setRating] = useState(5);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reviewData, setReviewData] = useState({
        clientName: '',
        serviceUsed: 'Bridal Makeup',
        message: '',
        clientPhoto: null
    });

    // Handle input change for text and select fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prev => ({ ...prev, [name]: value }));
    };

    // Handle photo change & preview
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setReviewData(prev => ({ ...prev, clientPhoto: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    // Handle Form Submit & API Integration
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('clientName', reviewData.clientName);
        formData.append('serviceUsed', reviewData.serviceUsed);
        formData.append('message', reviewData.message);
        formData.append('rating', rating);
        
        // Agar photo select ki gayi hai tabhi append karein
        if (reviewData.clientPhoto) {
            formData.append('file', reviewData.clientPhoto);
        }

        try {
            // Backend API Endpoint
            const response = await axios.post('http://localhost:5000/api/admin/reviews/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                toast.success("Review successfully post ho gaya!");
                // Form reset karein
                setReviewData({
                    clientName: '',
                    serviceUsed: 'Bridal Makeup',
                    message: '',
                    clientPhoto: null
                });
                setRating(5);
                setPreview(null);
            } else {
                toast.error(response.data.message || "Kuch galti ho gayi!");
            }
        } catch (err) {
            console.error("Error adding review:", err);
            toast.error(err.response?.data?.message || "Review post karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="bg-white p-4 rounded shadow-sm border">
                        <h4 className="fw-bold mb-4 text-dark text-center">⭐ Add Client Review</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Left Side: Photo Upload */}
                                <div className="col-md-4 text-center border-end d-flex flex-column align-items-center justify-content-center">
                                    <label className="fw-bold mb-3 d-block">Client Photo</label>
                                    <div 
                                        className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border shadow-sm"
                                        style={{ width: '150px', height: '150px', overflow: 'hidden', cursor: 'pointer' }}
                                        onClick={() => document.getElementById('reviewFile').click()}
                                    >
                                        {preview ? (
                                            <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <FaCloudUploadAlt size={35} className="text-muted" />
                                        )}
                                    </div>
                                    <input type="file" id="reviewFile" hidden accept="image/*" onChange={handlePhotoChange} />
                                    <small className="text-muted mt-2 d-block">Optional: Client ki photo upload karein</small>
                                    
                                    {/* Rating Selector */}
                                    <div className="mt-4">
                                        <label className="fw-bold d-block mb-2">Rating</label>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar 
                                                key={star}
                                                size={25}
                                                style={{ cursor: 'pointer', color: star <= rating ? '#FFD700' : '#e4e5e9' }}
                                                onClick={() => setRating(star)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="col-md-8 ps-md-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Client Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="clientName"
                                            value={reviewData.clientName}
                                            onChange={handleChange}
                                            placeholder="e.g. Priya Sharma" 
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Service Taken</label>
                                        <select 
                                            className="form-select"
                                            name="serviceUsed"
                                            value={reviewData.serviceUsed}
                                            onChange={handleChange}
                                        >
                                            <option value="Bridal Makeup">Bridal Makeup</option>
                                            <option value="Party Makeup">Party Makeup</option>
                                            <option value="Hair Styling">Hair Styling</option>
                                            <option value="Academy Course">Academy Course</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Review Message</label>
                                        <textarea 
                                            className="form-control" 
                                            name="message"
                                            rows="4" 
                                            value={reviewData.message}
                                            onChange={handleChange}
                                            placeholder="Client ne kya kaha? (e.g. Best experience ever!)"
                                            required
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn w-100 text-white fw-bold py-2 mt-2 shadow-sm" 
                                        style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}
                                        disabled={loading}
                                    >
                                        <FaSave className="me-2" /> {loading ? 'POSTING...' : 'POST REVIEW'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;