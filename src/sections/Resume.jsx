import React, { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../styles/resume.css";

const Resume = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionRef.current.style.setProperty("--x", `${x}px`);
    sectionRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <SectionWrapper id="resume" className="resume-section">
      <div
        ref={sectionRef}
        className="resume-container"
        onMouseMove={handleMouseMove}
      >
        <div className="resume-content">
          <span className="section-subtitle">Download My Resume</span>

          <h2 className="section-title">Resume</h2>

          <p className="resume-description">
            Download my complete resume to learn more about my experience and
            qualifications.
          </p>

          <a href="/resume.pdf?v=2" download="Vignesh_Rao_Resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;