import React from "react";
import TinkerbellSparkle from "./TinkerbellSparkle";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <TinkerbellSparkle />
      <div className="background"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
