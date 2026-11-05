

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaCrown, FaTrash, FaEdit, FaPlus, FaTimes } from 'react-icons/fa';

// const FashionShowForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         eventDate: '',
//         venue: ''
//     });

//     const [categories, setCategories] = useState([
//         { categoryName: 'Model Entry', fee: '' },
//         { categoryName: 'Makeup Artist', fee: '' }
//     ]);

//     const [bannerFile, setBannerFile] = useState(null);
//     const [qrFile, setQrFile] = useState(null);
//     const [bannerPreview, setBannerPreview] = useState('');
//     const [qrPreview, setQrPreview] = useState('');
    
//     const [showList, setShowList] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [fetching, setFetching] = useState(true);
//     const [message, setMessage] = useState({ type: '', text: '' });

//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditId, setCurrentEditId] = useState(null);

//     const [activeModal, setActiveModal] = useState(null);
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const fetchFashionShows = async () => {
//         try {
//             setFetching(true);
//             const res = await axios.get('https://archies-academy.onrender.com/api/admin/fashionshow/all');
//             const data = res.data.data || res.data;
//             if (Array.isArray(data)) {
//                 setShowList(data);
//             }
//         } catch (err) {
//             console.error("Error fetching fashion shows:", err);
//         } finally {
//             setFetching(false);
//         }
//     };

//     useEffect(() => {
//         fetchFashionShows();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleCategoryChange = (index, field, value) => {
//         const updated = [...categories];
//         updated[index][field] = value;
//         setCategories(updated);
//     };

//     const addCategory = () => {
//         setCategories([...categories, { categoryName: '', fee: '' }]);
//     };

//     const removeCategory = (index) => {
//         if (categories.length === 1) return;
//         setCategories(categories.filter((_, i) => i !== index));
//     };

//     const handleBannerChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setBannerFile(file);
//             setBannerPreview(URL.createObjectURL(file));
//         }
//     };

//     const handleQrChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setQrFile(file);
//             setQrPreview(URL.createObjectURL(file));
//         }
//     };

//     const handleEditClick = (item) => {
//         setIsEditing(true);
//         setCurrentEditId(item._id);
//         setFormData({
//             title: item.title || '',
//             description: item.description || '',
//             eventDate: item.eventDate ? item.eventDate.slice(0, 16) : '',
//             venue: item.venue || ''
//         });
//         setCategories(item.categories && item.categories.length > 0 ? item.categories : [{ categoryName: 'Model Entry', fee: '' }]);
//         setBannerPreview(item.banner || '');
//         setQrPreview(item.qrCode || '');
//         setBannerFile(null);
//         setQrFile(null);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleCancelEdit = () => {
//         setIsEditing(false);
//         setCurrentEditId(null);
//         setFormData({ title: '', description: '', eventDate: '', venue: '' });
//         setCategories([{ categoryName: 'Model Entry', fee: '' }, { categoryName: 'Makeup Artist', fee: '' }]);
//         setBannerFile(null);
//         setQrFile(null);
//         setBannerPreview('');
//         setQrPreview('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMessage({ type: '', text: '' });

//         try {
//             const data = new FormData();
//             data.append('title', formData.title);
//             data.append('description', formData.description);
//             data.append('eventDate', formData.eventDate);
//             data.append('venue', formData.venue);
//             data.append('categories', JSON.stringify(categories));

//             if (bannerFile) data.append('banner', bannerFile);
//             if (qrFile) data.append('qrCode', qrFile);

//             if (isEditing) {
//                 await axios.put(`https://archies-academy.onrender.com/api/admin/fashionshow/${currentEditId}`, data, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 setMessage({ type: 'success', text: 'Fashion Show event updated successfully!' });
//             } else {
//                 await axios.post('https://archies-academy.onrender.com/api/admin/fashionshow/create', data, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 setMessage({ type: 'success', text: 'Fashion Show event published successfully!' });
//             }

//             handleCancelEdit();
//             fetchFashionShows();
//         } catch (err) {
//             console.error("Error saving fashion show:", err);
//             setMessage({ type: 'danger', text: err.response?.data?.message || 'Operation failed. Please try again.' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm("Are you sure you want to delete this fashion show event?")) return;
//         try {
//             await axios.delete(`https://archies-academy.onrender.com/api/admin/fashionshow/${id}`);
//             fetchFashionShows();
//         } catch (err) {
//             console.error("Error deleting item:", err);
//         }
//     };

//     return (
//         <div className="container-fluid px-0">
//             <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
//                 <div className="d-flex align-items-center mb-4 pb-3 border-bottom gap-3">
//                     <div className="p-3 rounded-3 text-white" style={{ backgroundColor: '#B88A4A' }}>
//                         <FaCrown size={22} />
//                     </div>
//                     <div>
//                         <h4 className="fw-bold mb-1" style={{ color: '#1e1e1e' }}>
//                             {isEditing ? 'Edit Fashion Show Event' : 'Fashion Show Event Manager'}
//                         </h4>
//                         <p className="text-muted small mb-0">
//                             {isEditing ? 'Update existing event details.' : 'Upload banner, QR code, and category-wise dynamic registration fees.'}
//                         </p>
//                     </div>
//                 </div>

//                 {message.text && (
//                     <div className={`alert alert-${message.type} rounded-3 py-2 small mb-4`} role="alert">
//                         {message.text}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                     <div className="row g-3">
//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Event Title</label>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 className="form-control rounded-3"
//                                 placeholder="e.g., Archies Grand Fashion Fiesta 2026"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Event Date & Time</label>
//                             <input
//                                 type="datetime-local"
//                                 name="eventDate"
//                                 className="form-control rounded-3"
//                                 value={formData.eventDate}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12">
//                             <label className="form-label small fw-bold text-dark">Venue</label>
//                             <input
//                                 type="text"
//                                 name="venue"
//                                 className="form-control rounded-3"
//                                 placeholder="e.g., Indore Marriott Hotel, MP"
//                                 value={formData.venue}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12 border p-3 rounded-3 bg-light">
//                             <div className="d-flex justify-content-between align-items-center mb-3">
//                                 <label className="form-label small fw-bold text-dark mb-0">Category-Wise Fees</label>
//                                 <button type="button" className="btn btn-sm btn-outline-dark rounded-3" onClick={addCategory}>
//                                     <FaPlus size={10} className="me-1" /> Add Category
//                                 </button>
//                             </div>

//                             {categories.map((cat, idx) => (
//                                 <div className="row g-2 align-items-center mb-2" key={idx}>
//                                     <div className="col-md-6">
//                                         <input
//                                             type="text"
//                                             className="form-control form-control-sm rounded-3"
//                                             placeholder="Category Name (e.g. Model / Makeup Artist)"
//                                             value={cat.categoryName}
//                                             onChange={(e) => handleCategoryChange(idx, 'categoryName', e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-md-5">
//                                         <input
//                                             type="number"
//                                             className="form-control form-control-sm rounded-3"
//                                             placeholder="Fee Amount (₹)"
//                                             value={cat.fee}
//                                             onChange={(e) => handleCategoryChange(idx, 'fee', e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-md-1 text-end">
//                                         {categories.length > 1 && (
//                                             <button type="button" className="btn btn-sm btn-danger rounded-3" onClick={() => removeCategory(idx)}>
//                                                 <FaTrash size={12} />
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="col-12">
//                             <label className="form-label small fw-bold text-dark">Event Description</label>
//                             <textarea
//                                 name="description"
//                                 rows="3"
//                                 className="form-control rounded-3"
//                                 placeholder="Write rules, dress codes, or show details..."
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 required
//                             ></textarea>
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Upload Event Banner Image</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="form-control rounded-3"
//                                 onChange={handleBannerChange}
//                             />
//                             {bannerPreview && (
//                                 <div className="mt-2 position-relative d-inline-block">
//                                     <img src={bannerPreview} alt="Banner Preview" className="rounded-3 border shadow-sm" style={{ width: '100px', height: '60px', objectFit: 'cover' }} />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Upload Payment QR Code</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="form-control rounded-3"
//                                 onChange={handleQrChange}
//                             />
//                             {qrPreview && (
//                                 <div className="mt-2 position-relative d-inline-block">
//                                     <img src={qrPreview} alt="QR Preview" className="rounded-3 border shadow-sm" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="col-12 mt-4 d-flex justify-content-end gap-2">
//                             {isEditing && (
//                                 <button
//                                     type="button"
//                                     className="btn btn-secondary px-4 py-2 rounded-3 fw-bold shadow-sm"
//                                     onClick={handleCancelEdit}
//                                 >
//                                     Cancel
//                                 </button>
//                             )}
//                             <button
//                                 type="submit"
//                                 className="btn text-white px-4 py-2 rounded-3 fw-bold shadow-sm"
//                                 style={{ backgroundColor: '#B88A4A' }}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Saving...' : isEditing ? 'Update Event' : 'Publish Fashion Show Event'}
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
//                 <h5 className="fw-bold text-dark mb-3">Manage Fashion Show Events</h5>
//                 {fetching ? (
//                     <div className="text-center py-4">
//                         <div className="spinner-border text-warning spinner-border-sm" role="status"></div>
//                     </div>
//                 ) : showList.length === 0 ? (
//                     <p className="text-muted small text-center py-3 mb-0">No fashion show events created yet.</p>
//                 ) : (
//                     <div className="row g-3">
//                         {showList.map((item) => (
//                             <div className="col-md-6 col-lg-4" key={item._id}>
//                                 <div className="card border shadow-none rounded-4 h-100 overflow-hidden">
//                                     {item.banner && (
//                                         <img src={item.banner} alt={item.title} className="w-100" style={{ height: '140px', objectFit: 'cover' }} />
//                                     )}
//                                     <div className="card-body p-3 d-flex flex-column justify-content-between">
//                                         <div>
//                                             <h6 className="fw-bold text-dark mb-1">{item.title}</h6>
//                                             <p className="text-muted small mb-2 text-truncate">{item.description}</p>
//                                             <div className="small text-secondary mb-2">
//                                                 <div>📅 {new Date(item.eventDate).toLocaleDateString()}</div>
//                                                 <div>📍 {item.venue}</div>
//                                             </div>
//                                         </div>
//                                         <div className="d-flex gap-2 mt-2">
//                                             <button
//                                                 className="btn btn-sm text-white rounded-3 fw-bold flex-grow-1"
//                                                 style={{ backgroundColor: '#B88A4A', fontSize: '12px' }}
//                                                 onClick={() => {
//                                                     setActiveModal(item);
//                                                     setSelectedCategory(item.categories?.[0] || null);
//                                                 }}
//                                             >
//                                                 Preview
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-dark rounded-3"
//                                                 onClick={() => handleEditClick(item)}
//                                                 title="Edit Event"
//                                             >
//                                                 <FaEdit size={12} />
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-danger rounded-3"
//                                                 onClick={() => handleDelete(item._id)}
//                                                 title="Delete Event"
//                                             >
//                                                 <FaTrash size={12} />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {activeModal && (
//                 <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75" style={{ zIndex: 1100 }}>
//                     <div className="bg-white rounded-4 shadow-lg p-4 position-relative mx-3 overflow-y-auto" style={{ maxWidth: '460px', width: '100%', maxHeight: '90vh' }}>
//                         <button
//                             className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-none border-0"
//                             onClick={() => setActiveModal(null)}
//                         >
//                             <FaTimes size={16} />
//                         </button>

//                         <div className="text-center mb-3">
//                             <span className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2">✨ Grand Event</span>
//                             <h4 className="fw-bold text-dark mb-1">{activeModal.title}</h4>
//                             <p className="text-muted small mb-0">{activeModal.description}</p>
//                         </div>

//                         {activeModal.banner && (
//                             <img src={activeModal.banner} alt="Banner" className="w-100 rounded-3 mb-3 shadow-sm" style={{ height: '170px', objectFit: 'cover' }} />
//                         )}

//                         {activeModal.categories && activeModal.categories.length > 0 && (
//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-dark mb-1">Select Registration Category:</label>
//                                 <div className="d-flex flex-column gap-2">
//                                     {activeModal.categories.map((cat, idx) => (
//                                         <div
//                                             key={idx}
//                                             className={`p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center ${selectedCategory?.categoryName === cat.categoryName ? 'border-warning bg-warning bg-opacity-10' : 'bg-light'}`}
//                                             onClick={() => setSelectedCategory(cat)}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <span className="fw-semibold small text-dark">{cat.categoryName}</span>
//                                             <span className="fw-bold" style={{ color: '#B88A4A' }}>₹{cat.fee}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded-3 mb-3 border">
//                             <div>
//                                 <small className="text-muted d-block">Scan & Pay Selected Fee</small>
//                                 <span className="fw-bold text-dark fs-5">
//                                     ₹{selectedCategory ? selectedCategory.fee : activeModal.categories?.[0]?.fee || 0}
//                                 </span>
//                             </div>
//                             {activeModal.qrCode && (
//                                 <img src={activeModal.qrCode} alt="QR" className="rounded border bg-white p-1" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             )}
//                         </div>

//                         <button
//                             className="btn w-100 text-white py-2.5 rounded-3 fw-bold shadow-sm"
//                             style={{ backgroundColor: '#B88A4A' }}
//                             onClick={() => {
//                                 alert(`Proceeding to Register for ${selectedCategory?.categoryName || 'Selected Category'} with fee ₹${selectedCategory?.fee}`);
//                                 setActiveModal(null);
//                             }}
//                         >
//                             Proceed to Registration
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FashionShowForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaCrown, FaTrash, FaEdit, FaPlus, FaTimes } from 'react-icons/fa';

