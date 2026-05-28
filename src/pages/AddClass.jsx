import React, { useState } from 'react';
import { FaLaptopCode, FaClock, FaCalendarAlt, FaSave, FaRupeeSign } from 'react-icons/fa';

const AddClass = () => {
    const [preview, setPreview] = useState(null);

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
                    <form>
                        <div className="row">
                            {/* Course Details */}
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Course Title</label>
                                    <input type="text" className="form-control" placeholder="e.g. Professional Self Makeup Masterclass" />
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold"><FaClock className="me-1"/> Duration</label>
                                        <input type="text" className="form-control" placeholder="e.g. 15 Days" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold"><FaRupeeSign className="me-1"/> Course Fees</label>
                                        <input type="number" className="form-control" placeholder="Price" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold"><FaCalendarAlt className="me-1"/> Course Validity</label>
                                    <select className="form-select">
                                        <option>Lifetime Access</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">What will they learn? (Brief)</label>
                                    <textarea className="form-control" rows="3" placeholder="Course highlights..."></textarea>
                                </div>
                            </div>

                            {/* Banner Upload */}
                            <div className="col-md-5 text-center ps-md-4 border-start">
                                <label className="form-label fw-bold d-block">Course Banner/Poster</label>
                                <div 
                                    className="border rounded bg-light d-flex align-items-center justify-content-center"
                                    style={{ height: '220px', cursor: 'pointer', overflow: 'hidden' }}
                                    onClick={() => document.getElementById('classBanner').click()}
                                >
                                    {preview ? (
                                        <img src={preview} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div className="text-muted">
                                            <FaLaptopCode size={40} className="mb-2" />
                                            <p className="small">Click to upload poster</p>
                                        </div>
                                    )}
                                </div>
                                <input type="file" id="classBanner" hidden onChange={handleBannerChange} />
                                <button className="btn w-100 text-white fw-bold py-2 mt-4" style={{ backgroundColor: '#B88A4A' }}>
                                    <FaSave className="me-2" /> CREATE COURSE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;