import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar"; 
import "./LandingPage.css";

function LandingPage({ onEnter }) {
  return (
    <div className="landing-page" onClick={onEnter}>
      <Navbar />
      
    </div>
  );
}

export default LandingPage;

