import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1 className='silver-liner-gradient-text'>
        The Best <span>Digital Marketing Agency</span> in Chikmagalur
      </h1>
      <p>
        As a leading website development and best digital marketing agency,
        Webfinity developers can help your company reach new heights. Start your
        digital growth journey with us.
      </p>
      <button className="btn-01" ><span>Get Started!</span></button>
    </div>
  );
};

export default HeroSection;
