import React from 'react'
import StartSvg from '../../assets/images/home/after_banner/start.svg';
import DollarSvg from '../../assets/images/home/after_banner/dollar.svg';
import UserSvg from '../../assets/images/home/after_banner/users.svg';
function services() {
  return (
    <div>
       <section className="services-section">
        <div className="container">
          <div className="services-inner-content">
            <div className="service-box">
              <span className="icon-wraper">
                <img src={StartSvg} alt="icons" />
              </span>
              <h4>24/7 Service</h4>
            </div>
            <div className="service-box">
              <span className="icon-wraper">
                <img src={DollarSvg} alt="icons" />
              </span>
              <h4>Reasonable Rates</h4>
            </div>
            <div className="service-box">
              <span className="icon-wraper">
                <img src={UserSvg} alt="icons" />
              </span>
              <h4>Experienced Team</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default services
