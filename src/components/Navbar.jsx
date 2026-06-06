// // import React from 'react';
// // import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';
// // import logo from '../src/img/logo.png';
// // const Navbar = () => {
// //     return (
// //         <nav className="navbar navbar-expand-lg navbar-light  p-0 shadow-sm">
// //             <div className="container-fluid p-0">

// //                 {/* Logo Section #B88A4A  */}


// //                     <div className="d-flex align-items-center justify-content-center px-4"
// //                         style={{ backgroundColor: '#B88A4A', minWidth: '220px', height: '85px' }}>

// //                         <Link to="/">
// //                             {/* Aapki image yahan set ho gayi hai */}
// //                             <img
// //                                 src={logo}
// //                                 style={{ height: '115px', width: 'auto', objectFit: 'contain' }}
// //                                 alt="AV Group Logo"
// //                             />
// //                         </Link>

// //                     </div>


// //                 {/* Toggle Button for Mobile */}
// //                 <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>

// //                 {/* Links Section */}
// //                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
// //                     <ul className="navbar-nav gap-3">
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/">
// //                                 HOME
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/about">
// //                                 ABOUT
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/service">
// //                                 SERVICE
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/price">
// //                                 PRICE
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item dropdown">
// //                             <Link className="nav-link fw-bold text-dark" to="/page">
// //                                 PAGE
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/classes">
// //                                ONLINE CLASSES
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark" to="/contact">
// //                                 CONTACT
// //                             </Link>
// //                         </li>
// //                     </ul>
// //                 </div>

// //                 {/* Social Icons Section */}
// //                 <div className="d-none d-lg-flex pe-4 gap-2">
// //                     <div className="social-box"><FaFacebookF /></div>
// //                     <div className="social-box"><FaInstagram /></div>
// //                     <div className="social-box"><FaLinkedinIn /></div>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;

// // import React, { useEffect, useState } from 'react'; // useEffect aur useState add kiya
// // import { FaFacebookF, FaInstagram, FaLinkedinIn ,FaUser} from 'react-icons/fa';
// // import { Link } from 'react-router-dom';
// // import logo from '../img/logo.png';

// // const Navbar = () => {
// //     const [scrolled, setScrolled] = useState(false);

