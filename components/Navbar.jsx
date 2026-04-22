// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../src/img/logo.png';
// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light  p-0 shadow-sm">
//             <div className="container-fluid p-0">

//                 {/* Logo Section #B88A4A  */}


//                     <div className="d-flex align-items-center justify-content-center px-4"
//                         style={{ backgroundColor: '#B88A4A', minWidth: '220px', height: '85px' }}>

//                         <Link to="/">
//                             {/* Aapki image yahan set ho gayi hai */}
//                             <img
//                                 src={logo}
//                                 style={{ height: '115px', width: 'auto', objectFit: 'contain' }}
//                                 alt="AV Group Logo"
//                             />
//                         </Link>

//                     </div>


//                 {/* Toggle Button for Mobile */}
//                 <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Links Section */}
//                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//                     <ul className="navbar-nav gap-3">
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/">
//                                 HOME
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/about">
//                                 ABOUT
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/service">
//                                 SERVICE
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/price">
//                                 PRICE
//                             </Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <Link className="nav-link fw-bold text-dark" to="/page">
//                                 PAGE
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/classes">
//                                ONLINE CLASSES
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link fw-bold text-dark" to="/contact">
//                                 CONTACT
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

import React, { useEffect, useState } from 'react'; // useEffect aur useState add kiya
import { FaFacebookF, FaInstagram, FaLinkedinIn ,FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../src/img/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Scroll Logic: Jab user scroll karega tab background change hoga
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

    // Menu Close Logic: Link par click karte hi mobile menu band ho jayega
    const closeMenu = () => {
        const menu = document.getElementById('navbarNav');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    };
    const scrollToTopManual = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smoothly upar jayega
        });
        closeMenu(); // Menu band karne wala function jo pehle diya tha
    };

    return (
        /* Yahan condition check ho rahi hai: agar scrolled hai to 'navbar-scrolled' class lagegi */
        <nav className={`navbar navbar-expand-lg navbar-light p-0 shadow-sm ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container-fluid p-0">

                {/* Logo Section */}
                <div className="d-flex align-items-center justify-content-center px-4"
                    style={{ backgroundColor: '#B88A4A', minWidth: '220px', height: '85px' }}>
                    <Link to="/" onClick={() => { scrollToTopManual(); closeMenu(); }}>
                        <img
                            src={logo}
                            style={{ height: '115px', width: 'auto', objectFit: 'contain' }}
                            alt="AV Group Logo"
                        />
                    </Link>
                </div>

                {/* Toggle Button for Mobile */}
                <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links Section */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold text-dark ps-3 py-2"
                                to="/"
                                onClick={() => { scrollToTopManual(); closeMenu(); }}
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/about" onClick={() => { scrollToTopManual(); closeMenu(); }}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/service" onClick={() => { scrollToTopManual(); closeMenu(); }}>SERVICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/price" onClick={() => { scrollToTopManual(); closeMenu(); }}>PRICE</Link>
                        </li>
                        <li className="nav-item dropdown">
                            {/* Dropdown Toggle Link */}
                            <Link
                                className="nav-link dropdown-toggle fw-bold text-dark ps-3 py-2"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                PAGE
                            </Link>

                            {/* Dropdown Menu Items */}
                            <ul className="dropdown-menu border-0 shadow-sm mt-3" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#CCC8C3' }}>
                                <li>
                                    <Link
                                        className="dropdown-item fw-bold text-dark"
                                        to="/gallery"
                                        onClick={() => { scrollToTopManual(); closeMenu(); }}
                                    >
                                        GALLERY
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item fw-bold text-dark"
                                        to="/ourTeam"
                                        onClick={() => { scrollToTopManual(); closeMenu(); }}
                                    >
                                        OUR TEAM
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item fw-bold text-dark"
                                        to="/faq"
                                        onClick={() => { scrollToTopManual(); closeMenu(); }}
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/classes" onClick={() => { scrollToTopManual(); closeMenu(); }}>ONLINE CLASSES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-dark ps-3 py-2" to="/contact" onClick={() => { scrollToTopManual(); closeMenu(); }}>CONTACT</Link>
                        </li>
                        <li className="nav-item ms-lg-3">
                            <Link 
                                to="/login" 
                                className="btn px-4 py-2 fw-bold text-white shadow-sm"
                                onClick={scrollToTopManual}
                                style={{ 
                                    backgroundColor: '#B88A4A', 
                                    borderRadius: '5px',
                                    fontSize: '14px',
                                    border: 'none'
                                }}
                            >
                                <FaUser className="me-2" /> LOGIN
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Icons Section */}
                <div className="d-none d-lg-flex pe-4 gap-2">
                    <div className="social-box"><FaFacebookF /></div>
                    <div className="social-box"><FaInstagram /></div>
                    <div className="social-box"><FaLinkedinIn /></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;