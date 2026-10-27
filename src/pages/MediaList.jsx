// import React, { useState } from 'react';
// import { FaTrash, FaPlayCircle, FaImages } from 'react-icons/fa';

// const MediaList = () => {
//     // Media items ka data
//     const [galleryItems, setGalleryItems] = useState([
//         { id: 1, heading: 'Bridal Glow', cat: 'Bridal', kind: 'photo', path: 'https://via.placeholder.com/300x200' },
//         { id: 2, heading: 'Makeup Tutorial', cat: 'Classes', kind: 'video', path: 'https://via.placeholder.com/300x200' },
//         { id: 3, heading: 'Engagement Look', cat: 'Party', kind: 'photo', path: 'https://via.placeholder.com/300x200' },
//     ]);

//     const removeMedia = (id) => {
//         if (window.confirm("Are you sure you want to delete?")) {
//             setGalleryItems(galleryItems.filter(item => item.id !== id));
//         }
//     };

//     return (
//         <div className="container-fluid">
//             <div className="row g-4">
//                 {galleryItems.map((item) => (
//                     <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
//                         <div className="card h-100 border-0 shadow-sm overflow-hidden position-relative">
                            
//                             {/* Type Badge */}
//                             <span className="badge position-absolute top-0 start-0 m-2" 
//                                   style={{ backgroundColor: item.kind === 'video' ? '#ff0000' : '#B88A4A', zIndex: 2 }}>
//                                 {item.kind === 'video' ? <FaPlayCircle /> : <FaImages />} {item.kind.toUpperCase()}
//                             </span>

//                             {/* Thumbnail Container */}
//                             <div style={{ height: '160px', backgroundColor: '#eee' }}>
//                                 <img 
//                                     src={item.path} 
//                                     alt={item.heading} 
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                                 />
//                             </div>

//                             <div className="card-body p-3">
//                                 <h6 className="fw-bold text-truncate mb-1">{item.heading}</h6>
//                                 <p className="text-muted small mb-3">{item.cat} Gallery</p>
                                
//                                 <button 
//                                     onClick={() => removeMedia(item.id)}
//                                     className="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
//                                 >
//                                     <FaTrash size={12} /> Remove
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
            
//             {galleryItems.length === 0 && (
//                 <div className="text-center py-5">
//                     <p className="text-muted">No media found in gallery.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MediaList;

// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaPlayCircle, FaImages } from 'react-icons/fa';
// import axios from 'axios';

// const MediaList = () => {
//     const [galleryItems, setGalleryItems] = useState([]);

//     // --- API: Fetch All Media ---
//     const fetchMedia = async () => {
//         try {
//             const res = await axios.get('http://localhost:8000/api/admin/media/all');
//             if (res.data.success) {
//                 setGalleryItems(res.data.data);
//             }
//         } catch (err) {
//             console.error("Error fetching media:", err);
//         }
//     };

//     useEffect(() => {
//         fetchMedia();
//     }, []);

//     // --- API: Delete Media ---
//     const removeMedia = async (id) => {
//         if (window.confirm("Are you sure you want to delete this item?")) {
//             try {
//                 const res = await axios.delete(`http://localhost:8000/api/admin/media/delete/${id}`);
//                 if (res.data.success) {
//                     setGalleryItems(galleryItems.filter(item => item._id !== id));
//                     alert("Deleted Successfully");
//                 }
//             } catch (err) {
//                 console.error("Delete error:", err);
//                 alert("Could not delete");
//             }
//         }
//     };

//     return (
//         <div className="container-fluid">
//             <div className="row g-4">
//                 {galleryItems.map((item) => (
//                     <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
//                         <div className="card h-100 border-0 shadow-sm overflow-hidden position-relative">
                            
//                             {/* Type Badge */}
//                             <span className="badge position-absolute top-0 start-0 m-2" 
//                                   style={{ backgroundColor: item.mediaType === 'video' ? '#ff0000' : '#B88A4A', zIndex: 2 }}>
//                                 {item.mediaType === 'video' ? <FaPlayCircle /> : <FaImages />} {item.mediaType?.toUpperCase()}
//                             </span>

//                             {/* Thumbnail Container */}
//                             <div style={{ height: '160px', backgroundColor: '#eee' }}>
//                                 {item.mediaType === 'photo' ? (
//                                     <img 
//                                         src={`http://localhost:8000/uploads/${item.fileUrl}`} 
//                                         alt={item.title} 
//                                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                                     />
//                                 ) : (
//                                     <div className="d-flex align-items-center justify-content-center h-100 bg-dark text-white">
//                                         <FaPlayCircle size={40} />
//                                     </div>
//                                 )}
//                             </div>

//                             <div className="card-body p-3">
//                                 <h6 className="fw-bold text-truncate mb-1">{item.title}</h6>
//                                 <p className="text-muted small mb-3">{item.category} Gallery</p>
                                
//                                 <button 
//                                     onClick={() => removeMedia(item._id)}
//                                     className="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
//                                 >
//                                     <FaTrash size={12} /> Remove
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
            
//             {galleryItems.length === 0 && (
//                 <div className="text-center py-5">
//                     <p className="text-muted">No media found in gallery.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MediaList;

import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaPlayCircle, FaImages, FaSpinner, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllMediaService, updateMediaService, deleteMediaService } from '../API/service.js';

