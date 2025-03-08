import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import "./Contact.css";
import TinkerbellSparkle from "./TinkerbellSparkle";

function Contact() {
  return (
    <><Navbar />
    <TinkerbellSparkle />
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>You can reach me via any of the details below:</p>
      
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:lara.mcintyre@outlook.com">lara.mcintyre@outlook.com</a>
        </p>
        <p>
          <strong>Phone:</strong> (+44) 7957316554
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="www.linkedin.com/in/lara-ellen-mcintyre"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/lara-ellen-mcintyre
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Redtricity"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Redtricity
          </a>
        </p>
      </div>
      
      <p>
        Feel free to email, call, or message me on LinkedIn for any queries or
        collaborations!
      </p>
    </div>
    </>
  );
}

export default Contact;

