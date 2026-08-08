import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    image: "/images/robopick.gif",
    title: "Robotic Pick and Place Arm",
    shortDesc: "Real working demo of an automated robotic arm identifying, picking a parcel, and placing it accurately onto a moving conveyor belt.",
    longDesc: "This project involved developing a highly optimized computer vision pipeline integrated with an industrial robotic arm. The system identifies parcels in real-time on a fast-moving conveyor belt, computes the optimal grasping point, and executes the pick-and-place operation with precision, significantly reducing operational errors and manual intervention."
  },
  {
    id: 2,
    image: "/images/exhibit_1.jpg",
    title: "AI Summit Exhibition",
    shortDesc: "Showcasing cutting-edge AI solutions and discussing the future of machine learning infrastructure with industry leaders.",
    longDesc: "Represented the team at the prestigious AI Summit in New Delhi. Showcased our state-of-the-art machine learning infrastructure and computer vision models to industry leaders. Engaged in high-level discussions regarding the future of edge AI, real-time inference optimization, and scalable ML deployments."
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '700ms', animationFillMode: 'both' }}>
      <h2 className="section-title">Gallery & Highlights</h2>
      
      <div className="gallery-grid">
        {galleryItems.map(item => (
          <div key={item.id} className="gallery-item glass" onClick={() => openModal(item)}>
            <div className="gallery-image-container">
              <img src={item.image} alt={item.title} className="gallery-image" />
            </div>
            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-image-container">
              <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
            </div>
            <div className="modal-text">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.longDesc}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
