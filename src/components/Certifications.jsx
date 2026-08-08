import React from 'react';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2021",
    link: "#" // Placeholder for actual credential URL
  },
  {
    id: 2,
    title: "Machine Learning Engineering for Production (MLOps)",
    issuer: "Coursera",
    date: "2022",
    link: "#"
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "Coursera / Google",
    date: "2020",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section className="certifications-section animate-fade-in-up">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certificationsData.map(cert => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
