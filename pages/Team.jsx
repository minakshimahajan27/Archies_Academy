// import React from 'react';

// // Image imports (Apne path ke hisaab se change karein)
// import team1 from '../src/img/img2.jpg';
// import team2 from '../src/img/img3.jpg';
// import team3 from '../src/img/img4.jpg';
// import team4 from '../src/img/img6.jpg';

// const teamMembers = [
//     { id: 1, name: "Lily Taylor", role: "Hair Specialist", img: team1 },
//     { id: 2, name: "Olivia Smith", role: "Nail Designer", img: team2 },
//     { id: 3, name: "Ava Brown", role: "Beauty Specialist", img: team3 },
//     { id: 4, name: "Amelia Jones", role: "Spa Specialist", img: team4 },
// ];

// const Team = () => {
//     return (
//         <section className="team-section py-5">
//             <div className="container text-center py-5">
//                 <h5 className="team-subtitle">Team Members</h5>
//                 <h1 className="team-main-title mb-5">Our Experienced Specialists</h1>

//                 <div className="row g-4">
//                     {teamMembers.map((member) => (
//                         <div key={member.id} className="col-lg-3 col-md-6">
//                             <div className="team-card">
//                                 {/* Image Wrapper for Zoom Effect */}
//                                 <div className="team-img-wrapper">
//                                     <img src={member.img} alt={member.name} className="img-fluid team-img" />
                                    
//                                     {/* Overlay Content */}
//                                     <div className="team-content-overlay">
//                                         <p className="member-role">{member.role}</p>
//                                         <h4 className="member-name">{member.name}</h4>
                                        
//                                         {/* Styled Social Icons */}
//                                         <div className="team-socials d-flex justify-content-center gap-2">
//                                             <a href="#" className="social-icon-frame"><i className="fab fa-facebook-f"></i></a>
//                                             <a href="#" className="social-icon-frame"><i className="fab fa-instagram"></i></a>
//                                             <a href="#" className="social-icon-frame"><i className="fab fa-linkedin-in"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Team;
import React from 'react';

import p1 from '../src/img/img2.jpg';
import p2 from '../src/img/img3.jpg';
import p3 from '../src/img/img4.jpg';
import p4 from '../src/img/img6.jpg';

const Team = () => {
  const teamData = [
    { id: 1, name: "Lily Taylor", role: "Hair Specialist", img: p1 },
    { id: 2, name: "Olivia Smith", role: "Nail Designer", img: p2 },
    { id: 3, name: "Ava Brown", role: "Beauty Specialist", img: p3 },
    { id: 4, name: "Amelia Jones", role: "Spa Specialist", img: p4 },
  ];

  return (
    <section className="team-section py-5 position-relative">
      <div className="container text-center py-5">
        <h5 className="team-subtitle">Team Members</h5>
        <h1 className="team-main-title mb-5">Our Experienced Specialists</h1>

        <div className="position-relative">
          {/* Background Patti (Strip) */}
          <div className="team-patti"></div>

          <div className="row g-4 position-relative" style={{ zIndex: 2 }}>
            {teamData.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-img-container">
                    <img src={member.img} alt={member.name} className="img-fluid team-photo" />
                    
                    {/* Glassmorphism Info Box */}
                    <div className="member-info-box">
                      <p className="m-role">{member.role}</p>
                      <h4 className="m-name">{member.name}</h4>
                      
                      <div className="d-flex justify-content-center">
                        <div className="social-box"><i className="fab fa-facebook-f"></i></div>
                        <div className="social-box"><i className="fab fa-instagram"></i></div>
                        <div className="social-box"><i className="fab fa-linkedin-in"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;