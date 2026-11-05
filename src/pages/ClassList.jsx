// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaUsers,FaClock } from 'react-icons/fa';

// const ClassList = () => {
//     const [courses, setCourses] = useState([
//         { id: 1, title: 'Advance Bridal Artistry', price: '4999', duration: '30 Days', students: 120 },
//         { id: 2, title: 'Quick Hairstyling Pro', price: '1999', duration: '7 Days', students: 45 },
//     ]);

//     return (
//         <div className="container-fluid p-0">
//             <div className="row g-4">
//                 {courses.map((course) => (
//                     <div className="col-md-6" key={course.id}>
//                         <div className="card border-0 shadow-sm overflow-hidden h-100">
//                             <div className="card-body p-4">
//                                 <div className="d-flex justify-content-between align-items-start">
//                                     <div>
//                                         <h5 className="fw-bold text-dark mb-1">{course.title}</h5>
//                                         <span className="badge bg-success bg-opacity-10 text-success mb-3">Online Mode</span>
//                                     </div>
//                                     <h4 className="fw-bold text-dark">₹{course.price}</h4>
//                                 </div>
                                
//                                 <div className="d-flex gap-4 text-muted small mb-4">
//                                     <span><FaClock className="me-1"/> {course.duration}</span>
//                                     <span><FaUsers className="me-1"/> {course.students} Enrolled</span>
//                                 </div>

//                                 <div className="d-flex gap-2">
//                                     <button className="btn btn-sm btn-outline-primary flex-grow-1"><FaEdit /> Edit</button>
//                                     <button className="btn btn-sm btn-outline-danger flex-grow-1"><FaTrash /> Remove</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {courses.length === 0 && <p className="text-center mt-5 text-muted">No classes created yet.</p>}
//         </div>
//     );
// };

// export default ClassList;

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaClock, FaTimes, FaSave } from 'react-icons/fa';

const ClassList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // Edit Modal States
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [validity, setValidity] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [updating, setUpdating] = useState(false);

    // Fetch Courses
    const fetchCourses = async () => {
        try {
            const response = await fetch('https://archies-academy.onrender.com/api/admin/courses/all');
            const data = await response.json();
            if (data.success) {
                setCourses(data.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // Open Edit Modal & Populate Data
    const handleEditClick = (course) => {
        setSelectedCourse(course);
        setTitle(course.title || '');
        setDuration(course.duration || '');
        setPrice(course.price || '');
        setValidity(course.validity || 'Lifetime Access');
        setDescription(course.description || '');
        setPreview(course.image ? `https://archies-academy.onrender.com/uploads/${course.image}` : null);
        setFile(null);
        setShowEditModal(true);
    };

    // Handle Image Change for Edit
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    // Update Course API Call
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('duration', duration);
            formData.append('price', price);
            formData.append('validity', validity);
            formData.append('description', description);
            if (file) {
                formData.append('file', file); // Multer single file field name
            }

            const response = await fetch(`https://archies-academy.onrender.com/api/admin/courses/update/${selectedCourse._id}`, {
                method: 'PUT',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert('Course updated successfully!');
                setShowEditModal(false);
                fetchCourses(); // Refresh list
            } else {
                alert(data.message || 'Failed to update course');
            }
        } catch (error) {
            console.error('Error updating course:', error);
            alert('Server error during update.');
        } finally {
            setUpdating(false);
        }
    };

    // Delete Course Handler
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                const response = await fetch(`https://archies-academy.onrender.com/api/admin/courses/delete/${id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();
                if (data.success) {
                    setCourses(courses.filter((course) => course._id !== id));
                } else {
                    alert('Failed to delete course');
                }
            } catch (error) {
                console.error('Error deleting course:', error);
            }
        }
    };

    if (loading) {
        return <div className="text-center py-5">Loading courses...</div>;
    }

    return (
        <div className="container-fluid p-0">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold" style={{ color: '#B88A4A' }}>Manage Courses</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="py-3 px-4">Poster</th>
                                <th scope="col" className="py-3">Course Title</th>
                                <th scope="col" className="py-3">Duration</th>
                                <th scope="col" className="py-3">Price</th>
                                <th scope="col" className="py-3">Validity</th>
                                <th scope="col" className="py-3 text-end px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.length > 0 ? (
                                courses.map((course) => (
                                    <tr key={course._id}>
                                        <td className="px-4">
                                            <img 
                                                src={`https://archies-academy.onrender.com/uploads/${course.image}`} 
                                                alt={course.title} 
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                                className="rounded border"
                                            />
                                        </td>
                                        <td>
                                            <h6 className="fw-bold mb-0 text-dark">{course.title}</h6>
                                            <small className="text-muted text-truncate d-inline-block" style={{ maxWidth: '250px' }}>
                                                {course.description}
                                            </small>
                                        </td>
                                        <td>
                                            <span className="text-muted small">
                                                <FaClock className="me-1 text-secondary" /> {course.duration}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="fw-bold text-dark">
                                                ₹{course.price}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="badge bg-secondary bg-opacity-10 text-secondary">
                                                {course.validity || 'Lifetime Access'}
                                            </span>
                                        </td>
                                        <td className="text-end px-4">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button 
                                                    className="btn btn-sm btn-outline-primary px-3"
                                                    onClick={() => handleEditClick(course)}
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-outline-danger px-3"
                                                    onClick={() => handleDelete(course._id)}
                                                >
                                                    <FaTrash /> Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted">
                                        No courses created yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header bg-light">
                                <h5 className="modal-title fw-bold" style={{ color: '#B88A4A' }}>Edit Course</h5>
                                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                            </div>
                            <form onSubmit={handleUpdateSubmit}>
                                <div className="modal-body p-4">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Course Title</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    value={title} 
                                                    onChange={(e) => setTitle(e.target.value)} 
                                                    required 
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label fw-bold">Duration</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        value={duration} 
                                                        onChange={(e) => setDuration(e.target.value)} 
                                                        required 
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label fw-bold">Price (₹)</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        value={price} 
                                                        onChange={(e) => setPrice(e.target.value)} 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Validity</label>
                                                <select 
                                                    className="form-select" 
                                                    value={validity} 
                                                    onChange={(e) => setValidity(e.target.value)}
                                                >
                                                    <option value="Lifetime Access">Lifetime Access</option>
                                                    <option value="6 Months">6 Months</option>
                                                    <option value="1 Year">1 Year</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Description</label>
                                                <textarea 
                                                    className="form-control" 
                                                    rows="3" 
                                                    value={description} 
                                                    onChange={(e) => setDescription(e.target.value)} 
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-5 text-center border-start d-flex flex-column justify-content-between">
                                            <div>
                                                <label className="form-label fw-bold d-block">Course Banner</label>
                                                <div 
                                                    className="border rounded bg-light d-flex align-items-center justify-content-center mb-2"
                                                    style={{ height: '180px', cursor: 'pointer', overflow: 'hidden' }}
                                                    onClick={() => document.getElementById('editBanner').click()}
                                                >
                                                    {preview ? (
                                                        <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    ) : (
                                                        <span className="text-muted small">Click to change poster</span>
                                                    )}
                                                </div>
                                                <input type="file" id="editBanner" hidden onChange={handleFileChange} />
                                                <small className="text-muted">Leave empty to keep existing image</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer bg-light">
                                    <button type="button" className="btn btn-secondary px-4" onClick={() => setShowEditModal(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn text-white px-4 fw-bold" style={{ backgroundColor: '#B88A4A' }} disabled={updating}>
                                        <FaSave className="me-1" /> {updating ? 'Updating...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassList;