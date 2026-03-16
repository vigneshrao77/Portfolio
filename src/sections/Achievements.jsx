import React from 'react';
import { achievements } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/achievements.css';

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="achievements-section">
      <div className="achievements-header">
        <span className="section-subtitle">Milestones & Recognition</span>
        <h2 className="section-title">Achievements</h2>
      </div>
      
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="achievement-year">{achievement.year}</div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;