
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import { getAllPackagesService } from '../src/API/service.js'; // Apna service import karein

// const PackageList = () => {
//     const [packages, setPackages] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     // 1. Data load karna (Database se)
//     const loadPackages = async () => {
//         try {
//             const res = await getAllPackagesService();
//             if (res.success) {
//                 setPackages(res.data);
//             }
//         } catch (error) {
//             console.error("Fetch Error:", error);
//         }
//     };

//     useEffect(() => {
//         loadPackages();
//     }, []);

//     // 2. Delete function
//     const handleDelete = async (id) => {
//         if(window.confirm("Kya aap is package ko delete karna chahte hain?")) {
//             // Yahan delete API call karein
//             // await deletePackageService(id);
//             // loadPackages();
//         }
//     };

//     // 3. Search filter
//     const filteredPackages = packages.filter(pkg => 
//         pkg.packageName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="container-fluid p-0">
//             {/* Search Bar */}
//             <div className="row mb-4">
//                 <div className="col-md-6">
//                     <div className="input-group shadow-sm">
//                         <span className="input-group-text bg-white border-end-0">
//                             <FaSearch className="text-muted" />
//                         </span>
//                         <input 
//                             type="text" 
//                             className="form-control border-start-0" 
//                             placeholder="Search packages by name..." 
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Packages Table */}
//             <div className="card border-0 shadow-sm overflow-hidden " style={{ borderRadius: '15px' }}>
//                 <div className="table-responsive">
//                     <table className="table table-hover align-middle mb-0">
//                         <thead style={{ backgroundColor: '#f8f9fa' }}>
//                             <tr>
//                                 <th className="ps-4">ID</th>
//                                 <th>PACKAGE NAME</th>
//                                 <th>CATEGORY</th>
//                                 <th>PRICE</th>
//                                 <th className="text-center">ACTIONS</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredPackages.map((pkg, index) => (
//                                 <tr key={pkg._id}>
//                                     <td className="ps-4 text-muted">{index + 1}</td>
//                                     <td><div className="fw-bold">{pkg.packageName}</div></td>
//                                     <td><span className="badge rounded-pill bg-light text-dark border px-3">{pkg.category}</span></td>
//                                     <td className="fw-bold text-success">₹{pkg.price}</td>
//                                     <td className="text-center">
//                                         {/* Edit Button: Is par click karne par hum data bhejenge */}
//                                         <button className="btn btn-sm btn-outline-primary me-2 border-0" 
//                                                 data-bs-toggle="modal" data-bs-target="#editModal"
//                                                 onClick={() => console.log("Edit this:", pkg)}>
//                                             <FaEdit />
//                                         </button>
//                                         <button className="btn btn-sm btn-outline-danger border-0" onClick={() => handleDelete(pkg._id)}>
//                                             <FaTrash />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* --- Edit Modal (Pop-up) --- */}
// {/* --- Edit Modal (Pop-up) --- */}
// <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered modal-lg"> 
//         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//             <div className="modal-header border-0 pb-0">
//                 <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3" style={{ fontSize: '1.5rem' }}>
//                     Update Package Details
//                 </h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
            
//             <div className="modal-body p-4">
//                 <form>
//                     <div className="row">
//                         {/* Left Side: Inputs */}
//                         <div className="col-md-7">
//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-muted">Package Name</label>
//                                 <input type="text" className="form-control py-2 shadow-sm" name="packageName" placeholder="Enter package name" />
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-muted">Select Category</label>
//                                 <select className="form-select py-2 shadow-sm" name="category">
//                                     <option value="Bridal Makeup">Bridal Makeup</option>
//                                     <option value="Party Makeup">Party Makeup</option>
//                                     <option value="Hair Styling">Hair Styling</option>
//                                     <option value="Skin Care">Skin Care</option>
//                                 </select>
//                             </div>
                            
//                             <div className="mb-3">
//                                 <label className="form-label small fw-bold text-muted">Price (₹)</label>
//                                 <input type="number" className="form-control py-2 shadow-sm" name="price" placeholder="Enter price" />
//                             </div>
//                         </div>

//                         {/* Right Side: Image Upload */}
//                         <div className="col-md-5 text-center">
//                             <label className="form-label small fw-bold text-muted d-block">Package Image</label>
//                             <div className="border rounded shadow-sm p-2 bg-light mb-2" style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                 {/* Yahan purani image ya preview dikhega */}
//                                 <span className="text-muted small">Image Preview</span>
//                             </div>
//                             <input type="file" className="form-control form-control-sm shadow-sm" accept="image/*" />
//                         </div>
//                     </div>

//                     <div className="mb-3 mt-3">
//                         <label className="form-label small fw-bold text-muted">Description</label>
//                         <textarea className="form-control shadow-sm" name="description" rows="3" placeholder="Enter details..."></textarea>
//                     </div>

//                     <div className="d-grid gap-2 mt-4">
//                         <button type="button" className="btn py-2 fw-bold text-white shadow" 
//                                 style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}>
//                             SAVE CHANGES
//                         </button>
//                         <button type="button" className="btn btn-light py-2 fw-bold text-muted" data-bs-dismiss="modal">
//                             CANCEL
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//     );
// };

// export default PackageList;

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { getAllPackagesService, deletePackageService, updatePackageService } from '../API/service.js'; 

const PackageList = () => {
    const [packages, setPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Edit Form State
    const [editData, setEditData] = useState({
        _id: '',
        packageName: '',
        category: 'Bridal Makeup',
        price: '',
        description: '',
        packageImage: null
    });

    // 1. Data load karna (Database se)
    const loadPackages = async () => {
        try {
            const res = await getAllPackagesService();
            // Yahan check karein: Agar res.data array hai toh set karein
            if (res.success) {
                setPackages(res.data);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    };

    useEffect(() => {
        loadPackages();
    }, []);

    // 2. Delete function
    const handleDelete = async (id) => {
        if(window.confirm("Kya aap is package ko delete karna chahte hain?")) {
            try {
                const res = await deletePackageService(id);
                if(res.success) {
                    alert("Package Deleted!");
                    loadPackages(); // List refresh karein
                }
            } catch (error) {
                console.error("Delete Error:", error);
            }
        }
    };

    // 3. Edit Button click par data modal mein bherna
    const handleEditClick = (pkg) => {
        setEditData({
            _id: pkg._id,
            packageName: pkg.packageName,
            category: pkg.category,
            price: pkg.price,
            description: pkg.description || '',
            packageImage: null // Nayi image upload ke liye reset
        });
    };

    // 4. Update Submit function
    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('packageName', editData.packageName);
        formData.append('category', editData.category);
        formData.append('price', editData.price);
        formData.append('description', editData.description);
        if (editData.packageImage) {
            formData.append('packageImage', editData.packageImage);
        }

        try {
            const res = await updatePackageService(editData._id, formData);
            if (res.success) {
                alert("Updated Successfully!");
                loadPackages(); // List refresh
                // Modal band karne ka logic (bootstrap manual)
                document.getElementById('closeModalBtn').click();
            }
        } catch (error) {
            console.error("Update Error:", error);
        }
    };

    // Search filter
    const filteredPackages = packages.filter(pkg => 
        pkg.packageName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            placeholder="Search packages by name..." 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Packages Table */}
            <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead style={{ backgroundColor: '#f8f9fa' }}>
                            <tr>
                                <th className="ps-4">ID</th>
                                <th>PACKAGE NAME</th>
                                <th>CATEGORY</th>
                                <th>PRICE</th>
                                <th className="text-center">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPackages.map((pkg, index) => (
                                <tr key={pkg._id}>
                                    <td className="ps-4 text-muted">{index + 1}</td>
                                    <td><div className="fw-bold">{pkg.packageName}</div></td>
                                    <td><span className="badge rounded-pill bg-light text-dark border px-3">{pkg.category}</span></td>
                                    <td className="fw-bold text-success">₹{pkg.price}</td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-outline-primary me-2 border-0" 
                                                data-bs-toggle="modal" data-bs-target="#editModal"
                                                onClick={() => handleEditClick(pkg)}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger border-0" onClick={() => handleDelete(pkg._id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- Edit Modal --- */}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg"> 
                    <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3">Update Package</h5>
                            <button type="button" className="btn-close" id="closeModalBtn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form onSubmit={handleUpdate}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Package Name</label>
                                            <input type="text" className="form-control" 
                                                value={editData.packageName}
                                                onChange={(e) => setEditData({...editData, packageName: e.target.value})} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Category</label>
                                            <select className="form-select" value={editData.category}
                                                onChange={(e) => setEditData({...editData, category: e.target.value})}>
                                                <option value="Bridal Makeup">Bridal Makeup</option>
                                                <option value="Party Makeup">Party Makeup</option>
                                                <option value="Hair Styling">Hair Styling</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Price (₹)</label>
                                            <input type="number" className="form-control" 
                                                value={editData.price}
                                                onChange={(e) => setEditData({...editData, price: e.target.value})} required />
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <label className="form-label small fw-bold text-muted">Update Image</label>
                                        <input type="file" className="form-control" 
                                            onChange={(e) => setEditData({...editData, packageImage: e.target.files[0]})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-muted">Description</label>
                                    <textarea className="form-control" rows="3" 
                                        value={editData.description}
                                        onChange={(e) => setEditData({...editData, description: e.target.value})}></textarea>
                                </div>
                                <div className="d-grid gap-2 mt-4">
                                    <button type="submit" className="btn text-white py-2 fw-bold" style={{ backgroundColor: '#B88A4A', borderRadius: '10px' }}>
                                        SAVE CHANGES
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageList;