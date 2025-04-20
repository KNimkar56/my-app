import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask, FaCalculator, FaPenNib } from 'react-icons/fa';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section
  className="hero-section d-flex align-items-center position-relative text-white"
  style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1552611052-33b48f4b5183)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    overflow: 'hidden',
  }}
  data-aos="fade-up"
>
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: 'linear-gradient(to bottom right, rgba(0, 43, 91, 0.85), rgba(255, 193, 7, 0.2))',
      zIndex: 1,
    }}
  ></div>

  <div className="container position-relative z-2 text-center">
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-12 px-4 px-md-5">
        <h1 className="display-2 fw-bold mb-4" style={{ lineHeight: 1.2 }}>
          Empower Bright Minds, One Lesson at a Time ✨
        </h1>
        <p className="lead fs-4 mb-5 text-light">
          Welcome to <span style={{ color: '#FFD700' }} className="fw-semibold">Lakshavedh Academy</span> —
          Personalized guidance in <strong>Math, Science & English</strong> for confident learners and top results.
        </p>
        <Link
          to="/courses"
          className="btn"
          style={{
            backgroundColor: '#002B5B',
            color: '#FFD700',
            padding: '0.9rem 2.8rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            border: 'none'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#FFC107';
            e.currentTarget.style.color = '#002B5B';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#002B5B';
            e.currentTarget.style.color = '#FFD700';
          }}
        >
          📚 Explore Courses
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* COURSES SECTION */}
      <section className="py-5" style={{ backgroundColor: '#EDECCF' }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">📚 Our Courses</h2>
          <div className="row g-4">

            {/* MATH */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://darlaston-graceacademy.org.uk/wp-content/uploads/Mathematics-Banner-for-Website.png"
                  className="card-img-top"
                  alt="Math Course"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title"><FaCalculator className="me-2" /> Mastering Math</h5>
                  <p className="card-text">Build a strong foundation in Algebra, Geometry, Arithmetic, and more with step-by-step lessons.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <Link to="/courses/math" className="btn btn-outline-primary w-100">View Course</Link>
                </div>
              </div>
            </div>

            {/* SCIENCE */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://wallpapers.com/images/hd/google-slides-background-0g67hae23kptdbax.jpg"
                  className="card-img-top"
                  alt="Science Course"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title"><FaFlask className="me-2" /> Science Simplified</h5>
                  <p className="card-text">Understand Physics, Chemistry, and Biology in a fun and interactive way with real-world examples.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <Link to="/courses/science" className="btn btn-outline-primary w-100">View Course</Link>
                </div>
              </div>
            </div>

            {/* ENGLISH */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/98/10/design-concept-of-word-english-website-banner-vector-20429810.jpg"
                  className="card-img-top"
                  alt="English Course"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title"><FaPenNib className="me-2" /> English Grammar Essentials</h5>
                  <p className="card-text">Master grammar, sentence structure, and writing skills to improve communication and exams.</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <Link to="/courses/english" className="btn btn-outline-primary w-100">View Course</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-5" style={{ backgroundColor: '#FAF5AF' }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">✨ Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="fw-bold">👩‍🏫 Expert Teachers</h5>
              <p>Lessons designed by experienced educators who care about results.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">🎯 Goal-Based Learning</h5>
              <p>Content structured for success in school and competitive exams.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">📱 Learn Anytime</h5>
              <p>Fully responsive platform available on phone, tablet, or PC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5" style={{ backgroundColor: '#EDECCF' }} data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">💬 Student & Parent Testimonials</h2>

          <div id="testimonialCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-indicators">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {[
                { text: "My child’s confidence in math has improved a lot. Great teaching style!", author: "Mrs. Sharma, Parent" },
                { text: "The science animations made learning so interesting!", author: "Ankit, Class 9" },
                { text: "Thanks to the grammar course, my writing scores went up by 30%.", author: "Priya, Class 8" }
              ].map((testimonial, i) => (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                  <blockquote className="blockquote p-4 bg-white border-start border-4" style={{ borderColor: '#FAF5AF', maxWidth: '700px', margin: 'auto' }}>
                    <p className="fs-5">{testimonial.text}</p>
                    <footer className="blockquote-footer mt-3">{testimonial.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-white text-center py-5" style={{ backgroundColor: '#00215E' }} data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold">Give Your Child the Best Start</h2>
          <p className="lead mt-2">Join Lakshavedh Academy and unlock their full academic potential.</p>
          <Link to="/courses" className="btn btn-light btn-lg mt-3">Browse Courses</Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
