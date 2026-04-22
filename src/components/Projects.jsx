import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Traffic Sign Recognition",
      tech: ["PyTorch", "CNN", "CBAM", "Residual Networks", "Attention Mechanisms"],
      description: "Designed a custom CNN architecture for traffic sign classification. Integrated CBAM, Squeeze-and-Excitation, and Residual blocks to enhance feature learning. Improved model performance through modular attention-based architecture design."
    },
    {
      title: "Flood Prediction using Regression Analysis",
      tech: ["Python", "Scikit-learn", "Pandas"],
      description: "Developed a regression model to predict flood probability using 30,000+ records and 21 features. Applied SelectKBest feature selection and L1 regularization for dimensionality reduction. Performed EDA and built a structured ML pipeline for predictive analysis."
    },
    {
      title: "College Maintenance Management System",
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
      description: "Built a full-stack website featuring request tracking and maintenance management dashboards to streamline college infrastructure support."
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
