import React from 'react';
import './Placeholders.css';

const Skills = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
      <h2 className="section-title">Skills & Education</h2>
      <div className="projects-grid">
        <div className="glass placeholder-box">
          <h3>Skills</h3>
          <p><strong>Programming:</strong> C#, Matplotlib, Numpy, OpenCV, Pandas, Python, SQL, TensorBoard</p>
          <p><strong>Frameworks:</strong> Keras, PyTorch, Scikit-learn, Tensorflow</p>
          <p><strong>Models:</strong> CNN, ResNet, RNN, RT-DETR, Transformers, U-Net, YOLO</p>
          <p><strong>MLOps:</strong> AWS, Azure ML, CI/CD, Docker, DVC, Git, Kubernetes, MLflow, Triton Inference Server</p>
        </div>
        <div className="glass placeholder-box">
          <h3>Education & Certifications</h3>
          <p><strong>B.Tech in Computer Science</strong></p>
          <span className="date">IIIT Delhi • 2016 - 2020</span>
          <br/>
          <p><strong>Convolutional Neural Networks</strong></p>
          <span className="date">DeepLearning.AI</span>
          <br/>
          <p><strong>Data Science Ethics</strong></p>
          <span className="date">University of Michigan</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
