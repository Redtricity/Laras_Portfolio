import React from "react";
import "./LoadingScreen.css"; // Import styles

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
