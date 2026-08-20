import React, { useState } from 'react';
import '../styles/Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', date: '', service: '', message: '' });
  };

  return (
    <section className="booking">
      <div className="booking-container">
        <h2>Book Your Lesson</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="beginner">Beginner Lesson</option>
            <option value="intermediate">Intermediate Lesson</option>
            <option value="advanced">Advanced Lesson</option>
            <option value="group">Group Training</option>
          </select>
          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
          <button type="submit" className="submit-btn">Book Now</button>
        </form>
      </div>
    </section>
  );
}

export default Booking;