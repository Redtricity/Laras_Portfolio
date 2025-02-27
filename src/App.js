import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IntroPage from "./IntroPage";
import LandingPage from "./LandingPage";
import LoadingScreen from "./LoadingScreen";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router basename="/Laras_Portfolio/">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={entered ? <IntroPage /> : <IntroPage onEnter={() => setEntered(true)} />}
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;




