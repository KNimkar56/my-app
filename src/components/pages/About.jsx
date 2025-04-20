import React from 'react';

function About() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
  className="text-white text-center d-flex align-items-center"
  style={{
    minHeight: '70vh',
    background:
      "linear-gradient(rgba(0, 43, 91, 0.75), rgba(0, 0, 0, 0.6)), url('/assets/about-hero.jpg') center/cover no-repeat",
  }}
>
  <div className="container">
    <h1 className="display-4 fw-bold">
      Building Futures at <span style={{ color: '#FFC107' }}>Lakshavedh Academy</span>
    </h1>
    <p className="lead fs-4 mt-3 text-light">
      A story of passion, purpose, and progress. Discover our mission, our mentors, and our movement.
    </p>
    <a
      href="#team"
      className="btn btn-lg mt-4 fw-bold shadow"
      style={{
        backgroundColor: '#FFC107',
        color: '#002B5B',
        padding: '0.75rem 2.5rem',
        borderRadius: '0.5rem',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      Meet Our Founders
    </a>
  </div>
</section>


      {/* MISSION SECTION */}
      <section className="py-5" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#002B5B' }}>🎯 Our Mission</h2>
          <p className="fs-5 text-center">
            At <strong>Lakshavedh Academy</strong>, we aim to <strong>ignite potential and empower students</strong>
            with knowledge, values, and clarity of purpose. We help every learner hit their “Lakshya” — their target —
            through dedicated mentorship, interactive teaching, and value-based learning.
          </p>
          <p className="text-center fst-italic mt-3">
            “We don’t just teach subjects — we shape futures.”
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#002B5B' }}>📖 The Story Behind Lakshavedh</h2>
          <p className="fs-5">
            The name <em>Lakshavedh</em> means "aiming at the goal" — a reflection of our educational philosophy.
            The academy was founded with a vision to create a space where students could not only master academics
            but also grow with purpose, confidence, and integrity.
          </p>
          <p className="fs-5">
            Our founders noticed a gap in traditional education — between rote learning and true understanding.
            Lakshavedh was created to bridge this gap by focusing on <strong>conceptual clarity, practical knowledge, and holistic development</strong>.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-5" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#002B5B' }}>👨‍🏫 Meet Our Founders</h2>

          <div className="row g-4 justify-content-center">
            {/* Bharat Nimkar */}
            <div className="col-md-5">
              <div className="card shadow-sm h-100 text-center">
                <img
                  src="/assets/founders/bharat (1).jpg"
                  alt="Bharat Nimkar"
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h4 className="card-title" style={{ color: '#002B5B' }}>Bharat Nimkar</h4>
                  <p className="card-subtitle text-muted mb-3">Co-Founder & Faculty</p>
                  <p className="card-text">
                    A dedicated educator with a calm teaching style and clear explanations.
                    Bharat Sir has years of experience helping students simplify tough subjects and gain lasting understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* Rupesh Tupat */}
            <div className="col-md-5">
              <div className="card shadow-sm h-100 text-center">
                <img
                  src="/assets/founders/rupesh.jpg"
                  alt="Rupesh Tupat"
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h4 className="card-title" style={{ color: '#002B5B' }}>Rupesh Tupat</h4>
                  <p className="card-subtitle text-muted mb-3">Co-Founder & Faculty</p>
                  <p className="card-text">
                    With a dynamic and energetic teaching approach, Rupesh Sir connects with students and builds their confidence.
                    He is known for making even the most complex topics feel approachable and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#002B5B' }}>🌟 Why Choose Lakshavedh?</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">✅ Experienced and passionate teachers</li>
                <li className="list-group-item">✅ Concept-based and value-driven learning</li>
                <li className="list-group-item">✅ Small batches for personal attention</li>
                <li className="list-group-item">✅ Mentorship beyond academics</li>
                <li className="list-group-item">✅ A mission-focused environment for growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
