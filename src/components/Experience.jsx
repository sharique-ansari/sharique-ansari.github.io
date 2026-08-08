import React from 'react';
import './Placeholders.css';

const Experience = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
      <h2 className="section-title">Experience</h2>
      <div className="glass placeholder-box">
        <h3>ML Lead Developer</h3>
        <span className="date">Collaborationroom.AI • 05/2024 - Present</span>
        <ul>
          <li>Developed and deployed a CNN-based emotion detection model using PyTorch, achieving 76% accuracy and optimizing it for real-time performance on client-side hardware.</li>
          <li>Engineered and scaled an attention-based object detection system to identify restricted items with ~94% mAP, automating a critical compliance monitoring process.</li>
          <li>Reduced ML deployment costs by 40% by orchestrating containerized models with Kubernetes and deploying them on Triton Inference Server.</li>
          <li>Leading a team of 2 ML Engineers through the end-to-end project lifecycle.</li>
        </ul>
      </div>
      <div className="glass placeholder-box">
        <h3>ML Engineer</h3>
        <span className="date">Falcon Autotech • 06/2020 - 04/2024</span>
        <ul>
          <li>Trained and deployed advanced computer vision models (CNN, YOLO, U-Net) to build end-to-end systems to detect, classify, and segment common warehouse objects.</li>
          <li>Led the end-to-end development and deployment of automated systems for warehouse operations, reducing operational errors by 20%.</li>
          <li>Optimized ML models for production deployment on edge devices (Nvidia Jetson) and low-power hardware, achieving a 3x inference speedup.</li>
        </ul>
      </div>
      <div className="glass placeholder-box">
        <h3>Junior Software Developer • Internship</h3>
        <span className="date">Markatent • 05/2019 - 08/2019</span>
        <ul>
          <li>Engineered a RESTful API using Django to facilitate automated facial comparison, serving as the core backend for the application.</li>
          <li>Integrated Amazon Rekognition into the application pipeline to execute high-accuracy biometric matching and facial analysis.</li>
          <li>Architected cloud infrastructure on AWS, utilizing EC2 for scalable application hosting and S3 for secure, durable storage.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
