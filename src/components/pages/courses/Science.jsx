import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import HeroHeader from "../../../components/HeroHeader";


function Science() {
  return (
    <>
      {/* Hero Section */}
      <HeroHeader 
        emoji="🧬"
        title="Exploring Science"
        subtitle="Fostering curiosity and discovery in Physics, Chemistry, and Biology"
      />

      {/* Main Container */}
      <div className="container py-5">

        {/* Learn Section */}
        <section className="mb-5">
          <h4 className="mb-4 fw-bold" style={{ color: '#002B5B' }}>🔍 What You’ll Learn</h4>
          <div className="row g-4">
            {[
              {
                icon: "⚛️",
                title: "Physics",
                desc: "Understand forces, motion, energy, and laws of nature with practical insights."
              },
              {
                icon: "🧪",
                title: "Chemistry",
                desc: "Dive into atoms, chemical reactions, and the periodic table with real-life relevance."
              },
              {
                icon: "🧬",
                title: "Biology",
                desc: "Explore life processes, cellular biology, ecosystems, and the human body."
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card h-100 p-4 shadow-sm border-0 text-center"
                  style={{ transition: '0.3s ease', borderTop: '4px solid #002B5B' }}
                >
                  <h5 className="fw-semibold">{item.icon} {item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-5 p-4 rounded" style={{ backgroundColor: '#F9F9F9' }}>
          <h4 className="mb-4 fw-bold" style={{ color: '#002B5B' }}>✅ Course Highlights</h4>
          <ul className="list-unstyled fs-5">
            <li><FaCheckCircle className="text-success me-2" />NCERT + Enrichment modules for deeper learning</li>
            <li><FaCheckCircle className="text-success me-2" />Animated explainers & hands-on experiment demos</li>
            <li><FaCheckCircle className="text-success me-2" />Regular concept assessments & practice quizzes</li>
            <li><FaCheckCircle className="text-success me-2" />Interactive virtual labs & live discussion sessions</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <Link
            to="/contact"
            className="btn btn-lg fw-semibold px-4 py-2 shadow"
            style={{ backgroundColor: '#FFC107', color: '#002B5B', border: 'none' }}
          >
            🧑‍🔬 Contact Us to Enroll
          </Link>
        </div>
      </div>
    </>
  );
}

export default Science;
