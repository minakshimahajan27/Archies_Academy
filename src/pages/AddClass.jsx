// import React, { useState } from 'react';
// import { FaLaptopCode, FaClock, FaCalendarAlt, FaSave, FaRupeeSign } from 'react-icons/fa';

// const AddClass = () => {
//     const [preview, setPreview] = useState(null);

//     const handleBannerChange = (e) => {
//         const file = e.target.files[0];
//         if (file) setPreview(URL.createObjectURL(file));
//     };

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
//                     <form>
//                         <div className="row">
//                             {/* Course Details */}
//                             <div className="col-md-7">
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Course Title</label>
//                                     <input type="text" className="form-control" placeholder="e.g. Professional Self Makeup Masterclass" />
//                                 </div>
                                
//                                 <div className="row">
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold"><FaClock className="me-1"/> Duration</label>
//                                         <input type="text" className="form-control" placeholder="e.g. 15 Days" />
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold"><FaRupeeSign className="me-1"/> Course Fees</label>
//                                         <input type="number" className="form-control" placeholder="Price" />
//                                     </div>
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold"><FaCalendarAlt className="me-1"/> Course Validity</label>
//                                     <select className="form-select">
//                                         <option>Lifetime Access</option>
//                                         <option>6 Months</option>
//                                         <option>1 Year</option>
//                                     </select>
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">What will they learn? (Brief)</label>
//                                     <textarea className="form-control" rows="3" placeholder="Course highlights..."></textarea>
//                                 </div>
//                             </div>

//                             {/* Banner Upload */}
//                             <div className="col-md-5 text-center ps-md-4 border-start">
//                                 <label className="form-label fw-bold d-block">Course Banner/Poster</label>
//                                 <div 
//                                     className="border rounded bg-light d-flex align-items-center justify-content-center"
//                                     style={{ height: '220px', cursor: 'pointer', overflow: 'hidden' }}
//                                     onClick={() => document.getElementById('classBanner').click()}
//                                 >
//                                     {preview ? (
//                                         <img src={preview} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                     ) : (
//                                         <div className="text-muted">
//                                             <FaLaptopCode size={40} className="mb-2" />
//                                             <p className="small">Click to upload poster</p>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <input type="file" id="classBanner" hidden onChange={handleBannerChange} />
//                                 <button className="btn w-100 text-white fw-bold py-2 mt-4" style={{ backgroundColor: '#B88A4A' }}>
//                                     <FaSave className="me-2" /> CREATE COURSE
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddClass;


// import React, { useState } from 'react';
// import { FaLaptopCode, FaClock, FaCalendarAlt, FaSave, FaRupeeSign } from 'react-icons/fa';

// const AddClass = () => {
//     // Form fields ke liye states
//     const [title, setTitle] = useState('');
//     const [duration, setDuration] = useState('');
//     const [price, setPrice] = useState('');
//     const [validity, setValidity] = useState('Lifetime Access');
//     const [description, setDescription] = useState('');
//     const [file, setFile] = useState(null);
//     const [preview, setPreview] = useState(null);
    
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState({ text: '', type: '' });

//     const handleBannerChange = (e) => {
//         const selectedFile = e.target.files[0];
//         if (selectedFile) {
//             setFile(selectedFile);
//             setPreview(URL.createObjectURL(selectedFile));
//         }
//     };

//     // Form Submit Handler with API Integration
//     const handleSubmit = async (e) => {
//         e.preventDefault(); // <-- Page reload hone aur bahar fekne se rokayega!
//         setLoading(true);
//         setMessage({ text: '', type: '' });

//         try {
//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('duration', duration);
//             formData.append('price', price);
//             formData.append('validity', validity);
//             formData.append('description', description);
//             if (file) {
//                 formData.append('file', file); // Multer upload.single('file') ke sath match karega
//             }

//             const response = await fetch('http://localhost:5000/api/admin/courses/add', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const data = await response.json();