const MediaList = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Edit modal state
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        _id: '',
        title: '',
        category: 'Bridal',
        mediaType: 'photo',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // --- API: Fetch All Media ---
    const fetchMedia = async () => {
        try {
            const res = await getAllMediaService();
            // Check karein ki data array hai ya object ke andar hai
            if (res.success && res.data) {
                setGalleryItems(res.data);
            } else if (Array.isArray(res)) {
                setGalleryItems(res);
            } else if (res.data) {
                setGalleryItems(res.data);
            }
        } catch (err) {
            console.error("Error fetching media:", err);
            toast.error("Media fetch karne me error aaya!");
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    // --- API: Delete Media ---
    const removeMedia = async (id) => {
        if (window.confirm("Kya aap wakai is media item ko delete karna chahte hain?")) {
            try {
                const res = await deleteMediaService(id);
                if (res.success || res) {
                    setGalleryItems(galleryItems.filter(item => item._id !== id));
                    toast.success("Media successfully delete ho gaya!");
                }
            } catch (err) {
                console.error("Delete error:", err);
                toast.error("Media delete nahi ho paya!");
            }
        }
    };

    // --- Open Edit Modal ---
    const handleOpenEditModal = (item) => {
        setSelectedItem(item);
        setSelectedFile(null);
        setShowModal(true);
    };

    // --- Handle Input Change for Update ---
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem(prev => ({ ...prev, [name]: value }));
    };

    // --- Handle File Change for Update ---
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // --- API: Update Media ---
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', selectedItem.title);
        formData.append('category', selectedItem.category);
        formData.append('mediaType', selectedItem.mediaType);
        
        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        try {
            const res = await updateMediaService(selectedItem._id, formData);

            if (res.success || res) {
                toast.success("Media successfully update ho gaya!");
                setShowModal(false);
                fetchMedia(); // List refresh karein
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error("Update error: " + (err.message || "Something went wrong"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer />

            <div className="row g-4">
                {galleryItems.map((item) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                        <div className="card h-100 border-0 shadow-sm overflow-hidden position-relative" style={{ borderRadius: '15px' }}>
                            
                            {/* Type Badge */}
                            <span className="badge position-absolute top-0 start-0 m-2" 
                                  style={{ backgroundColor: item.mediaType === 'video' ? '#ff0000' : '#B88A4A', zIndex: 2 }}>
                                {item.mediaType === 'video' ? <FaPlayCircle /> : <FaImages />} {item.mediaType?.toUpperCase()}
                            </span>

                            {/* Thumbnail Container */}
                            <div style={{ height: '160px', backgroundColor: '#eee' }}>
                                {item.mediaType === 'photo' ? (
                                    <img 
                                        src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
                                        alt={item.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                                    />
                                ) : (
                                    <video 
                                        src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                )}
                            </div>

                            <div className="card-body p-3">
                                <h6 className="fw-bold text-truncate mb-1">{item.title}</h6>
                                <p className="text-muted small mb-3">{item.category} Gallery</p>
                                
                                <div className="d-flex gap-2">
                                    <button 
                                        onClick={() => handleOpenEditModal(item)}
                                        className="btn btn-outline-primary btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm"
                                    >
                                        <FaEdit size={12} /> Edit
                                    </button>

                                    <button 
                                        onClick={() => removeMedia(item._id)}
                                        className="btn btn-outline-danger btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm"
                                    >
                                        <FaTrash size={12} /> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {galleryItems.length === 0 && (
                <div className="text-center py-5">
                    <p className="text-muted">No media found in gallery.</p>
                </div>
            )}

            {/* --- Edit Media Modal --- */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
                    <div className="modal-dialog modal-dialog-centered"> 
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                            <div className="modal-header border-0 pb-0">
                                <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3" style={{ fontSize: '1.3rem' }}>
                                    ✨ Update Media Details
                                </h5>
                                <button type="button" className="btn-close shadow-none" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            
                            <div className="modal-body p-4">
                                <form onSubmit={handleUpdateSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Title / Caption</label>
                                        <input 
                                            type="text" 
                                            className="form-control py-2 shadow-sm" 
                                            name="title" 
                                            value={selectedItem.title || ""} 
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Gallery Category</label>
                                        <select 
                                            className="form-select py-2 shadow-sm" 
                                            name="category"
                                            value={selectedItem.category || "Bridal"}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Bridal">Bridal Gallery</option>
                                            <option value="Party">Party Gallery</option>
                                            <option value="Studio">Studio Interior</option>
                                            <option value="Classes">Online Classes</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Media Type</label>
                                        <select 
                                            className="form-select py-2 shadow-sm" 
                                            name="mediaType"
                                            value={selectedItem.mediaType || "photo"}
                                            onChange={handleInputChange}
                                        >
                                            <option value="photo">Photo</option>
                                            <option value="video">Video</option>
                                        </select>
                                    </div>

                                    <div className="mb-3 text-center">
                                        <label className="form-label small fw-bold text-muted d-block">Change File (Optional)</label>
                                        <input 
                                            type="file" 
                                            className="form-control form-control-sm shadow-sm" 
                                            accept={selectedItem.mediaType === 'photo' ? 'image/*' : 'video/*'} 
                                            onChange={handleFileChange} 
                                        />
                                    </div>

                                    <div className="d-grid gap-2 mt-4">
                                        <button type="submit" className="btn py-2 fw-bold text-white shadow-sm" 
                                                style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}
                                                disabled={loading}>
                                            {loading ? <><FaSpinner className="fa-spin me-2" /> UPDATING...</> : <><FaSave className="me-2" /> SAVE CHANGES</>}
                                        </button>
                                        <button type="button" className="btn btn-light py-2 fw-bold text-muted border" onClick={() => setShowModal(false)} style={{ borderRadius: '10px' }}>
                                            CANCEL
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

export default MediaList;