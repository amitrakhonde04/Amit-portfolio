import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Experience from './components/Experience';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Certifications/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
