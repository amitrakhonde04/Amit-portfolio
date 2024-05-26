import React from 'react';
import './Experience.css'; // Make sure to create a corresponding CSS file

const experiences = [
  {
    role: 'Associate System Engineer',
    company: 'TATA Consultancy Services',
    duration: 'Feb 2022 - Present',
    description: 'AI ML Engineer '
  },
  {
    role: 'Process Executive',
    company: 'Randstad pvt. ltd',
    duration: 'Oct 2021 - Feb 2022',
    description: 'Created high-quality data labeling by adhering to established guidelines and standards,including accuracy, consistency, and completeness.'
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
