import React, { useState } from 'react';

// Aapki image imports (src/img folder se)
import p1 from '../src/img/img2.jpg';
import p2 from '../src/img/img3.jpg';
import p3 from '../src/img/img6.jpg';
import p4 from '../src/img/img4.jpg';
import p5 from '../src/img/img6.jpg';
import p6 from '../src/img/img5.jpg';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    // Lightbox handle
    const openLightbox = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    return (
        <section className="gallery-section py-5">
            <div className="container py-lg-5">
                <div className="text-center mb-5">
                    <h5 className="gallery-subtitle">Gallery</h5>
                    <h1 className="gallery-main-title">Explore Our Gallery</h1>
                </div>

                {/* --- Row 1: Pehli image badi (col-lg-6), baaki do choti (col-lg-3) --- */}
                <div className="row g-0 mb-lg-0">
                    {/* Big Image 1 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="gallery-item-box wide-height" onClick={() => openLightbox(p1)}>
                            <img src={p1} alt="Salon 1" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay">
                                <span className="plus-symbol">+</span>
                            </div>
                        </div>
                    </div>
                    {/* Narrow Image 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="gallery-item-box narrow-height" onClick={() => openLightbox(p2)}>
                            <img src={p2} alt="Salon 2" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay"><span className="plus-symbol">+</span></div>
                        </div>
                    </div>
                    {/* Narrow Image 3 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="gallery-item-box narrow-height" onClick={() => openLightbox(p3)}>
                            <img src={p3} alt="Salon 3" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay"><span className="plus-symbol">+</span></div>
                        </div>
                    </div>
                </div>

                {/* --- Row 2: Pahli do choti (col-lg-3), Aakhri badi (col-lg-6) --- */}
                <div className="row g-0">
                    {/* Narrow Image 4 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="gallery-item-box narrow-height" onClick={() => openLightbox(p4)}>
                            <img src={p4} alt="Salon 4" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay"><span className="plus-symbol">+</span></div>
                        </div>
                    </div>
                    {/* Narrow Image 5 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="gallery-item-box narrow-height" onClick={() => openLightbox(p5)}>
                            <img src={p5} alt="Salon 5" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay"><span className="plus-symbol">+</span></div>
                        </div>
                    </div>
                    {/* Big Image 6 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="gallery-item-box wide-height" onClick={() => openLightbox(p6)}>
                            <img src={p6} alt="Salon 6" className="img-fluid gallery-photo" />
                            <div className="gallery-overlay"><span className="plus-symbol">+</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Lightbox Pop-up */}
            {selectedImg && (
                <div className="gallery-lightbox" onClick={() => setSelectedImg(null)}>
                    <div className="lightbox-content animate-zoomIn">
                        <img src={selectedImg} alt="Preview" />
                        <button className="close-gallery-btn">×</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;