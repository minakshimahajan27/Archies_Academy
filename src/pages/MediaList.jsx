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

// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaEdit, FaPlayCircle, FaImages, FaSpinner, FaSave } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getAllMediaService, updateMediaService, deleteMediaService } from '../API/service.js';

// const MediaList = () => {
//     const [galleryItems, setGalleryItems] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Edit modal state
//     const [showModal, setShowModal] = useState(false);
//     const [selectedItem, setSelectedItem] = useState({
//         _id: '',
//         title: '',
//         category: 'Bridal',
//         mediaType: 'photo',
//     });
//     const [selectedFile, setSelectedFile] = useState(null);

//     // --- API: Fetch All Media ---
//     const fetchMedia = async () => {
//         try {
//             const res = await getAllMediaService();
//             // Check karein ki data array hai ya object ke andar hai
//             if (res.success && res.data) {
//                 setGalleryItems(res.data);
//             } else if (Array.isArray(res)) {
//                 setGalleryItems(res);
//             } else if (res.data) {
//                 setGalleryItems(res.data);
//             }
//         } catch (err) {
//             console.error("Error fetching media:", err);
//             toast.error("Media fetch karne me error aaya!");
//         }
//     };

//     useEffect(() => {
//         fetchMedia();
//     }, []);

//     // --- API: Delete Media ---
//     const removeMedia = async (id) => {
//         if (window.confirm("Kya aap wakai is media item ko delete karna chahte hain?")) {
//             try {
//                 const res = await deleteMediaService(id);
//                 if (res.success || res) {
//                     setGalleryItems(galleryItems.filter(item => item._id !== id));
//                     toast.success("Media successfully delete ho gaya!");
//                 }
//             } catch (err) {
//                 console.error("Delete error:", err);
//                 toast.error("Media delete nahi ho paya!");
//             }
//         }
//     };

//     // --- Open Edit Modal ---
//     const handleOpenEditModal = (item) => {
//         setSelectedItem(item);
//         setSelectedFile(null);
//         setShowModal(true);
//     };

//     // --- Handle Input Change for Update ---
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSelectedItem(prev => ({ ...prev, [name]: value }));
//     };

//     // --- Handle File Change for Update ---
//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     // --- API: Update Media ---
//     const handleUpdateSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const formData = new FormData();
//         formData.append('title', selectedItem.title);
//         formData.append('category', selectedItem.category);
//         formData.append('mediaType', selectedItem.mediaType);
        
//         if (selectedFile) {
//             formData.append('file', selectedFile);
//         }

//         try {
//             const res = await updateMediaService(selectedItem._id, formData);

//             if (res.success || res) {
//                 toast.success("Media successfully update ho gaya!");
//                 setShowModal(false);
//                 fetchMedia(); // List refresh karein
//             }
//         } catch (err) {
//             console.error("Update error:", err);
//             toast.error("Update error: " + (err.message || "Something went wrong"));
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container-fluid p-0">
//             <ToastContainer />

//             <div className="row g-4">
//                 {galleryItems.map((item) => (
//                     <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
//                         <div className="card h-100 border-0 shadow-sm overflow-hidden position-relative" style={{ borderRadius: '15px' }}>
                            
//                             {/* Type Badge */}
//                             <span className="badge position-absolute top-0 start-0 m-2" 
//                                   style={{ backgroundColor: item.mediaType === 'video' ? '#ff0000' : '#B88A4A', zIndex: 2 }}>
//                                 {item.mediaType === 'video' ? <FaPlayCircle /> : <FaImages />} {item.mediaType?.toUpperCase()}
//                             </span>

//                             {/* Thumbnail Container */}
//                             <div style={{ height: '160px', backgroundColor: '#eee' }}>
//                                 {item.mediaType === 'photo' ? (
//                                     <img 
//                                         src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
//                                         alt={item.title} 
//                                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                                         onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
//                                     />
//                                 ) : (
//                                     <video 
//                                         src={item.fileUrl || `http://localhost:5000/uploads/${item.file}`} 
//                                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                                     />
//                                 )}
//                             </div>

//                             <div className="card-body p-3">
//                                 <h6 className="fw-bold text-truncate mb-1">{item.title}</h6>
//                                 <p className="text-muted small mb-3">{item.category} Gallery</p>
                                
//                                 <div className="d-flex gap-2">
//                                     <button 
//                                         onClick={() => handleOpenEditModal(item)}
//                                         className="btn btn-outline-primary btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                     >
//                                         <FaEdit size={12} /> Edit
//                                     </button>

//                                     <button 
//                                         onClick={() => removeMedia(item._id)}
//                                         className="btn btn-outline-danger btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                     >
//                                         <FaTrash size={12} /> Remove
//                                     </button>
//                                 </div>
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

//             {/* --- Edit Media Modal --- */}
//             {showModal && (
//                 <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
//                     <div className="modal-dialog modal-dialog-centered"> 
//                         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//                             <div className="modal-header border-0 pb-0">
//                                 <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3" style={{ fontSize: '1.3rem' }}>
//                                     ✨ Update Media Details
//                                 </h5>
//                                 <button type="button" className="btn-close shadow-none" onClick={() => setShowModal(false)} aria-label="Close"></button>
//                             </div>
                            
//                             <div className="modal-body p-4">
//                                 <form onSubmit={handleUpdateSubmit}>
//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Title / Caption</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control py-2 shadow-sm" 
//                                             name="title" 
//                                             value={selectedItem.title || ""} 
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Gallery Category</label>
//                                         <select 
//                                             className="form-select py-2 shadow-sm" 
//                                             name="category"
//                                             value={selectedItem.category || "Bridal"}
//                                             onChange={handleInputChange}
//                                         >
//                                             <option value="Bridal">Bridal Gallery</option>
//                                             <option value="Party">Party Gallery</option>
//                                             <option value="Studio">Studio Interior</option>
//                                             <option value="Classes">Online Classes</option>
//                                         </select>
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Media Type</label>
//                                         <select 
//                                             className="form-select py-2 shadow-sm" 
//                                             name="mediaType"
//                                             value={selectedItem.mediaType || "photo"}
//                                             onChange={handleInputChange}
//                                         >
//                                             <option value="photo">Photo</option>
//                                             <option value="video">Video</option>
//                                         </select>
//                                     </div>

//                                     <div className="mb-3 text-center">
//                                         <label className="form-label small fw-bold text-muted d-block">Change File (Optional)</label>
//                                         <input 
//                                             type="file" 
//                                             className="form-control form-control-sm shadow-sm" 
//                                             accept={selectedItem.mediaType === 'photo' ? 'image/*' : 'video/*'} 
//                                             onChange={handleFileChange} 
//                                         />
//                                     </div>

//                                     <div className="d-grid gap-2 mt-4">
//                                         <button type="submit" className="btn py-2 fw-bold text-white shadow-sm" 
//                                                 style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}
//                                                 disabled={loading}>
//                                             {loading ? <><FaSpinner className="fa-spin me-2" /> UPDATING...</> : <><FaSave className="me-2" /> SAVE CHANGES</>}
//                                         </button>
//                                         <button type="button" className="btn btn-light py-2 fw-bold text-muted border" onClick={() => setShowModal(false)} style={{ borderRadius: '10px' }}>
//                                             CANCEL
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MediaList;

import React, { useState, useEffect, useRef } from 'react';
import { FaTrash, FaEdit, FaPlayCircle, FaImages, FaSpinner, FaSave, FaEye, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllMediaService, updateMediaService, deleteMediaService } from '../API/service.js';

const MediaList = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterType, setFilterType] = useState('all'); // 'all', 'photo', 'video'

    // Edit modal state
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        _id: '',
        title: '',
        category: 'Bridal',
        mediaType: 'photo',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // View/Preview modal state
    const [previewModalItem, setPreviewModalItem] = useState(null);

    // Custom dropdown states & refs for Edit Modal
    const [openCategory, setOpenCategory] = useState(false);
    const [openMediaType, setOpenMediaType] = useState(false);
    const categoryRef = useRef(null);
    const mediaTypeRef = useRef(null);

    const categories = [
        { label: 'Bridal Gallery', value: 'Bridal' },
        { label: 'Party Gallery', value: 'Party' },
        { label: 'Studio Interior', value: 'Studio' },
        { label: 'Online Classes', value: 'Classes' }
    ];

    const mediaTypes = [
        { label: 'Photo', value: 'photo' },
        { label: 'Video', value: 'video' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setOpenCategory(false);
            }
            if (mediaTypeRef.current && !mediaTypeRef.current.contains(event.target)) {
                setOpenMediaType(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fetchMedia = async () => {
        try {
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
            toast.error("Media fetch karne me error aaya!");
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

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

    const handleOpenEditModal = (item) => {
        setSelectedItem(item);
        setSelectedFile(null);
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

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
                fetchMedia();
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error("Update error: " + (err.message || "Something went wrong"));
        } finally {
            setLoading(false);
        }
    };

    // Filter items based on selected tab
    const filteredItems = galleryItems.filter(item => {
        if (filterType === 'photo') return item.mediaType === 'photo';
        if (filterType === 'video') return item.mediaType === 'video';
        return true;
    });

    return (
        <div className="container-fluid px-3 py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <ToastContainer />

            {/* Page Header & Filter Tabs */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-3">
                <div>
                    <h4 className="fw-bold mb-1" style={{ color: '#B88A4A' }}>📸 Gallery Media Management</h4>
                    <p className="text-muted small mb-0">View, update, or remove your uploaded photos and videos.</p>
                </div>
                
                {/* Photo and Video Filter Options */}
                <div className="d-flex gap-2">
                    <button 
                        className={`btn btn-sm px-3 fw-bold rounded-pill shadow-sm ${filterType === 'all' ? 'text-white' : 'btn-outline-dark'}`}
                        style={{ backgroundColor: filterType === 'all' ? '#B88A4A' : 'transparent', borderColor: '#B88A4A' }}
                        onClick={() => setFilterType('all')}
                    >
                        All ({galleryItems.length})
                    </button>
                    <button 
                        className={`btn btn-sm px-3 fw-bold rounded-pill shadow-sm ${filterType === 'photo' ? 'text-white' : 'btn-outline-dark'}`}
                        style={{ backgroundColor: filterType === 'photo' ? '#B88A4A' : 'transparent', borderColor: '#B88A4A' }}
                        onClick={() => setFilterType('photo')}
                    >
                        <FaImages className="me-1" /> Photos ({galleryItems.filter(i => i.mediaType === 'photo').length})
                    </button>
                    <button 
                        className={`btn btn-sm px-3 fw-bold rounded-pill shadow-sm ${filterType === 'video' ? 'text-white' : 'btn-outline-dark'}`}
                        style={{ backgroundColor: filterType === 'video' ? '#B88A4A' : 'transparent', borderColor: '#B88A4A' }}
                        onClick={() => setFilterType('video')}
                    >
                        <FaPlayCircle className="me-1" /> Videos ({galleryItems.filter(i => i.mediaType === 'video').length})
                    </button>
                </div>
            </div>

            {/* Gallery Cards Grid */}
            <div className="row g-4">
                {filteredItems.map((item) => {
                    const fileSrc = item.fileUrl || `http://localhost:5000/uploads/${item.file}`;
                    return (
                        <div className="col-sm-6 col-md-4 col-xl-3" key={item._id}>
                            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px', background: '#fff' }}>
                                
                                <span className="badge position-absolute top-0 start-0 m-3 px-2.5 py-1.5 shadow-sm" 
                                    style={{ backgroundColor: item.mediaType === 'video' ? '#dc3545' : '#B88A4A', zIndex: 2, fontSize: '0.75rem', borderRadius: '8px' }}>
                                    {item.mediaType === 'video' ? <FaPlayCircle className="me-1" /> : <FaImages className="me-1" />} {item.mediaType?.toUpperCase()}
                                </span>

                                <div 
                                    className="position-relative overflow-hidden bg-dark"
                                    style={{ height: '180px', cursor: 'pointer' }}
                                    onClick={() => setPreviewModalItem(item)}
                                >
                                    {item.mediaType === 'photo' ? (
                                        <img 
                                            src={fileSrc} 
                                            alt={item.title} 
                                            className="w-100 h-100 object-fit-cover" 
                                            onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                                        />
                                    ) : (
                                        <div className="w-100 h-100 position-relative d-flex align-items-center justify-content-center bg-black">
                                            <video 
                                                src={fileSrc} 
                                                className="w-100 h-100 object-fit-cover opacity-75" 
                                            />
                                            <div className="position-absolute text-white bg-dark bg-opacity-50 rounded-circle p-3 d-flex align-items-center justify-content-center shadow">
                                                <FaPlayCircle size={32} color="#fff" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="card-body p-3 d-flex flex-column justify-content-between">
                                    <div>
                                        <h6 className="fw-bold text-dark text-truncate mb-1" title={item.title}>{item.title}</h6>
                                        <span className="badge bg-light text-muted border px-2 py-1 mb-3" style={{ fontSize: '0.7rem' }}>
                                            📂 {item.category} Gallery
                                        </span>
                                    </div>
                                    
                                    <div className="d-flex gap-2 pt-2 border-top">
                                        <button 
                                            onClick={() => handleOpenEditModal(item)}
                                            className="btn btn-outline-dark btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm rounded-2"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            <FaEdit size={12} /> Edit
                                        </button>

                                        <button 
                                            onClick={() => removeMedia(item._id)}
                                            className="btn btn-outline-danger btn-sm w-50 d-flex align-items-center justify-content-center gap-1 shadow-sm rounded-2"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            <FaTrash size={12} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {filteredItems.length === 0 && (
                <div className="text-center py-5 bg-white rounded-4 shadow-sm border mt-3">
                    <FaImages size={50} className="text-muted mb-3 opacity-50" />
                    <h5 className="fw-bold text-muted">No media found for this filter.</h5>
                </div>
            )}

            {/* --- Preview Modal (Only Photo/Video, No Text) --- */}
            {previewModalItem && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(5px)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-transparent border-0 text-center position-relative">
                            <button 
                                type="button" 
                                className="btn position-absolute top-0 end-0 m-3 text-white bg-dark bg-opacity-50 rounded-circle p-2 shadow"
                                onClick={() => setPreviewModalItem(null)}
                                style={{ zIndex: 1060 }}
                            >
                                <FaTimes size={18} />
                            </button>
                            <div className="p-2 d-flex justify-content-center align-items-center">
                                {previewModalItem.mediaType === 'photo' ? (
                                    <img 
                                        src={previewModalItem.fileUrl || `http://localhost:5000/uploads/${previewModalItem.file}`} 
                                        alt="Preview" 
                                        className="img-fluid rounded-4 shadow-lg"
                                        style={{ maxHeight: '85vh', maxWidth: '100%', objectFit: 'contain' }}
                                    />
                                ) : (
                                    <video 
                                        src={previewModalItem.fileUrl || `http://localhost:5000/uploads/${previewModalItem.file}`} 
                                        className="w-100 rounded-4 shadow-lg"
                                        style={{ maxHeight: '85vh' }}
                                        controls 
                                        autoPlay
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Edit Modal --- */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1040 }}>
                    <div className="modal-dialog modal-dialog-centered"> 
                        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="modal-header border-0 bg-light px-4 pt-4 pb-2">
                                <h5 className="modal-title fw-bold text-dark w-100" style={{ fontSize: '1.2rem', color: '#B88A4A' }}>
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
                                            className="form-control py-2.5 shadow-sm rounded-3" 
                                            name="title" 
                                            value={selectedItem.title || ""} 
                                            onChange={handleInputChange}
                                            required 
                                        />
                                    </div>

                                    <div className="mb-3 position-relative" ref={categoryRef}>
                                        <label className="form-label small fw-bold text-muted">Gallery Category</label>
                                        <div 
                                            className="form-control py-2.5 d-flex justify-content-between align-items-center shadow-sm rounded-3"
                                            style={{ cursor: 'pointer', borderColor: openCategory ? '#B88A4A' : '#ced4da' }}
                                            onClick={() => setOpenCategory(!openCategory)}
                                        >
                                            <span>{categories.find(c => c.value === selectedItem.category)?.label || selectedItem.category}</span>
                                            <span className="text-muted small">▼</span>
                                        </div>
                                        {openCategory && (
                                            <div className="position-absolute w-100 bg-white border rounded-3 shadow-sm mt-1 overflow-hidden" style={{ zIndex: 1000 }}>
                                                {categories.map((cat) => (
                                                    <div 
                                                        key={cat.value}
                                                        className="px-3 py-2"
                                                        style={{ 
                                                            cursor: 'pointer', 
                                                            backgroundColor: selectedItem.category === cat.value ? '#fdf8f2' : 'transparent',
                                                            color: selectedItem.category === cat.value ? '#B88A4A' : '#333',
                                                            fontWeight: selectedItem.category === cat.value ? 'bold' : 'normal',
                                                        }}
                                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B88A4A'; e.currentTarget.style.color = '#fff'; }}
                                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = selectedItem.category === cat.value ? '#fdf8f2' : 'transparent'; e.currentTarget.style.color = selectedItem.category === cat.value ? '#B88A4A' : '#333'; }}
                                                        onClick={() => {
                                                            setSelectedItem({ ...selectedItem, category: cat.value });
                                                            setOpenCategory(false);
                                                        }}
                                                    >
                                                        {cat.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-3 position-relative" ref={mediaTypeRef}>
                                        <label className="form-label small fw-bold text-muted">Media Type</label>
                                        <div 
                                            className="form-control py-2.5 d-flex justify-content-between align-items-center shadow-sm rounded-3"
                                            style={{ cursor: 'pointer', borderColor: openMediaType ? '#B88A4A' : '#ced4da' }}
                                            onClick={() => setOpenMediaType(!openMediaType)}
                                        >
                                            <span>{mediaTypes.find(m => m.value === selectedItem.mediaType)?.label || selectedItem.mediaType}</span>
                                            <span className="text-muted small">▼</span>
                                        </div>
                                        {openMediaType && (
                                            <div className="position-absolute w-100 bg-white border rounded-3 shadow-sm mt-1 overflow-hidden" style={{ zIndex: 1000 }}>
                                                {mediaTypes.map((type) => (
                                                    <div 
                                                        key={type.value}
                                                        className="px-3 py-2"
                                                        style={{ 
                                                            cursor: 'pointer', 
                                                            backgroundColor: selectedItem.mediaType === type.value ? '#fdf8f2' : 'transparent',
                                                            color: selectedItem.mediaType === type.value ? '#B88A4A' : '#333',
                                                            fontWeight: selectedItem.mediaType === type.value ? 'bold' : 'normal',
                                                        }}
                                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B88A4A'; e.currentTarget.style.color = '#fff'; }}
                                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = selectedItem.mediaType === type.value ? '#fdf8f2' : 'transparent'; e.currentTarget.style.color = selectedItem.mediaType === type.value ? '#B88A4A' : '#333'; }}
                                                        onClick={() => {
                                                            setSelectedItem({ ...selectedItem, mediaType: type.value });
                                                            setOpenMediaType(false);
                                                        }}
                                                    >
                                                        {type.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-3 text-center bg-light p-3 rounded-3 border">
                                        <label className="form-label small fw-bold text-muted d-block mb-2">Change File (Optional)</label>
                                        <input 
                                            type="file" 
                                            className="form-control form-control-sm shadow-sm" 
                                            accept={selectedItem.mediaType === 'photo' ? 'image/*' : 'video/*'} 
                                            onChange={handleFileChange} 
                                        />
                                    </div>

                                    <div className="d-grid gap-2 mt-4">
                                        <button type="submit" className="btn py-2.5 fw-bold text-white shadow-sm" 
                                                style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}
                                                disabled={loading}>
                                            {loading ? <><FaSpinner className="fa-spin me-2" /> UPDATING...</> : <><FaSave className="me-2" /> SAVE CHANGES</>}
                                        </button>
                                        <button type="button" className="btn btn-light py-2.5 fw-bold text-muted border" onClick={() => setShowModal(false)} style={{ borderRadius: '10px' }}>
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