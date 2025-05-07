"use client"; // This directive tells Next.js to render this component on the client

import React, { useEffect, useState } from "react";
import './WhatWeDo.css';

export default function Frame() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const checkView = () => {
      setMobileView(window.innerWidth < 480);
    };

    checkView(); 
    window.addEventListener('resize', checkView);

    return () => window.removeEventListener('resize', checkView);
  }, []);

  return (
    <div className="frame">
      <div className="overlap-wrapper">
        <div className="overlap-scaler">
          <div className="overlap">
            {mobileView ? (
              <div>
                <img className='mobile-service-01' src="/whatwedo/Services.svg" alt="Services" />
                <img className='mobile-globe' src="/whatwedo/Globe.svg" alt="Globe" />
                <img className='mobile-service-02' src="/whatwedo/Services.svg" alt="Service" />
                <img className='mobile-card' src="/whatwedo/website-designing.svg" alt="Card-01" />
                <img className='mobile-card' src="/whatwedo/E-commerce.svg" alt="Card-02" />
                <img className='mobile-card' src="/whatwedo/website-designing.svg" alt="Card-03" />
                <img className='mobile-card' src="/whatwedo/E-commerce.svg" alt="Card-04" />
              </div>
            ) : (
              <>
                <div className="overlap-group">
                  <img
                    className="lead-generation"
                    src="/whatwedo/Lead-Generation.svg"
                    alt="Lead Generation"
                  />
                  <div className="ellipse" />
                  <img className="services" src="/whatwedo/Services.svg" alt="Services" />
                  <img
                    className="performance"
                    src="/whatwedo/Performance-Marketing.svg"
                    alt="Performance"
                  />
                  <img className="image" src="/whatwedo/mic.svg" alt="image" />
                  <div className="group">
                    <div className="div">
                      <img src="/whatwedo/Group.svg" alt="Union" className="union" />
                      <div className="group-2" />
                      <div className="overlap-group-wrapper">
                        <div className="rectangle-wrapper">
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="img" src="/whatwedo/Globe.svg" alt="Globe" />
                </div>

                <div className="overlap-2">
                  <img className="e-commerce" src="/whatwedo/E-commerce.svg" alt="E-commerce" />
                  <img className="new" alt="new" src="/whatwedo/new-02.svg" />
                  <img className="image-2" src="/whatwedo/cart.svg" alt="Image" />
                  <img
                    className="lady-with-pencil"
                    src="/whatwedo/lady-with-pencil.svg"
                    alt="Lady With Pencil"
                  />
                </div>

                <div className="overlap-3">
                  <img
                    className="website-designing"
                    src="/whatwedo/website-designing.svg"
                    alt="Website Designing"
                  />
                  <img className="new-2" src="/whatwedo/new-01.svg" alt="New" />
                  <img className="web-img" src="/whatwedo/Web-img.svg" alt="Web Img" />
                  <div className="div-wrapper">
                    <div className="div">
                      <div className="group-2" />
                      <div className="overlap-group-wrapper">
                        <div className="reactangle-wrapper">
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="businessman" src="/whatwedo/businessman-meditating.svg" alt="Businessman" />
                  <img className="masthead-icon-png" src="/whatwedo/masthead-icon.svg" alt="MastHead icon png" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
