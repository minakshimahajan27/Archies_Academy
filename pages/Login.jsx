

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
// import { FaLock, FaUserShield } from 'react-icons/fa';

// const AdminLogin = () => {
//     const [credentials, setCredentials] = useState({ email: '', password: '' });
//     const navigate = useNavigate(); // 2. navigate function initialize karein

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Login Logic (Example: Agar email aur pass sahi hai)
//         if (credentials.email === "admin@archies.com" && credentials.password === "admin123") {
//             console.log("Login Successful!");
//             navigate('/dashboard'); // 3. Dashboard page par redirect karein
//         } else {
//             alert("Invalid Credentials!");
//         }
//     };

//     return (
//         <div className="d-flex align-items-center justify-content-center" 
//              style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
            
//             <div className="card shadow-lg border-0" style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }}>
//                 <div className="card-header text-center border-0 py-4" style={{ backgroundColor: '#B88A4A', color: 'white' }}>
//                     <FaUserShield size={40} className="mb-2" />
//                     <h4 className="m-0 fw-bold">Admin Panel</h4>
//                 </div>
                
//                 <div className="card-body p-4">
//                     <form onSubmit={handleSubmit}> {/* 4. Form submit handle karein */}
//                         <div className="mb-3">
//                             <label className="form-label small fw-bold text-muted">Admin Email</label>
//                             <input 
//                                 type="email" 
//                                 className="form-control" 
//                                 placeholder="admin@archies.com"
//                                 onChange={(e) => setCredentials({...credentials, email: e.target.value})}
//                                 required 
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="form-label small fw-bold text-muted">Secret Password</label>
//                             <input 
//                                 type="password" 
//                                 className="form-control" 
//                                 placeholder="••••••••"
//                                 onChange={(e) => setCredentials({...credentials, password: e.target.value})}
//                                 required 
//                             />
//                         </div>

//                         <button type="submit" className="btn w-100 py-2 fw-bold text-white shadow-sm" 
//                                 style={{ backgroundColor: '#B88A4A', border: 'none' }}>
//                             <FaLock className="me-2" /> ACCESS DASHBOARD
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUserShield } from 'react-icons/fa';
import axios from 'axios'; // 1. Axios import karein

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false); // Loading state ke liye
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 2. Real API Call
            const response = await axios.post('http://localhost:5000/api/admin/login', credentials);

            if (response.data.success) {
                console.log("Login Successful!", response.data);
                
                // 3. Token ko LocalStorage mein save karein (taki login rahe)
                localStorage.setItem('adminToken', response.data.token);
                
                alert("Welcome Back!");
                navigate('/dashboard'); 
            }
        } catch (error) {
            // 4. Error handling
            console.error("Login Error:", error.response?.data?.message);
            alert(error.response?.data?.message || "Invalid Credentials!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" 
             style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
            
            <div className="card shadow-lg border-0" style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }}>
                <div className="card-header text-center border-0 py-4" style={{ backgroundColor: '#B88A4A', color: 'white' }}>
                    <FaUserShield size={40} className="mb-2" />
                    <h4 className="m-0 fw-bold">Admin Panel</h4>
                </div>
                
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted">Admin Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="admin@example.com"
                                value={credentials.email}
                                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                                required 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label small fw-bold text-muted">Secret Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="••••••••"
                                value={credentials.password}
                                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading} // Loading ke waqt button disable
                            className="btn w-100 py-2 fw-bold text-white shadow-sm" 
                            style={{ backgroundColor: '#B88A4A', border: 'none' }}>
                            {loading ? (
                                <span className="spinner-border spinner-border-sm me-2"></span>
                            ) : (
                                <FaLock className="me-2" />
                            )}
                            {loading ? 'VERIFYING...' : 'ACCESS DASHBOARD'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;