// //     // Scroll Logic: Jab user scroll karega tab background change hoga
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (window.scrollY > 50) {
// //                 setScrolled(true);
// //             } else {
// //                 setScrolled(false);
// //             }
// //         };
// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     // Menu Close Logic: Link par click karte hi mobile menu band ho jayega
// //     const closeMenu = () => {
// //         const menu = document.getElementById('navbarNav');
// //         if (menu.classList.contains('show')) {
// //             menu.classList.remove('show');
// //         }
// //     };
// //     const scrollToTopManual = () => {
// //         window.scrollTo({
// //             top: 0,
// //             behavior: 'smooth' // Smoothly upar jayega
// //         });
// //         closeMenu(); // Menu band karne wala function jo pehle diya tha
// //     };

// //     return (
// //         /* Yahan condition check ho rahi hai: agar scrolled hai to 'navbar-scrolled' class lagegi */
// //         <nav className={`navbar navbar-expand-lg navbar-light p-0 shadow-sm ${scrolled ? 'navbar-scrolled' : ''}`}>
// //             <div className="container-fluid p-0">

// //                 {/* Logo Section */}
// //                 <div className="d-flex align-items-center justify-content-center px-4"
// //                     style={{ backgroundColor: '#B88A4A', minWidth: '220px', height: '85px' }}>
// //                     <Link to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
// //                         <img
// //                             src={logo}
// //                             style={{ height: '115px', width: 'auto', objectFit: 'contain' }}
// //                             alt="AV Group Logo"
// //                         />
// //                     </Link>
// //                 </div>

// //                 {/* Toggle Button for Mobile */}
// //                 <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>

// //                 {/* Links Section */}
// //                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
// //                     <ul className="navbar-nav gap-3">
// //                         <li className="nav-item">
// //                             <Link
// //                                 className="nav-link fw-bold text-dark ps-3 py-2"
// //                                 to="/"
// //                                 onClick={() => { scrollToTopManual(); closeMenu(); }}
// //                             >
// //                                 HOME
// //                             </Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/about" onClick={() => { scrollToTopManual(); closeMenu(); }}>ABOUT</Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/service" onClick={() => { scrollToTopManual(); closeMenu(); }}>SERVICE</Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/price" onClick={() => { scrollToTopManual(); closeMenu(); }}>PRICE</Link>
// //                         </li>
// //                         <li className="nav-item dropdown">
// //                             {/* Dropdown Toggle Link */}
// //                             <Link
// //                                 className="nav-link dropdown-toggle fw-bold text-dark ps-3 py-2"
// //                                 to="#"
// //                                 id="navbarDropdown"
// //                                 role="button"
// //                                 data-bs-toggle="dropdown"
// //                                 aria-expanded="false"
// //                             >
// //                                 PAGE
// //                             </Link>

// //                             {/* Dropdown Menu Items */}
// //                             <ul className="dropdown-menu border-0 shadow-sm mt-3" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#CCC8C3' }}>
// //                                 <li>
// //                                     <Link
// //                                         className="dropdown-item fw-bold text-dark"
// //                                         to="/gallery"
// //                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
// //                                     >
// //                                         GALLERY
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link
// //                                         className="dropdown-item fw-bold text-dark"
// //                                         to="/ourTeam"
// //                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
// //                                     >
// //                                         OUR TEAM
// //                                     </Link>
// //                                 </li>
// //                                 <li>
// //                                     <Link
// //                                         className="dropdown-item fw-bold text-dark"
// //                                         to="/faq"
// //                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
// //                                     >
// //                                         FAQ
// //                                     </Link>
// //                                 </li>
// //                             </ul>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/classes" onClick={() => { scrollToTopManual(); closeMenu(); }}>ONLINE CLASSES</Link>
// //                         </li>
// //                         <li className="nav-item">
// //                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/contact" onClick={() => { scrollToTopManual(); closeMenu(); }}>CONTACT</Link>
// //                         </li>
// //                         <li className="nav-item ms-lg-3">
// //                             <Link 
// //                                 to="/login" 
// //                                 className="btn px-4 py-2 fw-bold text-white shadow-sm"
// //                                 onClick={scrollToTopManual}
// //                                 style={{ 
// //                                     backgroundColor: '#B88A4A', 
// //                                     borderRadius: '5px',
// //                                     fontSize: '14px',
// //                                     border: 'none'
// //                                 }}
// //                             >
// //                                 <FaUser className="me-2" /> LOGIN
// //                             </Link>
// //                         </li>
// //                     </ul>
// //                 </div>

// //                 {/* Social Icons Section */}
// //                 <div className="d-none d-lg-flex pe-4 gap-2">
// //                     <div className="social-box"><FaFacebookF /></div>
// //                     <div className="social-box"><FaInstagram /></div>
// //                     <div className="social-box"><FaLinkedinIn /></div>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;


// import React, { useEffect, useState } from 'react'; // useEffect aur useState add kiya
// import { FaFacebookF, FaInstagram, FaLinkedinIn ,FaUser} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../img/logo.png';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);

//     // Scroll Logic: Jab user scroll karega tab background change hoga
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Menu Close Logic: Link par click karte hi mobile menu band ho jayega
//     const closeMenu = () => {
//         const menu = document.getElementById('navbarNav');
//         if (menu.classList.contains('show')) {
//             menu.classList.remove('show');
//         }
//     };
//     const scrollToTopManual = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' // Smoothly upar jayega
//         });
//         closeMenu(); // Menu band karne wala function jo pehle diya tha
//     };

//     return (
//         /* Yahan condition check ho rahi hai: agar scrolled hai to 'navbar-scrolled' class lagegi */
//         <nav className={`navbar navbar-expand-lg navbar-light p-0 shadow-sm ${scrolled ? 'navbar-scrolled' : ''}`}>
//             <div className="container-fluid p-0">

//                 {/* Logo Section - Handled responsive width and height */}
//                 <div className="d-flex align-items-center justify-content-center px-4"
//                     style={{ 
//                         backgroundColor: '#B88A4A', 
//                         minWidth: window.innerWidth < 768 ? '140px' : '220px', 
//                         height: window.innerWidth < 768 ? '60px' : '85px' 
//                     }}>
//                     <Link to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                         <img
//                             src={logo}
//                             style={{ 
//                                 height: window.innerWidth < 768 ? '50px' : '115px', 
//                                 width: 'auto', 
//                                 objectFit: 'contain' 
//                             }}
//                             alt="AV Group Logo"
//                         />
//                     </Link>
//                 </div>

//                 {/* Toggle Button for Mobile */}
//                 <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Links Section */}
//                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//                     <ul className="navbar-nav gap-3">
//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link fw-bold text-dark ps-3 py-2"
//                                 to="/"
//                                 onClick={() => { scrollToTopManual(); closeMenu(); }}
//                             >
//                                 HOME
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/about" onClick={() => { scrollToTopManual(); closeMenu(); }}>ABOUT</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/service" onClick={() => { scrollToTopManual(); closeMenu(); }}>SERVICE</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/price" onClick={() => { scrollToTopManual(); closeMenu(); }}>PRICE</Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                             {/* Dropdown Toggle Link */}
//                             <Link
//                                 className="nav-link dropdown-toggle fw-bold text-dark ps-3 py-2"
//                                 to="#"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 PAGE
//                             </Link>

//                             {/* Dropdown Menu Items */}
//                             <ul className="dropdown-menu border-0 shadow-sm mt-3" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#CCC8C3' }}>
//                                 <li>
//                                     <Link
//                                         className="dropdown-item fw-bold text-dark"
//                                         to="/gallery"
//                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
//                                     >
//                                         GALLERY
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className="dropdown-item fw-bold text-dark"
//                                         to="/ourTeam"
//                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
//                                     >
//                                         OUR TEAM
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className="dropdown-item fw-bold text-dark"
//                                         to="/faq"
//                                         onClick={() => { scrollToTopManual(); closeMenu(); }}
//                                     >
//                                         FAQ
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/classes" onClick={() => { scrollToTopManual(); closeMenu(); }}>ONLINE CLASSES</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/contact" onClick={() => { scrollToTopManual(); closeMenu(); }}>CONTACT</Link>
//                         </li>
//                         <li className="nav-item ms-lg-3">
//                             <Link 
//                                 to="/login" 
//                                 className="btn px-4 py-2 fw-bold text-white shadow-sm"
//                                 onClick={scrollToTopManual}
//                                 style={{ 
//                                     backgroundColor: '#B88A4A', 
//                                     borderRadius: '5px',
//                                     fontSize: '14px',
//                                     border: 'none'
//                                 }}
//                             >
//                                 <FaUser className="me-2" /> LOGIN
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Social Icons Section */}
//                 <div className="d-none d-lg-flex pe-4 gap-2">
//                     <div className="social-box"><FaFacebookF /></div>
//                     <div className="social-box"><FaInstagram /></div>
//                     <div className="social-box"><FaLinkedinIn /></div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
// import React, { useEffect, useState } from 'react'; 
// import { FaFacebookF, FaInstagram, FaLinkedinIn ,FaUser} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../img/logo.png';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const closeMenu = () => {
//         const menu = document.getElementById('navbarNav');
//         if (menu.classList.contains('show')) {
//             menu.classList.remove('show');
//         }
//     };

