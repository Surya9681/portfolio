import React from 'react';
import './Skills.css';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiPytorch, SiPandas, SiScikitlearn } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="skill-icon" /> },
        { name: "C++", icon: <SiCplusplus className="skill-icon" /> },
        { name: "Python", icon: <FaPython className="skill-icon" /> }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon" /> },
        { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
        { name: "React", icon: <FaReact className="skill-icon" /> }
      ]
    },
    {
      title: "Data Science & AI",
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="skill-icon" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="skill-icon" /> },
        { name: "Pandas", icon: <SiPandas className="skill-icon" /> }
      ]
    },
    {
      title: "Tools & Core Concepts",
      skills: [
        { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
        { name: "VS Code", icon: <VscCode className="skill-icon" /> },
        { name: "OOP", icon: <div className="text-icon">OOP</div> },
        { name: "DSA", icon: <div className="text-icon">DSA</div> }
      ]
    }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
