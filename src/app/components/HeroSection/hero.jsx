'use client';

import React from 'react';
// import VantaBackground from '@/app/Pages/VantaBackground';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';
import SplineViewer from '../Spline/SplineViewer';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <SplineViewer />
      <Navbar />

      <div className="content-container">
        <div className="hero-text">
          <h1 className="silver-liner-gradient-text">
            The Best <br />
            <span><strong>Digital Marketing Agency</strong></span><br />
            <strong>in Chikmagalur</strong>
          </h1>
          <p>
            As a leading website development and best digital marketing agency,
            Webfinity developers can help your company reach new heights. We blend creativity with strategy to build digital campaigns that resonate, inspire, and convert.
            <br /> Start your digital growth journey with us.
          </p>
          <button className="btn-01"><span><strong>Get Started</strong></span></button>
        </div>
        <div className="hero-spacer"></div>
      </div>
    </div>
  );
};

export default HeroSection;