//     const scrollToTopManual = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//         closeMenu(); 
//     };

//     // Mac Liquid Glass Styles
//     const glassNavbarStyle = {
//         background: scrolled 
//             ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.15))' 
//             : 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05))',
//         backdropFilter: 'blur(20px) saturate(190%)',
//         WebkitBackdropFilter: 'blur(20px) saturate(190%)',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
//         boxShadow: scrolled 
//             ? '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3)' 
//             : '0 4px 16px 0 rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
//         transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1050
//     };

//     const liquidButtonStyle = {
//         background: 'linear-gradient(180deg, rgba(184, 138, 74, 0.85) 0%, rgba(148, 107, 51, 0.95) 100%)',
//         backdropFilter: 'blur(4px)',
//         border: '1px solid rgba(255, 255, 255, 0.3)',
//         boxShadow: '0 4px 15px rgba(184, 138, 74, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
//         borderRadius: '30px', // Mac pill shape
//         fontSize: '14px',
//         transition: 'transform 0.2s ease, box-shadow 0.2s ease'
//     };

//     const dropdownMenuStyle = {
//         background: 'rgba(235, 232, 227, 0.65)',
//         backdropFilter: 'blur(25px) saturate(180%)',
//         WebkitBackdropFilter: 'blur(25px) saturate(180%)',
//         border: '1px solid rgba(255, 255, 255, 0.4)',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//         borderRadius: '12px'
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light p-0" style={glassNavbarStyle}>
//             <div className="container-fluid p-0">

