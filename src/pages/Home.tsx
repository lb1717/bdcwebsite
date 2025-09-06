import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Black Diamond Capital Investors, LLC.
              </h1>
              <p className="hero-subtitle">
                Est. 2013
              </p>
              <p className="hero-description">
                Black Diamond Capital Investors, LLC. (BDC) is a student-run investment fund at Harvard and among the largest and most successful student-run hedge funds in the United States. We employ a broad array of strategies including Equity Long-Short, Equity Special Situations, and Global-Macro to construct a diversified portfolio that seeks relative outperformance of industry benchmarks.
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
