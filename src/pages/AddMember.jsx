import React, { useState } from 'react';
import { FaUserPlus, FaCloudUploadAlt, FaSave } from 'react-icons/fa';

const AddMember = () => {
    const [preview, setPreview] = useState(null);
    const [memberData, setMemberData] = useState({
        name: '',
        role: 'Makeup Artist',
        experience: '',
        photo: null
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setMemberData({ ...memberData, photo: file });
        setPreview(URL.createObjectURL(file));
    };

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-md-10 bg-white p-4 rounded shadow-sm border">
                    <form>
                        <div className="row">
                            <div className="col-md-4 text-center border-end">
                                <label className="fw-bold mb-3 d-block">Profile Photo</label>
                                <div 
                                    className="rounded-circle mx-auto bg-light d-flex align-items-center justify-content-center border shadow-sm"
                                    style={{ width: '180px', height: '180px', overflow: 'hidden', cursor: 'pointer' }}
                                    onClick={() => document.getElementById('teamFile').click()}
                                >
                                    {preview ? (
                                        <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <FaUserPlus size={40} className="text-muted" />
                                    )}
                                </div>
                                <input type="file" id="teamFile" hidden onChange={handleFileChange} />
                                <small className="text-muted mt-2 d-block">Square image best rahegi</small>
                            </div>

                            <div className="col-md-8 ps-md-4">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Full Name</label>
                                    <input type="text" className="form-control" placeholder="e.g. Meenakshi Mahajan" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Designation / Role</label>
                                    <select className="form-select">
                                        <option>Senior Makeup Artist</option>
                                        <option>Hair Stylist</option>
                                        <option>Skin Specialist</option>
                                        <option>Trainer</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Experience (Years)</label>
                                    <input type="text" className="form-control" placeholder="e.g. 5+ Years" />
                                </div>
                                <button className="btn w-100 text-white fw-bold py-2 mt-3" style={{ backgroundColor: '#B88A4A' }}>
                                    <FaSave className="me-2" /> ADD TO TEAM
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMember;