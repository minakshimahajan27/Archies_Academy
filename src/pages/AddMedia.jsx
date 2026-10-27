// import React, { useState } from 'react';
// import { FaCloudUploadAlt, FaVideo, FaLink, FaSave } from 'react-icons/fa';

// const AddMedia = () => {
//     const [mediaType, setMediaType] = useState('photo'); // photo or video
//     const [preview, setPreview] = useState(null);
//     const [formData, setFormData] = useState({
//         title: '',
//         category: 'Bridal',
//         videoUrl: '',
//         file: null
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, file: file });
//         setPreview(URL.createObjectURL(file));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Media Data:", formData, "Type:", mediaType);
//         alert(`${mediaType === 'photo' ? 'Photo' : 'Video'} added successfully!`);
//     };
//     const handleUpload = async (e) => {
//     const formData = new FormData();
//     formData.append('title', 'My Wedding Shoot');
//     formData.append('mediaType', 'photo'); // ya 'video'
//     formData.append('file', selectedFile); // input type="file" se

//     const res = await addMediaService(formData);
//     if(res.success) alert("Uploaded!");
// };

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10">
//                     <div className="bg-white p-4 rounded shadow-sm border">

//                         {/* --- SELECT MEDIA TYPE --- */}
//                         <div className="d-flex gap-3 mb-4 justify-content-center">
//                             <button 
//                                 onClick={() => setMediaType('photo')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaCloudUploadAlt className="me-2"/> Upload Photo
//                             </button>
//                             <button 
//                                 onClick={() => setMediaType('video')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaVideo className="me-2"/> Add Video Link
//                             </button>
//                         </div>

//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 {/* Details Column */}
//                                 <div className="col-md-6">
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Title / Caption</label>
//                                         <input 
//                                             type="text" 
//                                             name="title" 
//                                             className="form-control" 
//                                             placeholder="e.g. Stunning Bridal Look" 
//                                             onChange={handleChange}
//                                             required 
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Gallery Category</label>
//                                         <select name="category" className="form-select" onChange={handleChange}>
//                                             <option value="Bridal">Bridal Gallery</option>
//                                             <option value="Party">Party Gallery</option>
//                                             <option value="Studio">Studio Interior</option>
//                                             <option value="Classes">Online Classes</option>
//                                         </select>
//                                     </div>

//                                     {mediaType === 'video' && (
//                                         <div className="mb-3">
//                                             <label className="form-label fw-bold"><FaLink className="me-2"/> Video URL (YouTube/Vimeo)</label>
//                                             <input 
//                                                 type="url" 
//                                                 name="videoUrl" 
//                                                 className="form-control" 
//                                                 placeholder="https://www.youtube.com/watch?v=..." 
//                                                 onChange={handleChange}
//                                                 required 
//                                             />
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Preview Column */}
//                                 <div className="col-md-6 text-center">
//                                     <label className="form-label fw-bold d-block">Preview</label>
//                                     <div 
//                                         className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
//                                         style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
//                                     >
//                                         {mediaType === 'photo' ? (
//                                             preview ? (
//                                                 <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                             ) : (
//                                                 <div onClick={() => document.getElementById('mediaInput').click()} style={{cursor:'pointer'}}>
//                                                     <FaCloudUploadAlt size={40} className="text-muted" />
//                                                     <p className="small text-muted">Click to select photo</p>
//                                                 </div>
//                                             )
//                                         ) : (
//                                             <div className="p-3">
//                                                 <FaVideo size={40} className="text-muted mb-2" />
//                                                 <p className="small text-muted">Video link will be saved to the database</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                     {mediaType === 'photo' && (
//                                         <input 
//                                             type="file" 
//                                             id="mediaInput" 
//                                             hidden 
//                                             accept="image/*" 
//                                             onChange={handleFileChange} 
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="text-end mt-4 pt-3 border-top">
//                                 <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }}>
//                                     <FaSave className="me-2" /> PUBLISH TO GALLERY
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddMedia;


// import React, { useState } from 'react';
// import { FaCloudUploadAlt, FaVideo, FaLink, FaSave } from 'react-icons/fa';
// import axios from 'axios'; // Axios install kar lena: npm install axios

