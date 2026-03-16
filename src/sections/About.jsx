import React from 'react';
import { about } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/about.css';

const About = () => {
  return (
    <SectionWrapper id="about" className="about-section">
      <div className="about-header">
        <span className="section-subtitle">Get To Know Me</span>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">{about.intro}</p>
          <p className="about-description">{about.description}</p>
          
          <div className="about-interests">
            <h3 className="interests-title">Areas of Interest</h3>
            <div className="interests-grid">
              {about.interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="interest-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="visual-box">
            <div className="box-content">
              <div className="code-snippet">
                <p><span className="code-keyword">const</span> developer = {'{'}</p>
                <p>  name: <span className="code-string">"Alex"</span>,</p>
                <p>  role: <span className="code-string">"Full Stack"</span>,</p>
                <p>  passion: <span className="code-string">"Building"</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
