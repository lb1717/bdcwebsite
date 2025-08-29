import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import textLogo from '../text-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="diamond-logo">
                <img src={textLogo} alt="Black Diamond Capital Investors" className="footer-logo" />
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/current-members">Current Members</Link></li>
              <li><Link to="/alumni">Alumni</Link></li>
              <li><Link to="/sponsorships">Sponsorships</Link></li>
              <li><Link to="/recruiting">Recruiting</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/black-diamond-capital-investors-llc" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Black Diamond Capital Investors. All rights reserved.</p>
            <div className="footer-bottom-links">
              <button className="footer-link-button">Privacy Policy</button>
              <button className="footer-link-button">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
