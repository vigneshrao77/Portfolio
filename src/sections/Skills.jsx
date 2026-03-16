import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    { 
      title: 'Programming Languages', 
      items: ['Java', 'C', 'C++', 'JavaScript', 'Python'] 
    },
    { 
      title: 'Frontend Development', 
      items: ['HTML', 'CSS', 'Bootstrap', 'ReactJS'] 
    },
    { 
      title: 'Backend Development', 
      items: ['Node.js', 'Express.js', 'REST APIs'] 
    },
    { 
      title: 'Databases', 
      items: ['MongoDB', 'Oracle SQL'] 
    },
    { 
      title: 'CS Fundamentals', 
      items: ['Data Structures and Algorithms', 'OOP Concepts', 'DBMS'] 
    },
    { 
      title: 'Tools and Platforms', 
      items: ['Git', 'GitHub', 'Figma', 'REST Client', 'Anaconda'] 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="skills" className="skills-section">
      <div className="skills-header">
        <span className="section-subtitle">My Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`skill-card ${activeIndex === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="skill-card-inner">
              <div className="skill-card-front">
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-card-back">
                <div className="category-items">
                  {category.items.map((skill, idx) => (
                    <div key={idx} className="skill-item">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
