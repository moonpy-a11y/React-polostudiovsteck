import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Polo Lessons',
      description: 'Professional coaching from certified instructors',
      icon: '🏇'
    },
    {
      id: 2,
      title: 'Equipment Rental',
      description: 'High-quality polo gear and mallets available',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Team Training',
      description: 'Group sessions and team development programs',
      icon: '👥'
    },
    {
      id: 4,
      title: 'Events',
      description: 'Tournaments and exhibition matches',
      icon: '🏆'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;