import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout"; // ✅ Import Layout
import IntroPage from "./IntroPage"; // First page with butterfly
import LandingPage from "./LandingPage"; // Main site
import LoadingScreen from "./LoadingScreen";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entered, setEntered] = useState(false); // Tracks if "Enter" is clicked

  // Simulate loading time (e.g., fetching assets)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this to match your actual load time
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Show loading screen while loading
  }

  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={entered ? <AboutMe /> : <IntroPage onEnter={() => setEntered(true)} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



