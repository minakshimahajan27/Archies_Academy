// // // import React, { useState } from 'react';
// // // import { 
// // //     FaTachometerAlt, FaUsers, FaGraduationCap, 
// // //     FaImages, FaSignOutAlt, FaBars, FaChartLine 
// // // } from 'react-icons/fa';
// // // import { Link } from 'react-router-dom';

// // // const Dashboard = () => {
// // //     const [isSidebarOpen, setSidebarOpen] = useState(true);

// // //     // Dummy Stats Data
// // //     const stats = [
// // //         { id: 1, title: 'Total Students', count: '150', icon: <FaUsers />, color: '#B88A4A' },
// // //         { id: 2, title: 'Active Classes', count: '12', icon: <FaGraduationCap />, color: '#2d3436' },
// // //         { id: 3, title: 'Gallery Images', count: '45', icon: <FaImages />, color: '#B88A4A' },
// // //         { id: 4, title: 'Total Earnings', count: '₹50,000', icon: <FaChartLine />, color: '#2d3436' },
// // //     ];

// // //     return (
// // //         <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>

// // //             {/* --- SIDEBAR --- */}
// // //             <div className={`sidebar bg-dark text-white p-3 ${isSidebarOpen ? 'd-block' : 'd-none'}`} 
// // //                  style={{ width: '260px', transition: '0.3s' }}>
// // //                 <div className="text-center mb-4 border-bottom border-secondary pb-3">
// // //                     <h4 className="fw-bold" style={{ color: '#B88A4A' }}>Archies Admin</h4>
// // //                 </div>

// // //                 <ul className="nav flex-column gap-2">
// // //                     <li className="nav-item">
// // //                         <Link className="nav-link text-white d-flex align-items-center gap-3 p-3 rounded bg-secondary bg-opacity-25" to="/dashboard">
// // //                             <FaTachometerAlt /> Dashboard
// // //                         </Link>
// // //                     </li>
// // //                     <li className="nav-item">
// // //                         <Link className="nav-link text-white d-flex align-items-center gap-3 p-3 rounded" to="/admin/students">
// // //                             <FaUsers /> Students
// // //                         </Link>
// // //                     </li>
// // //                     <li className="nav-item">
// // //                         <Link className="nav-link text-white d-flex align-items-center gap-3 p-3 rounded" to="/admin/classes">
// // //                             <FaGraduationCap /> Online Classes
// // //                         </Link>
// // //                     </li>
// // //                     <li className="nav-item">
// // //                         <Link className="nav-link text-white d-flex align-items-center gap-3 p-3 rounded" to="/admin/gallery">
// // //                             <FaImages /> Gallery Manager
// // //                         </Link>
// // //                     </li>
// // //                     <li className="nav-item mt-5">
// // //                         <Link className="nav-link text-danger d-flex align-items-center gap-3 p-3 rounded" to="/login">
// // //                             <FaSignOutAlt /> Logout
// // //                         </Link>
// // //                     </li>
// // //                 </ul>
// // //             </div>

// // //             {/* --- MAIN CONTENT --- */}
// // //             <div className="flex-grow-1">
// // //                 {/* Top Navbar */}
// // //                 <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
// // //                     <button className="btn p-0 border-0" onClick={() => setSidebarOpen(!isSidebarOpen)}>
// // //                         <FaBars size={20} />
// // //                     </button>
// // //                     <div className="ms-auto d-flex align-items-center gap-3">
// // //                         <span className="fw-bold">Admin Name</span>
// // //                         <div style={{ width: '40px', height: '40px', backgroundColor: '#B88A4A', borderRadius: '50%' }}></div>
// // //                     </div>
// // //                 </nav>

// // //                 {/* Dashboard Body */}
// // //                 <div className="p-4">
// // //                     <h2 className="mb-4 fw-bold">Overview</h2>

// // //                     {/* Stats Cards */}
// // //                     <div className="row g-4 mb-5">
// // //                         {stats.map((item) => (
// // //                             <div className="col-md-3" key={item.id}>
// // //                                 <div className="card border-0 shadow-sm p-3 h-100" style={{ borderLeft: `5px solid ${item.color}` }}>
// // //                                     <div className="d-flex align-items-center gap-3">
// // //                                         <div className="p-3 rounded-circle text-white" style={{ backgroundColor: item.color }}>
// // //                                             {item.icon}
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-muted mb-0 small uppercase">{item.title}</p>
// // //                                             <h4 className="fw-bold mb-0">{item.count}</h4>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>

// // //                     {/* Quick Action Table */}
// // //                     <div className="card border-0 shadow-sm p-4">
// // //                         <div className="d-flex justify-content-between align-items-center mb-3">
// // //                             <h5 className="fw-bold m-0">Recent Enquiries</h5>
// // //                             <button className="btn btn-sm text-white" style={{ backgroundColor: '#B88A4A' }}>View All</button>
// // //                         </div>
// // //                         <div className="table-responsive">
// // //                             <table className="table table-hover align-middle">
// // //                                 <thead className="table-light">
// // //                                     <tr>
// // //                                         <th>Date</th>
// // //                                         <th>Name</th>
// // //                                         <th>Service</th>
// // //                                         <th>Status</th>
// // //                                         <th>Action</th>
// // //                                     </tr>
// // //                                 </thead>
// // //                                 <tbody>
// // //                                     <tr>
// // //                                         <td>20 Oct 2023</td>
// // //                                         <td>Neha Sharma</td>
// // //                                         <td>Bridal Makeup</td>
// // //                                         <td><span className="badge bg-success">Completed</span></td>
// // //                                         <td><button className="btn btn-outline-secondary btn-sm">Edit</button></td>
// // //                                     </tr>
// // //                                     <tr>
// // //                                         <td>18 Oct 2023</td>
// // //                                         <td>Priya Rai</td>
// // //                                         <td>Hair Styling</td>
// // //                                         <td><span className="badge bg-warning text-dark">Pending</span></td>
// // //                                         <td><button className="btn btn-outline-secondary btn-sm">Edit</button></td>
// // //                                     </tr>
// // //                                 </tbody>
// // //                             </table>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Dashboard;

// // import React, { useState } from 'react';
// // import { 
// //     FaTachometerAlt, FaUsers, FaGraduationCap, FaImages, 
// //     FaPlus, FaTrash, FaVideo, FaQuoteLeft, FaIdCard 
// // } from 'react-icons/fa';

// // const AdminDashboard = () => {
// //     const [activeTab, setActiveTab] = useState('packages');

// //     return (
// //         <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
// //             {/* --- SIDEBAR --- */}
// //             <div className="bg-dark text-white p-3" style={{ width: '250px',marginTop:"80px"}}>
// //                 <h4 className="text-center fw-bold mb-4" style={{ color: '#B88A4A' }}>Archies Admin</h4>
// //                 <div className="nav flex-column gap-2">
// //                     <button onClick={() => setActiveTab('packages')} className={`btn text-start text-white p-3 ${activeTab === 'packages' ? 'bg-primary' : ''}`}><FaPlus className="me-2"/> Manage Packages</button>
// //                     <button onClick={() => setActiveTab('media')} className={`btn text-start text-white p-3 ${activeTab === 'media' ? 'bg-primary' : ''}`}><FaImages className="me-2"/> Photos & Videos</button>
// //                     <button onClick={() => setActiveTab('team')} className={`btn text-start text-white p-3 ${activeTab === 'team' ? 'bg-primary' : ''}`}><FaIdCard className="me-2"/> Team Members</button>
// //                     <button onClick={() => setActiveTab('testimonials')} className={`btn text-start text-white p-3 ${activeTab === 'testimonials' ? 'bg-primary' : ''}`}><FaQuoteLeft className="me-2"/> Testimonials</button>
// //                     <button onClick={() => setActiveTab('classes')} className={`btn text-start text-white p-3 ${activeTab === 'classes' ? 'bg-primary' : ''}`}><FaGraduationCap className="me-2"/> Online Classes</button>
// //                 </div>
// //             </div>

// //             {/* --- MAIN CONTENT AREA --- */}
// //             <div className="flex-grow-1 p-4">
// //                 <header className="d-flex justify-content-between align-items-center mb-4">
// //                     <h2 className="fw-bold text-capitalize">{activeTab.replace('-', ' ')}</h2>
// //                     <button className="btn text-white" style={{ backgroundColor: '#B88A4A' }}>+ Add New Item</button>
// //                 </header>

