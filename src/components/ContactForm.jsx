import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section animate-fade-in-up">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-form-container glass">
        {/* Replace the action URL with your unique Formspree URL */}
        <form className="contact-form" action="https://formspree.io/f/moeajrep" method="POST" encType="multipart/form-data">
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="jane@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="How can we work together? Tell me about your project." required></textarea>
          </div>

          <div className="form-group file-upload-group">
            <label className="file-upload-label" htmlFor="jd-upload">
              <span className="upload-icon">📄</span> Attach Job Description (PDF/Word)
            </label>
            <input type="file" id="jd-upload" name="jd_attachment" accept=".pdf,.doc,.docx" className="file-upload-input" />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
