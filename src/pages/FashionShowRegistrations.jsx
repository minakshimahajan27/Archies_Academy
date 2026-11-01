import React, { useState, useEffect } from 'react';
import { FaTrash, FaTicketAlt, FaUsers } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FashionShowRegistrations = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRegistrations = async () => {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/admin/fashion-show/registrations');
            if (res.data.success) {
                setRegistrations(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching registrations:", err);
            toast.error("Registrations load karne me error aaya!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Kya aap is registration ko delete karna chahte hain?")) {
            try {
                const res = await axios.delete(`http://localhost:5000/api/admin/fashion-show/registration/delete/${id}`);
                if (res.data.success) {
                    setRegistrations(registrations.filter(reg => reg._id !== id));
                    toast.success("Registration deleted successfully!");
                }
            } catch (err) {
                console.error("Delete error:", err);
                toast.error("Delete karne me error aaya!");
            }
        }
    };

    return (
        <div className="container-fluid p-0">
            <ToastContainer position="top-right" autoClose={3000} />
            <h4 className="fw-bold mb-4 text-dark">🎟️ Fashion Show Registrations ({registrations.length})</h4>

            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : registrations.length === 0 ? (
                <div className="text-center py-5 bg-white rounded shadow-sm border">
                    <FaUsers size={45} className="text-muted mb-3" />
                    <h5 className="fw-bold text-dark">Koi Registration nahi mili</h5>
                    <p className="text-muted small">Abhi tak kisi ne Fashion Show ke liye register nahi kiya hai.</p>
                </div>
            ) : (
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table align-middle mb-0">
                            <thead className="table-light text-uppercase fs-7">
                                <tr>
                                    <th className="py-3 ps-4">Student Name</th>
                                    <th>Contact Info</th>
                                    <th>Pass Code</th>
                                    <th>Transaction ID</th>
                                    <th>Payment Proof</th>
                                    <th className="text-end pe-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrations.map((reg) => (
                                    <tr key={reg._id}>
                                        <td className="ps-4 fw-bold text-dark">{reg.studentName}</td>
                                        <td>
                                            <div className="small text-secondary">📞 {reg.phone}</div>
                                            <div className="small text-muted">✉️ {reg.email}</div>
                                        </td>
                                        <td>
                                            <span className="badge bg-dark text-warning p-2 fw-bold" style={{ fontSize: '13px' }}>
                                                <FaTicketAlt className="me-1" /> {reg.passCode}
                                            </span>
                                        </td>
                                        <td><code>{reg.transactionId}</code></td>
                                        <td>
                                            {reg.paymentScreenshot ? (
                                                <a href={`http://localhost:5000/${reg.paymentScreenshot}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary py-0 px-2">
                                                    View Proof
                                                </a>
                                            ) : (
                                                <span className="text-muted small">N/A</span>
                                            )}
                                        </td>
                                        <td className="text-end pe-4">
                                            <button 
                                                onClick={() => handleDelete(reg._id)}
                                                className="btn btn-sm btn-outline-danger border-0 shadow-none d-flex align-items-center gap-1 ms-auto"
                                                style={{ borderRadius: '6px' }}
                                            >
                                                <FaTrash size={11} /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FashionShowRegistrations;