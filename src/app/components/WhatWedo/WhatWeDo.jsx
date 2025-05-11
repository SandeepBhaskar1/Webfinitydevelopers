// "use client"; // This directive tells Next.js to render this component on the client

// import React, { useEffect, useState } from "react";
// import './WhatWeDo.css';

// export default function Frame() {
//   const [mobileView, setMobileView] = useState(false);

//   useEffect(() => {
//     const checkView = () => {
//       setMobileView(window.innerWidth < 480);
//     };

//     checkView(); 
//     window.addEventListener('resize', checkView);

//     return () => window.removeEventListener('resize', checkView);
//   }, []);

//   return (
//     <div className="frame">
//       <div className="overlap-wrapper">
//         <div className="overlap-scaler">
//           <div className="overlap">
//             {mobileView ? (
//               <div>
//                 <img className='mobile-service-01' src="/whatwedo/Services.svg" alt="Services" />
//                 <img className='mobile-globe' src="/whatwedo/Globe.svg" alt="Globe" />
//                 <img className='mobile-service-02' src="/whatwedo/Services.svg" alt="Service" />
//                 <img className='mobile-card' src="/whatwedo/Website-designing.svg" alt="Card-01" />
//                 <img className='mobile-card' src="/whatwedo/E-commerce.svg" alt="Card-02" />
//                 <img className='mobile-card' src="/whatwedo/Website-designing.svg" alt="Card-03" />
//                 <img className='mobile-card' src="/whatwedo/E-commerce.svg" alt="Card-04" />
//               </div>
//             ) : (
//               <>
//                 <div className="overlap-group">
//                   <img
//                     className="lead-generation"
//                     src="/whatwedo/Lead-Generation.svg"
//                     alt="Lead Generation"
//                   />
//                   <div className="ellipse" />
//                   <img className="services" src="/whatwedo/Services.svg" alt="Services" />
//                   <img
//                     className="performance"
//                     src="/whatwedo/Performance-Marketing.svg"
//                     alt="Performance"
//                   />
//                   <img className="image" src="/whatwedo/mic.svg" alt="image" />
//                   <div className="group">
//                     <div className="div">
//                       <img src="/whatwedo/Group.svg" alt="Union" className="union" />
//                       <div className="group-2" />
//                       <div className="overlap-group-wrapper">
//                         <div className="rectangle-wrapper">
//                           <div className="rectangle" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <img className="img" src="/whatwedo/Globe.svg" alt="Globe" />
//                 </div>

//                 <div className="overlap-2">
//                   <img className="e-commerce" src="/whatwedo/E-commerce.svg" alt="E-commerce" />
//                   <img className="new" alt="new" src="/whatwedo/new-02.svg" />
//                   <img className="image-2" src="/whatwedo/cart.svg" alt="Image" />
//                   <img
//                     className="lady-with-pencil"
//                     src="/whatwedo/lady-with-pencil.svg"
//                     alt="Lady With Pencil"
//                   />
//                 </div>

//                 <div className="overlap-3">
//                   <img
//                     className="website-designing"
//                     src="/whatwedo/Website-designing.svg"
//                     alt="Website Designing"
//                   />
//                   <img className="new-2" src="/whatwedo/new-01.svg" alt="New" />
//                   <img className="web-img" src="/whatwedo/Web-img.svg" alt="Web Img" />
//                   <div className="div-wrapper">
//                     <div className="div">
//                       <div className="group-2" />
//                       <div className="overlap-group-wrapper">
//                         <div className="reactangle-wrapper">
//                           <div className="rectangle" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <img className="businessman" src="/whatwedo/businessman-meditating.svg" alt="Businessman" />
//                   <img className="masthead-icon-png" src="/whatwedo/masthead-icon.svg" alt="MastHead icon png" />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

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
      <div className="wrapper">
        {mobileView ? (
          <div className='mobile-view'>
            <div className="div">
            <img className='mobile-service-01' onContextMenu={(e) => e.preventDefault()} draggable='false' src="/whatwedo/Services.svg" alt="Services" />
            <h2>Services</h2>
            </div>

            <img className='mobile-globe' src="/whatwedo/Globe.svg" alt="Globe" />

            <div className="mobile-service">
            <img className='mobile-service-02' src="/whatwedo/Services.svg" alt="Service" />
            <h2>BRANDING</h2>
            </div>


            <img className='mobile-card' src="/whatwedo/Website-designing.svg" alt="Web Design" />
            <img className='mobile-card-01' src="/whatwedo/E-commerce.svg" alt="E-commerce" />
            <img className='mobile-card' src="/whatwedo/Website-designing.svg" alt="Web Design" />
            <img className='mobile-card-01' src="/whatwedo/E-commerce.svg" alt="E-commerce" />
          </div>
        ) : (
          <>
            <div className="left">
              <img className='new-01' src="/whatwedo/new-01.svg" alt="Left Graphic" onContextMenu={(e) => e.preventDefault()}/>
              <h1>SOCIAL MEDIA MARKETING</h1>
              <p>We create engaging content and run targeted ads to grow your brand, reach more customers, and drive real results across platforms like Instagram, Facebook, and Whatsapp.</p>
            </div>

            <div className="container">
              <div className="centre-top-part">
                <div className="web-content">
                <img className='web-design' src="/whatwedo/Website-designing.svg" alt="Web Design" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
                <h2>WEBSITE DESIGNING</h2>
                <p>We create high quality professional customized responsive website for the best price.</p>
                </div>
                <div className="service-cont">
                <img className='services' src="/whatwedo/Services.svg" alt="Services" onContextMenu={(e) => e.preventDefault()} draggable='false' />
                <h1>SERVICES <br />WE OFFER</h1>
                </div>

                <div className="e-commerce-content">
                <img className='e-commerce' src="/whatwedo/E-commerce.svg" alt="E-commerce" onContextMenu={(e) => e.preventDefault()} draggable='false' />
                <h2>E-COMMERCE</h2>
                <p>Sell your products online to your consumers using a professionally built website by us.</p>
                </div>
              </div>
              <div className="centre">
                <img src="/whatwedo/Globe.svg" alt="Globe" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
              </div>
              <div className="centre-bottom-part">
                <div className="lead">
                <img className='lead-generation' src="/whatwedo/Lead-Generation.svg" alt="Lead Generation" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
                <h1>LEAD GENERATION</h1>
                <p>Fuel your growth with our tailored strategies. Convert your audience into valuable leads for sustainable success.</p>
                </div>

                <div className="performance-content">
                <img className='performance-marketing' src="/whatwedo/Performance-Marketing.svg" alt="Performance Marketing" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
                <h1>PERFORMANCE MARKETING</h1>
                <p>To ensure higher ROI (returns on your investments), we use different strategies that are based on real-time research.</p>
                </div>
              </div>
            </div>

            <div className="right">
              <img src="/whatwedo/new-02.svg" alt="Right Graphic" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
              <img className="pencil-lady" src="/whatwedo/lady-with-pencil.svg" alt="" onContextMenu={(e) => e.preventDefault()} draggable='false'/>
              <div className="branding-text">
                <h1>BRANDING</h1>
                <p>We build strong, memorable brands with the right mix of design, messaging, and strategy—helping you stand out and connect with your audience.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
