import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import makeup from '../img/makeup...jpeg';
import p1 from '../img/haircut...jpg';
import p6 from '../img/skin-care...jpeg';
import classesImg from '../img/classes.png';

const BeautyAcademy = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Get all courses from backend
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await axios.get('https://archies-academy.onrender.com/api/admin/courses/all');
      const courseData = res.data.data || res.data.courses || res.data;

      if (Array.isArray(courseData)) {
        setCourses(courseData);
      } else {
        setCourses([]);
      }
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError(err.response?.data?.message || 'Unable to load courses. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // WhatsApp Function
  const handleWhatsApp = (courseName) => {
    const phoneNumber = '919422577198';
    const message = `Hello Archies Beauty Academy, I want to join the "${courseName}" online course. Please share the details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getCourseName = (course) =>
    course.title || course.courseName || course.name || 'Beauty Course';

  const getCourseDescription = (course) =>
    course.description || course.details || 'Learn professional beauty techniques with Archies Beauty Academy.';

  const getCourseDuration = (course) =>
    course.duration || course.courseDuration || 'Contact for details';

  const getCoursePrice = (course) =>
    course.price ?? course.fee ?? course.courseFee ?? '';

  // const getCourseImage = (course, index) => {
  //   const image = course.image || course.courseImage || course.thumbnail;
  //   if (image) return image;

  //   const defaultImages = [makeup, p1, p6];
  //   return defaultImages[index % defaultImages.length];
  // };
  const getCourseImage = (course, index) => {
  if (course.image) {
    return `https://archies-academy.onrender.com/uploads/${course.image}`;
  }

  const defaultImages = [makeup, p1, p6];
  return defaultImages[index % defaultImages.length];
};

  return (
    <div className="academy-page bg-light">

      {/* Hero Section - Academy Theme */}
      <section
        className="hero-section text-white d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${classesImg})`,
          height: '60vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container text-center">
          <h5 className="all-subtitle text-uppercase mb-3 fs-4" style={{ color: '#B88A4A', letterSpacing: '4px' }}>
            Learn from the Masters
          </h5>
          <h1 className="display-4 fw-bold mb-3">Archies Beauty Academy</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '15px' }}>
            Master International Makeup techniques and Hair Styling from the comfort of your home.
            Join our online live classes and become a Certified Beauty Expert today.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg px-4 py-3 fw-bold shadow text-decoration-none"
              style={{ backgroundColor: '#B88A4A', color: 'white', display: 'inline-block', fontSize: '15px' }}
              onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Courses
            </button>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <div className="container" style={{ marginTop: '-60px' }}>
        <div className="row g-4">
          {[
            { title: 'Live Sessions', desc: 'Direct interaction with expert educators in real-time.', icon: '📹' },
            { title: 'Certification', desc: 'Receive a recognized digital certificate upon completion.', icon: '📜' },
            { title: 'Career Guidance', desc: 'Personalized help to build your professional portfolio.', icon: '💼' }
          ].map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-lg p-4 text-center h-100">
                <div className="fs-1 mb-2">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Courses Section */}
      <section className="py-5" id="courses-section">
        <div className="container py-5">
          <div className="row align-items-end mb-5">
            <div className="col-md-6">
              <h5 className="all-subtitle text-uppercase fs-4" style={{ color: '#B88A4A', letterSpacing: '2px' }}>
                Start Learning
              </h5>
              <h2 className="all-main-title">Our Online Programs</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-muted">Every course includes comprehensive study materials and practical assignments.</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: '#B88A4A' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted mt-2">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : courses.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-0">No courses available right now.</p>
            </div>
          ) : (
            <div className="row g-4">
              {courses.map((course, index) => {
                const courseName = getCourseName(course);
                const coursePrice = getCoursePrice(course);

                return (
                  <div className="col-lg-4 col-md-6" key={course._id || course.id || index}>
                    <div className="card h-100 shadow-sm border-0 position-relative">
                      {index === 0 && (
                        <span className="badge position-absolute top-0 end-0 m-3 bg-danger">Best Seller</span>
                      )}
                      <img
                        src={getCourseImage(course, index)}
                        className="card-img-top"
                        alt={courseName}
                        style={{ height: '230px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.src = [makeup, p1, p6][index % 3];
                        }}
                      />
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between mb-2">
                          <small className="text-muted">{getCourseDuration(course)}</small>
                          {course.rating && <small className="text-warning">⭐ {course.rating}</small>}
                        </div>
                        <h5 className="card-title fw-bold" style={{ color: '#B88A4A' }}>{courseName}</h5>
                        <p className="card-text text-muted small">{getCourseDescription(course)}</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="h5 fw-bold mb-0">
                            {coursePrice !== '' ? `₹${coursePrice}` : 'Contact for price'}
                          </span>
                          <button
                            className="btn btn-sm"
                            onClick={() => handleWhatsApp(courseName)}
                            style={{ background: '#B88A4A', color: 'white' }}
                          >
                            Join Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Academy Stats / Why Us */}
      <section className="py-5 text-white mb-1" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>1200+</h2>
              <p className="small text-uppercase">Students Trained</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>45+</h2>
              <p className="small text-uppercase">Online Modules</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>100%</h2>
              <p className="small text-uppercase">Placement Support</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-0" style={{ color: '#B88A4A' }}>24/7</h2>
              <p className="small text-uppercase">Student Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeautyAcademy;
