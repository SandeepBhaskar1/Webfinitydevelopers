import React from 'react';
import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <div className='whatwedo-container'> 
        <div className="header">
            <h1>The Different Services We Offer</h1>
        </div>

        <div className="service-containers">
            <div className="services">
                <h2>Web Designing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis non, labore quibusdam iste rerum maxime beatae velit, magnam vitae dolores, unde similique error incidunt fugiat ipsum praesentium aspernatur ducimus possimus?</p>
            </div>

            <div className="services">
                <h2>Digital Marketing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis praesentium placeat, provident dolore velit necessitatibus voluptate rem aliquam, veniam voluptatem neque laudantium architecto laborum minima consectetur, autem cupiditate aut.</p>
            </div>

            <div className="services">
                <h2>E-Commerce Websites</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde error ea, nihil cum quidem fugit earum, illo pariatur eveniet vitae labore laboriosam similique suscipit praesentium distinctio repellendus illum numquam.</p>
            </div>

            <div className="services">
                <h2>Branding</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quis ex et illum accusamus nesciunt, quos nostrum accusantium! Enim quaerat exercitationem facere doloremque mollitia dolores a quod debitis omnis repudiandae?</p>
            </div>

            <div className="services">
                <img src="/icons/ads.png" alt="ads icon" />
                <h2>Meta / Google Ads</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt consequatur in labore aliquam soluta unde modi dignissimos voluptates, dolor deleniti quas, mollitia incidunt quibusdam explicabo neque perferendis suscipit id.</p>
            </div>


        </div>
    </div>
  )
}

export default WhatWeDo
