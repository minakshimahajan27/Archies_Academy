import React, { useState } from 'react';
import { FaTrash, FaEdit, FaUserTie } from 'react-icons/fa';

const MemberList = () => {
    const [team, setTeam] = useState([
        { id: 1, name: 'Archana Singh', role: 'Founder & Director', exp: '10+ Years', img: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Riya Gupta', role: 'Hair Specialist', exp: '4 Years', img: 'https://via.placeholder.com/100' },
    ]);

    return (
        <div className="container-fluid p-0">
            <div className="row g-4">
                {team.map((m) => (
                    <div className="col-md-6 col-lg-4" key={m.id}>
                        <div className="card border-0 shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center gap-3">
                                <img src={m.img} className="rounded-circle border" alt={m.name} style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                                <div>
                                    <h6 className="fw-bold mb-0">{m.name}</h6>
                                    <small className="text-muted d-block">{m.role}</small>
                                    <span className="badge bg-light text-dark border mt-1" style={{ fontSize: '10px' }}>{m.exp} Exp</span>
                                </div>
                            </div>
                            <div className="d-flex gap-2 mt-3 pt-3 border-top">
                                <button className="btn btn-sm btn-outline-primary flex-grow-1"><FaEdit /> Edit</button>
                                <button className="btn btn-sm btn-outline-danger flex-grow-1"><FaTrash /> Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberList;