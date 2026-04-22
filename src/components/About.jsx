import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="glass-card about-card">
            <h3>Career Objective</h3>
            <p>
              Artificial Intelligence and Data Science student focused on frontend development, skilled in building responsive, user-centric interfaces with modern web technologies. Seeking opportunities to contribute to real-world frontend projects while strengthening UI/UX, performance, and scalable web development skills.
            </p>
          </div>
          
          <div className="glass-card education-card">
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>B.Tech. in Artificial Intelligence and Data Science</h4>
                <p className="institution">Amrita Vishwa Vidyapeetham, Bengaluru</p>
                <p className="duration">July 2023 - Present | CGPA: 6.94</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Board of Intermediate Education</h4>
                <p className="institution">Resonance Junior College, Hyderabad</p>
                <p className="duration">July 2021 - May 2023 | Percentage: 83.4%</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Board of Secondary Education</h4>
                <p className="institution">KKR's Gowtham, Andhra Pradesh</p>
                <p className="duration">May 2021 | Percentage: 83%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
