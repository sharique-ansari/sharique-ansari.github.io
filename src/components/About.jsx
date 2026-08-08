import React from 'react';
import './Placeholders.css';

const About = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
      <h2 className="section-title">About Me</h2>
      <div className="glass" style={{ padding: '2.5rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          I am a results-oriented <strong style={{ color: 'var(--text-primary)' }}>AI Software Engineer and Team Lead</strong> with over 6 years of hands-on experience developing, deploying, and scaling production-ready machine learning solutions. 
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          My expertise lies in managing the end-to-end ML lifecycle—from translating complex business needs into impactful AI applications to optimizing highly concurrent models on large-scale infrastructure. I specialize heavily in computer vision, ML infrastructure, and real-time data processing.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          Currently, I direct a cross-functional ML team, mentoring engineers and driving the delivery of data-driven solutions in fast-paced, high-impact environments. I thrive at the intersection of leadership, architectural design, and cutting-edge artificial intelligence.
        </p>
      </div>
    </section>
  );
};

export default About;
