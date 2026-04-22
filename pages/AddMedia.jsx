import React, { useState } from 'react';
import { FaCloudUploadAlt, FaVideo, FaLink, FaSave } from 'react-icons/fa';

const AddMedia = () => {
    const [mediaType, setMediaType] = useState('photo'); // photo or video
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Bridal',
        videoUrl: '',
        file: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, file: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Media Data:", formData, "Type:", mediaType);
        alert(`${mediaType === 'photo' ? 'Photo' : 'Video'} added successfully!`);
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="bg-white p-4 rounded shadow-sm border">
                        
                        {/* --- SELECT MEDIA TYPE --- */}
                        <div className="d-flex gap-3 mb-4 justify-content-center">
                            <button 
                                onClick={() => setMediaType('photo')}
                                className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
                            >
                                <FaCloudUploadAlt className="me-2"/> Upload Photo
                            </button>
                            <button 
                                onClick={() => setMediaType('video')}
                                className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
                            >
                                <FaVideo className="me-2"/> Add Video Link
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Details Column */}
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Title / Caption</label>
                                        <input 
                                            type="text" 
                                            name="title" 
                                            className="form-control" 
                                            placeholder="e.g. Stunning Bridal Look" 
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Gallery Category</label>
                                        <select name="category" className="form-select" onChange={handleChange}>
                                            <option value="Bridal">Bridal Gallery</option>
                                            <option value="Party">Party Gallery</option>
                                            <option value="Studio">Studio Interior</option>
                                            <option value="Classes">Online Classes</option>
                                        </select>
                                    </div>

                                    {mediaType === 'video' && (
                                        <div className="mb-3">
                                            <label className="form-label fw-bold"><FaLink className="me-2"/> Video URL (YouTube/Vimeo)</label>
                                            <input 
                                                type="url" 
                                                name="videoUrl" 
                                                className="form-control" 
                                                placeholder="https://www.youtube.com/watch?v=..." 
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Preview Column */}
                                <div className="col-md-6 text-center">
                                    <label className="form-label fw-bold d-block">Preview</label>
                                    <div 
                                        className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
                                        style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
                                    >
                                        {mediaType === 'photo' ? (
                                            preview ? (
                                                <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <div onClick={() => document.getElementById('mediaInput').click()} style={{cursor:'pointer'}}>
                                                    <FaCloudUploadAlt size={40} className="text-muted" />
                                                    <p className="small text-muted">Click to select photo</p>
                                                </div>
                                            )
                                        ) : (
                                            <div className="p-3">
                                                <FaVideo size={40} className="text-muted mb-2" />
                                                <p className="small text-muted">Video link will be saved to the database</p>
                                            </div>
                                        )}
                                    </div>
                                    {mediaType === 'photo' && (
                                        <input 
                                            type="file" 
                                            id="mediaInput" 
                                            hidden 
                                            accept="image/*" 
                                            onChange={handleFileChange} 
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="text-end mt-4 pt-3 border-top">
                                <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }}>
                                    <FaSave className="me-2" /> PUBLISH TO GALLERY
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMedia;