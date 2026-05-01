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
import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlayCircle, FaImages } from 'react-icons/fa';
import axios from 'axios';

const MediaList = () => {
    const [galleryItems, setGalleryItems] = useState([]);

    // --- API: Fetch All Media ---
    const fetchMedia = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/admin/media/all');
            if (res.data.success) {
                setGalleryItems(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching media:", err);
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    // --- API: Delete Media ---
    const removeMedia = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                const res = await axios.delete(`http://localhost:8000/api/admin/media/delete/${id}`);
                if (res.data.success) {
                    setGalleryItems(galleryItems.filter(item => item._id !== id));
                    alert("Deleted Successfully");
                }
            } catch (err) {
                console.error("Delete error:", err);
                alert("Could not delete");
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="row g-4">
                {galleryItems.map((item) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                        <div className="card h-100 border-0 shadow-sm overflow-hidden position-relative">
                            
                            {/* Type Badge */}
                            <span className="badge position-absolute top-0 start-0 m-2" 
                                  style={{ backgroundColor: item.mediaType === 'video' ? '#ff0000' : '#B88A4A', zIndex: 2 }}>
                                {item.mediaType === 'video' ? <FaPlayCircle /> : <FaImages />} {item.mediaType?.toUpperCase()}
                            </span>

                            {/* Thumbnail Container */}
                            <div style={{ height: '160px', backgroundColor: '#eee' }}>
                                {item.mediaType === 'photo' ? (
                                    <img 
                                        src={`http://localhost:8000/uploads/${item.fileUrl}`} 
                                        alt={item.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                ) : (
                                    <div className="d-flex align-items-center justify-content-center h-100 bg-dark text-white">
                                        <FaPlayCircle size={40} />
                                    </div>
                                )}
                            </div>

                            <div className="card-body p-3">
                                <h6 className="fw-bold text-truncate mb-1">{item.title}</h6>
                                <p className="text-muted small mb-3">{item.category} Gallery</p>
                                
                                <button 
                                    onClick={() => removeMedia(item._id)}
                                    className="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaTrash size={12} /> Remove
                                </button>
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
        </div>
    );
};

export default MediaList;