//             if (data.success) {
//                 setMessage({ text: 'Course created successfully!', type: 'success' });
//                 // Form reset kar rahe hain
//                 setTitle('');
//                 setDuration('');
//                 setPrice('');
//                 setValidity('Lifetime Access');
//                 setDescription('');
//                 setFile(null);
//                 setPreview(null);
//             } else {
//                 setMessage({ text: data.message || 'Failed to create course', type: 'danger' });
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setMessage({ text: 'Server error. Please check your backend connection.', type: 'danger' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
                    
//                     {message.text && (
//                         <div className={`alert alert-${message.type} text-center`} role="alert">
//                             {message.text}
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit}>
//                         <div className="row">
//                             {/* Course Details */}
//                             <div className="col-md-7">
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Course Title</label>
//                                     <input 
//                                         type="text" 
//                                         className="form-control" 
//                                         placeholder="e.g. Professional Self Makeup Masterclass" 
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                         required 
//                                     />
//                                 </div>
                                
//                                 <div className="row">
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold"><FaClock className="me-1"/> Duration</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control" 
//                                             placeholder="e.g. 15 Days" 
//                                             value={duration}
//                                             onChange={(e) => setDuration(e.target.value)}
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold"><FaRupeeSign className="me-1"/> Course Fees</label>
//                                         <input 
//                                             type="number" 
//                                             className="form-control" 
//                                             placeholder="Price" 
//                                             value={price}
//                                             onChange={(e) => setPrice(e.target.value)}
//                                             required 
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold"><FaCalendarAlt className="me-1"/> Course Validity</label>
//                                     <select 
//                                         className="form-select"
//                                         value={validity}
//                                         onChange={(e) => setValidity(e.target.value)}
//                                     >
//                                         <option value="Lifetime Access">Lifetime Access</option>
//                                         <option value="6 Months">6 Months</option>
//                                         <option value="1 Year">1 Year</option>
//                                     </select>
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">What will they learn? (Brief)</label>
//                                     <textarea 
//                                         className="form-control" 
//                                         rows="3" 
//                                         placeholder="Course highlights..."
//                                         value={description}
//                                         onChange={(e) => setDescription(e.target.value)}
//                                         required
//                                     ></textarea>
//                                 </div>
//                             </div>

//                             {/* Banner Upload */}
//                             <div className="col-md-5 text-center ps-md-4 border-start">
//                                 <label className="form-label fw-bold d-block">Course Banner/Poster</label>
//                                 <div 
//                                     className="border rounded bg-light d-flex align-items-center justify-content-center"
//                                     style={{ height: '220px', cursor: 'pointer', overflow: 'hidden' }}
//                                     onClick={() => document.getElementById('classBanner').click()}
//                                 >
//                                     {preview ? (
//                                         <img src={preview} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                     ) : (
//                                         <div className="text-muted">
//                                             <FaLaptopCode size={40} className="mb-2" />
//                                             <p className="small">Click to upload poster</p>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <input type="file" id="classBanner" hidden onChange={handleBannerChange} required />
                                
//                                 <button 
//                                     type="submit" 
//                                     className="btn w-100 text-white fw-bold py-2 mt-4" 
//                                     style={{ backgroundColor: '#B88A4A' }}
//                                     disabled={loading}
//                                 >
//                                     <FaSave className="me-2" /> {loading ? 'CREATING...' : 'CREATE COURSE'}
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddClass;

import React, { useState, useRef, useEffect } from 'react';
import { FaLaptopCode, FaClock, FaCalendarAlt, FaSave, FaRupeeSign, FaChevronDown } from 'react-icons/fa';

const AddClass = () => {
    // Form fields ke liye states
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [validity, setValidity] = useState('Lifetime Access');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    // Custom dropdown state & ref
    const [openValidity, setOpenValidity] = useState(false);
    const validityRef = useRef(null);

    const validityOptions = ['Lifetime Access', '6 Months', '1 Year'];

    // Bahar click karne par dropdown close ho jaye
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (validityRef.current && !validityRef.current.contains(event.target)) {
                setOpenValidity(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleBannerChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    // Form Submit Handler with API Integration
    const handleSubmit = async (e) => {
        e.preventDefault(); // <-- Page reload hone aur bahar fekne se rokayega!
        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('duration', duration);
            formData.append('price', price);
            formData.append('validity', validity);
            formData.append('description', description);
            if (file) {
                formData.append('file', file); // Multer upload.single('file') ke sath match karega
            }

            const response = await fetch('http://localhost:5000/api/admin/courses/add', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ text: 'Course created successfully!', type: 'success' });
                // Form reset kar rahe hain
                setTitle('');
                setDuration('');
                setPrice('');
                setValidity('Lifetime Access');
                setDescription('');
                setFile(null);
                setPreview(null);
            } else {
                setMessage({ text: data.message || 'Failed to create course', type: 'danger' });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'Server error. Please check your backend connection.', type: 'danger' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
                    
                    {message.text && (
                        <div className={`alert alert-${message.type} text-center`} role="alert">
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Course Details */}
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Course Title</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="e.g. Professional Self Makeup Masterclass" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required 
                                    />
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold"><FaClock className="me-1"/> Duration</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="e.g. 15 Days" 
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold"><FaRupeeSign className="me-1"/> Course Fees</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Price" 
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required 
                                        />
                                    </div>
                                </div>

                                {/* Custom Validity Dropdown */}
                                <div className="mb-3 position-relative" ref={validityRef}>
                                    <label className="form-label fw-bold"><FaCalendarAlt className="me-1"/> Course Validity</label>
                                    <div 
                                        className="form-control d-flex justify-content-between align-items-center"
                                        style={{ 
                                            cursor: 'pointer', 
                                            borderColor: openValidity ? '#B88A4A' : '#ced4da',
                                            boxShadow: openValidity ? '0 0 0 0.25rem rgba(184, 138, 74, 0.25)' : 'none'
                                        }}
                                        onClick={() => setOpenValidity(!openValidity)}
                                    >
                                        <span>{validity}</span>
                                        <FaChevronDown size={12} style={{ color: '#B88A4A', transform: openValidity ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                                    </div>

                                    {openValidity && (
                                        <div className="position-absolute w-100 bg-white border rounded-3 shadow-sm mt-1 overflow-hidden" style={{ zIndex: 1000 }}>
                                            {validityOptions.map((opt) => (
                                                <div 
                                                    key={opt}
                                                    className="px-3 py-2"
                                                    style={{ 
                                                        cursor: 'pointer', 
                                                        backgroundColor: validity === opt ? '#fdf8f2' : 'transparent',
                                                        color: validity === opt ? '#B88A4A' : '#333',
                                                        fontWeight: validity === opt ? 'bold' : 'normal',
                                                        transition: '0.2s'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#B88A4A';
                                                        e.currentTarget.style.color = '#ffffff';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = validity === opt ? '#fdf8f2' : 'transparent';
                                                        e.currentTarget.style.color = validity === opt ? '#B88A4A' : '#333';
                                                    }}
                                                    onClick={() => {
                                                        setValidity(opt);
                                                        setOpenValidity(false);
                                                    }}
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">What will they learn?</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="3" 
                                        placeholder="Course highlights..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
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
                                <input type="file" id="classBanner" hidden onChange={handleBannerChange} required />
                                
                                <button 
                                    type="submit" 
                                    className="btn w-100 text-white fw-bold py-2 mt-4" 
                                    style={{ backgroundColor: '#B88A4A' }}
                                    disabled={loading}
                                >
                                    <FaSave className="me-2" /> {loading ? 'CREATING...' : 'CREATE COURSE'}
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