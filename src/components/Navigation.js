import React from 'react';
import '../styles/Navigation.css';

function Navigation({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="nav-btn" onClick={() => onNavigate('home')}>
          Home
        </button>
        <button className="nav-btn" onClick={() => onNavigate('booking')}>
          Book Lesson
        </button>
        <button className="nav-btn" onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navigation;