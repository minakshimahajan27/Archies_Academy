
// import React, { useState } from 'react';
// import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';
// import { addPackageService } from '../src/API/service.js'; // Path check kar lein
// import Swal from 'sweetalert2'; // Swal import karna mat bhoolna

// const AddPackage = () => {
//     const [formData, setFormData] = useState({
//         packageName: '',
//         category: 'Bridal Makeup',
//         price: '',
//         description: '',
//         packageImage: '' // Image URL ke liye
//     });

//     const [preview, setPreview] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         // Abhi ke liye hum image name bhej rahe hain ya placeholder
//         // Agar real upload chahiye toh Multer use karna hoga
//         setFormData({ ...formData, packageImage: "https://via.placeholder.com/800x600" }); 
//         setPreview(URL.createObjectURL(file));
//     };

//     // EK HI MAIN FUNCTION
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             console.log("Sending to API:", formData);
            
//             // Asli API call yahan ho rahi hai
//             const result = await addPackageService(formData); 
            
//             if (result.success) {
//                 Swal.fire("Success", "Package Add Ho Gaya!", "success");
//                 // Form reset karne ke liye (Optional)
//                 setFormData({ packageName: '', category: 'Bridal Makeup', price: '', description: '', packageImage: '' });
//                 setPreview(null);
//             }
//         } catch (err) {
//             console.error("API Error:", err);
//             Swal.fire("Error", err.message || "Something went wrong", "error");
//         }
//     };

//     return (
//         <div className="container-fluid p-0">
//             <div className="row justify-content-center">
//                 <div className="col-md-10 col-lg-8">
//                     {/* Yahan handleSubmit hi rakhein */}
//                     <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm border">
//                         <div className="row">
//                             <div className="col-md-7">
//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Package Name</label>
//                                     <input 
//                                         type="text" 
//                                         name="packageName"
//                                         value={formData.packageName}
//                                         className="form-control" 
//                                         placeholder="e.g. Luxury Bridal Package" 
//                                         onChange={handleChange}
//                                         required 
//                                     />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Select Category</label>
//                                     <select 
//                                         name="category" 
//                                         className="form-select" 
//                                         onChange={handleChange}
//                                         value={formData.category}
//                                     >
//                                         <option value="Bridal Makeup">Bridal Makeup</option>
//                                         <option value="Party Makeup">Party Makeup</option>
//                                         <option value="Hair Styling">Hair Styling</option>
//                                         <option value="Skin Care">Skin Care</option>
//                                     </select>
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Price (₹)</label>
//                                     <input 
//                                         type="number" 
//                                         name="price"
//                                         value={formData.price}
//                                         className="form-control" 
//                                         placeholder="Enter amount" 
//                                         onChange={handleChange}
//                                         required 
//                                     />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label className="form-label fw-bold">Description</label>
//                                     <textarea 
//                                         name="description"
//                                         value={formData.description}
//                                         className="form-control" 
//                                         rows="4" 
//                                         placeholder="What's included in this package?" 
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>
//                             </div>

//                             <div className="col-md-5 text-center">
//                                 <label className="form-label fw-bold d-block">Package Image</label>
//                                 <div 
//                                     className="border rounded d-flex flex-column align-items-center justify-content-center bg-light"
//                                     style={{ height: '250px', cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
//                                     onClick={() => document.getElementById('fileInput').click()}
//                                 >
//                                     {preview ? (
//                                         <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                     ) : (
//                                         <>
//                                             <FaCloudUploadAlt size={50} color="#B88A4A" />
//                                             <p className="small text-muted mt-2">Click to upload photo</p>
//                                         </>
//                                     )}
//                                 </div>
//                                 <input 
//                                     type="file" 
//                                     id="fileInput" 
//                                     hidden 
//                                     accept="image/*" 
//                                     onChange={handleImageChange} 
//                                 />
//                             </div>
//                         </div>

//                         <hr className="my-4" />

//                         <div className="d-flex justify-content-end">
//                             <button type="reset" className="btn btn-outline-secondary me-3 px-4" onClick={() => setPreview(null)}>Cancel</button>
//                             <button 
//                                 type="submit" 
//                                 className="btn px-5 text-white fw-bold shadow-sm"
//                                 style={{ backgroundColor: '#B88A4A' }}
//                             >
//                                 <FaSave className="me-2" /> SAVE PACKAGE
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddPackage;

import React, { useState } from 'react';
import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import { addPackageService } from '../API/service.js'; 
import Swal from 'sweetalert2'; 

const AddPackage = () => {
    const [formData, setFormData] = useState({
        packageName: '',
        category: 'Bridal Makeup',
        price: '',
        description: '',
        imageFile: null // Yahan asli file save hogi
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, imageFile: file }); // File object store kiya
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Form data ko Multipart mein convert karna zaroori hai file ke liye
        const data = new FormData();
        data.append('packageName', formData.packageName);
        data.append('category', formData.category);
        data.append('price', formData.price);
        data.append('description', formData.description);
        if (formData.imageFile) {
            data.append('packageImage', formData.imageFile); // 'packageImage' wahi naam hai jo backend multer expect kar raha hai
        }

        try {
            const result = await addPackageService(data); 
            
            if (result.success) {
                Swal.fire("Success", "Package Add Ho Gaya!", "success");
                setFormData({ packageName: '', category: 'Bridal Makeup', price: '', description: '', imageFile: null });
                setPreview(null);
                document.getElementById('fileInput').value = ""; // Input clear
            }
        } catch (err) {
            console.error("API Error:", err);
            Swal.fire("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm border">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Package Name</label>
                                    <input 
                                        type="text" 
                                        name="packageName"
                                        value={formData.packageName}
                                        className="form-control" 
                                        placeholder="e.g. Luxury Bridal Package" 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Select Category</label>
                                    <select 
                                        name="category" 
                                        className="form-select" 
                                        onChange={handleChange}
                                        value={formData.category}
                                    >
                                        <option value="Bridal Makeup">Bridal Makeup</option>
                                        <option value="Party Makeup">Party Makeup</option>
                                        <option value="Hair Styling">Hair Styling</option>
                                        <option value="Skin Care">Skin Care</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Price (₹)</label>
                                    <input 
                                        type="number" 
                                        name="price"
                                        value={formData.price}
                                        className="form-control" 
                                        placeholder="Enter amount" 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Description</label>
                                    <textarea 
                                        name="description"
                                        value={formData.description}
                                        className="form-control" 
                                        rows="4" 
                                        placeholder="What's included in this package?" 
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-md-5 text-center">
                                <label className="form-label fw-bold d-block">Package Image</label>
                                <div 
                                    className="border rounded d-flex flex-column align-items-center justify-content-center bg-light"
                                    style={{ height: '250px', cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    {preview ? (
                                        <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <>
                                            <FaCloudUploadAlt size={50} color="#B88A4A" />
                                            <p className="small text-muted mt-2">Click to upload photo</p>
                                        </>
                                    )}
                                </div>
                                <input 
                                    type="file" 
                                    id="fileInput" 
                                    hidden 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                />
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-end">
                            <button type="reset" className="btn btn-outline-secondary me-3 px-4" onClick={() => {setPreview(null); setFormData({...formData, imageFile: null})}}>Cancel</button>
                            <button 
                                type="submit" 
                                className="btn px-5 text-white fw-bold shadow-sm"
                                style={{ backgroundColor: '#B88A4A' }}
                            >
                                <FaSave className="me-2" /> SAVE PACKAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;