import React from "react";
import ButterflyAnimation from "./ButterflyAnimation";
import "./index.css"; 
import TinkerbellSparkle from "./TinkerbellSparkle";

function IntroPage({ onEnter }) {  // ✅ Accept onEnter as a prop
  return (
    <div className="intro-page">
      <ButterflyAnimation />
      <TinkerbellSparkle />
      <h1 className="intro-title" onClick={onEnter}>Lara McIntyre</h1>
    </div>
  );
}

export default IntroPage;

