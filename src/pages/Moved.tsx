import React, { useEffect } from 'react';
import textLogo from '../text-logo.png';
import './Moved.css';

const NEW_SITE_URL = 'https://blackdiamondcapital.info';

const Moved: React.FC = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = NEW_SITE_URL;
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="moved-page">
      <div className="moved-content">
        <img src={textLogo} alt="Black Diamond Capital Investors" className="moved-logo" />
        <h1 className="moved-title">We have moved.</h1>
        <p className="moved-subtitle">
          Thank you for your interest in Black Diamond Capital, Harvard&apos;s premier student-run
          investment club. We are now on{' '}
          <a href={NEW_SITE_URL} className="moved-link">
            blackdiamondcapital.info
          </a>
        </p>
        <p className="moved-redirect-note">Redirecting you now&hellip;</p>
      </div>
    </div>
  );
};

export default Moved;
