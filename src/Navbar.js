import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import MiniButterflyAnimation from "./MiniButterflyAnimation";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo"> <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>Lara McIntyre</span>
          <MiniButterflyAnimation /></Link></div>
      <nav>
        <ul className="nav-links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
