import React, { useState } from 'react';
import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';

const AddPackage = () => {
    const [formData, setFormData] = useState({
        packageName: '',
        category: 'Bridal Makeup',
        price: '',
        description: '',
        image: null
    });

    const [preview, setPreview] = useState(null);

    // Input handle karne ke liye
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Image preview handle karne ke liye
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saving Package:", formData);
        alert("Package saved successfully!");
        // Yahan aap apni API call (Axios/Fetch) add kar sakte hain
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm border">
                        <div className="row">
                            {/* Left Side: Text Details */}
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Package Name</label>
                                    <input 
                                        type="text" 
                                        name="packageName"
                                        className="form-control" 
                                        placeholder="e.g. Luxury Bridal Package" 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Select Category</label>
                                    <select 
                                        name="category" 
                                        className="form-select" 
                                        onChange={handleChange}
                                        value={formData.category}
                                    >
                                        <option value="Bridal Makeup">Bridal Makeup</option>
                                        <option value="Party Makeup">Party Makeup</option>
                                        <option value="Hair Styling">Hair Styling</option>
                                        <option value="Skin Care">Skin Care</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Price (₹)</label>
                                    <input 
                                        type="number" 
                                        name="price"
                                        className="form-control" 
                                        placeholder="Enter amount" 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Description</label>
                                    <textarea 
                                        name="description"
                                        className="form-control" 
                                        rows="4" 
                                        placeholder="What's included in this package?" 
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Right Side: Image Upload */}
                            <div className="col-md-5 text-center">
                                <label className="form-label fw-bold d-block">Package Image</label>
                                <div 
                                    className="border rounded d-flex flex-column align-items-center justify-content-center bg-light"
                                    style={{ height: '250px', cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    {preview ? (
                                        <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <>
                                            <FaCloudUploadAlt size={50} color="#B88A4A" />
                                            <p className="small text-muted mt-2">Click to upload photo</p>
                                        </>
                                    )}
                                </div>
                                <input 
                                    type="file" 
                                    id="fileInput" 
                                    hidden 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                />
                                <small className="text-muted d-block mt-2">Recommended: 800x600 px</small>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-end">
                            <button type="reset" className="btn btn-outline-secondary me-3 px-4">Cancel</button>
                            <button 
                                type="submit" 
                                className="btn px-5 text-white fw-bold shadow-sm"
                                style={{ backgroundColor: '#B88A4A' }}
                            >
                                <FaSave className="me-2" /> SAVE PACKAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;