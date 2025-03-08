// src/Projects.js

import React, { useState } from "react";
import "./Projects.css"; 
import Navbar from "./Navbar";


const projectsData = [
  {
    title: "Social Virtual Reality Space",
    stack: "Unity, C#, ShapesXR",
    year: "Honours Project 2025",
    description: 
      "A Social VR platform designed for the Deaf community, built with a human-centered design approach that includes direct interviews with Deaf users. I created a low-fidelity prototype using ShapesXR, which is now being implemented in Unity with the XR Interaction Toolkit for hand tracking and Unity multiplayer. The project is slated for completion on April 4th.",
    image: "assets/VR.png",
    githubLink: "https://github.com/yourusername/inclusive-social-vr"
  },
  {
    title: "DeafApp",
  stack: "SQLite, Django, Python, HTML, CSS",
  year: "Fourth Year",
  description:
    "A social web application tailored for the Deaf community. Currently in development, the initial prototype was designed in Figma and is being implemented with Django (using crispy forms) and a SQLite database. Features include account creation, follow/unfollow functionality, forums, and integrated sign-language videos. Expected completion date: April 25.",
  image: "assets/DeafAPP.png",
  githubLink: "https://github.com/yourusername/deafapp"
  },
  {
    title: "Hanghand",
  stack: "Unity, C#",
  year: "Fourth Year",
  description:
    "A Hangman-inspired serious game prototype designed to teach the British Sign Language (BSL) alphabet. Currently in development with Unity and C#, the project is slated for completion on April 25th.",
  image: "assets/Profilepicture.png",
  githubLink: "https://github.com/yourusername/hanghand"
  },
  {
    title: "BattleBonds",
  stack: "Unity, C#",
  year: "Third Year",
  description:
    "A 2D turn-based retro game built with Unity and C#. Developed as a group project during my studies in the United States, I contributed to a Stardew Valley–inspired friendship system, as well as level design, UI, and animations.",
  image: "assets/BB.png",
  githubLink: "https://github.com/yourusername/battlebonds"
  },
  {
    title: "Image Classification App",
  stack: "Android Studio, Python (ML)",
  year: "Third Year",
  description:
    "An Android application that classifies different types of flowers using a Python-based machine learning model. This group project was completed during my studies in the United States, where we trained and validated a classification model on the CIFAR-100 dataset, then integrated it into an Android Studio app.",
  image: "assets/Android.png",
  githubLink: "https://github.com/yourusername/flower-classification"
  },
  {
    title: "Neighbourhood Ninja",
  stack: "Unity, C#",
  year: "Third Year",
  description:
    "A 3D open-world game built with Unity and C#. In this individual project, players become a stealthy ninja helping local residents by completing small quests in a suburban environment. Neighbourhood Ninja highlights a simple yet engaging quest system, where players solve everyday problems for NPCs.",
  image: "assets/NN.png",
  githubLink: "https://github.com/yourusername/neighborhood-ninja"
  }
];

function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-page">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="project-card">
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

      {/* Read More Button */}
      {project.longDescription && (
        <button className="read-more-btn" onClick={toggleExpand}>
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}

      {/* Expanded Content */}
      {expanded && (
        <div className="expanded-content">
          <p>{project.longDescription}</p>

          {/* Additional Images */}
          {project.extraImages && project.extraImages.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`${project.title} extra ${i}`}
              className="extra-image"
            />
          ))}

          {/* Embedded Video (optional) */}
          {project.videoUrl && (
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;

