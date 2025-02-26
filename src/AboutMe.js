import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe({ onEnter }) {
  return (
    <>
    <Navbar />
    <div className="about-me-container">
      {/* Left column: Profile Image */}
      <div className="about-me-image">
        <img src="assets/Profilepicture.png" alt="Lara McIntyre" />
      </div>

      {/* Right column: Text content */}
      <div className="about-me-text">
          <h1>Hi! I’m <strong>Lara McIntyre</strong></h1>

          <p>
            I’m in my final Honours year of <strong>BSc Computer Games Development</strong>. 
            As a <strong>CODA</strong> (Child of Deaf Adults), I’m incredibly passionate about 
            building <strong>inclusive technologies</strong> that uplift all communities.
          </p>

          <p>
            My interests revolve around <strong>game development</strong>, 
            <strong> web development</strong>, and <strong>app development</strong>. I’m also a proud 
            <strong> GitHub Campus Expert 🚩</strong>, championing accessibility and diversity 
            in tech communities.
          </p>

          <p>
            I love creating games, websites, and immersive experiences that push creative 
            boundaries. Outside of coding, you’ll find me playing video games, spending time 
            with my family, and watching movies. 
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;




