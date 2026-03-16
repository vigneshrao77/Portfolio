import React from 'react';
import { personalInfo } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import myImage from '../assets/image.jpg';
import '../styles/home.css';

const Home = () => {
  return (
    <SectionWrapper id="home" className="home-section">
      <div className="home-content">
        <div className="home-intro">
          <p className="home-greeting">Hi, I'm</p>
          <h1 className="home-name">{personalInfo.name}</h1>
          <h2 className="home-title">{personalInfo.title}</h2>
          <p className="home-description">
            I build exceptional digital experiences that live on the web.
            Specializing in creating high-performance applications with modern technologies.
          </p>
          
          <div className="home-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="home-visual">
          <img src={myImage} alt="My Photo" />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
