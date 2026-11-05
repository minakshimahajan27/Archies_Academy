// import React, { useState } from 'react';
// import { FaTrash, FaEdit, FaUserTie } from 'react-icons/fa';

// const MemberList = () => {
//     const [team, setTeam] = useState([
//         { id: 1, name: 'Archana Singh', role: 'Founder & Director', exp: '10+ Years', img: 'https://via.placeholder.com/100' },
//         { id: 2, name: 'Riya Gupta', role: 'Hair Specialist', exp: '4 Years', img: 'https://via.placeholder.com/100' },
//     ]);

//     return (
//         <div className="container-fluid p-0">
//             <div className="row g-4">
//                 {team.map((m) => (
//                     <div className="col-md-6 col-lg-4" key={m.id}>
//                         <div className="card border-0 shadow-sm p-3 h-100">
//                             <div className="d-flex align-items-center gap-3">
//                                 <img src={m.img} className="rounded-circle border" alt={m.name} style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
//                                 <div>
//                                     <h6 className="fw-bold mb-0">{m.name}</h6>
//                                     <small className="text-muted d-block">{m.role}</small>
//                                     <span className="badge bg-light text-dark border mt-1" style={{ fontSize: '10px' }}>{m.exp} Exp</span>
//                                 </div>
//                             </div>
//                             <div className="d-flex gap-2 mt-3 pt-3 border-top">
//                                 <button className="btn btn-sm btn-outline-primary flex-grow-1"><FaEdit /> Edit</button>
//                                 <button className="btn btn-sm btn-outline-danger flex-grow-1"><FaTrash /> Remove</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MemberList;


// import React, { useState } from 'react';
// import { FaTrash, FaEdit, FaUserGraduate, FaEnvelope, FaPhone, FaLaptop, FaBuilding } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const StudentList = () => {
//     // Dummy Data (API Integrate karne par setStudents(res.data) ho jayega)
//     const [students, setStudents] = useState([
//         { 
//             id: 1, 
//             name: 'Priya Sharma', 
//             course: 'Bridal Makeup Course', 
//             studentType: 'Online', 
//             phone: '9876543210', 
//             email: 'priya@gmail.com', 
//             img: '' 
//         },
//         { 
//             id: 2, 
//             name: 'Anjali Verma', 
//             course: 'Advanced Hairstyling', 
//             studentType: 'Offline', 
//             phone: '9123456789', 
//             email: 'anjali@gmail.com', 
//             img: '' 
//         },
//     ]);

//     const [filterType, setFilterType] = useState('All');
//     const [selectedStudent, setSelectedStudent] = useState(null);
//     const [showEditModal, setShowEditModal] = useState(false);

//     // Delete Student Function
//     const handleDelete = (id) => {
//         if (window.confirm("Kya aap is student ko remove karna chahte hain?")) {
//             setStudents(students.filter(student => student.id !== id));
//             toast.success("Student successfully remove ho gaya!");
//         }
//     };

//     // Open Edit Modal
//     const handleEditOpen = (student) => {
//         setSelectedStudent({ ...student });
//         setShowEditModal(true);
//     };

//     // Handle Edit Form Submit
//     const handleEditSubmit = (e) => {
//         e.preventDefault();
//         setStudents(students.map(s => s.id === selectedStudent.id ? selectedStudent : s));
//         toast.success("Student details update ho gayi!");
//         setShowEditModal(false);
//     };

//     // Filter Logic
//     const filteredStudents = filterType === 'All' 
//         ? students 
//         : students.filter(s => s.studentType === filterType);

//     return (
//         <div className="container-fluid p-0">
//             <ToastContainer />

//             {/* Header & Filter Tabs */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 gap-3">
//                 <h4 className="fw-bold text-dark m-0">🎓 Students List ({filteredStudents.length})</h4>
                
