import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/resume.css';

const Resume = () => {
  return (
    <SectionWrapper id="resume" className="resume-section">
      <div className="resume-content">
        <span className="section-subtitle">Download My Resume</span>
        <h2 className="section-title">Resume</h2>
        <p className="resume-description">
          Download my complete resume to learn more about my experience and qualifications.
        </p>
        <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
      </div>
    </SectionWrapper>
  );
};

export default Resume;