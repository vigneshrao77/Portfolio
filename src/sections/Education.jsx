import React from 'react';
import { education } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/education.css';

const Education = () => {
  return (
    <SectionWrapper id="education" className="education-section">
      <div className="education-header">
        <span className="section-subtitle">Academic Background</span>
        <h2 className="section-title">Education</h2>
      </div>
      
      <div className="education-content">
        {education.map((edu, index) => (
          <div key={index} className="education-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="edu-main">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-year">{edu.year}</p>
              {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}
            </div>
            {edu.coursework && (
              <div className="edu-coursework">
                {edu.coursework.map((course, idx) => (
                  <span key={idx} className="course-item">{course}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;