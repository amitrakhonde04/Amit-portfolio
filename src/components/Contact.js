import React from 'react';
// import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-item">
          <i className="fas fa-envelope contact-icon"></i>
          <a href="mailto:amitrakhonde04@gmail.com" className="contact-link">amitrakhonde04@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin contact-icon"></i>
          <a href="https://www.linkedin.com/in/amit-g-rakhonde-81388a1a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt contact-icon"></i>
          <a href="tel:+1234567890" className="contact-link">+91 8378023404</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <span className="contact-link">Nagpur, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
