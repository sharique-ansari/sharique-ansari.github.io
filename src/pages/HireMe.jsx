import React from 'react';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import './HireMe.css';

const HireMe = () => {
  return (
    <div className="hire-me-page">
      <div className="resume-download animate-fade-in-up glass">
        <h2>Interested in working together?</h2>
        <p>You can download my latest resume below to see my full professional background.</p>
        <a href="/Resume.pdf" download="Sharique_Ansari_Resume.pdf" className="download-btn">
          Download Resume
        </a>
      </div>
      <Experience />
      <Certifications />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default HireMe;
