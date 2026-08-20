import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>123 Polo Lane<br />Equestrian Valley, CV 12345</p>
          </div>
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>info@polostudio.com</p>
          </div>
          <div className="contact-item">
            <h3>🕐 Hours</h3>
            <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;