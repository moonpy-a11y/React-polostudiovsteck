import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🐴 Polo Studio</h1>
        </div>
        <div className="tagline">
          <p>Premium Polo Equipment & Training</p>
        </div>
      </div>
    </header>
  );
}

export default Header;