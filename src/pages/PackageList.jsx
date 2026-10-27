
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import { getAllPackagesService } from '../API/service.js'; // Apna service import karein

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


// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import { getAllPackagesService, updatePackageService, deletePackageService } from '../API/service.js';

// const PackageList = () => {
//     const [packages, setPackages] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
    
//     // Selected package for editing
//     const [selectedPackage, setSelectedPackage] = useState({
//         _id: "",
//         packageName: "",
//         category: "Bridal Makeup",
//         price: "",
//         description: "",
//     });

//     const [selectedImage, setSelectedImage] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [loading, setLoading] = useState(false);

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

//     // 2. Delete function with API integration
//     const handleDelete = async (id) => {
//         if(window.confirm("Kya aap is package ko delete karna chahte hain?")) {
//             try {
//                 const res = await deletePackageService(id);
//                 if (res.success || res) {
//                     alert("Package successfully delete ho gaya!");
//                     loadPackages(); // List refresh karein
//                 }
//             } catch (error) {
//                 alert("Delete error: " + error.message);
//             }
//         }
//     };

//     // Input change handler for edit form text fields
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSelectedPackage(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // Image file change handler
//     const handleImageChange = (e) => {
//         setSelectedImage(e.target.files[0]);
//     };

//     // Open Modal function
//     const handleOpenEditModal = (pkg) => {
//         setSelectedPackage(pkg);
//         setSelectedImage(null); // Reset file input
//         setShowModal(true);
//     };

//     // Close Modal function
//     const handleCloseEditModal = () => {
//         setShowModal(false);
//     };

//     // Handle Update form submit with API & FormData
//     const handleUpdateSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             // FormData create karein kyunki image aur text data dono bhejne hain
//             const formData = new FormData();
//             formData.append("packageName", selectedPackage.packageName);
//             formData.append("category", selectedPackage.category);
//             formData.append("price", selectedPackage.price);
//             formData.append("description", selectedPackage.description);
            
//             // Agar user ne nayi image select ki hai toh use append karein
//             if (selectedImage) {
//                 formData.append("image", selectedImage);
//             }

//             const res = await updatePackageService(selectedPackage._id, formData);
            
//             if (res.success || res) {
//                 alert("Package successfully update ho gaya!");
//                 setShowModal(false);
//                 loadPackages(); // Table data refresh karne ke liye
//             }
//         } catch (error) {
//             alert("Update Error: " + error.message);
//         } finally {
//             setLoading(false);
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
//             <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
//                 <div className="table-responsive">
//                     <table className={`table ${!showModal ? 'table-hover' : ''} align-middle mb-0`}>
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
//                                         <button className="btn btn-sm btn-outline-primary me-2 border-0" 
//                                                 onClick={() => handleOpenEditModal(pkg)}>
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

//             {/* --- Edit Modal --- */}
//             {showModal && (
//                 <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
//                     <div className="modal-dialog modal-dialog-centered modal-lg"> 
//                         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//                             <div className="modal-header border-0 pb-0">
//                                 <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3" style={{ fontSize: '1.5rem' }}>
//                                     Update Package Details
//                                 </h5>
//                                 <button type="button" className="btn-close" onClick={handleCloseEditModal} aria-label="Close"></button>
//                             </div>
                            
//                             <div className="modal-body p-4">
//                                 <form onSubmit={handleUpdateSubmit}>
//                                     <div className="row">
//                                         {/* Left Side: Inputs */}
//                                         <div className="col-md-7">
//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Package Name</label>
//                                                 <input 
//                                                     type="text" 
//                                                     className="form-control py-2 shadow-sm" 
//                                                     name="packageName" 
//                                                     value={selectedPackage.packageName || ""} 
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>

//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Select Category</label>
//                                                 <select 
//                                                     className="form-select py-2 shadow-sm" 
//                                                     name="category"
//                                                     value={selectedPackage.category || ""}
//                                                     onChange={handleInputChange}
//                                                 >
//                                                     <option value="Bridal Makeup">Bridal Makeup</option>
//                                                     <option value="Party Makeup">Party Makeup</option>
//                                                     <option value="Hair Styling">Hair Styling</option>
//                                                     <option value="Skin Care">Skin Care</option>
//                                                 </select>
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Price (₹)</label>
//                                                 <input 
//                                                     type="number" 
//                                                     className="form-control py-2 shadow-sm" 
//                                                     name="price" 
//                                                     value={selectedPackage.price || ""} 
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>

//                                         {/* Right Side: Image Upload */}
//                                         <div className="col-md-5 text-center">
//                                             <label className="form-label small fw-bold text-muted d-block">Package Image</label>
//                                             <div className="border rounded shadow-sm p-2 bg-light mb-2" style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                                 {selectedPackage.image && typeof selectedPackage.image === 'string' ? (
//                                                     <img src={selectedPackage.image} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
//                                                 ) : (
//                                                     <span className="text-muted small">Image Preview</span>
//                                                 )}
//                                             </div>
//                                             <input type="file" className="form-control form-control-sm shadow-sm" accept="image/*" onChange={handleImageChange} />
//                                         </div>
//                                     </div>

//                                     <div className="mb-3 mt-3">
//                                         <label className="form-label small fw-bold text-muted">Description</label>
//                                         <textarea 
//                                             className="form-control shadow-sm" 
//                                             name="description" 
//                                             rows="3" 
//                                             value={selectedPackage.description || ""} 
//                                             onChange={handleInputChange}
//                                         ></textarea>
//                                     </div>

//                                     <div className="d-grid gap-2 mt-4">
//                                         <button type="submit" className="btn py-2 fw-bold text-white shadow" 
//                                                 style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}
//                                                 disabled={loading}>
//                                             {loading ? "UPDATING..." : "SAVE CHANGES"}
//                                         </button>
//                                         <button type="button" className="btn btn-light py-2 fw-bold text-muted" onClick={handleCloseEditModal}>
//                                             CANCEL
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

// export default PackageList;




// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaSearch, FaSpinner } from 'react-icons/fa';
// import { getAllPackagesService, updatePackageService, deletePackageService } from '../API/service.js';

// const PackageList = () => {
//     const [packages, setPackages] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
    
//     // Selected package for editing
//     const [selectedPackage, setSelectedPackage] = useState({
//         _id: "",
//         packageName: "",
//         category: "Bridal Makeup",
//         price: "",
//         description: "",
//     });

//     const [selectedImage, setSelectedImage] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [deleteLoadingId, setDeleteLoadingId] = useState(null); // Specific row delete loading ke liye

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

//     // 2. Styled Delete function with loading state
//     const handleDelete = async (id) => {
//         if(window.confirm("🗑️ Kya aap wakai is package ko delete karna chahte hain?")) {
//             try {
//                 setDeleteLoadingId(id); // Jo row delete ho rahi hai uspar loading dikhane ke liye
//                 const res = await deletePackageService(id);
//                 if (res.success || res) {
//                     loadPackages(); // List refresh karein
//                 }
//             } catch (error) {
//                 alert("Delete error: " + error.message);
//             } finally {
//                 setDeleteLoadingId(null);
//             }
//         }
//     };

//     // Input change handler for edit form text fields
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSelectedPackage(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // Image file change handler
//     const handleImageChange = (e) => {
//         setSelectedImage(e.target.files[0]);
//     };

//     // Open Modal function
//     const handleOpenEditModal = (pkg) => {
//         setSelectedPackage(pkg);
//         setSelectedImage(null);
//         setShowModal(true);
//     };

//     // Close Modal function
//     const handleCloseEditModal = () => {
//         setShowModal(false);
//     };

//     // Handle Update form submit with API & FormData
//     const handleUpdateSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const formData = new FormData();
//             formData.append("packageName", selectedPackage.packageName);
//             formData.append("category", selectedPackage.category);
//             formData.append("price", selectedPackage.price);
//             formData.append("description", selectedPackage.description);
            
//             if (selectedImage) {
//                 formData.append("packageImage", selectedImage);
//             }

//             const res = await updatePackageService(selectedPackage._id, formData);
            
//             if (res.success || res) {
//                 setShowModal(false);
//                 loadPackages(); 
//             }
//         } catch (error) {
//             alert("Update Error: " + error.message);
//         } finally {
//             setLoading(false);
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
//                     <div className="input-group shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//                         <span className="input-group-text bg-white border-end-0">
//                             <FaSearch className="text-muted" />
//                         </span>
//                         <input 
//                             type="text" 
//                             className="form-control border-start-0 py-2" 
//                             placeholder="Search packages by name..." 
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Packages Table */}
//             <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
//                 <div className="table-responsive">
//                     <table className={`table ${!showModal ? 'table-hover' : ''} align-middle mb-0`}>
//                         <thead style={{ backgroundColor: '#f8f9fa' }}>
//                             <tr>
//                                 <th className="ps-4 py-3">ID</th>
//                                 <th className="py-3">PACKAGE NAME</th>
//                                 <th className="py-3">CATEGORY</th>
//                                 <th className="py-3">PRICE</th>
//                                 <th className="text-center py-3">ACTIONS</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredPackages.length > 0 ? (
//                                 filteredPackages.map((pkg, index) => (
//                                     <tr key={pkg._id}>
//                                         <td className="ps-4 text-muted fw-semibold">{index + 1}</td>
//                                         <td><div className="fw-bold text-dark">{pkg.packageName}</div></td>
//                                         <td><span className="badge rounded-pill bg-light text-dark border px-3 py-2">{pkg.category}</span></td>
//                                         <td className="fw-bold text-success">₹{pkg.price}</td>
//                                         <td className="text-center">
//                                             <button className="btn btn-sm btn-outline-primary me-2 border-0 shadow-sm" 
//                                                     style={{ backgroundColor: '#fff' }}
//                                                     onClick={() => handleOpenEditModal(pkg)}
//                                                     title="Edit Package">
//                                                 <FaEdit />
//                                             </button>
//                                             <button className="btn btn-sm btn-outline-danger border-0 shadow-sm" 
//                                                     style={{ backgroundColor: '#fff' }}
//                                                     onClick={() => handleDelete(pkg._id)}
//                                                     disabled={deleteLoadingId === pkg._id}
//                                                     title="Delete Package">
//                                                 {deleteLoadingId === pkg._id ? <FaSpinner className="fa-spin" /> : <FaTrash />}
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="5" className="text-center py-4 text-muted">Koi packages nahi mile.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* --- Edit Modal --- */}
//             {showModal && (
//                 <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }}>
//                     <div className="modal-dialog modal-dialog-centered modal-lg"> 
//                         <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
//                             <div className="modal-header border-0 pb-0">
//                                 <h5 className="modal-title fw-bold text-dark w-100 text-center mt-3" style={{ fontSize: '1.5rem' }}>
//                                     ✨ Update Package Details
//                                 </h5>
//                                 <button type="button" className="btn-close shadow-none" onClick={handleCloseEditModal} aria-label="Close"></button>
//                             </div>
                            
//                             <div className="modal-body p-4">
//                                 <form onSubmit={handleUpdateSubmit}>
//                                     <div className="row">
//                                         {/* Left Side: Inputs */}
//                                         <div className="col-md-7">
//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Package Name</label>
//                                                 <input 
//                                                     type="text" 
//                                                     className="form-control py-2 shadow-sm" 
//                                                     name="packageName" 
//                                                     value={selectedPackage.packageName || ""} 
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>

//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Select Category</label>
//                                                 <select 
//                                                     className="form-select py-2 shadow-sm" 
//                                                     name="category"
//                                                     value={selectedPackage.category || ""}
//                                                     onChange={handleInputChange}
//                                                 >
//                                                     <option value="Bridal Makeup">Bridal Makeup</option>
//                                                     <option value="Party Makeup">Party Makeup</option>
//                                                     <option value="Hair Styling">Hair Styling</option>
//                                                     <option value="Skin Care">Skin Care</option>
//                                                 </select>
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label className="form-label small fw-bold text-muted">Price (₹)</label>
//                                                 <input 
//                                                     type="number" 
//                                                     className="form-control py-2 shadow-sm" 
//                                                     name="price" 
//                                                     value={selectedPackage.price || ""} 
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>

//                                         {/* Right Side: Image Upload */}
//                                         <div className="col-md-5 text-center">
//                                             <label className="form-label small fw-bold text-muted d-block">Package Image</label>
//                                             <div className="border rounded shadow-sm p-2 bg-light mb-2 d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
//                                                 {selectedPackage.image && typeof selectedPackage.image === 'string' && !selectedImage ? (
//                                                     <img src={selectedPackage.image} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px' }} />
//                                                 ) : selectedImage ? (
//                                                     <span className="text-success small fw-bold">{selectedImage.name}</span>
//                                                 ) : (
//                                                     <span className="text-muted small">Image Preview</span>
//                                                 )}
//                                             </div>
//                                             <input type="file" className="form-control form-control-sm shadow-sm" accept="image/*" onChange={handleImageChange} />
//                                         </div>
//                                     </div>

//                                     <div className="mb-3 mt-3">
//                                         <label className="form-label small fw-bold text-muted">Description</label>
//                                         <textarea 
//                                             className="form-control shadow-sm" 
//                                             name="description" 
//                                             rows="3" 
//                                             value={selectedPackage.description || ""} 
//                                             onChange={handleInputChange}
//                                         ></textarea>
//                                     </div>

//                                     <div className="d-grid gap-2 mt-4">
//                                         <button type="submit" className="btn py-2 fw-bold text-white shadow-sm" 
//                                                 style={{ backgroundColor: '#B88A4A', borderRadius: '10px', border: 'none' }}
//                                                 disabled={loading}>
//                                             {loading ? <><FaSpinner className="fa-spin me-2" /> UPDATING...</> : "SAVE CHANGES"}
//                                         </button>
//                                         <button type="button" className="btn btn-light py-2 fw-bold text-muted border" onClick={handleCloseEditModal} style={{ borderRadius: '10px' }}>
//                                             CANCEL
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

// export default PackageList;

import React, { useState, useEffect } from "react";
import {
    FaEdit,
    FaTrash,
    FaSearch,
    FaSpinner,
    FaImage,
} from "react-icons/fa";

import {
    getAllPackagesService,
    updatePackageService,
    deletePackageService,
} from "../API/service.js";

const PackageList = () => {
    const [packages, setPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Selected package
    const [selectedPackage, setSelectedPackage] = useState({
        _id: "",
        packageName: "",
        category: "Bridal Makeup",
        price: "",
        description: "",
        image: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);
    const [fetchLoading, setFetchLoading] = useState(false);

    // =====================================================
    // LOAD PACKAGES
    // =====================================================
    const loadPackages = async () => {
        try {
            setFetchLoading(true);

            const res = await getAllPackagesService();

            if (res?.success) {
                setPackages(
                    Array.isArray(res.data) ? res.data : []
                );
            } else {
                setPackages([]);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setPackages([]);
        } finally {
            setFetchLoading(false);
        }
    };

    useEffect(() => {
        loadPackages();
    }, []);

    // =====================================================
    // MODAL SCROLL FIX
    // =====================================================
    useEffect(() => {
        if (showModal) {
            // Scrollbar ki jagah permanently reserve rahegi.
            // Isse form/page left-right shift nahi hoga.
            document.documentElement.style.scrollbarGutter =
                "stable";

            // Background page scroll lock
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.scrollbarGutter =
                "";

            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.scrollbarGutter =
                "";

            document.body.style.overflow = "";
        };
    }, [showModal]);

    // =====================================================
    // DELETE PACKAGE
    // =====================================================
    const handleDelete = async (id) => {
        if (!id) {
            alert("Package ID nahi mila.");
            return;
        }

        const confirmDelete = window.confirm(
            "🗑️ Kya aap waqai is package ko delete karna chahte hain?"
        );

        if (!confirmDelete) return;

        try {
            setDeleteLoadingId(id);

            const res = await deletePackageService(id);

            if (res?.success || res === true) {
                await loadPackages();
            } else {
                alert(
                    res?.message ||
                        "Package delete nahi hua."
                );
            }
        } catch (error) {
            console.error("Delete Error:", error);

            alert(
                error?.response?.data?.message ||
                    error?.message ||
                    "Delete karte waqt error aa gaya."
            );
        } finally {
            setDeleteLoadingId(null);
        }
    };

    // =====================================================
    // INPUT CHANGE
    // =====================================================
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setSelectedPackage((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // IMAGE CHANGE
    // =====================================================
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            setSelectedImage(null);
            setImagePreview(
                selectedPackage.image || ""
            );
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");

            e.target.value = "";

            return;
        }

        setSelectedImage(file);

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    };

    // =====================================================
    // OPEN EDIT MODAL
    // =====================================================
    const handleOpenEditModal = (pkg) => {
        setSelectedPackage({
            _id: pkg?._id || "",
            packageName: pkg?.packageName || "",
            category:
                pkg?.category || "Bridal Makeup",
            price: pkg?.price ?? "",
            description: pkg?.description || "",
            image: pkg?.image || "",
        });

        setSelectedImage(null);

        setImagePreview(pkg?.image || "");

        setShowModal(true);
    };

    // =====================================================
    // CLOSE MODAL
    // =====================================================
    const handleCloseEditModal = () => {
        if (loading) return;

        setShowModal(false);

        setSelectedPackage({
            _id: "",
            packageName: "",
            category: "Bridal Makeup",
            price: "",
            description: "",
            image: "",
        });

        setSelectedImage(null);

        setImagePreview("");
    };

    // =====================================================
    // UPDATE PACKAGE
    // API SAME RAHEGI
    // =====================================================
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        if (!selectedPackage?._id) {
            alert("Package ID nahi mila.");
            return;
        }

        if (!selectedPackage.packageName.trim()) {
            alert("Please enter package name.");
            return;
        }

        if (!selectedPackage.category) {
            alert("Please select category.");
            return;
        }

        if (
            selectedPackage.price === "" ||
            selectedPackage.price === null ||
            selectedPackage.price === undefined
        ) {
            alert("Please enter price.");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();

            formData.append(
                "packageName",
                selectedPackage.packageName.trim()
            );

            formData.append(
                "category",
                selectedPackage.category
            );

            formData.append(
                "price",
                String(selectedPackage.price)
            );

            formData.append(
                "description",
                selectedPackage.description?.trim() ||
                    ""
            );

            // New image selected ho tabhi send hogi
            if (selectedImage instanceof File) {
                formData.append(
                    "packageImage",
                    selectedImage
                );
            }

            // IMPORTANT:
            // API bilkul same hai
            const res = await updatePackageService(
                selectedPackage._id,
                formData
            );

            console.log("Update Response:", res);

            if (res?.success === true || res === true) {
                alert(
                    res?.message ||
                        "Package updated successfully."
                );

                setShowModal(false);

                setSelectedImage(null);

                setImagePreview("");

                await loadPackages();
            } else {
                alert(
                    res?.message ||
                        "Package update nahi hua."
                );
            }
        } catch (error) {
            console.error("Update Error:", error);

            alert(
                error?.response?.data?.message ||
                    error?.response?.data?.error ||
                    error?.message ||
                    "Package update karte waqt error aa gaya."
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // SEARCH
    // =====================================================
    const filteredPackages = packages.filter(
        (pkg) => {
            const packageName =
                pkg?.packageName || "";

            return packageName
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                );
        }
    );

    // =====================================================
    // UI
    // =====================================================
    return (
        <div
            className="container-fluid p-0"
            style={{
                width: "100%",
                maxWidth: "100%",
            }}
        >
            {/* ================= SEARCH ================= */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div
                        className="input-group shadow-sm"
                        style={{
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <span className="input-group-text bg-white border-end-0">
                            <FaSearch className="text-muted" />
                        </span>

                        <input
                            type="text"
                            className="form-control border-start-0 py-2"
                            placeholder="Search packages by name..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </div>

            {/* ================= TABLE ================= */}
            <div
                className="card border-0 shadow-sm overflow-hidden"
                style={{
                    borderRadius: "15px",
                }}
            >
                <div className="table-responsive">
                    <table
                        className={`table ${
                            !showModal
                                ? "table-hover"
                                : ""
                        } align-middle mb-0`}
                    >
                        <thead
                            style={{
                                backgroundColor:
                                    "#f8f9fa",
                            }}
                        >
                            <tr>
                                <th className="ps-4 py-3">
                                    ID
                                </th>

                                <th className="py-3">
                                    PACKAGE NAME
                                </th>

                                <th className="py-3">
                                    CATEGORY
                                </th>

                                <th className="py-3">
                                    PRICE
                                </th>

                                <th className="text-center py-3">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {fetchLoading ? (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-5"
                                    >
                                        <FaSpinner className="fa-spin me-2" />
                                        Loading packages...
                                    </td>
                                </tr>
                            ) : filteredPackages.length >
                              0 ? (
                                filteredPackages.map(
                                    (
                                        pkg,
                                        index
                                    ) => (
                                        <tr
                                            key={
                                                pkg?._id ||
                                                index
                                            }
                                        >
                                            <td className="ps-4 text-muted fw-semibold">
                                                {index +
                                                    1}
                                            </td>

                                            <td>
                                                <div className="fw-bold text-dark">
                                                    {pkg?.packageName ||
                                                        "-"}
                                                </div>
                                            </td>

                                            <td>
                                                <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                                                    {pkg?.category ||
                                                        "-"}
                                                </span>
                                            </td>

                                            <td className="fw-bold text-success">
                                                ₹
                                                {pkg?.price ??
                                                    0}
                                            </td>

                                            <td className="text-center">
                                                {/* EDIT */}
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-primary me-2 border-0 shadow-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#fff",
                                                    }}
                                                    onClick={() =>
                                                        handleOpenEditModal(
                                                            pkg
                                                        )
                                                    }
                                                    disabled={
                                                        deleteLoadingId !==
                                                        null
                                                    }
                                                    title="Edit Package"
                                                >
                                                    <FaEdit />
                                                </button>

                                                {/* DELETE */}
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger border-0 shadow-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#fff",
                                                    }}
                                                    onClick={() =>
                                                        handleDelete(
                                                            pkg?._id
                                                        )
                                                    }
                                                    disabled={
                                                        deleteLoadingId ===
                                                        pkg?._id
                                                    }
                                                    title="Delete Package"
                                                >
                                                    {deleteLoadingId ===
                                                    pkg?._id ? (
                                                        <FaSpinner className="fa-spin" />
                                                    ) : (
                                                        <FaTrash />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-5 text-muted"
                                    >
                                        Koi packages nahi
                                        mile.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* =====================================================
                UPDATE PACKAGE MODAL
            ===================================================== */}
            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: "fixed",
                        inset: 0,

                        width: "100%",
                        height: "100%",

                        zIndex: 1055,

                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",

                        padding: "20px",

                        boxSizing: "border-box",

                        backgroundColor:
                            "rgba(0, 0, 0, 0.5)",

                        backdropFilter:
                            "blur(3px)",

                        WebkitBackdropFilter:
                            "blur(3px)",

                        overflow: "hidden",
                    }}
                >
                    {/* MODAL DIALOG */}
                    <div
                        className="modal-dialog"
                        style={{
                            width: "100%",
                            maxWidth: "850px",

                            margin: "0 auto",

                            maxHeight:
                                "calc(100vh - 40px)",

                            boxSizing: "border-box",
                        }}
                    >
                        {/* MODAL CONTENT */}
                        <div
                            className="modal-content border-0 shadow-lg"
                            style={{
                                width: "100%",

                                maxHeight:
                                    "calc(100vh - 40px)",

                                borderRadius: "20px",

                                overflow: "hidden",

                                backgroundColor:
                                    "#ffffff",
                            }}
                        >
                            {/* ================= HEADER ================= */}
                            <div
                                className="modal-header border-0"
                                style={{
                                    position:
                                        "relative",

                                    padding:
                                        "25px 55px 15px",

                                    flexShrink: 0,
                                }}
                            >
                                <h5
                                    className="modal-title fw-bold text-dark w-100 text-center m-0"
                                    style={{
                                        fontSize:
                                            "1.5rem",
                                    }}
                                >
                                    ✨ Update Package
                                    Details
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close shadow-none"
                                    onClick={
                                        handleCloseEditModal
                                    }
                                    disabled={
                                        loading
                                    }
                                    aria-label="Close"
                                    style={{
                                        position:
                                            "absolute",

                                        right:
                                            "20px",

                                        top:
                                            "25px",
                                    }}
                                ></button>
                            </div>

                            {/* ================= BODY ================= */}
                            <div
                                className="modal-body"
                                style={{
                                    padding:
                                        "15px 25px 25px",

                                    overflowY:
                                        "auto",

                                    overflowX:
                                        "hidden",

                                    maxHeight:
                                        "calc(100vh - 110px)",

                                    boxSizing:
                                        "border-box",
                                }}
                            >
                                <form
                                    onSubmit={
                                        handleUpdateSubmit
                                    }
                                >
                                    <div className="row">
                                        {/* ================= LEFT ================= */}
                                        <div className="col-md-7">
                                            {/* PACKAGE NAME */}
                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted">
                                                    Package
                                                    Name
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control py-2 shadow-sm"
                                                    name="packageName"
                                                    value={
                                                        selectedPackage.packageName ||
                                                        ""
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    required
                                                    disabled={
                                                        loading
                                                    }
                                                    placeholder="Enter package name"
                                                />
                                            </div>

                                            {/* CATEGORY */}
                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted">
                                                    Select
                                                    Category
                                                </label>

                                                <select
                                                    className="form-select py-2 shadow-sm"
                                                    name="category"
                                                    value={
                                                        selectedPackage.category ||
                                                        ""
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    disabled={
                                                        loading
                                                    }
                                                    required
                                                >
                                                    <option value="Bridal Makeup">
                                                        Bridal
                                                        Makeup
                                                    </option>

                                                    <option value="Party Makeup">
                                                        Party
                                                        Makeup
                                                    </option>

                                                    <option value="Hair Styling">
                                                        Hair
                                                        Styling
                                                    </option>

                                                    <option value="Skin Care">
                                                        Skin
                                                        Care
                                                    </option>
                                                </select>
                                            </div>

                                            {/* PRICE */}
                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted">
                                                    Price
                                                    (₹)
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control py-2 shadow-sm"
                                                    name="price"
                                                    value={
                                                        selectedPackage.price ??
                                                        ""
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    min="0"
                                                    required
                                                    disabled={
                                                        loading
                                                    }
                                                    placeholder="Enter price"
                                                />
                                            </div>
                                        </div>

                                        {/* ================= RIGHT IMAGE ================= */}
                                        <div className="col-md-5 text-center">
                                            <label className="form-label small fw-bold text-muted d-block">
                                                Package
                                                Image
                                            </label>

                                            <div
                                                className="border rounded shadow-sm p-2 bg-light mb-2 d-flex align-items-center justify-content-center"
                                                style={{
                                                    height:
                                                        "150px",

                                                    overflow:
                                                        "hidden",
                                                }}
                                            >
                                                {imagePreview ? (
                                                    <img
                                                        src={
                                                            imagePreview
                                                        }
                                                        alt="Package Preview"
                                                        style={{
                                                            maxHeight:
                                                                "100%",

                                                            maxWidth:
                                                                "100%",

                                                            objectFit:
                                                                "contain",

                                                            borderRadius:
                                                                "8px",
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="text-muted">
                                                        <FaImage
                                                            size={
                                                                35
                                                            }
                                                        />

                                                        <div className="small mt-2">
                                                            Image
                                                            Preview
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <input
                                                type="file"
                                                className="form-control form-control-sm shadow-sm"
                                                accept="image/*"
                                                onChange={
                                                    handleImageChange
                                                }
                                                disabled={
                                                    loading
                                                }
                                            />

                                            {selectedImage && (
                                                <div className="text-success small fw-bold mt-2 text-truncate">
                                                    {
                                                        selectedImage.name
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="mb-3 mt-3">
                                        <label className="form-label small fw-bold text-muted">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control shadow-sm"
                                            name="description"
                                            rows="3"
                                            value={
                                                selectedPackage.description ||
                                                ""
                                            }
                                            onChange={
                                                handleInputChange
                                            }
                                            disabled={
                                                loading
                                            }
                                            placeholder="Enter package description"
                                        ></textarea>
                                    </div>

                                    {/* ================= BUTTONS ================= */}
                                    <div className="d-grid gap-2 mt-4">
                                        <button
                                            type="submit"
                                            className="btn py-2 fw-bold text-white shadow-sm"
                                            style={{
                                                backgroundColor:
                                                    "#B88A4A",

                                                borderRadius:
                                                    "10px",

                                                border: "none",
                                            }}
                                            disabled={
                                                loading
                                            }
                                        >
                                            {loading ? (
                                                <>
                                                    <FaSpinner className="fa-spin me-2" />
                                                    UPDATING...
                                                </>
                                            ) : (
                                                "SAVE CHANGES"
                                            )}
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-light py-2 fw-bold text-muted border"
                                            onClick={
                                                handleCloseEditModal
                                            }
                                            disabled={
                                                loading
                                            }
                                            style={{
                                                borderRadius:
                                                    "10px",
                                            }}
                                        >
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

export default PackageList;
