import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../styles/about.css";

const About = () => {
  return (
    <SectionWrapper id="about" className="about-section">

      <div className="about-container">

        {/* SMALL TITLE */}
        <span className="about-small-title">ABOUT ME</span>

        {/* BIG HEADING */}
        <h2 className="about-main-title">
  Turning ideas into <span>code</span>, <br />
  and code into impact
</h2>

        {/* FIRST PARAGRAPH */}
        <p className="about-intro">
          I'm <b>Vignesh Rao</b>, a B.Tech Computer Science student passionate
          about solving problems and building modern web applications. I enjoy
          turning ideas into practical digital solutions through clean and
          efficient code while continuously exploring new technologies.
        </p>

        {/* SECOND PARAGRAPH */}
        <p className="about-description">
          I enjoy creating scalable digital experiences using modern
          technologies. I regularly solve problems on different coding platforms
          to strengthen my problem-solving abilities and improve my
          understanding of <b>Data Structures & Algorithms</b> and
          <b> Competitive Programming in C++</b>. My goal is to combine strong
          algorithmic thinking with development skills to build impactful
          software and grow into a professional software engineer.
        </p>

        {/* INFO CARDS */}
        <div className="about-cards">

          <div className="card">
            <span>COLLEGE</span>
            <h4>VNR VJIET</h4>
          </div>

          <div className="card">
            <span>DEGREE</span>
            <h4>B.Tech CSE</h4>
          </div>

          <div className="card">
            <span>GRADUATING YEAR</span>
            <h4>2028</h4>
          </div>

          <div className="card">
            <span>LOCATION</span>
            <h4>Hyderabad, India</h4>
          </div>

        </div>

        {/* INTERESTS */}
        <div className="about-interests">
          <h4>INTERESTS</h4>

          <div className="interests-grid">
            <span className="interest-tag">Full Stack Development</span>
            <span className="interest-tag">DSA</span>
            <span className="interest-tag">Competitive Programming</span>
          </div>
        </div>

      </div>

    </SectionWrapper>
  );
};

export default About;