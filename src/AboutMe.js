import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Navbar />

      {/* Intro Section */}
      <div className="about-me-container white-section">
        {/* Left column: Profile Image */}
        <div className="about-me-image">
          <img src="assets/Profilepicture.png" alt="Lara McIntyre" />
        </div>

        {/* Right column: Intro Text */}
        <div className="about-me-text">
          <h1>
          👋🏻Hi! I’m <strong>Lara McIntyre</strong>
          </h1>
          <p>
            I focus on <strong>accessibility-first software</strong>—from games 
            to websites and a little bit of everything in between. I’m in my 
            final Honours year of <strong>BSc Computer Games Development</strong> 
             and, as a <strong>CODA</strong> (Child of Deaf Adults), I’m deeply 
            passionate about creating and designing <strong>inclusive technologies</strong> 
             that uplift all communities.
          </p>
          <p>
            My interests revolve around <strong>game development</strong>, 
            <strong> web development</strong>, and <strong>app development</strong>. 
            I’m also a proud <strong>GitHub Campus Expert</strong>🚩, supporting 
            accessibility and diversity in tech communities. Outside of coding, 
            you’ll find me playing video games, spending time with my family, 
            and watching movies.
          </p>
        </div>
      </div>

      {/* Why Deaf Accessibility Section */}
      <section className="grey-section">
        <div className="deaf-accessibility-content ">
        <h2>Why Deaf Accessibility?🧏🏻‍♂️</h2>
        <p>
          Growing up as a CODA gave me firsthand insight into the barriers that the Deaf community’s 
          experience when accessing technologies such as videogames or even websites. From sign language integration to real-time captioning, 
          accessibility isn’t just an afterthought—it’s a gateway to include millions of Deaf or hard-of-hearing individuals in the digital world.
          For many Deaf or hard-of-hearing folks, <strong> sign language is their primary language</strong>, meaning that captions or 
        subtitles—while helpful—aren’t always sufficient if English isn’t their first language.
        </p>
        <p>
        <strong>Deaf accessibility</strong> is about bridging these linguistic and cultural 
        gaps, ensuring everyone can fully engage with digital experiences without feeling 
        excluded. That’s why my projects put this community at the forefront ensuring inclusive 
        design choices. By advocating for Deaf accessibility, we can create a digital 
        world that welcomes everyone, regardless of their hearing ability or background.
        </p>
      </div>
    </section>
      

      <section className="project-highlights-section white-section">
        <h2>Project Highlights</h2>

        <div className="projects-container">
        
          <div className="project-card">
            <img src="assets/VR.png" alt="Social VR" />
            <h3>Social Virtual Reality Platform</h3>
            <p>
              A social Virtual Reality platform targeted towards the Deaf Community.
            </p>
            <Link to="/projects/">Learn More</Link>
          </div>

        
          <div className="project-card">
            <img src="assets/DeafAPP.png" alt="Web Applications" />
            <h3>Inclusive Web App</h3>
            <p>
              A web application that prioritises the Deaf Community.
            </p>
            <Link to="/projects/inclusive-web-app">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;





