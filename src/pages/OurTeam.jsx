// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import team1 from '../img/image.png';
// import team2 from '../img/sanket.jpg';
// const OurTeam = () => {
//     const teamMembers = [
//         {
//             id: 1,
//             name: "Archana Mali",
//             role: "Owner of Acadamy (Makeup Artist)",
//             image: team1, // Yahan apni image ka path dalein
//             description: "Member one ka pura description yahan aayega. Aap unke experience, skills aur unki journey ke baare mein yahan vistar se likh sakte hain. Jaise ki unhone kab start kiya aur unki expertise kya hai.",
//             facebook: "#",
//             instagram: "#",
//             linkedin: "#"
//         },
//         {
//             id: 2,
//             name: "Sanket Mali",
//             role: "Makeup Artist",
//             image: team2, // Yahan apni image ka path dalein
//             description: "Member two ka pura description yahan aayega. Inke baare mein batayein ki ye team mein kya value add karte hain aur inki specializations kya hain. Aap jitna chahe bada text yahan likh sakte hain.",
//             facebook: "#",
//             instagram: "#",
//             linkedin: "#"
//         }
//     ];

//     return (
//         <div className="team-section py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '80px' }}>
//             <div className="container">
//                 <div className="text-center mb-5">
//                     <h6 className="all-subtitle text-uppercase" style={{ color: '#B88A4A', letterSpacing: '2px' }}>OUR EXPERTS</h6>
//                     <h1 className="all-main-title">Meet Our Professional Team</h1>
                    
//                 </div>

//                 <div className="row g-4 justify-content-center">
//                     {teamMembers.map((member) => (
//                         <div className="col-lg-10" key={member.id}>
//                             <div className="card border-0 shadow-sm overflow-hidden mb-4" style={{ borderRadius: '15px' }}>
//                                 <div className="row g-0 align-items-center">
//                                     {/* Image Section */}
//                                     <div className="col-md-4">
//                                         <img 
//                                             src={member.image} 
//                                             alt={member.name} 
//                                             className="img-fluid h-100 w-100" 
//                                             style={{ objectFit: 'cover', minHeight: '350px' }}
//                                         />
//                                     </div>
                                    
//                                     {/* Description Section */}
//                                     <div className="col-md-8">
//                                         <div className="card-body p-4 p-lg-5">
//                                             <h3 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>{member.name}</h3>
//                                             <h6 className="fw-bold mb-3" style={{ color: '#B88A4A' }}>{member.role}</h6>
//                                             <hr style={{ width: '50px', color: '#B88A4A', borderTop: '2px solid' }} />
//                                             <p className="text-muted lh-lg mb-4">
//                                                 {member.description}
//                                             </p>
                                            
//                                             {/* Social Links */}
//                                             <div className="d-flex gap-3">
//                                                 <a href={member.facebook} className="team-social-icon"><FaFacebookF /></a>
//                                                 <a href={member.instagram} className="team-social-icon"><FaInstagram /></a>
//                                                 <a href={member.linkedin} className="team-social-icon"><FaLinkedinIn /></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurTeam;
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import team1 from '../img/image.png';
import team2 from '../img/sanket.jpg';

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Archana Mali",
            role: "Owner of Academy (Makeup Artist)",
            image: team1, 
            description: "With over 22 years of rich experience in the beauty industry, she is the proud founder of our academy. She has successfully trained and mentored thousands of aspiring makeup artists. Her simple and practical teaching style helps students master advanced beauty skills easily. She is dedicated to guiding you step-by-step toward a successful professional career.",
            facebook: "https://www.facebook.com/archana.mali",
            instagram: "https://www.instagram.com/archies.jalgaon/",
        },
        {
            id: 2,
            name: "Sanket Mali",
            role: "Makeup Artist",
            image: team2, 
            description: "With over 4 years of hands-on experience, he is recognized as the youngest makeup artist in Maharashtra. He is also a proud National Level Makeup Contest Winner who specializes in flawless bridal looks. His incredible creative talent and modern techniques bring an exciting, fresh energy to our academy. He is highly passionate about teaching students and helping them master the latest global beauty trends.",
            facebook: "https://www.facebook.com/sanket.mali.39395033",
            instagram: "https://www.instagram.com/sanket_makeup_artist/",
        }
    ];

    return (
        <div className="team-section " style={{ backgroundColor: '#f8f9fa', marginTop: '50px' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="all-subtitle text-uppercase" style={{ color: '#B88A4A', letterSpacing: '2px' }}>OUR EXPERTS</h6>
                    <h1 className="all-main-title">Meet Our Professional Team</h1>
                </div>

                <div className="row g-4 justify-content-center">
                    {teamMembers.map((member) => (
                        <div className="col-lg-10" key={member.id}>
                            <div className="card border-0 shadow-sm overflow-hidden mb-4" style={{ borderRadius: '15px' }}>
                                <div className="row g-0 align-items-center">
                                    {/* Image Section - Height reduced to 260px */}
                                    <div className="col-md-4">
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="img-fluid h-100 w-100" 
                                            style={{ objectFit: 'cover', minHeight: '260px' }}
                                        />
                                    </div>
                                    
                                    {/* Description Section */}
                                    <div className="col-md-8">
                                        <div className="card-body p-4 p-lg-5">
                                            <h3 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>{member.name}</h3>
                                            <h6 className="fw-bold mb-3" style={{ color: '#B88A4A' }}>{member.role}</h6>
                                            <hr style={{ width: '50px', color: '#B88A4A', borderTop: '2px solid' }} />
                                            <p className=" lh-lg mb-4 fs-5" style={{ fontWeight:'800px' }}>
                                                {member.description}
                                            </p>
                                            
                                            {/* Social Links With Team UI Design */}
                                            <div className="d-flex justify-content-start gap-2">
                                                {member.facebook && (
                                                    <a
                                                        href={member.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-decoration-none"
                                                    >
                                                        <div className="social-box">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </div>
                                                    </a>
                                                )}

                                                {member.instagram && (
                                                    <a
                                                        href={member.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-decoration-none"
                                                    >
                                                        <div className="social-box">
                                                            <i className="fab fa-instagram"></i>
                                                        </div>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;