// src/Projects.js

import React from "react";
import "./Projects.css"; 
import Navbar from "./Navbar";


const projectsData = [
  {
    title: "Inclusive Social Virtual Reality",
    stack: "Unity, C#",
    year: "Honours Project",
    description: "Social VR platform using Unity and XR Interaction Toolkit.",
    image: "assets/VR.png",
    githubLink: "https://github.com/yourusername/inclusive-social-vr"
  },
  {
    title: "DeafApp",
    stack: "SQLite, Django, Python",
    year: "Fourth Year",
    description: "Social Web Application tailored to the Deaf community.",
    image: "assets/DeafAPP.png",
    githubLink: "https://github.com/yourusername/deafapp"
  },
  {
    title: "Hanghand",
    stack: "Unity, C#",
    year: "Fourth Year",
    description: "Hangman prototype serious game for the BSL alphabet.",
    image: "assets/Profilepicture.png",
    githubLink: "https://github.com/yourusername/hanghand"
  },
  {
    title: "BattleBonds",
    stack: "Unity, C#",
    year: "Third Year",
    description: "2D turn-based game using Unity.",
    image: "assets/BB.png",
    githubLink: "https://github.com/yourusername/battlebonds"
  },
  {
    title: "Image Classification App",
    stack: "Android Studio, Python (ML)",
    year: "Third Year",
    description: "Android app that classifies types of flowers using Python.",
    image: "assets/Android.png",
    githubLink: "https://github.com/yourusername/flower-classification"
  },
  {
    title: "Neighbourhood Ninja",
    stack: "Unity, C#",
    year: "Third Year",
    description: "3D small open-world game using Unity.",
    image: "assets/NN.png",
    githubLink: "https://github.com/yourusername/neighborhood-ninja"
  }
];

function Projects() {
  return (
    <><Navbar />
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p className="project-year">{project.year}</p>
            <p className="project-stack">{project.stack}</p>
            <p className="project-description">{project.description}</p>
            
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;