// //                 {/* Conditional Sections Based on Tab */}
// //                 <div className="card border-0 shadow-sm p-4">
// //                     {activeTab === 'packages' && <ManagePackages />}
// //                     {activeTab === 'media' && <ManageMedia />}
// //                     {activeTab === 'team' && <ManageTeam />}
// //                     {activeTab === 'testimonials' && <ManageTestimonials />}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // /* --- 1. MANAGE PACKAGES (Bridal, Party Makeup etc.) --- */
// // const ManagePackages = () => (
// //     <div className="table-responsive">
// //         <h5>Bridal & Service Packages</h5>
// //         <table className="table">
// //             <thead>
// //                 <tr>
// //                     <th>Package Name</th>
// //                     <th>Price</th>
// //                     <th>Description</th>
// //                     <th>Actions</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 <tr>
// //                     <td>Bridal Royal Makeup</td>
// //                     <td>₹15,000</td>
// //                     <td>HD Makeup, Hair, Draping...</td>
// //                     <td><button className="btn btn-sm btn-danger"><FaTrash /></button></td>
// //                 </tr>
// //             </tbody>
// //         </table>
// //     </div>
// // );

// // /* --- 2. MANAGE MEDIA (Photos & Videos) --- */
// // const ManageMedia = () => (
// //     <div>
// //         <h5>Gallery (Photos & Video Links)</h5>
// //         <div className="row g-3">
// //             <div className="col-md-4">
// //                 <div className="border p-2 text-center">
// //                     <div className="bg-light mb-2" style={{height: '100px'}}>Photo Preview</div>
// //                     <button className="btn btn-sm btn-outline-danger w-100">Delete</button>
// //                 </div>
// //             </div>
// //             <div className="col-md-4">
// //                 <div className="border p-2 text-center">
// //                     <div className="bg-light mb-2 d-flex align-items-center justify-content-center" style={{height: '100px'}}><FaVideo size={30}/></div>
// //                     <small>Video Link: youtube.com/...</small>
// //                     <button className="btn btn-sm btn-outline-danger w-100 mt-2">Delete</button>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // );

// // /* --- 3. MANAGE TEAM MEMBERS --- */
// // const ManageTeam = () => (
// //     <div>
// //         <h5>Our Expert Team</h5>
// //         <table className="table align-middle">
// //             <thead>
// //                 <tr>
// //                     <th>Photo</th>
// //                     <th>Name</th>
// //                     <th>Designation</th>
// //                     <th>Action</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 <tr>
// //                     <td><div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#eee'}}></div></td>
// //                     <td>Minakshi Mahajan</td>
// //                     <td>Senior Stylist</td>
// //                     <td><button className="btn btn-sm btn-danger"><FaTrash /></button></td>
// //                 </tr>
// //             </tbody>
// //         </table>
// //     </div>
// // );

// // /* --- 4. TESTIMONIALS (What Clients Say) --- */
// // const ManageTestimonials = () => (
// //     <div>
// //         <h5>Client Reviews</h5>
// //         <div className="list-group">
// //             <div className="list-group-item">
// //                 <p className="mb-1 italic">"Great experience! The bridal makeup was stunning."</p>
// //                 <small className="fw-bold">- Riya Singh</small>
// //                 <div className="mt-2">
// //                     <button className="btn btn-sm text-danger p-0">Remove Review</button>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // );

// // export default AdminDashboard;

// import React, { useState } from 'react';
// import { 
//     FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera, 
//     FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt 
// } from 'react-icons/fa';

// const AdminDashboard = () => {
//     const [openMenu, setOpenMenu] = useState(''); // Kaunsa menu khula hai
//     const [activeView, setActiveView] = useState('welcome'); // Kaunsa page dikh raha hai

//     // Menu Toggle Function
//     const toggleMenu = (menuName) => {
//         setOpenMenu(openMenu === menuName ? '' : menuName);
//     };

//     const sidebarItems = [
//         { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
//         { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
//         { id: 'team', label: 'Team Members', icon: <FaUsers />, sub: ['Add Member', 'Member List'] },
//         { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
//         { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'View All Classes'] },
//     ];

//     return (
//         <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' ,marginTop:'80px'}}>

//             {/* --- SIDEBAR --- */}
//             <div className="bg-dark text-white p-3 shadow" style={{ width: '280px' }}>
//                 <h3 className="text-center fw-bold py-4" style={{ color: '#B88A4A' }}>ARCHIES PANEL</h3>

//                 <div className="nav flex-column mt-3">
//                     {sidebarItems.map((item) => (
//                         <div key={item.id} className="mb-2">
//                             {/* Main Menu Button */}
//                             <button 
//                                 onClick={() => toggleMenu(item.id)}
//                                 className="btn text-white w-100 d-flex justify-content-between align-items-center p-3 border-0"
//                                 style={{ backgroundColor: openMenu === item.id ? '#333' : 'transparent' }}
//                             >
//                                 <span>{item.icon} <span className="ms-2">{item.label}</span></span>
//                                 <FaChevronDown style={{ fontSize: '12px', transform: openMenu === item.id ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
//                             </button>

//                             {/* Sub-Menu (Dropdown) */}
//                             {openMenu === item.id && (
//                                 <div className="bg-secondary bg-opacity-10 rounded-3 mt-1 ms-2">
//                                     {item.sub.map((subItem) => (
//                                         <button 
//                                             key={subItem}
//                                             onClick={() => setActiveView(subItem)}
//                                             className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0"
//                                             style={{ color: activeView === subItem ? '#B88A4A' : '' }}
//                                         >
//                                             {subItem.includes('Add') ? <FaPlus size={10} className="me-2"/> : <FaList size={10} className="me-2"/>}
//                                             {subItem}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}

//                     <button className="btn text-danger mt-5 p-3 text-start w-100 border-0">
//                         <FaSignOutAlt className="me-2"/> Logout
//                     </button>
//                 </div>
//             </div>

//             {/* --- MAIN CONTENT AREA --- */}
//             <div className="flex-grow-1 p-5">
//                 <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px' }}>
//                     {activeView === 'welcome' ? (
//                         <div className="text-center py-5">
//                             <h2 className="text-muted">Welcome to Archies Admin Dashboard</h2>
//                             <p>Left side menu se options select karke data manage karein.</p>
//                         </div>
//                     ) : (
//                         <div>
//                             <h3 className="fw-bold mb-4 border-bottom pb-2" style={{ color: '#B88A4A' }}>{activeView}</h3>

//                             {/* Logic to show Form or List */}
//                             {activeView.includes('Add') ? (
//                                 <div className="row justify-content-center">
//                                     <div className="col-md-8">
//                                         {/* Common Form Template */}
//                                         <div className="p-4 border rounded">
//                                             <div className="mb-3">
//                                                 <label className="form-label fw-bold">Enter Title / Name</label>
//                                                 <input type="text" className="form-control" />
//                                             </div>
//                                             <div className="mb-3">
//                                                 <label className="form-label fw-bold">Select Category</label>
//                                                 <select className="form-select">
//                                                     <option>Bridal</option>
//                                                     <option>Party</option>
//                                                     <option>Video</option>
//                                                     <option>Review</option>
//                                                 </select>
//                                             </div>
//                                             <div className="mb-3">
//                                                 <label className="form-label fw-bold">Price / Link</label>
//                                                 <input type="text" className="form-control" />
//                                             </div>
//                                             <div className="mb-3">
//                                                 <label className="form-label fw-bold">Upload File</label>
//                                                 <input type="file" className="form-control" />
//                                             </div>
//                                             <button className="btn text-white w-100 py-2 fw-bold" style={{ backgroundColor: '#B88A4A' }}>SUBMIT DATA</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="table-responsive">
//                                     {/* Common List Template */}
//                                     <table className="table table-hover mt-3">
//                                         <thead className="table-dark">
//                                             <tr>
//                                                 <th>Image/Icon</th>
//                                                 <th>Name</th>
//                                                 <th>Category</th>
//                                                 <th>Action</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td><div style={{width:'40px', height:'40px', backgroundColor:'#eee'}}></div></td>
//                                                 <td>Sample {activeView.split(' ')[0]}</td>
//                                                 <td>General</td>
//                                                 <td><button className="btn btn-danger btn-sm">Delete</button></td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';
// import { 
//     FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera, 
//     FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt 
// } from 'react-icons/fa';

// const AdminDashboard = () => {
//     // State to handle dropdowns
//     const [openMenu, setOpenMenu] = useState(''); 
//     // State to handle which form or list to show
//     const [activeView, setActiveView] = useState('Welcome'); 

//     const toggleMenu = (menuName) => {
//         setOpenMenu(openMenu === menuName ? '' : menuName);
//     };

//     const menuItems = [
//         { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
//         { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
//         { id: 'team', label: 'Team Members', icon: <FaUsers />, sub: ['Add Member', 'Member List'] },
//         { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
//         { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'Class List'] },
//     ];

//     return (
//         <div className="d-flex" style={{ minHeight:'10vh', backgroundColor: '#f8f9fa'}}>

//             {/* --- SIDEBAR --- */}
//             <div className="bg-dark text-white p-3 shadow" style={{ width: '280px',height:'600px' ,marginTop:'80px'  }}>
//                 <h3 className="text-center fw-bold py-4 mt-2" style={{ color: '#B88A4A', letterSpacing: '1px' }}>
//                     ARCHIES PANEL
//                 </h3>

