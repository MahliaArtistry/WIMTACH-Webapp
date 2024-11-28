import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Map from './pages/Map';
import Checklist from './pages/Checklist'; // Import the Checklist component
import './App.css';
import Fires from './pages/Fires';
import Food from './pages/Food';

const App = () => {
  const [highContrast, setHighContrast] = useState(false);

  // Toggle high contrast mode globally
  const toggleHighContrast = () => setHighContrast(!highContrast);

  return (
    <Router>
      <div className={`app-container ${highContrast ? "high-contrast" : ""}`}>
        <Header onContrastToggle={toggleHighContrast} isHighContrast={highContrast} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home highContrast={highContrast} toggleHighContrast={toggleHighContrast} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<Map />} />
            <Route path="/fires" element={<Fires />} />
            <Route path="/food" element={<Food />} />
            <Route path="/resources/emergency-kit" element={<Checklist />} /> {/* Add the Checklist route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;