//                 <div className="btn-group rounded-pill shadow-sm bg-white p-1 border">
//                     {['All', 'Online', 'Offline'].map((type) => (
//                         <button
//                             key={type}
//                             onClick={() => setFilterType(type)}
//                             className={`btn btn-sm rounded-pill px-3 fw-semibold ${filterType === type ? 'btn-dark' : 'btn-light border-0'}`}
//                             style={{ backgroundColor: filterType === type ? '#B88A4A' : 'transparent', color: filterType === type ? '#fff' : '#555' }}
//                         >
//                             {type === 'Online' && <FaLaptop className="me-1" />}
//                             {type === 'Offline' && <FaBuilding className="me-1" />}
//                             {type} Students
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Students Cards Grid */}
//             <div className="row g-4">
//                 {filteredStudents.map((s) => (
//                     <div className="col-md-6 col-lg-4" key={s.id}>
//                         <div className="card border-0 shadow-sm p-3 h-100 position-relative" style={{ borderRadius: '15px' }}>
                            
//                             {/* Type Badge */}
//                             <span 
//                                 className={`badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill`}
//                                 style={{ backgroundColor: s.studentType === 'Online' ? '#0d6efd' : '#198754', fontSize: '0.7rem' }}
//                             >
//                                 {s.studentType === 'Online' ? <FaLaptop className="me-1" /> : <FaBuilding className="me-1" />}
//                                 {s.studentType}
//                             </span>

//                             <div className="d-flex align-items-center gap-3">
//                                 {/* Profile Image or Default Avatar */}
//                                 <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0" style={{ width: '70px', height: '70px' }}>
//                                     {s.img ? (
//                                         <img src={s.img} className="w-100 h-100" alt={s.name} style={{ objectFit: 'cover' }} />
//                                     ) : (
//                                         <FaUserGraduate size={32} className="text-muted" />
//                                     )}
//                                 </div>

//                                 {/* Details */}
//                                 <div>
//                                     <h6 className="fw-bold mb-1 text-dark">{s.name}</h6>
//                                     <small className="fw-semibold text-primary d-block mb-1">{s.course}</small>
//                                     <div className="text-muted small d-flex align-items-center gap-1">
//                                         <FaPhone size={10} /> {s.phone}
//                                     </div>
//                                     <div className="text-muted small d-flex align-items-center gap-1 text-truncate" style={{ maxWidth: '170px' }}>
//                                         <FaEnvelope size={10} /> {s.email}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Actions */}
//                             <div className="d-flex gap-2 mt-3 pt-3 border-top">
//                                 <button 
//                                     onClick={() => handleEditOpen(s)}
//                                     className="btn btn-sm btn-outline-primary flex-grow-1 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                     style={{ borderRadius: '8px' }}
//                                 >
//                                     <FaEdit size={12} /> Edit
//                                 </button>
//                                 <button 
//                                     onClick={() => handleDelete(s.id)}
//                                     className="btn btn-sm btn-outline-danger flex-grow-1 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                     style={{ borderRadius: '8px' }}
//                                 >
//                                     <FaTrash size={12} /> Remove
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Empty State */}
//             {filteredStudents.length === 0 && (
//                 <div className="text-center py-5 bg-white rounded shadow-sm border mt-3">
//                     <FaUserGraduate size={50} className="text-muted mb-3" />
//                     <h5 className="fw-bold text-dark">Koi student nahi mila</h5>
//                     <p className="text-muted small">Is category me abhi koi student enrolled nahi hai.</p>
//                 </div>
//             )}