//                 <div className="nav flex-column mt-3">
//                     {menuItems.map((item) => (
//                         <div key={item.id} className="mb-2">
//                             {/* Main Menu Button */}
//                             <button 
//                                 onClick={() => toggleMenu(item.id)}
//                                 className="btn text-white w-100 d-flex justify-content-between align-items-center p-3 border-0 shadow-none"
//                                 style={{ 
//                                     backgroundColor: openMenu === item.id ? '#2c2c2c' : 'transparent',
//                                     fontSize: '15px'
//                                 }}
//                             >
//                                 <span>{item.icon} <span className="ms-3">{item.label}</span></span>
//                                 <FaChevronDown style={{ 
//                                     fontSize: '11px', 
//                                     transform: openMenu === item.id ? 'rotate(180deg)' : 'none', 
//                                     transition: '0.3s' 
//                                 }} />
//                             </button>

//                             {/* Dropdown Options */}
//                             {openMenu === item.id && (
//                                 <div className="bg-black bg-opacity-25 rounded-3 mt-1 ms-2">
//                                     {item.sub.map((subItem) => (
//                                         <button 
//                                             key={subItem}
//                                             onClick={() => setActiveView(subItem)}
//                                             className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0 shadow-none sub-menu-btn"
//                                             style={{ 
//                                                 color: activeView === subItem ? '#B88A4A' : 'rgba(255,255,255,0.6)',
//                                                 fontSize: '14px'
//                                             }}
//                                         >
//                                             {subItem.includes('Add') ? <FaPlus size={10} className="me-2"/> : <FaList size={10} className="me-2"/>}
//                                             {subItem}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}

//                     {/* Logout Button */}
//                     <button className="btn text-danger mt-5 p-3 text-start w-100 border-0 shadow-none fw-bold" style={{ fontSize: '15px' }}>
//                         <FaSignOutAlt className="me-2"/> Logout
//                     </button>
//                 </div>
//             </div>

//             {/* --- MAIN CONTENT AREA --- */}
//             <div className="flex-grow-1 p-5 d-flex align-items-start justify-content-center">
//                 <div className="card shadow-sm border-0 p-5 w-100" style={{ borderRadius: '20px', minHeight: '70vh' ,marginTop:'80px'}}>

//                     {activeView === 'Welcome' ? (
//                         <div className="text-center my-auto">
//                             <h1 className="fw-bold text-dark mb-3">Welcome to Archies Admin Dashboard</h1>
//                             <p className="text-muted fs-5">Left side menu se options select karke data manage karein.</p>


// import React, { useState, useEffect } from 'react';
// import {
//     FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera,
//     FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt, FaChartPie, FaCrown
// } from 'react-icons/fa';
// import axios from 'axios';

// // Components Import
// import AddPackage from './AddPackage';
// import PackageList from './PackageList';
// import AddMedia from './AddMedia';
// import MediaList from './MediaList';
// import AddStudent from './Addstudent'; 
// import StudentList from './StudentList';
// import AddReview from './AddReview';
// import ReviewList from './ReviewList';
// import AddClass from './AddClass';
// import ClassList from './ClassList';
// import FashionShowManage from './FashionShowManage';
// import FashionShowRegistrations from './FashionShowRegistrations';

// const AdminDashboard = () => {
//     const [openMenu, setOpenMenu] = useState('');
//     const [activeView, setActiveView] = useState('Welcome');

//     // Dashboard Stats & Lists (Fashion show Data Excluded Here)
//     const [stats, setStats] = useState({
//         packages: 0,
//         media: 0,
//         students: 0,
//         reviews: 0,
//         classes: 0
//     });
//     const [studentsList, setStudentsList] = useState([]);
//     const [loadingStats, setLoadingStats] = useState(true);

//     useEffect(() => {
//         const fetchDashboardData = async () => {
//             try {
//                 setLoadingStats(true);
//                 const [pkgRes, mediaRes, studentRes, reviewRes, classRes] = await Promise.allSettled([
//                     axios.get('http://localhost:5000/api/admin/packages/all'),
//                     axios.get('http://localhost:5000/api/admin/media/all'),
//                     axios.get('http://localhost:5000/api/admin/student/getall'),
//                     axios.get('http://localhost:5000/api/admin/reviews/all'),
//                     axios.get('http://localhost:5000/api/admin/courses/all')
//                 ]);

//                 // Deep Safe Array Extraction for API Response Differences
//                 const extractArray = (res) => {
//                     if (res.status === 'fulfilled' && res.value?.data) {
//                         const d = res.value.data;
//                         if (Array.isArray(d)) return d;
//                         if (Array.isArray(d.data)) return d.data;
//                         if (Array.isArray(d.students)) return d.students;
//                         if (Array.isArray(d.classes)) return d.classes;
//                         if (Array.isArray(d.packages)) return d.packages;
//                         if (Array.isArray(d.reviews)) return d.reviews;
//                         if (Array.isArray(d.media)) return d.media;
//                     }
//                     return [];
//                 };

//                 const pkgs = extractArray(pkgRes);
//                 const medias = extractArray(mediaRes);
//                 const students = extractArray(studentRes);
//                 const reviews = extractArray(reviewRes);
//                 const classes = extractArray(classRes);

//                 setStudentsList(students);

//                 setStats({
//                     packages: pkgs.length,
//                     media: medias.length,
//                     students: students.length,
//                     reviews: reviews.length,
//                     classes: classes.length,
//                 });
//             } catch (err) {
//                 console.error("Dashboard overview stats fetch error:", err);
//             } finally {
//                 setLoadingStats(false);
//             }
//         };

//         if (activeView === 'Welcome') {
//             fetchDashboardData();
//         }
//     }, [activeView]);

//     const toggleMenu = (menuName) => {
//         setOpenMenu(openMenu === menuName ? '' : menuName);
//     };

//     // Sidebar Menu Items - Fashion Show Option Re-Added Here
//     const menuItems = [
//         { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
//         { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
//         { id: 'students', label: 'Students', icon: <FaUsers />, sub: ['Add Students', 'Students List'] },
//         { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
//         { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'Class List'] },
//         { id: 'fashion', label: 'Fashion Show', icon: <FaCrown />, sub: ['Event Settings', 'Registrations List'] },
//     ];

//     // Dynamic Chart Slice Calculations
//     const totalItems = stats.students + stats.packages + stats.media + stats.classes + stats.reviews;
//     const studentDeg = totalItems > 0 ? (stats.students / totalItems) * 360 : 0;
//     const classDeg = totalItems > 0 ? studentDeg + (stats.classes / totalItems) * 360 : studentDeg;
//     const pkgDeg = totalItems > 0 ? classDeg + (stats.packages / totalItems) * 360 : classDeg;
//     const mediaDeg = totalItems > 0 ? pkgDeg + (stats.media / totalItems) * 360 : pkgDeg;

//     // --- STYLISH DASHBOARD OVERVIEW (FASHION SHOW EXCLUDED) ---
//     const renderOverview = () => {
//         return (
//             <div>
//                 {/* Header Welcome Bar */}
//                 <div className="d-flex justify-content-between align-items-center mb-4 p-4 rounded-4 shadow-sm text-white" style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', borderLeft: '6px solid #B88A4A' }}>
//                     <div>
//                         <h4 className="fw-bold mb-1" style={{ color: '#B88A4A' }}>Archies Beauty Academy Dashboard</h4>
//                         <p className="text-muted small mb-0">Welcome back, Admin! Real-time academy summary and quick shortcuts.</p>
//                     </div>
//                     <div className="text-end d-none d-md-block">
//                         <span className="badge p-2 px-3 fw-normal" style={{ backgroundColor: 'rgba(184, 138, 74, 0.15)', color: '#B88A4A', border: '1px solid #B88A4A' }}>
//                             📅 {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
//                         </span>
//                     </div>
//                 </div>

//                 {loadingStats ? (
//                     <div className="text-center py-5">
//                         <div className="spinner-border text-warning" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Top 4 Main Stats Cards */}
//                         <div className="row g-3 mb-4">
//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => setActiveView('Students List')} style={{ cursor: 'pointer', borderTop: '4px solid #B88A4A' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">TOTAL STUDENTS</span>
//                                         <div className="p-2 rounded-3 text-white" style={{ backgroundColor: '#B88A4A' }}><FaUsers size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.students}</h3>
//                                     <small className="text-success" style={{ fontSize: '11px' }}>Enrolled candidates</small>
//                                 </div>
//                             </div>

//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => setActiveView('Class List')} style={{ cursor: 'pointer', borderTop: '4px solid #ffc107' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">ONLINE CLASSES</span>
//                                         <div className="p-2 rounded-3 text-white bg-warning"><FaLaptopCode size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.classes}</h3>
//                                     <small className="text-warning" style={{ fontSize: '11px' }}>Active lectures</small>
//                                 </div>
//                             </div>

//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => setActiveView('Package List')} style={{ cursor: 'pointer', borderTop: '4px solid #17a2b8' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">ACTIVE PACKAGES</span>
//                                         <div className="p-2 rounded-3 text-white bg-info"><FaBoxes size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.packages}</h3>
//                                     <small className="text-info" style={{ fontSize: '11px' }}>Salon packages</small>
//                                 </div>
//                             </div>

//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => setActiveView('Media List')} style={{ cursor: 'pointer', borderTop: '4px solid #28a745' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">MEDIA FILES</span>
//                                         <div className="p-2 rounded-3 text-white bg-success"><FaCamera size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.media}</h3>
//                                     <small className="text-success" style={{ fontSize: '11px' }}>Photos & videos</small>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Middle Section: Dynamic Circular Graph + Quick Actions */}
//                         <div className="row g-4 mb-4">
//                             {/* Circular Chart Component */}
//                             <div className="col-lg-6">
//                                 <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 text-center">
//                                     <h5 className="fw-bold text-dark mb-2 text-start" style={{ color: '#B88A4A' }}>Academy Data Overview</h5>
//                                     <p className="text-muted small text-start mb-3">Live proportional distribution of students, classes, and packages.</p>
                                    
//                                     <div className="d-flex justify-content-center align-items-center my-2">
//                                         <div 
//                                             className="rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm"
//                                             style={{ 
//                                                 width: '190px', 
//                                                 height: '190px', 
//                                                 background: totalItems > 0 
//                                                     ? `conic-gradient(#B88A4A 0deg ${studentDeg}deg, #ffc107 ${studentDeg}deg ${classDeg}deg, #17a2b8 ${classDeg}deg ${pkgDeg}deg, #28a745 ${pkgDeg}deg ${mediaDeg}deg, #6c757d ${mediaDeg}deg 360deg)`
//                                                     : '#e9ecef',
//                                                 padding: '14px',
//                                                 transition: 'all 0.5s ease'
//                                             }}
//                                         >
//                                             <div className="bg-white rounded-circle w-100 h-100 d-flex flex-column align-items-center justify-content-center">
//                                                 <h2 className="fw-bold text-dark mb-0">{totalItems}</h2>
//                                                 <small className="text-muted fw-bold" style={{ fontSize: '11px', color: '#B88A4A' }}>TOTAL RECORDS</small>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#B88A4A' }}></span>
//                                             <small className="text-muted fw-semibold">Students ({stats.students})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#ffc107' }}></span>
//                                             <small className="text-muted fw-semibold">Classes ({stats.classes})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#17a2b8' }}></span>
//                                             <small className="text-muted fw-semibold">Packages ({stats.packages})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#28a745' }}></span>
//                                             <small className="text-muted fw-semibold">Media ({stats.media})</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Quick Action Shortcuts */}
//                             <div className="col-lg-6">
//                                 <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
//                                     <h5 className="fw-bold text-dark mb-3">Quick Actions</h5>
                                    
//                                     <div className="row g-3 mt-1">
//                                         <div className="col-md-6">
//                                             <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => setActiveView('Add Students')} style={{ cursor: 'pointer' }}>
//                                                 <div>
//                                                     <h6 className="fw-bold mb-1 text-dark">Add Student</h6>
//                                                     <small className="text-muted">Register student</small>
//                                                 </div>
//                                                 <FaPlus style={{ color: '#B88A4A' }} size={16} />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => setActiveView('Add New Class')} style={{ cursor: 'pointer' }}>
//                                                 <div>
//                                                     <h6 className="fw-bold mb-1 text-dark">Online Class</h6>
//                                                     <small className="text-muted">Schedule lecture</small>
//                                                 </div>
//                                                 <FaPlus className="text-warning" size={16} />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => setActiveView('Add Package')} style={{ cursor: 'pointer' }}>
//                                                 <div>
//                                                     <h6 className="fw-bold mb-1 text-dark">Add Package</h6>
//                                                     <small className="text-muted">Create service plan</small>
//                                                 </div>
//                                                 <FaPlus className="text-info" size={16} />
//                                             </div>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => setActiveView('Add Media')} style={{ cursor: 'pointer' }}>
//                                                 <div>
//                                                     <h6 className="fw-bold mb-1 text-dark">Upload Media</h6>
//                                                     <small className="text-muted">Add photo/video</small>
//                                                 </div>
//                                                 <FaPlus className="text-success" size={16} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Recent Students Directory Table */}
//                         <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
//                             <div className="d-flex justify-content-between align-items-center mb-3">
//                                 <h5 className="fw-bold text-dark mb-0">({studentsList.length})</h5>
//                                 <button className="btn btn-sm text-white" style={{ backgroundColor: '#B88A4A' }} onClick={() => setActiveView('Students List')}>View All</button>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="table align-middle mb-0">
//                                     <thead className="table-light fs-7">
//                                         <tr>
//                                             <th>#</th>
//                                             <th>Student Name</th>
//                                             <th>Email</th>
//                                             <th>Phone</th>
//                                             <th>Status</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {studentsList.slice(0, 5).length === 0 ? (
//                                             <tr>
//                                                 <td colSpan="5" className="text-center text-muted py-3">No student records found.</td>
//                                             </tr>
//                                         ) : (
//                                             studentsList.slice(0, 5).map((student, index) => (
//                                                 <tr key={student._id || index}>
//                                                     <td>{index + 1}</td>
//                                                     <td className="fw-bold text-dark">{student.name || student.studentName || 'N/A'}</td>
//                                                     <td>{student.email || 'N/A'}</td>
//                                                     <td>{student.phone || student.mobile || 'N/A'}</td>
//                                                     <td><span className="badge bg-success">Active</span></td>
//                                                 </tr>
//                                             ))
//                                         )}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>
//         );
//     };

//     const renderContent = () => {
//         switch (activeView) {
//             case 'Welcome':
//                 return renderOverview();
//             case 'Add Package':
//                 return <AddPackage />;
//             case 'Package List':
//                 return <PackageList />;
//             case 'Add Media':
//                 return <AddMedia />;
//             case 'Media List':
//                 return <MediaList />;
//             case 'Add Students':
//                 return <AddStudent />;
//             case 'Students List':
//                 return <StudentList />;
//             case 'Add Review':
//                 return <AddReview />;
//             case 'Review List':
//                 return <ReviewList />;
//             case 'Add New Class':
//                 return <AddClass />;
//             case 'Class List':
//                 return <ClassList />;
//             case 'Event Settings':
//                 return <FashionShowManage />;
//             case 'Registrations List':
//                 return <FashionShowRegistrations />;
//             default:
//                 return <div className="p-4"><h3>Content for {activeView} is coming soon...</h3></div>;
//         }
//     };

//     return (
//         <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
//             {/* Sidebar including Fashion Show Dropdown */}
//             <div className="bg-dark text-white p-3 shadow" style={{ width: '280px', minHeight: '100vh', position: 'fixed', top: '0', left: '0', paddingTop: '80px', zIndex: 100 }}>
//                 <h3 
//                     className="text-center fw-bold py-4 mt-2" 
//                     style={{ color: '#B88A4A', letterSpacing: '1px', cursor: 'pointer' }}
//                     onClick={() => setActiveView('Welcome')}
//                 >
//                     ARCHIES PANEL
//                 </h3>

//                 <div className="nav flex-column mt-3">
//                     <button
//                         onClick={() => setActiveView('Welcome')}
//                         className="btn text-white w-100 d-flex align-items-center p-3 border-0 shadow-none mb-2"
//                         style={{ backgroundColor: activeView === 'Welcome' ? '#2c2c2c' : 'transparent', color: activeView === 'Welcome' ? '#B88A4A' : '#fff', fontSize: '15px' }}
//                     >
//                         <FaChartPie className="me-3" /> Dashboard
//                     </button>

//                     {menuItems.map((item) => (
//                         <div key={item.id} className="mb-2">
//                             <button
//                                 onClick={() => toggleMenu(item.id)}
//                                 className="btn text-white w-100 d-flex justify-content-between align-items-center p-3 border-0 shadow-none"
//                                 style={{ backgroundColor: openMenu === item.id ? '#2c2c2c' : 'transparent', fontSize: '15px' }}
//                             >
//                                 <span>{item.icon} <span className="ms-3">{item.label}</span></span>
//                                 <FaChevronDown style={{
//                                     fontSize: '11px',
//                                     transform: openMenu === item.id ? 'rotate(180deg)' : 'none',
//                                     transition: '0.3s'
//                                 }} />
//                             </button>

//                             {openMenu === item.id && (
//                                 <div className="bg-black bg-opacity-25 rounded-3 mt-1 ms-2">
//                                     {item.sub.map((subItem) => (
//                                         <button
//                                             key={subItem}
//                                             onClick={() => setActiveView(subItem)}
//                                             className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0 shadow-none"
//                                             style={{
//                                                 color: activeView === subItem ? '#B88A4A' : 'rgba(255,255,255,0.6)',
//                                                 fontSize: '14px'
//                                             }}
//                                         >
//                                             {subItem.includes('Add') || subItem.includes('Event') ? <FaPlus size={10} className="me-2" /> : <FaList size={10} className="me-2" />}
//                                             {subItem}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}

//                     <button className="btn text-danger mt-5 p-3 text-start w-100 border-0 shadow-none fw-bold" style={{ fontSize: '15px' }}>
//                         <FaSignOutAlt className="me-2" /> Logout
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content Area */}
//             <div className="flex-grow-1 p-5 d-flex align-items-start justify-content-center" style={{ marginLeft: '280px', marginTop: '80px' }}>
//                 <div className="w-100" style={{ minHeight: '70vh' }}>
//                     {renderContent()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import {
//     FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera,
//     FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt, FaChartPie, FaCrown, FaBars, FaTimes
// } from 'react-icons/fa';
// import axios from 'axios';

// // Components Import
// import AddPackage from './AddPackage';
// import PackageList from './PackageList';
// import AddMedia from './AddMedia';
// import MediaList from './MediaList';
// import AddStudent from './Addstudent'; 
// import StudentList from './StudentList';
// import AddReview from './AddReview';
// import ReviewList from './ReviewList';
// import AddClass from './AddClass';
// import ClassList from './ClassList';
// import FashionShowManage from './FashionShowManage';
// import FashionShowRegistrations from './FashionShowRegistrations';

// const AdminDashboard = () => {
//     const [openMenu, setOpenMenu] = useState('');
//     const [activeView, setActiveView] = useState('Welcome');
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     // Dashboard Stats & Lists (Fashion show Data Excluded Here)
//     const [stats, setStats] = useState({
//         packages: 0,
//         media: 0,
//         students: 0,
//         reviews: 0,
//         classes: 0
//     });
//     const [studentsList, setStudentsList] = useState([]);
//     const [loadingStats, setLoadingStats] = useState(true);

//     useEffect(() => {
//         const fetchDashboardData = async () => {
//             try {
//                 setLoadingStats(true);
//                 const [pkgRes, mediaRes, studentRes, reviewRes, classRes] = await Promise.allSettled([
//                     axios.get('http://localhost:5000/api/admin/packages/all'),
//                     axios.get('http://localhost:5000/api/admin/media/all'),
//                     axios.get('http://localhost:5000/api/admin/student/getall'),
//                     axios.get('http://localhost:5000/api/admin/reviews/all'),
//                     axios.get('http://localhost:5000/api/admin/courses/all')
//                 ]);

//                 // Deep Safe Array Extraction for API Response Differences
//                 const extractArray = (res) => {
//                     if (res.status === 'fulfilled' && res.value?.data) {
//                         const d = res.value.data;
//                         if (Array.isArray(d)) return d;
//                         if (Array.isArray(d.data)) return d.data;
//                         if (Array.isArray(d.students)) return d.students;
//                         if (Array.isArray(d.classes)) return d.classes;
//                         if (Array.isArray(d.packages)) return d.packages;
//                         if (Array.isArray(d.reviews)) return d.reviews;
//                         if (Array.isArray(d.media)) return d.media;
//                     }
//                     return [];
//                 };

//                 const pkgs = extractArray(pkgRes);
//                 const medias = extractArray(mediaRes);
//                 const students = extractArray(studentRes);
//                 const reviews = extractArray(reviewRes);
//                 const classes = extractArray(classRes);

//                 setStudentsList(students);

//                 setStats({
//                     packages: pkgs.length,
//                     media: medias.length,
//                     students: students.length,
//                     reviews: reviews.length,
//                     classes: classes.length,
//                 });
//             } catch (err) {
//                 console.error("Dashboard overview stats fetch error:", err);
//             } finally {
//                 setLoadingStats(false);
//             }
//         };

//         if (activeView === 'Welcome') {
//             fetchDashboardData();
//         }
//     }, [activeView]);

//     const toggleMenu = (menuName) => {
//         setOpenMenu(openMenu === menuName ? '' : menuName);
//     };

//     const handleViewChange = (view) => {
//         setActiveView(view);
//         setSidebarOpen(false);
//     };

//     // Sidebar Menu Items - Fashion Show Option Re-Added Here
//     const menuItems = [
//         { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
//         { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
//         { id: 'students', label: 'Students', icon: <FaUsers />, sub: ['Add Students', 'Students List'] },
//         { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
//         { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'Class List'] },
//         { id: 'fashion', label: 'Fashion Show', icon: <FaCrown />, sub: ['Event Settings', 'Registrations List'] },
//     ];

//     // Dynamic Chart Slice Calculations
//     const totalItems = stats.students + stats.packages + stats.media + stats.classes + stats.reviews;
//     const studentDeg = totalItems > 0 ? (stats.students / totalItems) * 360 : 0;
//     const classDeg = totalItems > 0 ? studentDeg + (stats.classes / totalItems) * 360 : studentDeg;
//     const pkgDeg = totalItems > 0 ? classDeg + (stats.packages / totalItems) * 360 : classDeg;
//     const mediaDeg = totalItems > 0 ? pkgDeg + (stats.media / totalItems) * 360 : pkgDeg;

//     // --- STYLISH DASHBOARD OVERVIEW (FASHION SHOW EXCLUDED) ---
//     const renderOverview = () => {
//         return (
//             <div>
//                 {/* Header Welcome Bar */}
//                 <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm text-white gap-3" style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', borderLeft: '6px solid #B88A4A' ,marginTop:'-30px'}}>
//                     <div>
//                         <h4 className="fw-bold mb-1" style={{ color: '#B88A4A' }}>Archies Beauty Academy Dashboard</h4>
//                         <p className="text-muted small mb-0">Welcome back, Admin! Real-time academy summary and quick shortcuts.</p>
//                     </div>
//                     <div className="text-md-end">
//                         <span className="badge p-2 px-3 fw-normal" style={{ backgroundColor: 'rgba(184, 138, 74, 0.15)', color: '#B88A4A', border: '1px solid #B88A4A' }}>
//                             📅 {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
//                         </span>
//                     </div>
//                 </div>

//                 {loadingStats ? (
//                     <div className="text-center py-5">
//                         <div className="spinner-border text-warning" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Top 4 Main Stats Cards */}
//                         <div className="row g-3 mb-4">
//                             <div className="col-xl-3 col-md-6 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Students List')} style={{ cursor: 'pointer', borderTop: '4px solid #B88A4A' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">TOTAL STUDENTS</span>
//                                         <div className="p-2 rounded-3 text-white" style={{ backgroundColor: '#B88A4A' }}><FaUsers size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.students}</h3>
//                                     <small className="text-success" style={{ fontSize: '11px' }}>Enrolled candidates</small>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-md-6 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Class List')} style={{ cursor: 'pointer', borderTop: '4px solid #ffc107' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">ONLINE CLASSES</span>
//                                         <div className="p-2 rounded-3 text-white bg-warning"><FaLaptopCode size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.classes}</h3>
//                                     <small className="text-warning" style={{ fontSize: '11px' }}>Active lectures</small>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-md-6 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Package List')} style={{ cursor: 'pointer', borderTop: '4px solid #17a2b8' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">ACTIVE PACKAGES</span>
//                                         <div className="p-2 rounded-3 text-white bg-info"><FaBoxes size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.packages}</h3>
//                                     <small className="text-info" style={{ fontSize: '11px' }}>Salon packages</small>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-md-6 col-sm-6">
//                                 <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Media List')} style={{ cursor: 'pointer', borderTop: '4px solid #28a745' }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-2">
//                                         <span className="text-muted small fw-bold">MEDIA FILES</span>
//                                         <div className="p-2 rounded-3 text-white bg-success"><FaCamera size={16} /></div>
//                                     </div>
//                                     <h3 className="fw-bold text-dark mb-1">{stats.media}</h3>
//                                     <small className="text-success" style={{ fontSize: '11px' }}>Photos & videos</small>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Middle Section: Dynamic Circular Graph + Quick Actions */}
//                         <div className="row g-4 mb-4">
//                             {/* Circular Chart Component */}
//                             <div className="col-lg-6">
//                                 <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 text-center">
//                                     <h5 className="fw-bold text-dark mb-2 text-start" style={{ color: '#B88A4A' }}>Academy Data Overview</h5>
//                                     <p className="text-muted small text-start mb-3">Live proportional distribution of students, classes, and packages.</p>
                                    
