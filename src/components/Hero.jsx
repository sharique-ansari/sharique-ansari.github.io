import React from 'react';
import SocialLinks from './SocialLinks';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="avatar-container animate-fade-in-up">
          <img src="/images/exhibit_2.jpg" alt="Sharique Ansari" className="avatar glass" />
        </div>
        <div className="text-content">
          <h2 className="role delay-200 animate-fade-in-up">AI Software Engineer & Team Lead</h2>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
