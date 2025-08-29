import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CurrentMembers from './pages/CurrentMembers';
import Alumni from './pages/Alumni';
import Sponsorships from './pages/Sponsorships';
import Recruiting from './pages/Recruiting';
import Footer from './components/Footer';

// Component to handle scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/current-members" element={<CurrentMembers />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/sponsorships" element={<Sponsorships />} />
            <Route path="/recruiting" element={<Recruiting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
