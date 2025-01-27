import React from "react";
import Navbar from "./Navbar"; 

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="background"></div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;