//                                     <div className="d-flex justify-content-center align-items-center my-2">
//                                         <div 
//                                             className="rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm"
//                                             style={{ 
//                                                 width: '190px', 
//                                                 height: '190px', 
//                                                 background: totalItems > 0 
//                                                     ? `conic-gradient(#B88A4A 0deg ${studentDeg}deg, #ffc107 ${studentDeg}deg ${classDeg}deg, #17a2b8 ${classDeg}deg ${pkgDeg}deg, #28a745 ${pkgDeg}deg ${mediaDeg}deg, #6c757d ${mediaDeg}deg 360deg)`
//                                                     : '#e9ecef',
//                                                 padding: '14px',
//                                                 transition: 'all 0.5s ease'
//                                             }}
//                                         >
//                                             <div className="bg-white rounded-circle w-100 h-100 d-flex flex-column align-items-center justify-content-center">
//                                                 <h2 className="fw-bold text-dark mb-0">{totalItems}</h2>
//                                                 <small className="text-muted fw-bold" style={{ fontSize: '11px', color: '#B88A4A' }}>TOTAL RECORDS</small>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#B88A4A' }}></span>
//                                             <small className="text-muted fw-semibold">Students ({stats.students})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#ffc107' }}></span>
//                                             <small className="text-muted fw-semibold">Classes ({stats.classes})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#17a2b8' }}></span>
//                                             <small className="text-muted fw-semibold">Packages ({stats.packages})</small>
//                                         </div>
//                                         <div className="d-flex align-items-center gap-1">
//                                             <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#28a745' }}></span>
//                                             <small className="text-muted fw-semibold">Media ({stats.media})</small>
//                                         </div>
//                                     </div>
//                             </div>
//                         </div>

//                         {/* Quick Action Shortcuts */}
//                         <div className="col-lg-6">
//                             <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
//                                 <h5 className="fw-bold text-dark mb-3">Quick Actions</h5>
                                
//                                 <div className="row g-3 mt-1">
//                                     <div className="col-md-6">
//                                         <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Students')} style={{ cursor: 'pointer' }}>
//                                             <div>
//                                                 <h6 className="fw-bold mb-1 text-dark">Add Student</h6>
//                                                 <small className="text-muted">Register student</small>
//                                             </div>
//                                             <FaPlus style={{ color: '#B88A4A' }} size={16} />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add New Class')} style={{ cursor: 'pointer' }}>
//                                             <div>
//                                                 <h6 className="fw-bold mb-1 text-dark">Online Class</h6>
//                                                 <small className="text-muted">Schedule lecture</small>
//                                             </div>
//                                             <FaPlus className="text-warning" size={16} />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Package')} style={{ cursor: 'pointer' }}>
//                                             <div>
//                                                 <h6 className="fw-bold mb-1 text-dark">Add Package</h6>
//                                                 <small className="text-muted">Create service plan</small>
//                                             </div>
//                                             <FaPlus className="text-info" size={16} />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Media')} style={{ cursor: 'pointer' }}>
//                                             <div>
//                                                 <h6 className="fw-bold mb-1 text-dark">Upload Media</h6>
//                                                 <small className="text-muted">Add photo/video</small>
//                                             </div>
//                                             <FaPlus className="text-success" size={16} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Recent Students Directory Table */}
//                     <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h5 className="fw-bold text-dark mb-0">Recent Enrolled Students ({studentsList.length})</h5>
//                             <button className="btn btn-sm text-white" style={{ backgroundColor: '#B88A4A' }} onClick={() => handleViewChange('Students List')}>View All</button>
//                         </div>
//                         <div className="table-responsive">
//                             <table className="table align-middle mb-0">
//                                 <thead className="table-light fs-7">
//                                     <tr>
//                                         <th>#</th>
//                                         <th>Student Name</th>
//                                         <th>Email</th>
                                        
//                                         <th>Phone</th>
//                                         <th>Type</th>
//                                         <th>Status</th>
                                       
//                                     </tr>
//                             </thead>
//                             <tbody>
//                                 {studentsList.slice(0, 5).length === 0 ? (
//                                     <tr>
//                                         <td colSpan="5" className="text-center text-muted py-3">No student records found.</td>
//                                   </tr>
//                                 ) : (
//                                     studentsList.slice(0, 5).map((student, index) => (
//                                         <tr key={student._id || index}>
//                                             <td>{index + 1}</td>
//                                             <td className="fw-bold text-dark">{student.name || student.studentName || 'N/A'}</td>
//                                             <td>{student.email || 'N/A'}</td>
//                                             <td>{student.phone || student.mobile || 'N/A'}</td>
//                                             <td>
//                                                     <span 
//                                                         className="badge px-2.5 py-1 rounded-pill fw-normal"
//                                                         style={{ 
//                                                             backgroundColor: typeVal === 'Online' ? '#e7f1ff' : '#d1e7dd',
//                                                             color: typeVal === 'Online' ? '#0d6efd' : '#0f5132',
//                                                             fontSize: '0.75rem'
//                                                         }}
//                                                     >
//                                                         {typeVal === 'Online' ? <FaLaptop className="me-1" /> : <FaBuilding className="me-1" />}
//                                                         {typeVal}
//                                                     </span>
//                                               </td>
//                                             <td><span className="badge bg-success">Active</span></td>
//                                             <td>{student.type}</td>
//                                         </tr>
//                                   ))
//                             )}
//                         </tbody>
//                     </table>
//                   </div>
//                 </div>
//             </>
//         )}
//         </div>
//     );
//   };

//   const renderContent = () => {
//       switch (activeView) {
//           case 'Welcome':
//               return renderOverview();
//           case 'Add Package':
//               return <AddPackage />;
//           case 'Package List':
//               return <PackageList />;
//           case 'Add Media':
//               return <AddMedia />;
//           case 'Media List':
//               return <MediaList />;
//           case 'Add Students':
//               return <AddStudent />;
//           case 'Students List':
//               return <StudentList />;
//           case 'Add Review':
//               return <AddReview />;
//           case 'Review List':
//               return <ReviewList />;
//           case 'Add New Class':
//               return <AddClass />;
//           case 'Class List':
//               return <ClassList />;
//           case 'Event Settings':
//               return <FashionShowManage />;
//           case 'Registrations List':
//               return <FashionShowRegistrations />;
//           default:
//               return <div className="p-4"><h3>Content for {activeView} is coming soon...</h3></div>;
//         }
//     };

//     return (
//         <div className="d-flex flex-column flex-lg-row" style={{  backgroundColor: '#f8f9fa' }}>
//             {/* Mobile Top Navbar */}
//             <div className="d-flex d-lg-none justify-content-between align-items-center bg-dark text-white px-4 py-3 fixed-top shadow" style={{ zIndex: 1050, height: '70px' }}>
//                 <h5 className="fw-bold mb-0" style={{ color: '#B88A4A', cursor: 'pointer' }} onClick={() => handleViewChange('Welcome')}>
//                     ARCHIES PANEL
//                 </h5>
//                 <button className="btn text-white p-1 border-0 shadow-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
//                     {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                 </button>
//             </div>

//             {/* Backdrop overlay for mobile drawer */}
//             {sidebarOpen && (
//                 <div 
//                     className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50" 
//                     style={{ zIndex: 1030 }}
//                     onClick={() => setSidebarOpen(false)}
//                 ></div>
//             )}

//             {/* Sidebar including Fashion Show Dropdown */}
//             <div 
//                 className={`bg-dark text-white p-3  shadow position-fixed top-0 start-0 h-100 overflow-y-auto transition-all`} 
//                 style={{ 
//                     width: '280px', 
//                     zIndex: 1040, 
//                     paddingTop: '30px',
//                     marginTop:'70px',
//                     transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
//                     transition: 'transform 0.3s ease-in-out',
//                     ...(window.innerWidth >= 992 ? { transform: 'translateX(0)' } : {})
//                 }}
//             >
//                 <div className="d-flex justify-content-between align-items-center d-lg-none mb-3">
//                     <span className="fw-bold text-muted small">MENU</span>
//                     <button className="btn text-white-50 p-0 border-0" onClick={() => setSidebarOpen(false)}>
//                         <FaTimes size={18} />
//                     </button>
//                 </div>

//                 <h3 
//                     className="text-center fw-bold py-4 mt-2 d-none d-lg-block" 
//                     style={{ color: '#B88A4A', letterSpacing: '1px', cursor: 'pointer' }}
//                     onClick={() => handleViewChange('Welcome')}
//                 >
//                     ARCHIES PANEL
//                 </h3>

//                 <div className="nav flex-column mt-3">
//                     <button
//                         onClick={() => handleViewChange('Welcome')}
//                         className="btn text-white w-100 d-flex align-items-center p-3 border-0 shadow-none mb-2"
//                         style={{ backgroundColor: activeView === 'Welcome' ? '#2c2c2c' : 'transparent', color: activeView === 'Welcome' ? '#B88A4A' : '#fff', fontSize: '15px' }}
//                     >
//                         <FaChartPie className="me-3" /> Dashboard
//                     </button>

//                     {menuItems.map((item) => (
//                         <div key={item.id} className="mb-2">
//                               <button
//                                   onClick={() => toggleMenu(item.id)}
//                                   className="btn text-white w-100 d-flex justify-content-between align-items-center p-3 border-0 shadow-none"
//                                   style={{ backgroundColor: openMenu === item.id ? '#2c2c2c' : 'transparent', fontSize: '15px' }}
//                           >
//                                 <span>{item.icon} <span className="ms-3">{item.label}</span></span>
//                                 <FaChevronDown style={{
//                                     fontSize: '11px',
//                                     transform: openMenu === item.id ? 'rotate(180deg)' : 'none',
//                                     transition: '0.3s'
//                               }} />
//                           </button>

//                             {openMenu === item.id && (
//                                 <div className="bg-black bg-opacity-25 rounded-3 mt-1 ms-2">
//                                     {item.sub.map((subItem) => (
//                                       <button
//                                         key={subItem}
//                                         onClick={() => handleViewChange(subItem)}
//                                         className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0 shadow-none"
//                                         style={{
//                                             color: activeView === subItem ? '#B88A4A' : 'rgba(255,255,255,0.6)',
//                                             fontSize: '14px'
//                                       }}
//                                     >
//                                         {subItem.includes('Add') || subItem.includes('Event') ? <FaPlus size={10} className="me-2" /> : <FaList size={10} className="me-2" />}
//                                         {subItem}
//                                     </button>
//                               ))}
//                           </div>
//                         )}
//                       </div>
//                   ))}

//                   <button className="btn text-danger mt-4 p-3 text-start w-100 border-0 shadow-none fw-bold" style={{ fontSize: '15px' }}>
//                         <FaSignOutAlt className="me-2" /> Logout
//                   </button>
//               </div>
//             </div>

//             {/* Main Content Area */}
//             <div className="flex-grow-1 p-3 p-md-5 d-flex align-items-start justify-content-center" style={{ marginLeft: '0', marginTop: '70px' }} id="main-content-area">
//                 <style>{`
//                     @media (min-width: 992px) {
//                         #main-content-area {
//                             margin-left: 280px !important;
//                             margin-top: 0px !important;
//                         }
//                     }
//                 `}</style>
//                 <div className="w-100" style={{ minHeight: '70vh' }}>
//                       {renderContent()}
//                   </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import {
    FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera,
    FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt, FaChartPie, FaCrown, FaBars, FaTimes, FaLaptop, FaBuilding
} from 'react-icons/fa';
import axios from 'axios';

// Components Import
import AddPackage from './AddPackage';
import PackageList from './PackageList';
import AddMedia from './AddMedia';
import MediaList from './MediaList';
import AddStudent from './Addstudent'; 
import StudentList from './StudentList';
import AddReview from './AddReview';
import ReviewList from './ReviewList';
import AddClass from './AddClass';
import ClassList from './ClassList';
import FashionShowManage from './FashionShowManage';
import FashionShowRegistrations from './FashionShowRegistrations';