//             {/* Edit Modal */}
//             {showEditModal && selectedStudent && (
//                 <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
//                     <div className="modal-dialog modal-dialog-centered">
//                         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//                             <div className="modal-header border-0 pb-0">
//                                 <h5 className="modal-title fw-bold text-dark mt-2">✏️ Edit Student Details</h5>
//                                 <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
//                             </div>
//                             <div className="modal-body p-4">
//                                 <form onSubmit={handleEditSubmit}>
//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Full Name</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control" 
//                                             value={selectedStudent.name} 
//                                             onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })} 
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Course</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control" 
//                                             value={selectedStudent.course} 
//                                             onChange={(e) => setSelectedStudent({ ...selectedStudent, course: e.target.value })} 
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="row mb-3">
//                                         <div className="col-6">
//                                             <label className="form-label small fw-bold text-muted">Phone</label>
//                                             <input 
//                                                 type="text" 
//                                                 className="form-control" 
//                                                 value={selectedStudent.phone} 
//                                                 onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })} 
//                                                 required 
//                                             />
//                                         </div>
//                                         <div className="col-6">
//                                             <label className="form-label small fw-bold text-muted">Type</label>
//                                             <select 
//                                                 className="form-select" 
//                                                 value={selectedStudent.studentType} 
//                                                 onChange={(e) => setSelectedStudent({ ...selectedStudent, studentType: e.target.value })}
//                                             >
//                                                 <option value="Online">Online</option>
//                                                 <option value="Offline">Offline</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="d-grid gap-2 mt-4">
//                                         <button type="submit" className="btn text-white fw-bold py-2" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
//                                             SAVE CHANGES
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

// export default StudentList;


// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaEdit, FaUserGraduate, FaEnvelope, FaPhone, FaLaptop, FaBuilding } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const StudentList = () => {
//     const [students, setStudents] = useState([]);
//     const [filterType, setFilterType] = useState('All');
//     const [selectedStudent, setSelectedStudent] = useState(null);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [loading, setLoading] = useState(false);

//     // 1. Fetch All Students from Backend on Component Mount
//     const fetchStudents = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get('https://archies-academy.onrender.com/api/admin/student/getall');
//             if (response.data.success) {
//                 setStudents(response.data.data);
//             }
//         } catch (error) {
//             console.error("Error fetching students:", error);
//             toast.error("Students load karne me error aaya!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchStudents();
//     }, []);

//     // 2. Delete Student Function (API Integration)
//     const handleDelete = async (id) => {
//         if (window.confirm("Kya aap is student ko remove karna chahte hain?")) {
//             try {
//                 const response = await axios.delete(`https://archies-academy.onrender.com/api/admin/student/delete/${id}`);
//                 if (response.data.success) {
//                     setStudents(students.filter(student => student._id !== id));
//                     toast.success("Student successfully remove ho gaya!");
//                 }
//             } catch (error) {
//                 console.error("Error deleting student:", error);
//                 toast.error("Student delete karne me error aaya!");
//             }
//         }
//     };

//     // Open Edit Modal
//     const handleEditOpen = (student) => {
//         setSelectedStudent({ ...student });
//         setShowEditModal(true);
//     };

//     // 3. Handle Edit Form Submit (API Integration)
//     const handleEditSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`https://archies-academy.onrender.com/api/admin/student/update/${selectedStudent._id}`, {
//                 name: selectedStudent.name,
//                 course: selectedStudent.course,
//                 phone: selectedStudent.phone,
//                 studentType: selectedStudent.studentType,
//                 totalFees: selectedStudent.totalFees
//             });

//             if (response.data.success) {
//                 setStudents(students.map(s => s._id === selectedStudent._id ? response.data.data : s));
//                 toast.success("Student details update ho gayi!");
//                 setShowEditModal(false);
//             }
//         } catch (error) {
//             console.error("Error updating student:", error);
//             toast.error("Student update karne me error aaya!");
//         }
//     };

//     // 4. Filter Logic (All, Online, Offline)
//     const filteredStudents = filterType === 'All' 
//         ? students 
//         : students.filter(s => s.studentType === filterType);

//     return (
//         <div className="container-fluid p-0">
//             <ToastContainer position="top-right" autoClose={3000} />

//             {/* Header & Filter Tabs */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 gap-3">
//                 <h4 className="fw-bold text-dark m-0">🎓 Students List ({filteredStudents.length})</h4>
                
//                 <div className="btn-group rounded-pill shadow-sm bg-white p-1 border">
//                     {['All', 'Online', 'Offline'].map((type) => (
//                         <button
//                             key={type}
//                             onClick={() => setFilterType(type)}
//                             className={`btn btn-sm rounded-pill px-3 fw-semibold ${filterType === type ? 'btn-dark' : 'btn-light border-0'}`}
//                             style={{ backgroundColor: filterType === type ? '#B88A4A' : 'transparent', color: filterType === type ? '#fff' : '#555' }}
//                         >
//                             {type === 'Online' && <FaLaptop className="me-1" />}
//                             {type === 'Offline' && <FaBuilding className="me-1" />}
//                             {type} Students
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Loading State */}
//             {loading ? (
//                 <div className="text-center py-5">
//                     <div className="spinner-border text-warning" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//             ) : (
//                 /* Students Cards Grid */
//                 <div className="row g-4">
//                     {filteredStudents.map((s) => (
//                         <div className="col-md-6 col-lg-4" key={s._id}>
//                             <div className="card border-0 shadow-sm p-3 h-100 position-relative" style={{ borderRadius: '15px' }}>
                                
//                                 {/* Type Badge */}
//                                 <span 
//                                     className={`badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill`}
//                                     style={{ backgroundColor: s.studentType === 'Online' ? '#0d6efd' : '#198754', fontSize: '0.7rem' }}
//                                 >
//                                     {s.studentType === 'Online' ? <FaLaptop className="me-1" /> : <FaBuilding className="me-1" />}
//                                     {s.studentType || 'Online'}
//                                 </span>

//                                 <div className="d-flex align-items-center gap-3">
//                                     {/* Profile Image or Default Avatar */}
//                                     <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0" style={{ width: '70px', height: '70px' }}>
//                                         {s.photo ? (
//                                             <img src={`https://archies-academy.onrender.com/${s.photo}`} className="w-100 h-100" alt={s.name} style={{ objectFit: 'cover' }} />
//                                         ) : (
//                                             <FaUserGraduate size={32} className="text-muted" />
//                                         )}
//                                     </div>

//                                     {/* Details */}
//                                     <div>
//                                         <h6 className="fw-bold mb-1 text-dark">{s.name}</h6>
//                                         <small className="fw-semibold text-primary d-block mb-1">{s.course}</small>
//                                         <div className="text-muted small d-flex align-items-center gap-1">
//                                             <FaPhone size={10} /> {s.phone}
//                                         </div>
//                                         <div className="text-muted small d-flex align-items-center gap-1 text-truncate" style={{ maxWidth: '170px' }}>
//                                             <FaEnvelope size={10} /> {s.email}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Actions */}
//                                 <div className="d-flex gap-2 mt-3 pt-3 border-top">
//                                     <button 
//                                         onClick={() => handleEditOpen(s)}
//                                         className="btn btn-sm btn-outline-primary flex-grow-1 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                         style={{ borderRadius: '8px' }}
//                                     >
//                                         <FaEdit size={12} /> Edit
//                                     </button>
//                                     <button 
//                                         onClick={() => handleDelete(s._id)}
//                                         className="btn btn-sm btn-outline-danger flex-grow-1 d-flex align-items-center justify-content-center gap-1 shadow-sm"
//                                         style={{ borderRadius: '8px' }}
//                                     >
//                                         <FaTrash size={12} /> Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Empty State */}
//             {!loading && filteredStudents.length === 0 && (
//                 <div className="text-center py-5 bg-white rounded shadow-sm border mt-3">
//                     <FaUserGraduate size={50} className="text-muted mb-3" />
//                     <h5 className="fw-bold text-dark">Koi student nahi mila</h5>
//                     <p className="text-muted small">Is category me abhi koi student enrolled nahi hai.</p>
//                 </div>
//             )}

