import React from 'react';
// import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <i className="fab fa-python skill-icon"></i>
          <p>Python</p>
        </div>
        <div className="skill">
          <i className="fas fa-robot skill-icon"></i>
          <p>Machine Learning</p>
        </div>
        <div className="skill">
          <i className="fas fa-brain skill-icon"></i>
          <p>Deep Learning</p>
        </div>
        <div className="skill">
          <i className="fas fa-eye skill-icon"></i>
          <p>Computer Vision</p>
        </div>
        <div className="skill">
          <i className="fab fa-git-alt skill-icon"></i>
          <p>Git</p>
        </div>
        <div className="skill">
          <i className="fab fa-github skill-icon"></i>
          <p>GitHub</p>
        </div>
        <div className="skill">
          <i className="fas fa-database skill-icon"></i>
          <p>Database</p>
        </div>
        <div className="skill">
          <i className="fab fa-aws skill-icon"></i>
          <p>AWS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
