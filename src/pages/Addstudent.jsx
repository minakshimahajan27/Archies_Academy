// // import React, { useState } from 'react';
// // import { FaUserPlus, FaCloudUploadAlt, FaSave } from 'react-icons/fa';

// // const AddMember = () => {
// //     const [preview, setPreview] = useState(null);
// //     const [memberData, setMemberData] = useState({
// //         name: '',
// //         role: 'Makeup Artist',
// //         experience: '',
// //         photo: null
// //     });

// //     const handleFileChange = (e) => {
// //         const file = e.target.files[0];
// //         setMemberData({ ...memberData, photo: file });
// //         setPreview(URL.createObjectURL(file));
// //     };

// //     return (
// //         <div className="container-fluid p-0">
// //             <div className="row justify-content-center">
// //                 <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
// //                     <form>
// //                         <div className="row">
// //                             <div className="col-md-4 text-center border-end">
// //                                 <label className="fw-bold mb-3 d-block">Profile Photo</label>
// //                                 <div 
// //                                     className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border shadow-sm"
// //                                     style={{ width: '180px', height: '180px', overflow: 'hidden', cursor: 'pointer' }}
// //                                     onClick={() => document.getElementById('teamFile').click()}
// //                                 >
// //                                     {preview ? (
// //                                         <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
// //                                     ) : (
// //                                         <FaUserPlus size={40} className="text-muted" />
// //                                     )}
// //                                 </div>
// //                                 <input type="file" id="teamFile" hidden onChange={handleFileChange} />
// //                                 <small className="text-muted mt-2 d-block">Square image best rahegi</small>
// //                             </div>

// //                             <div className="col-md-8 ps-md-4">
// //                                 <div className="mb-3">
// //                                     <label className="form-label fw-bold">Full Name</label>
// //                                     <input type="text" className="form-control" placeholder="e.g. Meenakshi Mahajan" />
// //                                 </div>
// //                                 <div className="mb-3">
// //                                     <label className="form-label fw-bold">Designation / Role</label>
// //                                     <select className="form-select">
// //                                         <option>Senior Makeup Artist</option>
// //                                         <option>Hair Stylist</option>
// //                                         <option>Skin Specialist</option>
// //                                         <option>Trainer</option>
// //                                     </select>
// //                                 </div>
// //                                 <div className="mb-3">
// //                                     <label className="form-label fw-bold">Experience (Years)</label>
// //                                     <input type="text" className="form-control" placeholder="e.g. 5+ Years" />
// //                                 </div>
// //                                 <button className="btn w-100 text-white fw-bold py-2 mt-3" style={{ backgroundColor: '#B88A4A' }}>
// //                                     <FaSave className="me-2" /> ADD TO TEAM
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddMember;

// import React, { useState } from 'react';
// import { FaUserGraduate, FaSave } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddStudent = () => {
//     const [preview, setPreview] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [studentData, setStudentData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         course: 'Bridal Makeup Course',
//         studentType: 'Online', // Default Online set hai
//         photo: null
//     });

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setStudentData(prev => ({ ...prev, [name]: value }));
//     };

//     // Handle file/photo change
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setStudentData(prev => ({ ...prev, photo: file }));
//             setPreview(URL.createObjectURL(file));
//         }
//     };

//     // Handle Form Submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const formData = new FormData();
//         formData.append('name', studentData.name);
//         formData.append('email', studentData.email);
//         formData.append('phone', studentData.phone);
//         formData.append('course', studentData.course);
//         formData.append('studentType', studentData.studentType);
//         if (studentData.photo) {
//             formData.append('file', studentData.photo);
//         }

//         try {
//             // Yahan apni Student Add karne wali API service call karein
//             // const res = await addStudentService(formData);

//             toast.success("Student successfully add ho gaya!");
//             // Form reset karein
//             setStudentData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 course: 'Bridal Makeup Course',
//                 studentType: 'Online',
//                 photo: null
//             });
//             setPreview(null);
//         } catch (err) {
//             console.error("Error adding student:", err);
//             toast.error("Student add karne me error aaya!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container-fluid p-0">
//             <ToastContainer />
//             <div className="row justify-content-center">
//                 <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
//                     <h4 className="fw-bold mb-4 text-dark text-center">🎓 Add New Student</h4>

//                     <form onSubmit={handleSubmit}>
//                         <div className="row">
//                             {/* Student Photo Upload Section */}
//                             <div className="col-md-4 text-center border-end d-flex flex-column align-items-center justify-content-center">
//                                 <label className="fw-bold mb-3 d-block">Student Photo</label>
//                                 <div 
//                                     className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border shadow-sm"
//                                     style={{ width: '160px', height: '160px', overflow: 'hidden', cursor: 'pointer' }}
//                                     onClick={() => document.getElementById('studentFile').click()}
//                                 >
//                                     {preview ? (
//                                         <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                     ) : (
//                                         <FaUserGraduate size={50} className="text-muted" />
//                                     )}
//                                 </div>
//                                 <input type="file" id="studentFile" hidden accept="image/*" onChange={handleFileChange} />
//                                 <small className="text-muted mt-2 d-block">Click karke photo select karein</small>
//                             </div>

