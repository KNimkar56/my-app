import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import HeroHeader from "../../../components/HeroHeader";


function English() {
  return (
    <>
      {/* Hero Section */}
      <HeroHeader 
        emoji="📖"
        title="Excel in English"
        subtitle="Fluency, comprehension, and grammar — all in one place"
      />

      <div className="container py-5">

        {/* What You'll Learn */}
        <section className="mb-5">
          <h4 className="mb-4 fw-bold" style={{ color: '#002B5B' }}>🔍 What You’ll Learn</h4>
          <div className="row g-4">
            {[
              {
                icon: "📚",
                title: "Grammar",
                desc: "Master tenses, parts of speech, sentence structure, and error correction with confidence."
              },
              {
                icon: "📝",
                title: "Writing Skills",
                desc: "Develop skills to write formal letters, creative essays, narratives, and reports."
              },
              {
                icon: "🔊",
                title: "Reading & Speaking",
                desc: "Sharpen reading comprehension and spoken fluency with guided practice."
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
            <li><FaCheckCircle className="text-success me-2" />Covers CBSE / ICSE / State Boards syllabus</li>
            <li><FaCheckCircle className="text-success me-2" />Interactive daily speaking practice sessions</li>
            <li><FaCheckCircle className="text-success me-2" />Comprehension-based assignments & mock papers</li>
            <li><FaCheckCircle className="text-success me-2" />Weekly creative & academic writing workshops</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link
            to="/contact"
            className="btn btn-lg fw-semibold px-4 py-2 shadow"
            style={{ backgroundColor: '#FFC107', color: '#002B5B', border: 'none' }}
          >
            ✍️ Contact Us to Enroll
          </Link>
        </div>
      </div>
    </>
  );
}

export default English;
