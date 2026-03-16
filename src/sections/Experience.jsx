import React from 'react';
import { experience } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/experience.css';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="experience-section">
      <div className="experience-header">
        <span className="section-subtitle">Where I've Worked</span>
        <h2 className="section-title">Experience</h2>
      </div>
      
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <ul className="exp-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;