import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Lara's Portfolio</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