//                 {/* Logo Section - Mac Glass Block Integration */}
//                 <div className="d-flex align-items-center justify-content-center px-4"
//                     style={{ 
//                         background: 'linear-gradient(135deg, rgba(184, 138, 74, 0.9), rgba(148, 107, 51, 0.95))',
//                         minWidth: window.innerWidth < 768 ? '140px' : '220px', 
//                         height: window.innerWidth < 768 ? '60px' : '85px',
//                         boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.2), 0 4px 15px rgba(0,0,0,0.05)',
//                         borderBottomRightRadius: window.innerWidth < 768 ? '12px' : '0px'
//                     }}>
//                     <Link to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                         <img
//                             src={logo}
//                             style={{ 
//                                 height: window.innerWidth < 768 ? '50px' : '115px', 
//                                 width: 'auto', 
//                                 objectFit: 'contain',
//                                 filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
//                             }}
//                             alt="AV Group Logo"
//                         />
//                     </Link>
//                 </div>

//                 {/* Toggle Button for Mobile */}
//                 <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                         style={{ border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.2)' }}>
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Links Section */}
//                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//                     <ul className="navbar-nav gap-3 align-items-center">
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                                 HOME
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/about" onClick={() => { scrollToTopManual(); closeMenu(); }}>ABOUT</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/service" onClick={() => { scrollToTopManual(); closeMenu(); }}>SERVICE</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/price" onClick={() => { scrollToTopManual(); closeMenu(); }}>PRICE</Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <Link
//                                 className="nav-link dropdown-toggle fw-bold text-dark px-3 py-2 dynamic-glass-hover"
//                                 to="#"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 PAGE
//                             </Link>