//             {/* Edit Modal */}
//             {showEditModal && selectedStudent && (
//                 <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
//                     <div className="modal-dialog modal-dialog-centered">
//                         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//                             <div className="modal-header border-0 pb-0">
//                                 <h5 className="modal-title fw-bold text-dark mt-2">✏️ Edit Student Details</h5>
//                                 <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
//                             </div>
//                             <div className="modal-body p-4">
//                                 <form onSubmit={handleEditSubmit}>
//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Full Name</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control" 
//                                             value={selectedStudent.name} 
//                                             onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })} 
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label small fw-bold text-muted">Course</label>
//                                         <input 
//                                             type="text" 
//                                             className="form-control" 
//                                             value={selectedStudent.course} 
//                                             onChange={(e) => setSelectedStudent({ ...selectedStudent, course: e.target.value })} 
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="row mb-3">
//                                         <div className="col-6">
//                                             <label className="form-label small fw-bold text-muted">Phone</label>
//                                             <input 
//                                                 type="text" 
//                                                 className="form-control" 
//                                                 value={selectedStudent.phone} 
//                                                 onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })} 
//                                                 required 
//                                             />
//                                         </div>
//                                         <div className="col-6">
//                                             <label className="form-label small fw-bold text-muted">Type</label>
//                                             <select 
//                                                 className="form-select" 
//                                                 value={selectedStudent.studentType || 'Online'} 
//                                                 onChange={(e) => setSelectedStudent({ ...selectedStudent, studentType: e.target.value })}
//                                             >
//                                                 <option value="Online">Online</option>
//                                                 <option value="Offline">Offline</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="d-grid gap-2 mt-4">
//                                         <button type="submit" className="btn text-white fw-bold py-2" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
//                                             SAVE CHANGES
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

// export default StudentList;

