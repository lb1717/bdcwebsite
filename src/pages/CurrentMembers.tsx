import React, { useEffect, useRef, useState } from 'react';
import './CurrentMembers.css';
import leoByrne from '../headshots/leo-byrne.jpg';
import aaronJoy from '../headshots/aaron-joy-optimized.jpg';
// @ts-ignore
import sebastianTaubman from '../headshots/sebastian-taubman-optimized.jpg';
import alexGeng from '../headshots/alex-geng.jpg';
import vivekShah from '../headshots/Vivek Shah.jpg';

import lilyPeng from '../headshots/Lily Peng.jpg';
import neilBehl from '../headshots/neil-behl-optimized.jpg';
import charlesRichards from '../headshots/Charles Richards.webp';
import alannaLi from '../headshots/alanna-li-optimized.jpg';
import khanyaMhlongo from '../headshots/khanya-mhlongo-optimized.jpg';
import russellLi from '../headshots/Russell Li.jpg';
import jonathanSun from '../headshots/Johnathan Sun.jpeg';
import alexVanPoecke from '../headshots/alexander-van-poecke-optimized.jpg';
import bonaYoo from '../headshots/_DSF1896 - Bona Yoo.jpg';
import mattMelucci from '../headshots/MattBDCHeadshot - Matt Melucci.png';

