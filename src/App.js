import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header />
      <Navigation onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <Services />
        </>
      )}
      {currentPage === 'booking' && <Booking />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;