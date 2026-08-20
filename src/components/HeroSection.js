import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to Polo Studio</h2>
        <p>Experience the elegance and thrill of polo sports</p>
        <button className="cta-btn">Get Started Today</button>
      </div>
    </section>
  );
}

export default HeroSection;