// const AddMedia = () => {
//     const [mediaType, setMediaType] = useState('photo');
//     const [preview, setPreview] = useState(null);
//     const [formData, setFormData] = useState({
//         title: '',
//         category: 'Bridal',
//         videoUrl: '',
//         file: null
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, file: file });
//         setPreview(URL.createObjectURL(file));
//     };

//     // --- API Integration Start ---
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     // ... data append karein ...

//     try {
//         const res = await addMediaService(data);
//         alert("Success!");
//     } catch (err) {
//         // 'undefined' se bachne ke liye aise likhein
//         alert("Error: " + (err.message || "Something went wrong"));
//     }
// };
//     // --- API Integration End ---

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10">
//                     <div className="bg-white p-4 rounded shadow-sm border">
//                         <div className="d-flex gap-3 mb-4 justify-content-center">
//                             <button 
//                                 onClick={() => setMediaType('photo')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaCloudUploadAlt className="me-2"/> Upload Photo
//                             </button>
//                             <button 
//                                 onClick={() => setMediaType('video')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaVideo className="me-2"/> Add Video Link
//                             </button>
//                         </div>

//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Title / Caption</label>
//                                         <input 
//                                             type="text" 
//                                             name="title" 
//                                             className="form-control" 
//                                             placeholder="e.g. Stunning Bridal Look" 
//                                             onChange={handleChange}
//                                             required 
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Gallery Category</label>
//                                         <select name="category" className="form-select" onChange={handleChange}>
//                                             <option value="Bridal">Bridal Gallery</option>
//                                             <option value="Party">Party Gallery</option>
//                                             <option value="Studio">Studio Interior</option>
//                                             <option value="Classes">Online Classes</option>
//                                         </select>
//                                     </div>

//                                     {mediaType === 'video' && (
//                                         <div className="mb-3">
//                                             <label className="form-label fw-bold"><FaLink className="me-2"/> Video URL</label>
//                                             <input 
//                                                 type="url" 
//                                                 name="videoUrl" 
//                                                 className="form-control" 
//                                                 placeholder="https://www.youtube.com/watch?v=..." 
//                                                 onChange={handleChange}
//                                                 required 
//                                             />
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="col-md-6 text-center">
//                                     <label className="form-label fw-bold d-block">Preview</label>
//                                     <div 
//                                         className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
//                                         style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
//                                     >
//                                         {mediaType === 'photo' ? (
//                                             preview ? (
//                                                 <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                             ) : (
//                                                 <div onClick={() => document.getElementById('mediaInput').click()} style={{cursor:'pointer'}}>
//                                                     <FaCloudUploadAlt size={40} className="text-muted" />
//                                                     <p className="small text-muted">Click to select photo</p>
//                                                 </div>
//                                             )
//                                         ) : (
//                                             <div className="p-3">
//                                                 <FaVideo size={40} className="text-muted mb-2" />
//                                                 <p className="small text-muted">Video link preview not available</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                     {mediaType === 'photo' && (
//                                         <input 
//                                             type="file" 
//                                             id="mediaInput" 
//                                             hidden 
//                                             accept="image/*" 
//                                             onChange={handleFileChange} 
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="text-end mt-4 pt-3 border-top">
//                                 <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }}>
//                                     <FaSave className="me-2" /> PUBLISH TO GALLERY
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddMedia;


// import React, { useState } from 'react';
// import { FaCloudUploadAlt, FaVideo, FaLink, FaSave } from 'react-icons/fa';
// import axios from 'axios'; // Axios install kar lena: npm install axios
// import { addMediaService } from '../API/service.js';
// const AddMedia = () => {
//     const [mediaType, setMediaType] = useState('photo');
//     const [preview, setPreview] = useState(null);
//     const [formData, setFormData] = useState({
//         title: '',
//         category: 'Bridal',
//         videoUrl: '',
//         file: null
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, file: file });
//         setPreview(URL.createObjectURL(file));
//     };

//     // --- API Integration Start ---

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('category', formData.category);
//         data.append('mediaType', mediaType);
//         data.append('videoUrl', formData.videoUrl || '');

//         // Agar photo type hai toh file append karein
//         if (mediaType === 'photo' && formData.file) {
//             data.append('file', formData.file);
//         }

