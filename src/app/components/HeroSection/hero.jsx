import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Moving semi-circle */}
      <div className="half-circle-wrapper">
        <div className="half-circle"></div>
      </div>

      {/* Transparent black background */}
      <div className="black-overlay"></div>

      {/* Optional content */}
      <div className="hero-content">
        <h1>Independent Design Studio</h1>
        <p>We create visual identities and digital experiences for forward-thinking brands.</p>
        <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default HeroSection;
