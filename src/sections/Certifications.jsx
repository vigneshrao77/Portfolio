import React from 'react';
import { certifications } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/certifications.css';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="certifications-section">
      <div className="certifications-header">
        <span className="section-subtitle">Professional Credentials</span>
        <h2 className="section-title">Certifications</h2>
      </div>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-year">{cert.year}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;