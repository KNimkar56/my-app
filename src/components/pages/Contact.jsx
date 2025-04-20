import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
  className="text-white text-center d-flex align-items-center justify-content-center position-relative"
  style={{
    height: '60vh',
    backgroundImage:
      'linear-gradient(rgba(0, 43, 91, 0.85), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1581090700227-1e8a4d828be4)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container position-relative z-2">
    <h1 className="display-4 fw-bold mb-3" style={{ color: '#FFD700' }}>
      📞 Let's Connect
    </h1>
    <p className="lead fs-4 text-light">
      Have questions or ready to enroll? <br /> We’re here to guide you every step of the way!
    </p>
  </div>
</section>


      {/* CONTACT METHODS */}
      <section className="py-5" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#002B5B' }}>📬 Contact Options</h2>
          <div className="row g-4">

            {/* WhatsApp */}
            <div className="col-md-4 text-center">
              <FaWhatsapp className="text-success mb-3" size={40} />
              <h4 className="fw-semibold">WhatsApp</h4>
              <p>Chat with us instantly on WhatsApp.</p>
              <a
                href="https://wa.me/917756034259"
                className="btn btn-success px-4 py-2 fw-bold shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Us
              </a>
            </div>

            {/* Email */}
            <div className="col-md-4 text-center">
              <FaEnvelope className="mb-3" size={40} style={{ color: '#002B5B' }} />
              <h4 className="fw-semibold">Email</h4>
              <p>Send us your queries via email.</p>
              <a
                href="mailto:lakshavedhacademy@email.com"
                className="btn btn-outline-primary px-4 py-2 fw-bold shadow"
                style={{ color: '#002B5B', borderColor: '#002B5B' }}
              >
                Send Email
              </a>
            </div>

            {/* Phone */}
            <div className="col-md-4 text-center">
              <FaPhoneAlt className="mb-3" size={36} style={{ color: '#002B5B' }} />
              <h4 className="fw-semibold">Call</h4>
              <p>Call us directly for quick help.</p>
              <a
                href="tel:+917756034259"
                className="btn px-4 py-2 fw-bold shadow"
                style={{ backgroundColor: '#FFC107', color: '#002B5B' }}
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#002B5B' }}>
            <FaMapMarkerAlt className="me-2" />
            Our Location
          </h2>
          <p className="fs-5 mb-4">Shivaji Chowk, Talegaon Dashasar, Amravati, Maharashtra, India</p>

          <div className="ratio ratio-16x9 shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7465.457568675155!2d78.09000494139217!3d20.68061027353202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745120017756!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakshavedh Academy Location"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
