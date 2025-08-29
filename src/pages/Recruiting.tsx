import React from 'react';
import './Recruiting.css';

const Recruiting: React.FC = () => {
  return (
    <div className="recruiting">
      <div className="recruiting-content">
        <div className="recruiting-text fade-in-up">
          <h1>Recruiting</h1>
          <p>
            Black Diamond Capital accepts new partners each semester through a referral-based, highly rigorous application process. If you would like to learn more, please reach out to <span className="email-link">contact@blackdiamond-capital.org</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
