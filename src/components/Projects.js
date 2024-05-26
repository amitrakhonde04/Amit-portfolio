import React from 'react';
// import './Projects.css';
import project1Image from '../assets/images/objectwebapp.png';
import project2Image from '../assets/images/portfolio.png';

const projects = [
  {
    title: "Object Detection Webapp",
    // description: "This is a brief description of Project One.",
    image: project1Image,
    link: "https://detect-object.streamlit.app/"
  }
  ,
  {
    title: "Portfolio using Chat_GPt",
    // description: "This is a brief description of Project Two.",
    image: project2Image,
    link: "#"
  }
  // ,
  // {
  //   title: "Project Four",
  //   description: "This is a brief description of Project Four.",
  //   image: "path/to/project4.jpg",
  //   link: "#"
  // }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