//         try {
//             const res = await addMediaService(data);
//             alert("Success! Media uploaded successfully.");
//             setFormData({
//                 title: '',
//                 category: 'Bridal',
//                 videoUrl: '',
//                 file: null
//             });
//             setPreview(null);
//             setMediaType('photo');

//             // HTML file input ko bhi blank karne ke liye
//             const fileInput = document.getElementById('mediaInput');
//             if (fileInput) {
//                 fileInput.value = '';
//             }
//             // Optional: Form reset kar sakte hain yahan
//         } catch (err) {
//             console.error("Upload Error:", err);
//             const errorMsg = err.response?.data?.message || err.message || "Something went wrong";
//             alert("Error: " + errorMsg);
//         }
//     };
//     // --- API Integration End ---

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10">
//                     <div className="bg-white p-4 rounded shadow-sm border">
//                         <div className="d-flex gap-3 mb-4 justify-content-center">
//                             <button
//                                 onClick={() => setMediaType('photo')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaCloudUploadAlt className="me-2" /> Upload Photo
//                             </button>
//                             <button
//                                 onClick={() => setMediaType('video')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaVideo className="me-2" /> Add Video Link
//                             </button>
//                         </div>

//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Title / Caption</label>
//                                         <input
//                                             type="text"
//                                             name="title"
//                                             className="form-control"
//                                             placeholder="e.g. Stunning Bridal Look"
//                                             value={formData.title} // 👈 Yeh line add karni hai zaroori hai!
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Gallery Category</label>
//                                         <select name="category" className="form-select" onChange={handleChange}>
//                                             <option value="Bridal">Bridal Gallery</option>
//                                             <option value="Party">Party Gallery</option>
//                                             <option value="Studio">Studio Interior</option>
//                                             <option value="Classes">Online Classes</option>
//                                         </select>
//                                     </div>

//                                     {mediaType === 'video' && (
//                                         <div className="mb-3">
//                                             <label className="form-label fw-bold"><FaLink className="me-2" /> Video URL</label>
//                                             <input
//                                                 type="url"
//                                                 name="videoUrl"
//                                                 className="form-control"
//                                                 placeholder="https://www.youtube.com/watch?v=..."
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="col-md-6 text-center">
//                                     <label className="form-label fw-bold d-block">Preview</label>
//                                     <div
//                                         className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
//                                         style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
//                                     >
//                                         {mediaType === 'photo' ? (
//                                             preview ? (
//                                                 <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                             ) : (
//                                                 <div onClick={() => document.getElementById('mediaInput').click()} style={{ cursor: 'pointer' }}>
//                                                     <FaCloudUploadAlt size={40} className="text-muted" />
//                                                     <p className="small text-muted">Click to select photo</p>
//                                                 </div>
//                                             )
//                                         ) : (
//                                             <div className="p-3">
//                                                 <FaVideo size={40} className="text-muted mb-2" />
//                                                 <p className="small text-muted">Video link preview not available</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                     {mediaType === 'photo' && (
//                                         <input
//                                             type="file"
//                                             id="mediaInput"
//                                             hidden
//                                             accept="image/*"
//                                             onChange={handleFileChange}
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="text-end mt-4 pt-3 border-top">
//                                 <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }}>
//                                     <FaSave className="me-2" /> PUBLISH TO GALLERY
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddMedia;

// import React, { useState } from 'react';
// import { FaCloudUploadAlt, FaVideo, FaLink, FaSave } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify'; // 👈 Toast import kiya
// import 'react-toastify/dist/ReactToastify.css'; // 👈 Toast CSS style
// import { addMediaService } from '../API/service.js';

// const AddMedia = () => {
//     const [mediaType, setMediaType] = useState('photo');
//     const [preview, setPreview] = useState(null);
//     const [formData, setFormData] = useState({
//         title: '',
//         category: 'Bridal',
//         videoUrl: '',
//         file: null
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, file: file });
//         if (file) {
//             setPreview(URL.createObjectURL(file));
//         }
//     };

//     // --- API Integration Start ---
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('category', formData.category);
//         data.append('mediaType', mediaType);
//         data.append('videoUrl', formData.videoUrl || '');

//         // Agar photo type hai toh file append karein
//         if (mediaType === 'photo' && formData.file) {
//             data.append('file', formData.file);
//         }

//         try {
//             const res = await addMediaService(data);
            
//             // 👇 Green success toast notification
//             toast.success("Media uploaded successfully!", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//             });

