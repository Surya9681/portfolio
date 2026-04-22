import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <p className="greeting text-gradient">Hello, I'm</p>
          <h1 className="name">Sanepalli Surya <br />Karthikeya Reddy</h1>
          <h2 className="role">Frontend Developer & <br/> AI/Data Science Student</h2>
          <p className="summary">
            Skilled in building responsive, user-centric interfaces with modern web technologies. Seeking to contribute to real-world projects with a strong focus on UI/UX, performance, and scalability.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://github.com/Surya9681" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
