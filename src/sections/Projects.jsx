import React from 'react';
import { projects } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/projects.css';

const Projects = () => {

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <SectionWrapper id="projects" className="projects-section">
      <div className="projects-header">
        <span className="section-subtitle">What I've Built</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseMove={handleMouseMove}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;