//             // Form Reset
//             setFormData({
//                 title: '',
//                 category: 'Bridal',
//                 videoUrl: '',
//                 file: null
//             });
//             setPreview(null);
//             setMediaType('photo');

//             // HTML file input ko bhi blank karne ke liye
//             const fileInput = document.getElementById('mediaInput');
//             if (fileInput) {
//                 fileInput.value = '';
//             }

//         } catch (err) {
//             console.error("Upload Error:", err);
//             const errorMsg = err.response?.data?.message || err.message || "Something went wrong";
            
//             // 👇 Red error toast notification
//             toast.error("Error: " + errorMsg, {
//                 position: "top-right",
//                 autoClose: 4000,
//             });
//         }
//     };
//     // --- API Integration End ---

//     return (
//         <div className="container-fluid p-0">
//             {/* Toast Container lagana zaroori hai taaki notifications screen par dikhein */}
//             <ToastContainer />

//             <div className="row justify-content-center">
//                 <div className="col-md-10">
//                     <div className="bg-white p-4 rounded shadow-sm border">
//                         <div className="d-flex gap-3 mb-4 justify-content-center">
//                             <button
//                                 type="button"
//                                 onClick={() => setMediaType('photo')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaCloudUploadAlt className="me-2" /> Upload Photo
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={() => setMediaType('video')}
//                                 className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
//                             >
//                                 <FaVideo className="me-2" /> Add Video Link
//                             </button>
//                         </div>

//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Title / Caption</label>
//                                         <input
//                                             type="text"
//                                             name="title"
//                                             className="form-control"
//                                             placeholder="e.g. Stunning Bridal Look"
//                                             value={formData.title} // 👈 Title reset hone ke liye zaroori
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold">Gallery Category</label>
//                                         <select 
//                                             name="category" 
//                                             className="form-select" 
//                                             value={formData.category} // 👈 Category bhi state se bound rahegi
//                                             onChange={handleChange}
//                                         >
//                                             <option value="Bridal">Bridal Gallery</option>
//                                             <option value="Party">Party Gallery</option>
//                                             <option value="Studio">Studio Interior</option>
//                                             <option value="Classes">Online Classes</option>
//                                         </select>
//                                     </div>

//                                     {mediaType === 'video' && (
//                                         <div className="mb-3">
//                                             <label className="form-label fw-bold"><FaLink className="me-2" /> Video URL</label>
//                                             <input
//                                                 type="url"
//                                                 name="videoUrl"
//                                                 className="form-control"
//                                                 placeholder="https://www.youtube.com/watch?v=..."
//                                                 value={formData.videoUrl} // 👈 Video URL reset hone ke liye
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="col-md-6 text-center">
//                                     <label className="form-label fw-bold d-block">Preview</label>
//                                     <div
//                                         className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
//                                         style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
//                                     >
//                                         {mediaType === 'photo' ? (
//                                             preview ? (
//                                                 <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                             ) : (
//                                                 <div onClick={() => document.getElementById('mediaInput').click()} style={{ cursor: 'pointer' }}>
//                                                     <FaCloudUploadAlt size={40} className="text-muted" />
//                                                     <p className="small text-muted">Click to select photo</p>
//                                                 </div>
//                                             )
//                                         ) : (
//                                             <div className="p-3">
//                                                 <FaVideo size={40} className="text-muted mb-2" />
//                                                 <p className="small text-muted">Video link preview not available</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                     {mediaType === 'photo' && (
//                                         <input
//                                             type="file"
//                                             id="mediaInput"
//                                             hidden
//                                             accept="image/*"
//                                             onChange={handleFileChange}
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="text-end mt-4 pt-3 border-top">
//                                 <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }}>
//                                     <FaSave className="me-2" /> PUBLISH TO GALLERY
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddMedia;

import React, { useState } from 'react';
import { FaCloudUploadAlt, FaVideo, FaSave, FaSpinner } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMediaService } from '../API/service.js';

