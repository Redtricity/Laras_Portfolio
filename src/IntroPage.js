import React from "react";
import ButterflyAnimation from "./ButterflyAnimation";
import "./index.css"; 

function IntroPage({ onEnter }) {  // ✅ Accept onEnter as a prop
  return (
    <div className="intro-page">
      <ButterflyAnimation />
      <h1 className="intro-title" onClick={onEnter}>Lara McIntyre</h1>
    </div>
  );
}

export default IntroPage;

