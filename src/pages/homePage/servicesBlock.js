import React from 'react'
import ServceWebp from '../../assets/images/home/service.webp';
import ServiceJpg from '../../assets/images/home/service-4.jpg';
function servicesBlock() {
  return (
    <div>
      <section className="services-block">
        <div className="container">
          <div className="services-block-inner-content">
            <h2>Explore our <span>Services</span></h2>
            <div className="service-card-section">
              <div className="service-card-block">
                <div className="img-wrapper">
                  <img src={ServceWebp} alt="service" />
                </div>
                <p>Ac Services</p>
              </div>
              <div className="service-card-block">
                <div className="img-wrapper">
                  <img src={ServiceJpg} alt="service" />
                </div>
                <p>Ac Services</p>
              </div>
              <div className="service-card-block">
                <div className="img-wrapper">
                  <img src={ServceWebp} alt="service" />
                </div>
                <p>Ac Services</p>
              </div>
              <div className="service-card-block">
                <div className="img-wrapper">
                  <img src={ServiceJpg} alt="service" />
                </div>
                <p>Ac Services</p>
              </div>
              <div className="service-card-block">
                <div className="img-wrapper">
                  <img src={ServceWebp} alt="service" />
                </div>
                <p>Ac Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default servicesBlock
