import React from 'react';
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            <i className="fas fa-user navbar-icon"></i>
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#skills" className="navbar-link">
            <i className="fas fa-cogs navbar-icon"></i>
            Skills
          </a>
        </li>
        <li className="navbar-item">
          <a href="#certifications" className="navbar-link">
            <i className="fas fa-certificate navbar-icon"></i>
            Certifications
          </a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link">
            <i className="fas fa-project-diagram navbar-icon"></i>
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            <i className="fas fa-envelope navbar-icon"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
