import React, { useState } from 'react';
import { FaTrash, FaStar, FaQuoteRight } from 'react-icons/fa';

const ReviewList = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Sonia Khan', service: 'Bridal Makeup', msg: 'Amazing service! Archana maam is best.', rating: 5 },
        { id: 2, name: 'Neha Varma', service: 'Party Makeup', msg: 'Loved my look, everyone praised it.', rating: 4 },
    ]);

    return (
        <div className="container-fluid p-0">
            <div className="row g-4">
                {reviews.map((r) => (
                    <div className="col-md-6" key={r.id}>
                        <div className="card border-0 shadow-sm p-4 h-100 position-relative">
                            <FaQuoteRight className="position-absolute end-0 top-0 m-3 text-light" size={40} />
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} color={i < r.rating ? '#FFD700' : '#e4e5e9'} />
                                ))}
                            </div>
                            <h6 className="fw-bold mb-1">{r.name}</h6>
                            <small className="text-muted mb-2 d-block">{r.service}</small>
                            <p className="text-secondary small italic">"{r.msg}"</p>
                            <div className="text-end mt-2">
                                <button className="btn btn-sm btn-outline-danger border-0 shadow-none">
                                    <FaTrash className="me-1" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;