import React from 'react';
import './Testimonials.css';

const Testimonials = () => {

  const Logos = [
    {src: '/CompanyLogos/rainy_logo.png', alt: 'Rainy Company Logo'},
    {src: '/CompanyLogos/scc.png', alt: 'Segmented Concrete Company Logo'},
    {src: '/CompanyLogos/tasty-world.png', alt: 'Tasty World Logo'},
    {src: '/CompanyLogos/waterjet-logo.png', alt: 'Waterjet Logo'},
  ]
  return (
    <div className='testimony-container'>
      <h1>Webfinity Developers is trusted by</h1>

      <div className="company-logos">
      {Logos.map((Logo) => (
        <img key={Logo.alt} src={Logo.src} alt={Logo.alt} />
      ))}
      </div>

    
    </div>
  );
};

export default Testimonials;