const CurrentMembers: React.FC = () => {
  const fadeInRefs = useRef<(HTMLElement | null)[]>([]);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Preload all images
  useEffect(() => {
    const images = [
      leoByrne,
      aaronJoy,
      sebastianTaubman,
      alexGeng,
      vivekShah,
      lilyPeng,
      neilBehl,
      charlesRichards,
      alannaLi,
      khanyaMhlongo,
      russellLi,
      jonathanSun,
      alexVanPoecke,
      bonaYoo,
      mattMelucci
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addFadeInRef = (el: HTMLElement | null, index: number) => {
    fadeInRefs.current[index] = el;
  };

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };


  const executiveBoard = [
    {
      name: 'Sebastian Taubman',
      position: 'Co-President',
      image: sebastianTaubman,
      bio: 'Sebastian is a senior from Bloomfield Hills, Michigan concentrating in Economics. He will be working at Sixth Street after graduation. This past summer, he worked as an Investment Banking Summer Analyst at M. Klein & Company. Previously, he interned at Long Lake Management and Garnett Station Partners. On campus, he serves as Co-President of the Harvard Investment Association. In his free time, Sebastian enjoys traveling.'
    },
    {
      name: 'Aaron Joy',
      position: 'Co-President',
      image: aaronJoy,
      bio: 'Aaron is a junior from Washington, DC, concentrating in Economics. This past summer, he was a Summer Analyst on the Long/Short Equities team at Farallon Capital in San Francisco. Previously, he was a Summer Analyst at Moon Capital in New York. Outside of BDC, Aaron serves as Chief Investment Officer of the Harvard Financial Analysts Club and the Charles River Growth Fund. In his free time, Aaron enjoys playing the drums and watching Formula 1.'
    },
    {
      name: 'Bona Yoo',
      position: 'COO',
      image: bonaYoo,
      bio: 'Bona is a senior from Woodcliff Lake, NJ concentrating in Economics. This past summer, she worked as an Investment Banking Summer Analyst at Goldman Sachs in their TMT division in San Francisco, where she will be returning full-time. In the past, she has worked as a research fellow for Harvard Business School at their Economic Research Center in Paris, France.'
    },
    {
      name: 'Alex Geng',
      position: 'CIO',
      image: alexGeng,
      bio: 'Alex is a senior from Dallas, TX concentrating in Computer Science with a secondary in Economics. This past summer, he worked as a Private Equity Summer Analyst at Audax, focusing on the industrials and tech industries. In the past, he interned at Stagwell, a media and advertising holding company, on the investment team. Outside of BDC, he plays for the men\'s club lacrosse team and enjoys stand-up comedy, Texas BBQ, and classic movies.'
    },
    {
      name: 'Vivek Shah',
      position: 'CFO',
      image: vivekShah,
      bio: 'Vivek is a junior from Mumbai, India pursuing a joint concentration in statistics and classics. This past summer, he worked as an associate consultant intern at Bain & Company and will work as an investment banking intern at Citigroup next summer. He previously worked at Moelis as an IB intern. Outside of BDC, he plays club ultimate frisbee and researches Assyrian texts. In his free time, he enjoys travelling, horseback riding, supporting the New England Patriots, and spends way too much time playing pool.'
    },
    {
      name: 'Neil Behl',
      position: 'L/S Portfolio Manager',
      image: neilBehl,
      bio: 'Neil is a Junior from Chicago studying Statistics and Economics. This past summer he worked as an investment intern for Readystate Asset Management across the Convertible Arbitrage, Capital Structure Relative Value, and Event Driven Equities desks. Outside of BDC, he plays club tennis, pickup basketball, and poker.'
    },
    {
      name: 'Charles Richards',
      position: 'L/S Portfolio Manager',
      image: charlesRichards,
      bio: 'Charles Richards is a junior from Winston-Salem, NC concentrating in Economics with a secondary in Government. He will join M. Klein & Co. as an incoming Analyst and spent this past summer conducting economics research with Harvard. On campus, he is a member of the men\'s Heavyweight Crew team and serves as President of the Harvard Investment Association. In his free time, he enjoys biking, playing tennis, and following NASCAR.'
    },
    {
      name: 'Alanna Li',
      position: 'L/S Associate Portfolio Manager',
      image: alannaLi,
      bio: 'Alanna is a junior studying Economics. She interned at Seldon Capital this past summer and will be interning in investment banking at Goldman Sachs next summer.'
    },
    {
      name: 'Khanya Mhlongo',
      position: 'L/S Associate Portfolio Manager',
      image: khanyaMhlongo,
      bio: 'Khanya is sophomore from South Africa concentrating in Applied Mathematics and Economics. This past summer, he worked as a private equity analyst for a London Based family office. In the past, he worked for Knife Capital - a venture capital investment firm in Cape Town. Outside of BDC, he plays for the Harvard Men\'s Rugby team, does research with the Economics department and pitches stocks as a Senior Investment Researcher for the Harvard Financial Analysts Club. In his free time he enjoys hiking, playing soccer and listening to music with friends.'
    },
    {
      name: 'Russell Li',
      position: 'Macro Portfolio Manager',
      image: russellLi,
      bio: 'Russell is a senior from Houston, TX studying computer science, economics, and statistics. This past summer, he interned at Susquehanna International Group, where he will be returning full-time as a quantitative trader. In his free time, he enjoys poker, running, teaching, and working on his thesis.'
    },
    {
      name: 'Jonathan Sun',
      position: 'Macro Portfolio Manager',
      image: jonathanSun,
      bio: 'Jonathan is a senior from Rockville, MD pursuing the AB/SM in Applied Mathematics. This past summer, he was a quantitative macro summer analyst at BAM, where he worked on rates and systematic FX teams. Outside of BDC, he does economics and ML research at school and co-captains the Fed Challenge Team. In his free time, he enjoys running with friends, playing piano, and cooking.'
    },
    {
      name: 'Alex van Poecke',
      position: 'Macro Associate Portfolio Manager',
      image: alexVanPoecke,
      bio: 'Alexander is a sophomore from London concentrating in Applied Mathematics with Computer Science and Economics. This past summer, he worked at Vitol in London as a Quantitative Trading Intern focusing on derivatives in Gas and Power. Outside of BDC, he is involved with the Charles River Growth Fund (L/S), the Business Board of the Harvard Lampoon, and enjoys backgammon, tennis and golf.'
    },
    {
      name: 'Leo Byrne',
      position: 'Director of Alumni Affairs',
      image: leoByrne,
      bio: 'Leo is a sophomore from Stockholm, Sweden concentrating in Applied Mathematics and Economics. This past summer he worked in private equity at EQT Partners. Outside of BDC Leo plays varsity basketball at Harvard and is also a board member of the Harvard University Sports Lab (HUSL). In his free time, Leo enjoys watching sports, travelling, and playing golf.'
    },
    {
      name: 'Matt Melucci',
      position: 'Director of Member Affairs',
      image: mattMelucci,
      bio: 'Matt is a senior from New York, NY concentrating in Applied Math and Economics with a secondary in Classics. This past summer, he worked as a Growth Equity Summer Analyst at Silversmith Capital Partners where he will be returning full-time focusing on technology companies. In the past, he interned at Major Food Group on the finance team and at a technology startup based in Paris, FR. Outside of BDC, he is Director of Operations for the Crimson Business Board and a course assistant within the Economics department. In his free time, he enjoys cheering on all New York sports teams (go Knicks!), playing piano, reading, and running.'
    },
    {
      name: 'Lily Peng',
      position: 'Director of Recruiting',
      image: lilyPeng,
      bio: 'Lily is a sophomore from Maryland, near the Washington D.C. area. She is pursuing an Applied Math and Economics concentration. This past summer, she developed machine learning programs as an AI Strategy and Merchandising intern for luxury brands at the Bicester Village in Shanghai. Outside of BDC, she is a Case Team Lead for Harvard Consulting on Business and the Environment and a viola player in the Harvard Radcliffe orchestra. In her free time she enjoys photography, filmmaking, shopping, and over-priced sweet treats.'
    }
  ];

  const activePartners = [
    'Aaron Joy',
    'Alex Geng',
    'Alex van Poecke',
    'Alanna Li',
    'Bona Yoo',
    'Charles Richards',
    'Daniel Bae',
    'Dev Madhavani',
    'Himal Bamzai-Wokhlu',
    'Jonathan Sun',
    'Katia Anastas',
    'Katie Lu',
    'Khanya Mhlongo',
    'Laura Hwang',
    'Leo Byrne',
    'Lily Peng',
    'Marie Schaefers',
    'Matt Melucci',
    'Neil Behl',
    'Russell Li',
    'Sebastian Taubman',
    'Vivek Shah',
    'Yafan Wang'
  ];

  return (
    <div className="current-members">
      <div className="members-content">
        <section className="executive-board" ref={(el) => addFadeInRef(el, 0)}>
          <h2>Executive Board</h2>
          <p className="subtitle">2025-2026</p>
          <div className="board-cards">
            {executiveBoard.map((member, index) => (
              <div key={index} className="board-card" onClick={() => openModal(member)}>
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  {member.bio && (
                    <p className="member-bio">
                      {member.bio.length > 90 ? (
                        <>
                          {(() => {
                            let truncated = member.bio.substring(0, 90);
                            const lastSpaceIndex = truncated.lastIndexOf(' ');
                            if (lastSpaceIndex > 0) {
                              truncated = truncated.substring(0, lastSpaceIndex);
                            }
                            return truncated;
                          })()}...
                          <span className="see-more"> (see more)</span>
                        </>
                      ) : (
                        member.bio
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="active-partners" ref={(el) => addFadeInRef(el, 1)}>
          <h2>Active Partners</h2>
          <div className="partners-list">
            {activePartners.map((partner, index) => {
              // Check if this partner is in the executive board
              const isBoardMember = executiveBoard.some(member => member.name === partner);
              return (
                <div key={index} className="partner-item">
                  {partner}{isBoardMember ? '*' : ''}
                </div>
              );
            })}
          </div>
          <div className="partners-footer">
            <p>* Board Member</p>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-member-image">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>
            <div className="modal-member-info">
              <h2>{selectedMember.name}</h2>
              <p className="modal-member-position">{selectedMember.position}</p>
              {selectedMember.bio && (
                <p className="modal-member-bio">{selectedMember.bio}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentMembers;
