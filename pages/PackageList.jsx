import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const PackageList = () => {
    // Dummy Data: Real app mein ye data API se aayega
    const [packages, setPackages] = useState([
        { id: 1, name: 'Bridal Royal HD', category: 'Bridal Makeup', price: '15000', status: 'Active' },
        { id: 2, name: 'Engagement Glow', category: 'Party Makeup', price: '5000', status: 'Active' },
        { id: 3, name: 'Self Makeup Course', category: 'Online Classes', price: '3499', status: 'Active' },
    ]);

    const handleDelete = (id) => {
        if(window.confirm("Kya aap is package ko delete karna chahte hain?")) {
            setPackages(packages.filter(pkg => pkg.id !== id));
        }
    };

    return (
        <div className="container-fluid p-0">
            {/* Search Bar */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group shadow-sm">
                        <span className="input-group-text bg-white border-end-0">
                            <FaSearch className="text-muted" />
                        </span>
                        <input 
                            type="text" 
                            className="form-control border-start-0" 
                            placeholder="Search packages..." 
                        />
                    </div>
                </div>
            </div>

            {/* Packages Table */}
            <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                            <tr>
                                <th className="ps-4 py-3 text-muted small fw-bold">ID</th>
                                <th className="py-3 text-muted small fw-bold">PACKAGE NAME</th>
                                <th className="py-3 text-muted small fw-bold">CATEGORY</th>
                                <th className="py-3 text-muted small fw-bold">PRICE</th>
                                <th className="py-3 text-muted small fw-bold">STATUS</th>
                                <th className="py-3 text-center text-muted small fw-bold">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((pkg, index) => (
                                <tr key={pkg.id}>
                                    <td className="ps-4 text-muted small">{index + 1}</td>
                                    <td>
                                        <div className="fw-bold text-dark">{pkg.name}</div>
                                    </td>
                                    <td>
                                        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                                            {pkg.category}
                                        </span>
                                    </td>
                                    <td className="fw-bold text-success">₹{pkg.price}</td>
                                    <td>
                                        <span className="badge bg-success bg-opacity-10 text-success px-3">
                                            {pkg.status}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-outline-primary me-2 border-0 shadow-none">
                                            <FaEdit />
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger border-0 shadow-none"
                                            onClick={() => handleDelete(pkg.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {packages.length === 0 && (
                <div className="text-center py-5">
                    <p className="text-muted">Koi bhi package nahi mila.</p>
                </div>
            )}
        </div>
    );
};

export default PackageList;