import React, { useState, useEffect, useRef } from 'react';
import { FaTrash, FaEdit, FaUserGraduate, FaEnvelope, FaPhone, FaLaptop, FaBuilding, FaChevronDown } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [filterType, setFilterType] = useState('All');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(false);

    // Custom dropdown state for Edit Modal
    const [openEditType, setOpenEditType] = useState(false);
    const editTypeRef = useRef(null);
    const editStudentTypes = [
        { label: '💻 Online Student', value: 'Online' },
        { label: '🏫 Offline Student (Academy)', value: 'Offline' }
    ];

    // Click outside handler for custom dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (editTypeRef.current && !editTypeRef.current.contains(event.target)) {
                setOpenEditType(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 1. Fetch All Students from Backend on Component Mount
    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://archies-academy.onrender.com/api/admin/student/getall');
            if (response.data.success) {
                setStudents(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
            toast.error("Students load karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // 2. Delete Student Function (API Integration)
    const handleDelete = async (id) => {
        if (window.confirm("Kya aap is student ko remove karna chahte hain?")) {
            try {
                const response = await axios.delete(`https://archies-academy.onrender.com/api/admin/student/delete/${id}`);
                if (response.data.success) {
                    setStudents(students.filter(student => student._id !== id));
                    toast.success("Student successfully remove ho gaya!");
                }
            } catch (error) {
                console.error("Error deleting student:", error);
                toast.error("Student delete karne me error aaya!");
            }
        }
    };

    // Open Edit Modal
    const handleEditOpen = (student) => {
        setSelectedStudent({ ...student });
        setShowEditModal(true);
    };

    // 3. Handle Edit Form Submit (API Integration)
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://archies-academy.onrender.com/api/admin/student/update/${selectedStudent._id}`, {
                name: selectedStudent.name,
                course: selectedStudent.course,
                phone: selectedStudent.phone,
                studentType: selectedStudent.studentType,
                totalFees: selectedStudent.totalFees
            });

            if (response.data.success) {
                setStudents(students.map(s => s._id === selectedStudent._id ? response.data.data : s));
                toast.success("Student details update ho gayi!");
                setShowEditModal(false);
            }
        } catch (error) {
            console.error("Error updating student:", error);
            toast.error("Student update karne me error aaya!");
        }
    };

    // 4. Filter Logic (All, Online, Offline)
    const filteredStudents = filterType === 'All' 
        ? students 
        : students.filter(s => s.studentType === filterType);

    return (
        <div className="container-fluid px-3 py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Header & Filter Tabs */}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 gap-3 bg-white p-3 rounded-4 shadow-sm border">
                <div>
                    <h4 className="fw-bold text-dark m-0" style={{ color: '#B88A4A' }}>🎓 Enrolled Students Management</h4>
                    <p className="text-muted small m-0">View, update, or remove student records efficiently.</p>
                </div>
                
                <div className="btn-group rounded-pill shadow-sm bg-light p-1 border">
                    {['All', 'Online', 'Offline'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`btn btn-sm rounded-pill px-3 fw-semibold ${filterType === type ? 'text-white' : 'text-muted'}`}
                            style={{ 
                                backgroundColor: filterType === type ? '#B88A4A' : 'transparent', 
                                border: 'none',
                                transition: '0.2s'
                            }}
                        >
                            {type === 'Online' && <FaLaptop className="me-1" />}
                            {type === 'Offline' && <FaBuilding className="me-1" />}
                            {type} ({type === 'All' ? students.length : students.filter(s => s.studentType === type).length})
                        </button>
                    ))}
                </div>
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border" style={{ color: '#B88A4A' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                /* Students Table View */
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light text-uppercase fs-7 text-secondary">
                                <tr>
                                    <th className="py-3 ps-4">Student</th>
                                    <th className="py-3">Contact Info</th>
                                    <th className="py-3">Course</th>
                                    <th className="py-3">Type</th>
                                    <th className="py-3">Fees (₹)</th>
                                    <th className="py-3 text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((s) => (
                                    <tr key={s._id}>
                                        {/* Student Name & Photo */}
                                        <td className="py-3 ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden flex-shrink-0 shadow-sm" style={{ width: '45px', height: '45px' }}>
                                                    {s.photo ? (
                                                        <img src={`https://archies-academy.onrender.com/${s.photo}`} className="w-100 h-100" alt={s.name} style={{ objectFit: 'cover' }} />
                                                    ) : (
                                                        <FaUserGraduate size={20} className="text-muted" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-0 text-dark">{s.name}</h6>
                                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>ID: {s._id.slice(-6)}</small>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Contact Info */}
                                        <td className="py-3">
                                            <div className="small text-dark d-flex align-items-center gap-1 mb-1">
                                                <FaPhone size={11} className="text-muted" /> {s.phone}
                                            </div>
                                            <div className="small text-muted d-flex align-items-center gap-1 text-truncate" style={{ maxWidth: '200px' }}>
                                                <FaEnvelope size={11} className="text-muted" /> {s.email}
                                            </div>
                                        </td>

                                        {/* Course */}
                                        <td className="py-3">
                                            <span className="fw-semibold text-dark small">{s.course}</span>
                                        </td>

                                        {/* Student Type Badge */}
                                        <td className="py-3">
                                            <span 
                                                className="badge px-3 py-1.5 rounded-pill fw-normal"
                                                style={{ 
                                                    backgroundColor: s.studentType === 'Online' ? '#e7f1ff' : '#d1e7dd',
                                                    color: s.studentType === 'Online' ? '#0d6efd' : '#0f5132',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {s.studentType === 'Online' ? <FaLaptop className="me-1" /> : <FaBuilding className="me-1" />}
                                                {s.studentType || 'Online'}
                                            </span>
                                        </td>

                                        {/* Fees */}
                                        <td className="py-3">
                                            <span className="fw-bold text-success">₹ {s.totalFees || 'N/A'}</span>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-3 text-end pe-4">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button 
                                                    onClick={() => handleEditOpen(s)}
                                                    className="btn btn-sm btn-outline-dark d-flex align-items-center gap-1 px-3 shadow-sm rounded-2"
                                                    style={{ fontSize: '0.8rem' }}
                                                >
                                                    <FaEdit size={12} /> Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(s._id)}
                                                    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1 px-3 shadow-sm rounded-2"
                                                    style={{ fontSize: '0.8rem' }}
                                                >
                                                    <FaTrash size={12} /> Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!loading && filteredStudents.length === 0 && (
                <div className="text-center py-5 bg-white rounded-4 shadow-sm border mt-3">
                    <FaUserGraduate size={50} className="text-muted mb-3 opacity-50" />
                    <h5 className="fw-bold text-dark">Koi student nahi mila</h5>
                    <p className="text-muted small">Is category me abhi koi student enrolled nahi hai.</p>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && selectedStudent && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1040 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="modal-header border-0 bg-light px-4 pt-4 pb-2">
                                <h5 className="modal-title fw-bold text-dark" style={{ fontSize: '1.2rem', color: '#B88A4A' }}>
                                    ✨ Edit Student Details
                                </h5>
                                <button type="button" className="btn-close shadow-none" onClick={() => setShowEditModal(false)}></button>
                            </div>
                            
                            <div className="modal-body p-4">
                                <form onSubmit={handleEditSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control py-2.5 shadow-sm rounded-3" 
                                            value={selectedStudent.name} 
                                            onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })} 
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-muted">Course</label>
                                        <input 
                                            type="text" 
                                            className="form-control py-2.5 shadow-sm rounded-3" 
                                            value={selectedStudent.course} 
                                            onChange={(e) => setSelectedStudent({ ...selectedStudent, course: e.target.value })} 
                                            required 
                                        />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="form-label small fw-bold text-muted">Phone</label>
                                            <input 
                                                type="text" 
                                                className="form-control py-2.5 shadow-sm rounded-3" 
                                                value={selectedStudent.phone} 
                                                onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label small fw-bold text-muted">Total Fees (₹)</label>
                                            <input 
                                                type="number" 
                                                className="form-control py-2.5 shadow-sm rounded-3" 
                                                value={selectedStudent.totalFees || ''} 
                                                onChange={(e) => setSelectedStudent({ ...selectedStudent, totalFees: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    {/* Custom Student Type Dropdown */}
                                    <div className="mb-3 position-relative" ref={editTypeRef}>
                                        <label className="form-label small fw-bold text-muted">Student Type</label>
                                        <div 
                                            className="form-control py-2.5 d-flex justify-content-between align-items-center shadow-sm rounded-3"
                                            style={{ cursor: 'pointer', borderColor: openEditType ? '#B88A4A' : '#ced4da' }}
                                            onClick={() => setOpenEditType(!openEditType)}
                                        >
                                            <span>{editStudentTypes.find(t => t.value === selectedStudent.studentType)?.label || selectedStudent.studentType}</span>
                                            <FaChevronDown size={12} style={{ color: '#B88A4A', transform: openEditType ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                                        </div>

                                        {openEditType && (
                                            <div className="position-absolute w-100 bg-white border rounded-3 shadow-sm mt-1 overflow-hidden" style={{ zIndex: 1000 }}>
                                                {editStudentTypes.map((t) => (
                                                    <div 
                                                        key={t.value}
                                                        className="px-3 py-2"
                                                        style={{ 
                                                            cursor: 'pointer', 
                                                            backgroundColor: selectedStudent.studentType === t.value ? '#fdf8f2' : 'transparent',
                                                            color: selectedStudent.studentType === t.value ? '#B88A4A' : '#333',
                                                            fontWeight: selectedStudent.studentType === t.value ? 'bold' : 'normal',
                                                        }}
                                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B88A4A'; e.currentTarget.style.color = '#fff'; }}
                                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = selectedStudent.studentType === t.value ? '#fdf8f2' : 'transparent'; e.currentTarget.style.color = selectedStudent.studentType === t.value ? '#B88A4A' : '#333'; }}
                                                        onClick={() => {
                                                            setSelectedStudent({ ...selectedStudent, studentType: t.value });
                                                            setOpenEditType(false);
                                                        }}
                                                    >
                                                        {t.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="d-grid gap-2 mt-4">
                                        <button type="submit" className="btn py-2.5 fw-bold text-white shadow-sm" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
                                            SAVE CHANGES
                                        </button>
                                        <button type="button" className="btn btn-light py-2.5 fw-bold text-muted border" onClick={() => setShowEditModal(false)} style={{ borderRadius: '10px' }}>
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

export default StudentList;