// const FashionShowForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         eventDate: '',
//         venue: ''
//     });

//     const [categories, setCategories] = useState([
//         { categoryName: 'Model Entry', fee: '' },
//         { categoryName: 'Makeup Artist', fee: '' }
//     ]);

//     const [bannerFile, setBannerFile] = useState(null);
//     const [qrFile, setQrFile] = useState(null);
//     const [bannerPreview, setBannerPreview] = useState('');
//     const [qrPreview, setQrPreview] = useState('');
    
//     const [showList, setShowList] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [fetching, setFetching] = useState(true);
//     const [message, setMessage] = useState({ type: '', text: '' });

//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditId, setCurrentEditId] = useState(null);

//     const [activeModal, setActiveModal] = useState(null);
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const fetchFashionShows = async () => {
//         try {
//             setFetching(true);
//             const res = await axios.get('https://archies-academy.onrender.com/api/admin/fashionshow/all');
//             const data = res.data.data || res.data;
//             if (Array.isArray(data)) {
//                 setShowList(data);
//             }
//         } catch (err) {
//             console.error("Error fetching fashion shows:", err);
//         } finally {
//             setFetching(false);
//         }
//     };

//     useEffect(() => {
//         fetchFashionShows();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleCategoryChange = (index, field, value) => {
//         const updated = [...categories];
//         updated[index][field] = value;
//         setCategories(updated);
//     };

//     const addCategory = () => {
//         setCategories([...categories, { categoryName: '', fee: '' }]);
//     };

//     const removeCategory = (index) => {
//         if (categories.length === 1) return;
//         setCategories(categories.filter((_, i) => i !== index));
//     };

//     const handleBannerChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setBannerFile(file);
//             setBannerPreview(URL.createObjectURL(file));
//         }
//     };

//     const handleQrChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setQrFile(file);
//             setQrPreview(URL.createObjectURL(file));
//         }
//     };

//     const handleEditClick = (item) => {
//         setIsEditing(true);
//         setCurrentEditId(item._id);
//         setFormData({
//             title: item.title || '',
//             description: item.description || '',
//             eventDate: item.eventDate ? item.eventDate.slice(0, 16) : '',
//             venue: item.venue || ''
//         });
//         setCategories(item.categories && item.categories.length > 0 ? item.categories : [{ categoryName: 'Model Entry', fee: '' }]);
//         setBannerPreview(item.banner || '');
//         setQrPreview(item.qrCode || '');
//         setBannerFile(null);
//         setQrFile(null);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleCancelEdit = () => {
//         setIsEditing(false);
//         setCurrentEditId(null);
//         setFormData({ title: '', description: '', eventDate: '', venue: '' });
//         setCategories([{ categoryName: 'Model Entry', fee: '' }, { categoryName: 'Makeup Artist', fee: '' }]);
//         setBannerFile(null);
//         setQrFile(null);
//         setBannerPreview('');
//         setQrPreview('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMessage({ type: '', text: '' });

//         try {
//             const data = new FormData();
//             data.append('title', formData.title);
//             data.append('description', formData.description);
//             data.append('eventDate', formData.eventDate);
//             data.append('venue', formData.venue);
//             data.append('categories', JSON.stringify(categories));

//             if (bannerFile) data.append('banner', bannerFile);
//             if (qrFile) data.append('qrCode', qrFile);

//             if (isEditing) {
//                 await axios.put(`https://archies-academy.onrender.com/api/admin/fashionshow/update/${currentEditId}`, data, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 setMessage({ type: 'success', text: 'Fashion Show event updated successfully!' });
//             } else {
//                 await axios.post('https://archies-academy.onrender.com/api/admin/fashionshow/create', data, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 setMessage({ type: 'success', text: 'Fashion Show event published successfully!' });
//             }

//             handleCancelEdit();
//             fetchFashionShows();
//         } catch (err) {
//             console.error("Error saving fashion show:", err);
//             setMessage({ type: 'danger', text: err.response?.data?.message || 'Operation failed. Please try again.' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm("Are you sure you want to delete this fashion show event?")) return;
//         try {
//             await axios.delete(`https://archies-academy.onrender.com/api/admin/fashionshow/delete/${id}`);
//             fetchFashionShows();
//         } catch (err) {
//             console.error("Error deleting item:", err);
//         }
//     };

//     return (
//         <div className="container-fluid px-0">
//             <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
//                 <div className="d-flex align-items-center mb-4 pb-3 border-bottom gap-3">
//                     <div className="p-3 rounded-3 text-white" style={{ backgroundColor: '#B88A4A' }}>
//                         <FaCrown size={22} />
//                     </div>
//                     <div>
//                         <h4 className="fw-bold mb-1" style={{ color: '#1e1e1e' }}>
//                             {isEditing ? 'Edit Fashion Show Event' : 'Fashion Show Event Manager'}
//                         </h4>
//                         <p className="text-muted small mb-0">
//                             {isEditing ? 'Update existing event details.' : 'Upload banner, QR code, and category-wise dynamic registration fees.'}
//                         </p>
//                     </div>
//                 </div>

//                 {message.text && (
//                     <div className={`alert alert-${message.type} rounded-3 py-2 small mb-4`} role="alert">
//                         {message.text}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                     <div className="row g-3">
//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Event Title</label>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 className="form-control rounded-3"
//                                 placeholder="e.g., Archies Grand Fashion Fiesta 2026"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Event Date & Time</label>
//                             <input
//                                 type="datetime-local"
//                                 name="eventDate"
//                                 className="form-control rounded-3"
//                                 value={formData.eventDate}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12">
//                             <label className="form-label small fw-bold text-dark">Venue</label>
//                             <input
//                                 type="text"
//                                 name="venue"
//                                 className="form-control rounded-3"
//                                 placeholder="e.g., Indore Marriott Hotel, MP"
//                                 value={formData.venue}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12 border p-3 rounded-3 bg-light">
//                             <div className="d-flex justify-content-between align-items-center mb-3">
//                                 <label className="form-label small fw-bold text-dark mb-0">Category-Wise Fees</label>
//                                 <button type="button" className="btn btn-sm btn-outline-dark rounded-3" onClick={addCategory}>
//                                     <FaPlus size={10} className="me-1" /> Add Category
//                                 </button>
//                             </div>

//                             {categories.map((cat, idx) => (
//                                 <div className="row g-2 align-items-center mb-2" key={idx}>
//                                     <div className="col-md-6">
//                                         <input
//                                             type="text"
//                                             className="form-control form-control-sm rounded-3"
//                                             placeholder="Category Name (e.g. Model / Makeup Artist)"
//                                             value={cat.categoryName}
//                                             onChange={(e) => handleCategoryChange(idx, 'categoryName', e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-md-5">
//                                         <input
//                                             type="number"
//                                             className="form-control form-control-sm rounded-3"
//                                             placeholder="Fee Amount (₹)"
//                                             value={cat.fee}
//                                             onChange={(e) => handleCategoryChange(idx, 'fee', e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-md-1 text-end">
//                                         {categories.length > 1 && (
//                                             <button type="button" className="btn btn-sm btn-danger rounded-3" onClick={() => removeCategory(idx)}>
//                                                 <FaTrash size={12} />
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="col-12">
//                             <label className="form-label small fw-bold text-dark">Event Description</label>
//                             <textarea
//                                 name="description"
//                                 rows="3"
//                                 className="form-control rounded-3"
//                                 placeholder="Write rules, dress codes, or show details..."
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 required
//                             ></textarea>
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Upload Event Banner Image</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="form-control rounded-3"
//                                 onChange={handleBannerChange}
//                             />
//                             {bannerPreview && (
//                                 <div className="mt-2 position-relative d-inline-block">
//                                     <img src={bannerPreview} alt="Banner Preview" className="rounded-3 border shadow-sm" style={{ width: '100px', height: '60px', objectFit: 'cover' }} />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label small fw-bold text-dark">Upload Payment QR Code</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="form-control rounded-3"
//                                 onChange={handleQrChange}
//                             />
//                             {qrPreview && (
//                                 <div className="mt-2 position-relative d-inline-block">
//                                     <img src={qrPreview} alt="QR Preview" className="rounded-3 border shadow-sm" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="col-12 mt-4 d-flex justify-content-end gap-2">
//                             {isEditing && (
//                                 <button
//                                     type="button"
//                                     className="btn btn-secondary px-4 py-2 rounded-3 fw-bold shadow-sm"
//                                     onClick={handleCancelEdit}
//                                 >
//                                     Cancel
//                                 </button>
//                             )}
//                             <button
//                                 type="submit"
//                                 className="btn text-white px-4 py-2 rounded-3 fw-bold shadow-sm"
//                                 style={{ backgroundColor: '#B88A4A' }}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Saving...' : isEditing ? 'Update Event' : 'Publish Fashion Show Event'}
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
//                 <h5 className="fw-bold text-dark mb-3">Manage Fashion Show Events</h5>
//                 {fetching ? (
//                     <div className="text-center py-4">
//                         <div className="spinner-border text-warning spinner-border-sm" role="status"></div>
//                     </div>
//                 ) : showList.length === 0 ? (
//                     <p className="text-muted small text-center py-3 mb-0">No fashion show events created yet.</p>
//                 ) : (
//                     <div className="row g-3">
//                         {showList.map((item) => (
//                             <div className="col-md-6 col-lg-4" key={item._id}>
//                                 <div className="card border shadow-none rounded-4 h-100 overflow-hidden">
//                                     {item.banner && (
//                                         <img src={item.banner} alt={item.title} className="w-100" style={{ height: '140px', objectFit: 'cover' }} />
//                                     )}
//                                     <div className="card-body p-3 d-flex flex-column justify-content-between">
//                                         <div>
//                                             <h6 className="fw-bold text-dark mb-1">{item.title}</h6>
//                                             <p className="text-muted small mb-2 text-truncate">{item.description}</p>
//                                             <div className="small text-secondary mb-2">
//                                                 <div>📅 {new Date(item.eventDate).toLocaleDateString()}</div>
//                                                 <div>📍 {item.venue}</div>
//                                             </div>
//                                         </div>
//                                         <div className="d-flex gap-2 mt-2">
//                                             <button
//                                                 className="btn btn-sm text-white rounded-3 fw-bold flex-grow-1"
//                                                 style={{ backgroundColor: '#B88A4A', fontSize: '12px' }}
//                                                 onClick={() => {
//                                                     setActiveModal(item);
//                                                     setSelectedCategory(item.categories?.[0] || null);
//                                                 }}
//                                             >
//                                                 Preview
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-dark rounded-3"
//                                                 onClick={() => handleEditClick(item)}
//                                                 title="Edit Event"
//                                             >
//                                                 <FaEdit size={12} />
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-danger rounded-3"
//                                                 onClick={() => handleDelete(item._id)}
//                                                 title="Delete Event"
//                                             >
//                                                 <FaTrash size={12} />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {activeModal && (
//                 <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75" style={{ zIndex: 1100 }}>
//                     <div className="bg-white rounded-4 shadow-lg p-4 position-relative mx-3 overflow-y-auto" style={{ maxWidth: '460px', width: '100%', maxHeight: '90vh' }}>
//                         <button
//                             className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-none border-0"
//                             onClick={() => setActiveModal(null)}
//                         >
//                             <FaTimes size={16} />
//                         </button>

//                         <div className="text-center mb-3">
//                             <span className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2">✨ Grand Event</span>
//                             <h4 className="fw-bold text-dark mb-1">{activeModal.title}</h4>
//                             <p className="text-muted small mb-0">{activeModal.description}</p>
//                         </div>

//                         {activeModal.banner && (
//                             <img src={activeModal.banner} alt="Banner" className="w-100 rounded-3 mb-3 shadow-sm" style={{ height: '170px', objectFit: 'cover' }} />
//                         )}

//                         {activeModal.categories && activeModal.categories.length > 0 && (
//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-dark mb-1">Select Registration Category:</label>
//                                 <div className="d-flex flex-column gap-2">
//                                     {activeModal.categories.map((cat, idx) => (
//                                         <div
//                                             key={idx}
//                                             className={`p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center ${selectedCategory?.categoryName === cat.categoryName ? 'border-warning bg-warning bg-opacity-10' : 'bg-light'}`}
//                                             onClick={() => setSelectedCategory(cat)}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <span className="fw-semibold small text-dark">{cat.categoryName}</span>
//                                             <span className="fw-bold" style={{ color: '#B88A4A' }}>₹{cat.fee}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded-3 mb-3 border">
//                             <div>
//                                 <small className="text-muted d-block">Scan & Pay Selected Fee</small>
//                                 <span className="fw-bold text-dark fs-5">
//                                     ₹{selectedCategory ? selectedCategory.fee : activeModal.categories?.[0]?.fee || 0}
//                                 </span>
//                             </div>
//                             {activeModal.qrCode && (
//                                 <img src={activeModal.qrCode} alt="QR" className="rounded border bg-white p-1" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
//                             )}
//                         </div>

//                         <button
//                             className="btn w-100 text-white py-2.5 rounded-3 fw-bold shadow-sm"
//                             style={{ backgroundColor: '#B88A4A' }}
//                             onClick={() => {
//                                 alert(`Proceeding to Register for ${selectedCategory?.categoryName || 'Selected Category'} with fee ₹${selectedCategory?.fee}`);
//                                 setActiveModal(null);
//                             }}
//                         >
//                             Proceed to Registration
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FashionShowForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCrown, FaTrash, FaEdit, FaPlus, FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaImage, FaQrcode } from 'react-icons/fa';

const FashionShowForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        eventDate: '',
        venue: ''
    });

    const [categories, setCategories] = useState([
        { categoryName: 'Model Entry', fee: '' },
        { categoryName: 'Makeup Artist', fee: '' }
    ]);

    const [bannerFile, setBannerFile] = useState(null);
    const [qrFile, setQrFile] = useState(null);
    const [bannerPreview, setBannerPreview] = useState('');
    const [qrPreview, setQrPreview] = useState('');
    
    const [showList, setShowList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [isEditing, setIsEditing] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);

    const [activeModal, setActiveModal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchFashionShows = async () => {
        try {
            setFetching(true);
            const res = await axios.get('https://archies-academy.onrender.com/api/admin/fashionshow/all');
            const data = res.data.data || res.data;
            if (Array.isArray(data)) {
                setShowList(data);
            }
        } catch (err) {
            console.error("Error fetching fashion shows:", err);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchFashionShows();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (index, field, value) => {
        const updated = [...categories];
        updated[index][field] = value;
        setCategories(updated);
    };

    const addCategory = () => {
        setCategories([...categories, { categoryName: '', fee: '' }]);
    };

    const removeCategory = (index) => {
        if (categories.length === 1) return;
        setCategories(categories.filter((_, i) => i !== index));
    };

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBannerFile(file);
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    const handleQrChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setQrFile(file);
            setQrPreview(URL.createObjectURL(file));
        }
    };

    const handleEditClick = (item) => {
        setIsEditing(true);
        setCurrentEditId(item._id);
        setFormData({
            title: item.title || '',
            description: item.description || '',
            eventDate: item.eventDate ? item.eventDate.slice(0, 16) : '',
            venue: item.venue || ''
        });
        setCategories(item.categories && item.categories.length > 0 ? item.categories : [{ categoryName: 'Model Entry', fee: '' }]);
        setBannerPreview(item.banner || '');
        setQrPreview(item.qrCode || '');
        setBannerFile(null);
        setQrFile(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setCurrentEditId(null);
        setFormData({ title: '', description: '', eventDate: '', venue: '' });
        setCategories([{ categoryName: 'Model Entry', fee: '' }, { categoryName: 'Makeup Artist', fee: '' }]);
        setBannerFile(null);
        setQrFile(null);
        setBannerPreview('');
        setQrPreview('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('eventDate', formData.eventDate);
            data.append('venue', formData.venue);
            data.append('categories', JSON.stringify(categories));

            if (bannerFile) data.append('banner', bannerFile);
            if (qrFile) data.append('qrCode', qrFile);

            if (isEditing) {
                await axios.put(`https://archies-academy.onrender.com/api/admin/fashionshow/update/${currentEditId}`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setMessage({ type: 'success', text: 'Fashion Show event updated successfully!' });
            } else {
                await axios.post('https://archies-academy.onrender.com/api/admin/fashionshow/create', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setMessage({ type: 'success', text: 'Fashion Show event published successfully!' });
            }

            handleCancelEdit();
            fetchFashionShows();
        } catch (err) {
            console.error("Error saving fashion show:", err);
            setMessage({ type: 'danger', text: err.response?.data?.message || 'Operation failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this fashion show event?")) return;
        try {
            await axios.delete(`https://archies-academy.onrender.com/api/admin/fashionshow/delete/${id}`);
            fetchFashionShows();
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

    return (
        <div className="container-fluid px-2 px-md-4 py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Main Form Card */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                <div className="d-flex align-items-center mb-4 pb-3 border-bottom gap-3">
                    <div className="p-3 rounded-3 text-white shadow-sm d-flex align-items-center justify-content-center" style={{ backgroundColor: '#B88A4A', width: '50px', height: '50px' }}>
                        <FaCrown size={22} />
                    </div>
                    <div>
                        <h4 className="fw-bold mb-1" style={{ color: '#1e1e1e' }}>
                            {isEditing ? 'Edit Fashion Show Event' : 'Fashion Show Event Manager'}
                        </h4>
                        <p className="text-muted small mb-0">
                            {isEditing ? 'Update existing event details.' : 'Upload banner, QR code, and category-wise dynamic registration fees.'}
                        </p>
                    </div>
                </div>

                {message.text && (
                    <div className={`alert alert-${message.type} rounded-3 py-2 px-3 small mb-4 shadow-sm`} role="alert">
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-secondary">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control rounded-3 py-2 bg-light border-0 shadow-none"
                                placeholder="e.g., Archies Grand Fashion Fiesta 2026"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-secondary">Event Date & Time</label>
                            <input
                                type="datetime-local"
                                name="eventDate"
                                className="form-control rounded-3 py-2 bg-light border-0 shadow-none"
                                value={formData.eventDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label small fw-bold text-secondary">Venue</label>
                            <input
                                type="text"
                                name="venue"
                                className="form-control rounded-3 py-2 bg-light border-0 shadow-none"
                                placeholder="e.g., Indore Marriott Hotel, MP"
                                value={formData.venue}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12 border-0 p-4 rounded-4 bg-light my-2">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <label className="form-label small fw-bold text-dark mb-0 text-uppercase tracking-wider">Category-Wise Fees</label>
                                <button type="button" className="btn btn-sm btn-dark rounded-pill px-3 py-1.5 shadow-sm" onClick={addCategory} style={{ fontSize: '12px' }}>
                                    <FaPlus size={10} className="me-1" /> Add Category
                                </button>
                            </div>

                            {categories.map((cat, idx) => (
                                <div className="row g-2 align-items-center mb-2 bg-white p-2 rounded-3 shadow-sm border-0" key={idx}>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm rounded-3 border-0 bg-light py-2"
                                            placeholder="Category Name (e.g. Model / Makeup Artist)"
                                            value={cat.categoryName}
                                            onChange={(e) => handleCategoryChange(idx, 'categoryName', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <input
                                            type="number"
                                            className="form-control form-control-sm rounded-3 border-0 bg-light py-2"
                                            placeholder="Fee Amount (₹)"
                                            value={cat.fee}
                                            onChange={(e) => handleCategoryChange(idx, 'fee', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-1 text-end">
                                        {categories.length > 1 && (
                                            <button type="button" className="btn btn-sm btn-outline-danger border-0 rounded-3 p-2" onClick={() => removeCategory(idx)}>
                                                <FaTrash size={12} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-12">
                            <label className="form-label small fw-bold text-secondary">Event Description</label>
                            <textarea
                                name="description"
                                rows="3"
                                className="form-control rounded-3 bg-light border-0 shadow-none p-3"
                                placeholder="Write rules, dress codes, or show details..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-secondary"><FaImage className="me-1 text-muted" /> Upload Event Banner Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="form-control rounded-3 bg-light border-0 py-2"
                                onChange={handleBannerChange}
                            />
                            {bannerPreview && (
                                <div className="mt-3 position-relative d-inline-block">
                                    <img src={bannerPreview} alt="Banner Preview" className="rounded-3 border shadow-sm" style={{ width: '120px', height: '70px', objectFit: 'cover' }} />
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-secondary"><FaQrcode className="me-1 text-muted" /> Upload Payment QR Code</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="form-control rounded-3 bg-light border-0 py-2"
                                onChange={handleQrChange}
                            />
                            {qrPreview && (
                                <div className="mt-3 position-relative d-inline-block">
                                    <img src={qrPreview} alt="QR Preview" className="rounded-3 border shadow-sm p-1 bg-white" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                                </div>
                            )}
                        </div>

                        <div className="col-12 mt-4 d-flex justify-content-end gap-2 pt-3 border-top">
                            {isEditing && (
                                <button
                                    type="button"
                                    className="btn btn-light text-secondary px-4 py-2 rounded-pill fw-bold shadow-sm border"
                                    onClick={handleCancelEdit}
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                className="btn text-white px-4 py-2 rounded-pill fw-bold shadow-sm"
                                style={{ backgroundColor: '#B88A4A' }}
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : isEditing ? 'Update Event' : 'Publish Fashion Show Event'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* List Management Card */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <h5 className="fw-bold text-dark mb-4 pb-2 border-bottom">Manage Fashion Show Events</h5>
                {fetching ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-warning spinner-border-sm" role="status"></div>
                    </div>
                ) : showList.length === 0 ? (
                    <p className="text-muted small text-center py-4 mb-0">No fashion show events created yet.</p>
                ) : (
                    <div className="row g-4">
                        {showList.map((item) => (
                            <div className="col-md-6 col-lg-4" key={item._id}>
                                <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-light">
                                    {item.banner && (
                                        <img src={item.banner} alt={item.title} className="w-100" style={{ height: '160px', objectFit: 'cover' }} />
                                    )}
                                    <div className="card-body p-4 d-flex flex-column justify-content-between bg-white m-2 rounded-3 shadow-none border">
                                        <div>
                                            <h6 className="fw-bold text-dark mb-2">{item.title}</h6>
                                            <p className="text-muted small mb-3 text-truncate">{item.description}</p>
                                            <div className="small text-secondary mb-3 d-flex flex-column gap-1 bg-light p-2.5 rounded-3">
                                                <div><FaCalendarAlt className="me-2 text-warning" /> {new Date(item.eventDate).toLocaleDateString()}</div>
                                                <div><FaMapMarkerAlt className="me-2 text-danger" /> {item.venue}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 mt-2 pt-2 border-top">
                                            <button
                                                className="btn btn-sm text-white rounded-pill fw-bold flex-grow-1 py-1.5 shadow-sm"
                                                style={{ backgroundColor: '#B88A4A', fontSize: '12px' }}
                                                onClick={() => {
                                                    setActiveModal(item);
                                                    setSelectedCategory(item.categories?.[0] || null);
                                                }}
                                            >
                                                Preview
                                            </button>
                                            <button
                                                className="btn btn-sm btn-light border rounded-pill px-3 text-secondary shadow-sm"
                                                onClick={() => handleEditClick(item)}
                                                title="Edit Event"
                                            >
                                                <FaEdit size={12} />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-light border text-danger rounded-pill px-3 shadow-sm"
                                                onClick={() => handleDelete(item._id)}
                                                title="Delete Event"
                                            >
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Preview Modal */}
            {activeModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75 backdrop-blur" style={{ zIndex: 1100 }}>
                    <div className="bg-white rounded-4 shadow-lg p-4 position-relative mx-3 overflow-y-auto" style={{ maxWidth: '460px', width: '100%', maxHeight: '90vh' }}>
                        <button
                            className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-none border-0 d-flex align-items-center justify-content-center"
                            onClick={() => setActiveModal(null)}
                            style={{ width: '32px', height: '32px' }}
                        >
                            <FaTimes size={14} />
                        </button>

                        <div className="text-center mb-3 pt-2">
                            <span className="badge bg-warning text-dark px-3 py-1.5 rounded-pill mb-2 fw-bold shadow-none" style={{ fontSize: '11px' }}>✨ Grand Event</span>
                            <h4 className="fw-bold text-dark mb-1">{activeModal.title}</h4>
                            <p className="text-muted small mb-0 px-2">{activeModal.description}</p>
                        </div>

                        {activeModal.banner && (
                            <img src={activeModal.banner} alt="Banner" className="w-100 rounded-3 mb-3 shadow-sm border" style={{ height: '170px', objectFit: 'cover' }} />
                        )}

                        {activeModal.categories && activeModal.categories.length > 0 && (
                            <div className="mb-3">
                                <label className="form-label small fw-bold text-dark mb-2">Select Registration Category:</label>
                                <div className="d-flex flex-column gap-2">
                                    {activeModal.categories.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-2.5 px-3 border rounded-3 d-flex justify-content-between align-items-center transition-all ${selectedCategory?.categoryName === cat.categoryName ? 'border-warning bg-warning bg-opacity-10 shadow-sm' : 'bg-light border-0'}`}
                                            onClick={() => setSelectedCategory(cat)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span className="fw-semibold small text-dark">{cat.categoryName}</span>
                                            <span className="fw-bold" style={{ color: '#B88A4A' }}>₹{cat.fee}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded-3 mb-3 border-0">
                            <div>
                                <small className="text-muted d-block" style={{ fontSize: '11px' }}>Scan & Pay Selected Fee</small>
                                <span className="fw-bold text-dark fs-5">
                                    ₹{selectedCategory ? selectedCategory.fee : activeModal.categories?.[0]?.fee || 0}
                                </span>
                            </div>
                            {activeModal.qrCode && (
                                <img src={activeModal.qrCode} alt="QR" className="rounded-3 border bg-white p-1 shadow-sm" style={{ width: '75px', height: '75px', objectFit: 'contain' }} />
                            )}
                        </div>

                        <button
                            className="btn w-100 text-white py-2.5 rounded-pill fw-bold shadow-sm"
                            style={{ backgroundColor: '#B88A4A' }}
                            onClick={() => {
                                alert(`Proceeding to Register for ${selectedCategory?.categoryName || 'Selected Category'} with fee ₹${selectedCategory?.fee}`);
                                setActiveModal(null);
                            }}
                        >
                            Proceed to Registration
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FashionShowForm;