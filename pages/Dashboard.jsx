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
//                         </div>
//                     ) : (
//                         <div>
//                             <h2 className="fw-bold mb-4" style={{ color: '#B88A4A' }}>{activeView}</h2>
//                             <hr />
//                             {/* Yahan aap apna Form ya List wala code add kar sakte hain */}
//                             <div className="mt-4">
//                                 <p className="text-muted">Aapka {activeView} ka code yahan aayega...</p>
//                             </div>
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import {
    FaChevronDown, FaPlus, FaList, FaBoxes, FaCamera,
    FaUsers, FaQuoteLeft, FaLaptopCode, FaSignOutAlt
} from 'react-icons/fa';

// Pehle apne banaye hue components ko import karein
import AddPackage from './AddPackage';
import PackageList from './PackageList';
import AddMedia from './AddMedia';
import MediaList from './MediaList';
import AddMember from './AddMember';
import MemberList from './MemberList';
import AddReview from './AddReview';
import ReviewList from './ReviewList';
import AddClass from './AddClass';
import ClassList from './ClassList';

const AdminDashboard = () => {
    const [openMenu, setOpenMenu] = useState('');
    const [activeView, setActiveView] = useState('Welcome');

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? '' : menuName);
    };

    const menuItems = [
        { id: 'pkg', label: 'Manage Packages', icon: <FaBoxes />, sub: ['Add Package', 'Package List'] },
        { id: 'media', label: 'Photos & Videos', icon: <FaCamera />, sub: ['Add Media', 'Media List'] },
        { id: 'team', label: 'Team Members', icon: <FaUsers />, sub: ['Add Member', 'Member List'] },
        { id: 'testi', label: 'Testimonials', icon: <FaQuoteLeft />, sub: ['Add Review', 'Review List'] },
        { id: 'classes', label: 'Online Classes', icon: <FaLaptopCode />, sub: ['Add New Class', 'Class List'] },
    ];

    // --- YE FUNCTION DECIDE KAREGA KAUNSA PAGE DIKHANA HAI ---
    const renderContent = () => {
        switch (activeView) {
            case 'Welcome':
                return (
                    <div className="text-center my-auto">
                        <h1 className="fw-bold text-dark mb-3">Welcome to Archies Admin Dashboard</h1>
                        <p className="text-muted fs-5">Left side menu se options select karke data manage karein.</p>
                    </div>
                );

            case 'Add Package':
                return <AddPackage />; // Aapka naya component yahan call hoga

            case 'Package List':
                return <PackageList />;

            case 'Add Media':
                return <AddMedia />;

            case 'Media List':
                return <MediaList />;
            case 'Add Member':
                return <AddMember />;
            case 'Member List':
                return <MemberList />;
            case 'Add Review':
                return <AddReview />;
            case 'Review List':
                return <ReviewList />;
            case 'Add New Class':
                return <AddClass />;
            case 'Class List':
                return <ClassList />;

            // Isi tarah baki cases bhi add karein...

            default:
                return <div className="p-4"><h3>Content for {activeView} is coming soon...</h3></div>;
        }
    };

    return (
        <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>

            {/* --- SIDEBAR --- */}
            <div className="bg-dark text-white p-3 shadow" style={{ width: '280px', minHeight: '100vh', position: 'fixed', top: '0', left: '0', paddingTop: '80px' }}>
                <h3 className="text-center fw-bold py-4 mt-2" style={{ color: '#B88A4A', letterSpacing: '1px' }}>
                    ARCHIES PANEL
                </h3>

                <div className="nav flex-column mt-3">
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
                                            onClick={() => setActiveView(subItem)}
                                            className="btn btn-sm text-white-50 w-100 text-start ps-5 py-2 border-0 shadow-none sub-menu-btn"
                                            style={{
                                                color: activeView === subItem ? '#B88A4A' : 'rgba(255,255,255,0.6)',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {subItem.includes('Add') ? <FaPlus size={10} className="me-2" /> : <FaList size={10} className="me-2" />}
                                            {subItem}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <button className="btn text-danger mt-5 p-3 text-start w-100 border-0 shadow-none fw-bold" style={{ fontSize: '15px' }}>
                        <FaSignOutAlt className="me-2" /> Logout
                    </button>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-grow-1 p-5 d-flex align-items-start justify-content-center" style={{ marginLeft: '280px', marginTop: '80px' }}>
                <div className="card shadow-sm border-0 p-5 w-100" style={{ borderRadius: '20px', minHeight: '70vh' }}>
                    {activeView !== 'Welcome' && (
                        <>
                            <h2 className="fw-bold mb-4" style={{ color: '#B88A4A' }}>{activeView}</h2>
                            <hr />
                        </>
                    )}

                    {/* Yahan switch function call ho raha hai */}
                    <div className="mt-2">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;