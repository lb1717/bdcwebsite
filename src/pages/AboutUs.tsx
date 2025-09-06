import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-text fade-in-up">
          <h1>About Us</h1>
          <p>
            Based at Harvard University, Black Diamond Capital Investors is the preeminent finance organization on campus and among the largest and most successful student-run hedge funds in the United States. With its large AUM and small partnership, Black Diamond Capital Investors maintains one of the highest capital-to-investor ratios of any student-run investment fund in the world.
          </p>
          <p>
            Black Diamond Capital employs a broad array of strategies including Equity Long-Short, Equity Special Situations, and Global-Macro to construct a diversified portfolio that seeks relative outperformance of industry benchmarks. The fund retains a research-heavy focus that plays to the academic strengths of its partnership.
          </p>
          <p>
            Black Diamond Capital actively recruits and selects the most talented students at Harvard through a highly competitive admissions process designed to test investment acumen and holistic fit within the organization. On an absolute-basis, the fund's returns have beat the S&P 500 by an average of 7% annually over the past five years. On a risk-adjusted (Sortino) basis, BDC's returns have beat the S&P 500 by an average of 2.2x over that period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
