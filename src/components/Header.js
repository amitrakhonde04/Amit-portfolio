import React from 'react';
import './Header.css';
import profilePhoto from '../assets/images/profile.jpeg'; // Ensure you have a profile photo in the specified path

const Header = () => {
  return (
    <header className="header">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
      <div className="header-container">
        <div className="profile-section">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <h2 className="profile-name">Amit G Rakhonde</h2>
        </div>
        <div className="header-content">
          <div className="welcome-section">
            <h1 className="welcome-message">
              Welcome to My Profile <span className="wave">👋</span>
            </h1>
            <p className="header-description">
              A Passionate AI and Machine Learning Engineer , Who loves to explore the power of Artifitial Intelligence.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
