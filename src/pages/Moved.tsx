import React, { useEffect, useState } from 'react';
import textLogo from '../text-logo.png';
import './Moved.css';

const NEW_SITE_URL = 'https://blackdiamondcapital.info';
const REDIRECT_SECONDS = 7;

const Moved: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          window.location.href = NEW_SITE_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
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
        <p className="moved-redirect-note">
          Redirecting in <span className="moved-countdown">{secondsLeft}</span>{' '}
          {secondsLeft === 1 ? 'second' : 'seconds'}&hellip;
        </p>
      </div>
    </div>
  );
};

export default Moved;