const AdminDashboard = () => {
    const [openMenu, setOpenMenu] = useState('');
    const [activeView, setActiveView] = useState('Welcome');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Dashboard Stats & Lists
    const [stats, setStats] = useState({
        packages: 0,
        media: 0,
        students: 0,
        reviews: 0,
        classes: 0
    });
    const [studentsList, setStudentsList] = useState([]);
    const [loadingStats, setLoadingStats] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoadingStats(true);
                const [pkgRes, mediaRes, studentRes, reviewRes, classRes] = await Promise.allSettled([
                    axios.get('http://localhost:5000/api/admin/packages/all'),
                    axios.get('http://localhost:5000/api/admin/media/all'),
                    axios.get('http://localhost:5000/api/admin/student/getall'),
                    axios.get('http://localhost:5000/api/admin/reviews/all'),
                    axios.get('http://localhost:5000/api/admin/courses/all')
                ]);

                // Safe Array Extraction
                const extractArray = (res) => {
                    if (res.status === 'fulfilled' && res.value?.data) {
                        const d = res.value.data;
                        if (Array.isArray(d)) return d;
                        if (Array.isArray(d.data)) return d.data;
                        if (Array.isArray(d.students)) return d.students;
                        if (Array.isArray(d.classes)) return d.classes;
                        if (Array.isArray(d.packages)) return d.packages;
                        if (Array.isArray(d.reviews)) return d.reviews;
                        if (Array.isArray(d.media)) return d.media;
                    }
                    return [];
                };

                const pkgs = extractArray(pkgRes);
                const medias = extractArray(mediaRes);
                const students = extractArray(studentRes);
                const reviews = extractArray(reviewRes);
                const classes = extractArray(classRes);

                setStudentsList(students);

                setStats({
                    packages: pkgs.length,
                    media: medias.length,
                    students: students.length,
                    reviews: reviews.length,
                    classes: classes.length,
                });
            } catch (err) {
                console.error("Dashboard overview stats fetch error:", err);
            } finally {
                setLoadingStats(false);
            }
        };

        if (activeView === 'Welcome') {
            fetchDashboardData();
        }
    }, [activeView]);

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? '' : menuName);
    };

    const handleViewChange = (view) => {
        setActiveView(view);
        setSidebarOpen(false);
    };

    const menuItems = [
        { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
        { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
        { id: 'students', label: 'Students', icon: <FaUsers />, sub: ['Add Students', 'Students List'] },
        { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
        { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'Class List'] },
        { id: 'fashion', label: 'Fashion Show', icon: <FaCrown />, sub: ['Event Settings', 'Registrations List'] },
    ];

    // Dynamic Chart Slice Calculations
    const totalItems = stats.students + stats.packages + stats.media + stats.classes + stats.reviews;
    const studentDeg = totalItems > 0 ? (stats.students / totalItems) * 360 : 0;
    const classDeg = totalItems > 0 ? studentDeg + (stats.classes / totalItems) * 360 : studentDeg;
    const pkgDeg = totalItems > 0 ? classDeg + (stats.packages / totalItems) * 360 : classDeg;
    const mediaDeg = totalItems > 0 ? pkgDeg + (stats.media / totalItems) * 360 : pkgDeg;

    const renderOverview = () => {
        return (
            <div>
                {/* Header Welcome Bar */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm text-white gap-3" style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', borderLeft: '6px solid #B88A4A', marginTop: '-30px' }}>
                    <div>
                        <h4 className="fw-bold mb-1" style={{ color: '#B88A4A' }}>Archies Beauty Academy Dashboard</h4>
                        <p className="text-muted small mb-0">Welcome back, Admin! Real-time academy summary and quick shortcuts.</p>
                    </div>
                    <div className="text-md-end">
                        <span className="badge p-2 px-3 fw-normal" style={{ backgroundColor: 'rgba(184, 138, 74, 0.15)', color: '#B88A4A', border: '1px solid #B88A4A' }}>
                            📅 {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                    </div>
                </div>

                {loadingStats ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Top 4 Main Stats Cards */}
                        <div className="row g-3 mb-4">
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Students List')} style={{ cursor: 'pointer', borderTop: '4px solid #B88A4A' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted small fw-bold">TOTAL STUDENTS</span>
                                        <div className="p-2 rounded-3 text-white" style={{ backgroundColor: '#B88A4A' }}><FaUsers size={16} /></div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{stats.students}</h3>
                                    <small className="text-success" style={{ fontSize: '11px' }}>Enrolled candidates</small>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Class List')} style={{ cursor: 'pointer', borderTop: '4px solid #ffc107' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted small fw-bold">ONLINE CLASSES</span>
                                        <div className="p-2 rounded-3 text-white bg-warning"><FaLaptopCode size={16} /></div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{stats.classes}</h3>
                                    <small className="text-warning" style={{ fontSize: '11px' }}>Active lectures</small>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Package List')} style={{ cursor: 'pointer', borderTop: '4px solid #17a2b8' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted small fw-bold">ACTIVE PACKAGES</span>
                                        <div className="p-2 rounded-3 text-white bg-info"><FaBoxes size={16} /></div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{stats.packages}</h3>
                                    <small className="text-info" style={{ fontSize: '11px' }}>Salon packages</small>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100" onClick={() => handleViewChange('Media List')} style={{ cursor: 'pointer', borderTop: '4px solid #28a745' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted small fw-bold">MEDIA FILES</span>
                                        <div className="p-2 rounded-3 text-white bg-success"><FaCamera size={16} /></div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{stats.media}</h3>
                                    <small className="text-success" style={{ fontSize: '11px' }}>Photos & videos</small>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section: Circular Graph + Quick Actions */}
                        <div className="row g-4 mb-4">
                            {/* Circular Chart Component */}
                            <div className="col-lg-6">
                                <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 text-center">
                                    <h5 className="fw-bold text-dark mb-2 text-start" style={{ color: '#B88A4A' }}>Academy Data Overview</h5>
                                    <p className="text-muted small text-start mb-3">Live proportional distribution of students, classes, and packages.</p>
                                    
                                    <div className="d-flex justify-content-center align-items-center my-2">
                                        <div 
                                            className="rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm"
                                            style={{ 
                                                width: '190px', 
                                                height: '190px', 
                                                background: totalItems > 0 
                                                    ? `conic-gradient(#B88A4A 0deg ${studentDeg}deg, #ffc107 ${studentDeg}deg ${classDeg}deg, #17a2b8 ${classDeg}deg ${pkgDeg}deg, #28a745 ${pkgDeg}deg ${mediaDeg}deg, #6c757d ${mediaDeg}deg 360deg)`
                                                    : '#e9ecef',
                                                padding: '14px',
                                                transition: 'all 0.5s ease'
                                            }}
                                        >
                                            <div className="bg-white rounded-circle w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                                <h2 className="fw-bold text-dark mb-0">{totalItems}</h2>
                                                <small className="text-muted fw-bold" style={{ fontSize: '11px', color: '#B88A4A' }}>TOTAL RECORDS</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#B88A4A' }}></span>
                                            <small className="text-muted fw-semibold">Students ({stats.students})</small>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#ffc107' }}></span>
                                            <small className="text-muted fw-semibold">Classes ({stats.classes})</small>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#17a2b8' }}></span>
                                            <small className="text-muted fw-semibold">Packages ({stats.packages})</small>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="rounded-circle d-inline-block" style={{ width: '10px', height: '10px', backgroundColor: '#28a745' }}></span>
                                            <small className="text-muted fw-semibold">Media ({stats.media})</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Shortcuts */}
                            <div className="col-lg-6">
                                <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
                                    <h5 className="fw-bold text-dark mb-3">Quick Actions</h5>
                                    
                                    <div className="row g-3 mt-1">
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Students')} style={{ cursor: 'pointer' }}>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Add Student</h6>
                                                    <small className="text-muted">Register student</small>
                                                </div>
                                                <FaPlus style={{ color: '#B88A4A' }} size={16} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add New Class')} style={{ cursor: 'pointer' }}>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Online Class</h6>
                                                    <small className="text-muted">Schedule lecture</small>
                                                </div>
                                                <FaPlus className="text-warning" size={16} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Package')} style={{ cursor: 'pointer' }}>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Add Package</h6>
                                                    <small className="text-muted">Create service plan</small>
                                                </div>
                                                <FaPlus className="text-info" size={16} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center" onClick={() => handleViewChange('Add Media')} style={{ cursor: 'pointer' }}>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Upload Media</h6>
                                                    <small className="text-muted">Add photo/video</small>
                                                </div>
                                                <FaPlus className="text-success" size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Students Directory Table */}
                        <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold text-dark mb-0">Recent Enrolled Students ({studentsList.length})</h5>
                                <button className="btn btn-sm text-white" style={{ backgroundColor: '#B88A4A' }} onClick={() => handleViewChange('Students List')}>View All</button>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead className="table-light fs-7">
                                        <tr>
                                            <th>#</th>
                                            <th>Student Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentsList.slice(0, 5).length === 0 ? (
                                            <tr>
                                                <td colSpan="6" className="text-center text-muted py-3">No student records found.</td>
                                            </tr>
                                        ) : (
                                            studentsList.slice(0, 5).map((student, index) => {
                                                const typeVal = student.studentType || 'Online';
                                                return (
                                                    <tr key={student._id || index}>
                                                        <td>{index + 1}</td>
                                                        <td className="fw-bold text-dark">{student.name || student.studentName || 'N/A'}</td>
                                                        <td>{student.email || 'N/A'}</td>
                                                        <td>{student.phone || student.mobile || 'N/A'}</td>
                                                        <td>
                                                            <span 
                                                                className="badge px-2.5 py-1 rounded-pill fw-normal"
                                                                style={{ 
                                                                    backgroundColor: typeVal === 'Online' ? '#e7f1ff' : '#d1e7dd',
                                                                    color: typeVal === 'Online' ? '#0d6efd' : '#0f5132',
                                                                    fontSize: '0.75rem'
                                                                }}
                                                            >
                                                                {typeVal === 'Online' ? <FaLaptop className="me-1" /> : <FaBuilding className="me-1" />}
                                                                {typeVal}
                                                            </span>
                                                        </td>
                                                        <td><span className="badge bg-success">Active</span></td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    };

    const renderContent = () => {
        switch (activeView) {
            case 'Welcome':
                return renderOverview();
            case 'Add Package':
                return <AddPackage />;
            case 'Package List':
                return <PackageList />;
            case 'Add Media':
                return <AddMedia />;
            case 'Media List':
                return <MediaList />;
            case 'Add Students':
                return <AddStudent />;
            case 'Students List':
                return <StudentList />;
            case 'Add Review':
                return <AddReview />;
            case 'Review List':
                return <ReviewList />;
            case 'Add New Class':
                return <AddClass />;
            case 'Class List':
                return <ClassList />;
            case 'Event Settings':
                return <FashionShowManage />;
            case 'Registrations List':
                return <FashionShowRegistrations />;
            default:
                return <div className="p-4"><h3>Content for {activeView} is coming soon...</h3></div>;
        }
    };

    return (
        <div className="d-flex flex-column flex-lg-row" style={{ backgroundColor: '#f8f9fa' }}>
            {/* Mobile Top Navbar */}
            <div className="d-flex d-lg-none justify-content-between align-items-center bg-dark text-white px-4 py-3 fixed-top shadow" style={{ zIndex: 1050, height: '70px' }}>
                <h5 className="fw-bold mb-0" style={{ color: '#B88A4A', cursor: 'pointer' }} onClick={() => handleViewChange('Welcome')}>
                    ARCHIES PANEL
                </h5>
                <button className="btn text-white p-1 border-0 shadow-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Backdrop overlay for mobile drawer */}
            {sidebarOpen && (
                <div 
                    className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50" 
                    style={{ zIndex: 1030 }}
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div 
                className="bg-dark text-white p-3 shadow position-fixed top-0 start-0 h-100 overflow-y-auto" 
                style={{ 
                    width: '280px', 
                    zIndex: 1040, 
                    paddingTop: '30px',
                    marginTop: '70px',
                    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                    ...(window.innerWidth >= 992 ? { transform: 'translateX(0)' } : {})
                }}
            >
                <div className="d-flex justify-content-between align-items-center d-lg-none mb-3">
                    <span className="fw-bold text-muted small">MENU</span>
                    <button className="btn text-white-50 p-0 border-0" onClick={() => setSidebarOpen(false)}>
                        <FaTimes size={18} />
                    </button>
                </div>

                <h3 
                    className="text-center fw-bold py-4 mt-2 d-none d-lg-block" 
                    style={{ color: '#B88A4A', letterSpacing: '1px', cursor: 'pointer' }}
                    onClick={() => handleViewChange('Welcome')}
                >
                    ARCHIES PANEL
                </h3>

                <div className="nav flex-column mt-3">
                    <button
                        onClick={() => handleViewChange('Welcome')}
                        className="btn text-white w-100 d-flex align-items-center p-3 border-0 shadow-none mb-2"
                        style={{ backgroundColor: activeView === 'Welcome' ? '#2c2c2c' : 'transparent', color: activeView === 'Welcome' ? '#B88A4A' : '#fff', fontSize: '15px' }}
                    >
                        <FaChartPie className="me-3" /> Dashboard
                    </button>

                    {menuItems.map((item) => (
                        <div key={item.id} className="mb-2">
                            <button
                                onClick={() => toggleMenu(item.id)}
                                className="btn text-white w-100 d-flex justify-content-between align-items-center p-3 border-0 shadow-none"
                                style={{ backgroundColor: openMenu === item.id ? '#2c2c2c' : 'transparent', fontSize: '15px' }}
                            >
                                <span>{item.icon} <span className="ms-3">{item.label}</span></span>
                                <FaChevronDown style={{
                                    fontSize: '11px',
                                    transform: openMenu === item.id ? 'rotate(180deg)' : 'none',
                                    transition: '0.3s'
                                }} />
                            </button>

                            {openMenu === item.id && (
                                <div className="bg-black bg-opacity-25 rounded-3 mt-1 ms-2">
                                    {item.sub.map((subItem) => (
                                        <button
                                            key={subItem}
                                            onClick={() => handleViewChange(subItem)}
                                            className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0 shadow-none"
                                            style={{
                                                color: activeView === subItem ? '#B88A4A' : 'rgba(255,255,255,0.6)',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {subItem.includes('Add') || subItem.includes('Event') ? <FaPlus size={10} className="me-2" /> : <FaList size={10} className="me-2" />}
                                            {subItem}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <button className="btn text-danger mt-4 p-3 text-start w-100 border-0 shadow-none fw-bold" style={{ fontSize: '15px' }}>
                        <FaSignOutAlt className="me-2" /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 p-3 p-md-5 d-flex align-items-start justify-content-center" style={{ marginLeft: '0', marginTop: '70px' }} id="main-content-area">
                <style>{`
                    @media (min-width: 992px) {
                        #main-content-area {
                            margin-left: 280px !important;
                            margin-top: 0px !important;
                        }
                    }
                `}</style>
                <div className="w-100" style={{ minHeight: '70vh' }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;