import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import HeroHeader from "../../../components/HeroHeader";


function Math() {
  return (
    <>
      {/* Hero Section */}
      <HeroHeader 
        emoji="📐"
        title="Mastering Math"
        subtitle="A complete journey from basics to brilliance for Classes 5–10"
      />

      {/* Main Container */}
      <div className="container py-5">
        
        {/* Learn Section */}
        <section className="mb-5">
          <h4 className="mb-4 fw-bold" style={{ color: '#002B5B' }}>🔍 What You’ll Learn</h4>
          <div className="row g-4">
            {[
              {
                icon: "📘",
                title: "Algebra",
                desc: "Master equations, expressions, and variables with real-life examples."
              },
              {
                icon: "📐",
                title: "Geometry",
                desc: "Explore shapes, angles, volume, and theorems with visual aids and diagrams."
              },
              {
                icon: "📏",
                title: "Arithmetic",
                desc: "Solidify basics in fractions, ratios, decimals, and percentages through engaging activities."
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
            <li><FaCheckCircle className="text-success me-2" />Covers complete syllabus (CBSE / ICSE / State Boards)</li>
            <li><FaCheckCircle className="text-success me-2" />Weekly doubt-clearing & mentor sessions</li>
            <li><FaCheckCircle className="text-success me-2" />Worksheets, revision notes & topic-wise tests</li>
            <li><FaCheckCircle className="text-success me-2" />Concept videos + Interactive live classes</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <Link
            to="/contact"
            className="btn btn-lg fw-semibold px-4 py-2 shadow"
            style={{ backgroundColor: '#FFC107', color: '#002B5B', border: 'none' }}
          >
            📞 Contact Us to Enroll
          </Link>
        </div>
      </div>
    </>
  );
}

export default Math;
