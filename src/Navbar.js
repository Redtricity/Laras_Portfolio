import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Lara McIntyre</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#research">My Research</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
