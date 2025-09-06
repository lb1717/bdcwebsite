import React from 'react';
import './Alumni.css';

const Alumni: React.FC = () => {
  const companyLogos = [
    { src: '/firms/apollo-global-management-inc-logo-vector.png', alt: 'Apollo Global Management' },
    { src: '/firms/Bain_Capital_logo.svg.png', alt: 'Bain Capital' },
    { src: '/firms/Bank of America.png', alt: 'Bank of America' },
    { src: '/firms/BlackRock_wordmark.svg.png', alt: 'BlackRock' },
    { src: '/firms/Bridgewater_Associates_logo.svg', alt: 'Bridgewater Associates' },
    { src: '/firms/Citadel_LLC_Logo.svg.png', alt: 'Citadel' },
    { src: '/firms/Credit_Suisse_Logo.svg.png', alt: 'Credit Suisse' },
    { src: '/firms/D._E._Shaw_&_Co._logo.png', alt: 'D.E. Shaw & Co.' },
    { src: '/firms/Dodge-and-cox-logo.png', alt: 'Dodge & Cox' },
    { src: '/firms/Evercore_large-01.png', alt: 'Evercore' },
    { src: '/firms/Fidelity-Logo.png', alt: 'Fidelity' },
    { src: '/firms/Goldman Sachs.jpeg', alt: 'Goldman Sachs' },
    { src: '/firms/J_P_Morgan_Logo_2008_1.svg.png', alt: 'JP Morgan' },
    { src: '/firms/KKR-Logo.png', alt: 'KKR' },
    { src: '/firms/Logo_di_Oaktree_Capital_Management.png', alt: 'Oaktree Capital Management' },
    { src: '/firms/Morgan_Stanley_Logo_1.svg.png', alt: 'Morgan Stanley' },
    { src: '/firms/Oak_Hill_Capital_Partners_logo.svg.png', alt: 'Oak Hill Capital Partners' },
    { src: '/firms/PJT_Logo.png', alt: 'PJT Partners' },
    { src: '/firms/Point72logo.png', alt: 'Point72' },
    { src: '/firms/Silver_Lake_(Unternehmen)_logo.svg.png', alt: 'Silver Lake' },
    { src: '/firms/TPG_Capital_logo.svg.png', alt: 'TPG Capital' }
  ];

  return (
    <div className="alumni">
      <div className="alumni-content">
        <div className="alumni-text fade-in-up">
          <h1>Alumni</h1>
          <p>
            Current and former Black Diamond Capital Partners have held internships and full-time positions at many of the largest and most successful firms in the financial sector.
          </p>
        </div>
        
        <div className="company-logos fade-in-up">
          <h2 className="logos-subtitle">Select Alumni Placements</h2>
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

export default Alumni;
