import React from "react";
import ButterflyAnimation from "./ButterflyAnimation";


function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
      <ButterflyAnimation />
        <h1>Welcome to Lara's Portfolio!</h1>
        <p>Where creativity meets code. Explore my journey, projects, and more!</p>
        <button className="cta-button">See My Work</button>
      </section>
    </div>
  );
}

export default LandingPage;
