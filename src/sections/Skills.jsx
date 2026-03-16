import React from 'react';
import { skills } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools', items: skills.tools },
    { title: 'Other', items: skills.other }
  ];

  return (
    <SectionWrapper id="skills" className="skills-section">
      <div className="skills-header">
        <span className="section-subtitle">My Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="category-title">{category.title}</h3>
            <div className="category-items">
              {category.items.map((skill, idx) => (
                <div key={idx} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;