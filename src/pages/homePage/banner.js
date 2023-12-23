import React from 'react';
import BannerSvg from '../../assets/images/home/banner/banner.svg';

function banner() {
  return (
    <div>
         <section className="banner-section">
        <div className="container">
          <div className="banner-inner-content">
            <div className="banner-content">
              <div className="content-wraper">
                <small>Best in Dubai</small>
                <h4>Welcome To</h4>
                <h2>Home <span>Comfort</span></h2>
                <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
                </p>
                <div className="banner-btns">
                  <button className="btn-style btn-style-1">Contact Us</button>
                  <button className="btn-style btn-style-2">Learn More</button>
                </div>
              </div>
            </div>
            <div className="banner_image_placement">
              <div className="banner-image">
                <img src={BannerSvg} alt='banner'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default banner
