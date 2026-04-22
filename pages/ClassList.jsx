import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUsers,FaClock } from 'react-icons/fa';

const ClassList = () => {
    const [courses, setCourses] = useState([
        { id: 1, title: 'Advance Bridal Artistry', price: '4999', duration: '30 Days', students: 120 },
        { id: 2, title: 'Quick Hairstyling Pro', price: '1999', duration: '7 Days', students: 45 },
    ]);

    return (
        <div className="container-fluid p-0">
            <div className="row g-4">
                {courses.map((course) => (
                    <div className="col-md-6" key={course.id}>
                        <div className="card border-0 shadow-sm overflow-hidden h-100">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="fw-bold text-dark mb-1">{course.title}</h5>
                                        <span className="badge bg-success bg-opacity-10 text-success mb-3">Online Mode</span>
                                    </div>
                                    <h4 className="fw-bold text-dark">₹{course.price}</h4>
                                </div>
                                
                                <div className="d-flex gap-4 text-muted small mb-4">
                                    <span><FaClock className="me-1"/> {course.duration}</span>
                                    <span><FaUsers className="me-1"/> {course.students} Enrolled</span>
                                </div>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-outline-primary flex-grow-1"><FaEdit /> Edit</button>
                                    <button className="btn btn-sm btn-outline-danger flex-grow-1"><FaTrash /> Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {courses.length === 0 && <p className="text-center mt-5 text-muted">No classes created yet.</p>}
        </div>
    );
};

export default ClassList;