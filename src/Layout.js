import React from "react";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="background"></div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
