import React from 'react';
import { personalInfo } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/contact.css';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="contact-section">
      <div className="contact-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
      </div>
      
      <div className="contact-content">
        <p className="contact-description">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-methods">
          <a href={`mailto:${personalInfo.email}`} className="contact-method">
            <span>Email: {personalInfo.email}</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
            <span>LinkedIn</span>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-method">
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;