//                             {/* Dropdown Menu Items */}
//                             <ul className="dropdown-menu border-0 mt-2 p-2" aria-labelledby="navbarDropdown" style={dropdownMenuStyle}>
//                                 <li>
//                                     <Link className="dropdown-item fw-bold text-dark rounded-3" to="/gallery" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                                         GALLERY
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="dropdown-item fw-bold text-dark rounded-3" to="/ourTeam" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                                         OUR TEAM
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="dropdown-item fw-bold text-dark rounded-3" to="/faq" onClick={() => { scrollToTopManual(); closeMenu(); }}>
//                                         FAQ
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/classes" onClick={() => { scrollToTopManual(); closeMenu(); }}>ONLINE CLASSES</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/contact" onClick={() => { scrollToTopManual(); closeMenu(); }}>CONTACT</Link>
//                         </li>
//                         <li className="nav-item ms-lg-3">
//                             <Link 
//                                 to="/login" 
//                                 className="btn px-4 py-2 fw-bold text-white"
//                                 onClick={scrollToTopManual}
//                                 style={liquidButtonStyle}
//                             >
//                                 <FaUser className="me-2" /> LOGIN
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Social Icons Section */}
//                 <div className="d-none d-lg-flex pe-4 gap-2">
//                     <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px'}}><FaFacebookF /></div>
//                     <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px'}}><FaInstagram /></div>
//                     <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px'}}><FaLinkedinIn /></div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        const menu = document.getElementById('navbarNav');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    };

    const scrollToTopManual = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMenu();
    };

    // Mac Liquid Glass Styles (Aapka original style)
    const glassNavbarStyle = {
        background: scrolled
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.15))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(20px) saturate(190%)',
        WebkitBackdropFilter: 'blur(20px) saturate(190%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: scrolled
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
            : '0 4px 16px 0 rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        position: 'sticky',
        top: 0,
        zIndex: 1050
    };

    const liquidButtonStyle = {
        background: 'linear-gradient(180deg, rgba(184, 138, 74, 0.85) 0%, rgba(148, 107, 51, 0.95) 100%)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 15px rgba(184, 138, 74, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
        borderRadius: '30px', // Mac pill shape
        fontSize: '14px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    };

    const dropdownMenuStyle = {
        background: 'rgba(235, 232, 227, 0.65)',
        backdropFilter: 'blur(25px) saturate(180%)',
        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        borderRadius: '12px'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0" style={glassNavbarStyle}>

            {/* Embedded Responsive Dynamic CSS Layer */}
            <style>{`
                /* Bottom Luxury Border for the whole Navbar */
                .navbar {
                    border-bottom: 4px solid transparent !important;
                    border-image: linear-gradient(90deg, #b88a4a 0%, #e6ba73 50%, #946b33 100%) 1 !important;
                }
                .toggler-icon-bar {
                    display: block;
                    width: 26px;
                    height: 3px;
                    background-color: #B88A4A;
                    margin: 5px 0;
                   
                }
                .navbar-toggler {
               border: none;
               }
               .dropdown-item:hover {
                background-color: #B88A4A;
               }
               .dropdown-item{
               font-size:17px;
               }


               .navbar-toggler,
                .navbar-toggler:focus,
                .navbar-toggler:active,
                .navbar-toggler:focus-visible {
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                }
                /* Premium Diagonal Slash Badge for Logo */
                .logo-premium-cut {
                    background: linear-gradient(135deg, #bd9053 0%, #946b33 45%, #704f22 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                   
                    /* Diagonal shape matching image_94e9a6.png */
                    clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%);
                }

                /* Bright highlight edge trim */
                .logo-premium-cut::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border-right: 3px solid #fff3d1;
                    pointer-events: none;
                }
                .nav-item:hover{
                color :#B88A4A
                }

                /* Responsive viewports container logic without changing typography */
                @media (min-width: 768px) {
                    .logo-premium-cut {
                        min-width: 220px;
                        height: 85px;
                        padding: 0 45px 0 25px;
                    }
                    .logo-premium-cut img {
                        height: 115px;
                    }
                      .nav-link{
                font-size:16px;
                }
                }
              

                @media (max-width: 767px) {
                    .logo-premium-cut {
                        min-width: 140px;
                        height: 70px;
                        padding: 0 30px 0 15px;
                        clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
                        border-bottom-right-radius: 12px;
                    }
                    .logo-premium-cut img {
                        height: 80px;
                    }
                    .navbar-collapse {
                        background: rgba(255, 255, 255, 0.98);
                        padding: 20px !important;
                    }
                    .navbar-nav {
                       width: 100%;
                    }
                      .nav-link{
                font-size:17px;
                }
                }
            `}</style>

            <div className="container-fluid p-0">

                {/* Logo Section - Enhanced Premium Slash Integration */}
                <div className="logo-premium-cut">
                    <Link to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
                        <img
                            src={logo}
                            style={{
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                            }}
                            alt="AV Group Logo"
                        />
                    </Link>
                </div>

                {/* Toggle Button for Mobile */}
                <button className="navbar-toggler custom-toggler-btn me-3 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon-bar"></span>
                    <span className="toggler-icon-bar"></span>
                    <span className="toggler-icon-bar"></span>
                </button>

                {/* Links Section */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-3 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/about" onClick={() => { scrollToTopManual(); closeMenu(); }}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/service" onClick={() => { scrollToTopManual(); closeMenu(); }}>SERVICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/price" onClick={() => { scrollToTopManual(); closeMenu(); }}>PRICE</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle fw-bold text-dark px-3 py-2 dynamic-glass-hover"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                PAGE
                            </Link>

                            {/* Dropdown Menu Items */}
                            <ul className="dropdown-menu border-0 mt-2 p-2" aria-labelledby="navbarDropdown" style={dropdownMenuStyle}>
                                <li>
                                    <Link className="dropdown-item fw-bold text-dark " to="/gallery"  onClick={() => { scrollToTopManual(); closeMenu(); }}>
                                        GALLERY
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item fw-bold text-dark " to="/ourTeam" onClick={() => { scrollToTopManual(); closeMenu(); }}>
                                        OUR TEAM
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item fw-bold text-dark " to="/faq" onClick={() => { scrollToTopManual(); closeMenu(); }}>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/classes" onClick={() => { scrollToTopManual(); closeMenu(); }}>ONLINE CLASSES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark px-3 py-2 dynamic-glass-hover" to="/contact" onClick={() => { scrollToTopManual(); closeMenu(); }}>CONTACT</Link>
                        </li>
                        {/* <li className="nav-item ms-lg-3">
                            <Link 
                                to="/login" 
                                className="btn px-4 py-2 fw-bold text-white"
                                onClick={scrollToTopManual}
                                style={liquidButtonStyle}
                            >
                                <FaUser className="me-2" /> LOGIN
                            </Link>
                        </li> */}
                    </ul>
                </div>

                {/* Social Icons Section - Original Elements Preserved */}
                {/* <div className="d-none d-lg-flex pe-4 gap-2">
                    <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px' }}><FaFacebookF /></div>
                    <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px' }}><FaInstagram /></div>
                    <div className="social-box" style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px' }}><FaLinkedinIn /></div>
                </div> */}
                <div className="d-none d-lg-flex pe-4 gap-2">

                    <a
                        href="https://www.facebook.com/archana.mali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <div
                            className="social-box"
                            style={{
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px'
                            }}
                        >
                            <FaFacebookF />
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/archies.jalgaon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <div
                            className="social-box"
                            style={{
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px'
                            }}
                        >
                            <FaInstagram />
                        </div>
                    </a>

                    <div
                        className="social-box"
                        style={{
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        <FaLinkedinIn />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;