//                             {/* Student Details Form Fields */}
//                             <div className="col-md-8 ps-md-4">
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold small text-muted">Full Name</label>
//                                     <input 
//                                         type="text" 
//                                         className="form-control" 
//                                         name="name"
//                                         value={studentData.name}
//                                         onChange={handleChange}
//                                         placeholder="e.g. Priya Sharma" 
//                                         required 
//                                     />
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold small text-muted">Email Address</label>
//                                         <input 
//                                             type="email" 
//                                             className="form-control" 
//                                             name="email"
//                                             value={studentData.email}
//                                             onChange={handleChange}
//                                             placeholder="e.g. priya@gmail.com" 
//                                             required 
//                                         />
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold small text-muted">Phone Number</label>
//                                         <input 
//                                             type="tel" 
//                                             className="form-control" 
//                                             name="phone"
//                                             value={studentData.phone}
//                                             onChange={handleChange}
//                                             placeholder="e.g. 9876543210" 
//                                             required 
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     {/* Student Type: Online / Offline */}
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold small text-muted">Student Type</label>
//                                         <select 
//                                             className="form-select fw-semibold" 
//                                             name="studentType"
//                                             value={studentData.studentType}
//                                             onChange={handleChange}
//                                         >
//                                             <option value="Online">💻 Online Student</option>
//                                             <option value="Offline">🏫 Offline Student (Academy)</option>
//                                         </select>
//                                     </div>

//                                     {/* Course Selection */}
//                                     <div className="col-md-6 mb-3">
//                                         <label className="form-label fw-bold small text-muted">Enrolled Course</label>
//                                         <select 
//                                             className="form-select" 
//                                             name="course"
//                                             value={studentData.course}
//                                             onChange={handleChange}
//                                         >
//                                             <option value="Bridal Makeup Course">Bridal Makeup Course</option>
//                                             <option value="Advanced Hairstyling">Advanced Hairstyling</option>
//                                             <option value="Professional Cosmetology">Professional Cosmetology</option>
//                                             <option value="Self Grooming Class">Self Grooming Class</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <button 
//                                     type="submit" 
//                                     className="btn w-100 text-white fw-bold py-2 mt-3 shadow-sm" 
//                                     style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}
//                                     disabled={loading}
//                                 >
//                                     <FaSave className="me-2" /> {loading ? 'SAVING...' : 'SAVE STUDENT'}
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddStudent;

import React, { useState } from 'react';
import { FaUserGraduate, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Axios import kiya gaya hai

const AddStudent = () => {
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        phone: '',
        course: 'Bridal Makeup Course',
        studentType: 'Online',
        photo: null
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prev => ({ ...prev, [name]: value }));
    };

    // Handle file/photo change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setStudentData(prev => ({ ...prev, photo: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    // Handle Form Submit & API Integration
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('name', studentData.name);
        formData.append('email', studentData.email);
        formData.append('phone', studentData.phone);
        formData.append('course', studentData.course);
        formData.append('studentType', studentData.studentType);
        formData.append('totalFees', studentData.totalFees); // <-- Yeh zaroor append karein

        // Agar photo select ki gayi hai tabhi append karein
        if (studentData.photo) {
            formData.append('file', studentData.photo);
        }

        try {
            // Aapke backend ka endpoint: http://localhost:5000/api/admin/student/add
            const response = await axios.post('http://localhost:5000/api/admin/student/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                toast.success("Student successfully add ho gaya!");
                // Form reset karein
                setStudentData({
                    name: '',
                    email: '',
                    phone: '',
                    course: 'Bridal Makeup Course',
                    studentType: 'Online',
                    photo: null
                });
                setPreview(null);
            } else {
                toast.error(response.data.message || "Kuch galti ho gayi!");
            }
        } catch (err) {
            console.error("Error adding student:", err);
            toast.error(err.response?.data?.message || "Student add karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="row justify-content-center">
                <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
                    <h4 className="fw-bold mb-4 text-dark text-center">🎓 Add New Student</h4>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Student Photo Upload Section */}
                            <div className="col-md-4 text-center border-end d-flex flex-column align-items-center justify-content-center">
                                <label className="fw-bold mb-3 d-block">Student Photo</label>
                                <div
                                    className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border shadow-sm"
                                    style={{ width: '160px', height: '160px', overflow: 'hidden', cursor: 'pointer' }}
                                    onClick={() => document.getElementById('studentFile').click()}
                                >
                                    {preview ? (
                                        <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <FaUserGraduate size={50} className="text-muted" />
                                    )}
                                </div>
                                <input type="file" id="studentFile" hidden accept="image/*" onChange={handleFileChange} />
                                <small className="text-muted mt-2 d-block">Click karke photo select karein</small>
                            </div>

                            {/* Student Details Form Fields */}
                            <div className="col-md-8 ps-md-4">
                                <div className="mb-3">
                                    <label className="form-label fw-bold small text-muted">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={studentData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Priya Sharma"
                                        required
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small text-muted">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={studentData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. priya@gmail.com"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small text-muted">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            value={studentData.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. 9876543210"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Student Type: Online / Offline */}
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small text-muted">Student Type</label>
                                        <select
                                            className="form-select fw-semibold"
                                            name="studentType"
                                            value={studentData.studentType}
                                            onChange={handleChange}
                                        >
                                            <option value="Online">💻 Online Student</option>
                                            <option value="Offline">🏫 Offline Student (Academy)</option>
                                        </select>
                                    </div>

                                    {/* Course Selection */}
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small text-muted">Enrolled Course</label>
                                        <select
                                            className="form-select"
                                            name="course"
                                            value={studentData.course}
                                            onChange={handleChange}
                                        >
                                            <option value="Bridal Makeup Course">Bridal Makeup Course</option>
                                            <option value="Advanced Hairstyling">Advanced Hairstyling</option>
                                            <option value="Professional Cosmetology">Professional Cosmetology</option>
                                            <option value="Self Grooming Class">Self Grooming Class</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold small text-muted">Total Fees (₹)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="totalFees"
                                                value={studentData.totalFees}
                                                onChange={handleChange}
                                                placeholder="e.g. 15000"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn w-100 text-white fw-bold py-2 mt-3 shadow-sm"
                                    style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}
                                    disabled={loading}
                                >
                                    <FaSave className="me-2" /> {loading ? 'SAVING...' : 'SAVE STUDENT'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;