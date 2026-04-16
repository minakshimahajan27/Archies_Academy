import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Member One Name",
            role: "Founder & Lead Stylist",
            image: "https://via.placeholder.com/400x500", // Yahan apni image ka path dalein
            description: "Member one ka pura description yahan aayega. Aap unke experience, skills aur unki journey ke baare mein yahan vistar se likh sakte hain. Jaise ki unhone kab start kiya aur unki expertise kya hai.",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        {
            id: 2,
            name: "Member Two Name",
            role: "Senior Makeup Artist",
            image: "https://via.placeholder.com/400x500", // Yahan apni image ka path dalein
            description: "Member two ka pura description yahan aayega. Inke baare mein batayein ki ye team mein kya value add karte hain aur inki specializations kya hain. Aap jitna chahe bada text yahan likh sakte hain.",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    ];

    return (
        <div className="team-section py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '80px' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="fw-bold" style={{ color: '#B88A4A', letterSpacing: '2px' }}>OUR EXPERTS</h6>
                    <h1 className="display-5 fw-bold text-dark">Meet Our Professional Team</h1>
                    <div className="mx-auto" style={{ width: '80px', height: '3px', backgroundColor: '#B88A4A' }}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {teamMembers.map((member) => (
                        <div className="col-lg-10" key={member.id}>
                            <div className="card border-0 shadow-sm overflow-hidden mb-4" style={{ borderRadius: '15px' }}>
                                <div className="row g-0 align-items-center">
                                    {/* Image Section */}
                                    <div className="col-md-4">
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="img-fluid h-100 w-100" 
                                            style={{ objectFit: 'cover', minHeight: '350px' }}
                                        />
                                    </div>
                                    
                                    {/* Description Section */}
                                    <div className="col-md-8">
                                        <div className="card-body p-4 p-lg-5">
                                            <h3 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>{member.name}</h3>
                                            <h6 className="fw-bold mb-3" style={{ color: '#B88A4A' }}>{member.role}</h6>
                                            <hr style={{ width: '50px', color: '#B88A4A', borderTop: '2px solid' }} />
                                            <p className="text-muted lh-lg mb-4">
                                                {member.description}
                                            </p>
                                            
                                            {/* Social Links */}
                                            <div className="d-flex gap-3">
                                                <a href={member.facebook} className="team-social-icon"><FaFacebookF /></a>
                                                <a href={member.instagram} className="team-social-icon"><FaInstagram /></a>
                                                <a href={member.linkedin} className="team-social-icon"><FaLinkedinIn /></a>
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