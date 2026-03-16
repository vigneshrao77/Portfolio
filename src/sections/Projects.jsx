import React from 'react';
import { projects } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/projects.css';

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="projects-section">
      <div className="projects-header">
        <span className="section-subtitle">What I've Built</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            {project.featured && <span className="featured-badge">Featured</span>}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;