const AddMedia = () => {
    const [mediaType, setMediaType] = useState('photo'); // 'photo' ya 'video'
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        title: '',
        category: 'Bridal',
        file: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, file: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    // Tab switch karne par preview aur file reset karne ke liye
    const handleMediaTypeChange = (type) => {
        setMediaType(type);
        setPreview(null);
        setFormData(prev => ({ ...prev, file: null }));
        const fileInput = document.getElementById('mediaInput');
        if (fileInput) fileInput.value = '';
    };

    // --- API Integration Start ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.file) {
            toast.error(`Kripya ek ${mediaType} select karein!`);
            return;
        }

        setLoading(true);

        const data = new FormData();
        data.append('title', formData.title);
        data.append('category', formData.category);
        data.append('mediaType', mediaType);
        data.append('file', formData.file); // Backend multer me 'file' name se accept hoga

        try {
            const res = await addMediaService(data);
            
            toast.success("Media successfully uploaded!", {
                position: "top-right",
                autoClose: 3000,
            });

            // Form Reset
            setFormData({
                title: '',
                category: 'Bridal',
                file: null
            });
            setPreview(null);
            setMediaType('photo');

            const fileInput = document.getElementById('mediaInput');
            if (fileInput) {
                fileInput.value = '';
            }

        } catch (err) {
            console.error("Upload Error:", err);
            const errorMsg = err.response?.data?.message || err.message || "Something went wrong";
            toast.error("Error: " + errorMsg, {
                position: "top-right",
                autoClose: 4000,
            });
        } finally {
            setLoading(false);
        }
    };
    // --- API Integration End ---

    return (
        <div className="container-fluid p-0">
            <ToastContainer />

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="bg-white p-4 rounded shadow-sm border">
                        {/* Toggle Buttons: Upload Photo / Upload Video */}
                        <div className="d-flex gap-3 mb-4 justify-content-center">
                            <button
                                type="button"
                                onClick={() => handleMediaTypeChange('photo')}
                                className={`btn px-4 py-2 fw-bold ${mediaType === 'photo' ? 'btn-dark' : 'btn-outline-dark'}`}
                            >
                                <FaCloudUploadAlt className="me-2" /> Upload Photo
                            </button>
                            <button
                                type="button"
                                onClick={() => handleMediaTypeChange('video')}
                                className={`btn px-4 py-2 fw-bold ${mediaType === 'video' ? 'btn-dark' : 'btn-outline-dark'}`}
                            >
                                <FaVideo className="me-2" /> Upload Video
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Title / Caption</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="e.g. Stunning Look"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Gallery Category</label>
                                        <select 
                                            name="category" 
                                            className="form-select" 
                                            value={formData.category}
                                            onChange={handleChange}
                                        >
                                            <option value="Bridal">Bridal </option>
                                            <option value="Party">Party</option>
                                            <option value="Studio">Studio </option>
                                            <option value="Classes">Classes</option>
                                            <option value="Classes">Groom</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-6 text-center">
                                    <label className="form-label fw-bold d-block">
                                        {mediaType === 'photo' ? 'Photo Preview' : 'Video Preview'}
                                    </label>
                                    <div
                                        className="border rounded d-flex flex-column align-items-center justify-content-center bg-light shadow-inner"
                                        style={{ height: '200px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                                        onClick={() => document.getElementById('mediaInput').click()}
                                    >
                                        {preview ? (
                                            mediaType === 'photo' ? (
                                                <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <video src={preview} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls />
                                            )
                                        ) : (
                                            <div className="p-3 text-center">
                                                {mediaType === 'photo' ? (
                                                    <>
                                                        <FaCloudUploadAlt size={40} className="text-muted mb-2" />
                                                        <p className="small text-muted mb-0">Click to select photo</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaVideo size={40} className="text-muted mb-2" />
                                                        <p className="small text-muted mb-0">Click to select video file</p>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Dynamic file input (Accepts images or videos based on mediaType) */}
                                    <input
                                        type="file"
                                        id="mediaInput"
                                        hidden
                                        accept={mediaType === 'photo' ? 'image/*' : 'video/*'}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div className="text-end mt-4 pt-3 border-top">
                                <button type="submit" className="btn px-5 text-white fw-bold shadow-sm" style={{ backgroundColor: '#B88A4A' }} disabled={loading}>
                                    {loading ? (
                                        <><FaSpinner className="fa-spin me-2" /> UPLOADING...</>
                                    ) : (
                                        <><FaSave className="me-2" /> PUBLISH {mediaType.toUpperCase()} TO GALLERY</>
                                    )}
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