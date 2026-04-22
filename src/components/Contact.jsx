import React from 'react';
import './Contact.css';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content glass-card">
          <p className="contact-text">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together!
          </p>
          
          <div className="contact-links">
            <a href="mailto:bl.en.u4aid23048@bl.students.amrita.edu" className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>bl.en.u4aid23048@bl.students.amrita.edu</p>
              </div>
            </a>
            
            <a href="tel:+917095965503" className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>+91 7095965503</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sanepalli-surya-karthikeya-reddy-857025348?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>Sanepalli Surya Karthikeya Reddy</p>
              </div>
            </a>

            <a href="https://github.com/Surya9681" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>Surya9681</p>
              </div>
            </a>
          </div>
          
          <div className="extra-info">
            <h4>Certifications & Volunteering</h4>
            <ul className="info-list">
              <li><strong>AWS Academy Graduate:</strong> Cloud Foundations (09/22/2025)</li>
              <li><strong>Robin Hood Army:</strong> Volunteer for food collection and distribution drives</li>
            </ul>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sanepalli Surya Karthikeya Reddy. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
