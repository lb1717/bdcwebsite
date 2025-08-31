import React from 'react';
import './Sponsorships.css';

const Sponsorships: React.FC = () => {
  const companyLogos = [
    { src: '/firms2/Weissdb.png', alt: 'Weiss Asset Management' },
    { src: '/firms2/Balyasny_Asset_Management.png', alt: 'Balyasny Asset Management' },
    { src: '/firms2/Jane_Street_Capital_Logo.svg.png', alt: 'Jane Street Capital' },
    { src: '/firms2/Bridgewater_Associates_logo.svg', alt: 'Bridgewater Associates' },
    { src: '/firms2/Point72logo.png', alt: 'Point72' },
    { src: '/firms2/Citadel_LLC_Logo.svg.png', alt: 'Citadel' }
  ];

  return (
    <div className="sponsorships">
      <div className="sponsorships-content">
        <div className="sponsorships-text fade-in-up">
          <h1>Sponsorships</h1>
          <p>
            If you are interested in partnering with Black Diamond Capital, please reach out to <span className="email-link">contact@blackdiamond-capital.org</span>
          </p>
        </div>
        
        <div className="company-logos fade-in-up">
          <h2 className="logos-subtitle">Select Partners</h2>
          <div className="logos-grid">
            {companyLogos.map((logo, index) => (
              <div key={index} className="company-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;
