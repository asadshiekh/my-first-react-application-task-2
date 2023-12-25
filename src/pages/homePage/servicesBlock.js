import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 import ServceWebp from '../../assets/images/home/service.webp';
 import ServiceJpg from '../../assets/images/home/service-4.jpg';
import ServicesGlobal from '../../global/components/servicesGlobal';
function servicesBlock() {
  return (
    <div>

      <div className='ourServies page_width'>
            <h2 className='global_title'>Explore our <span> Services</span> </h2>
            <div className="card_grid">
              <Carousel  ssr={true} responsive={responsive} containerClass="carousel-container" itemClass='carouselItem'>
                  <ServicesGlobal service_img="https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg" title='Ac Duct' />
                  <ServicesGlobal service_img={ServceWebp} service_title="The Title 1"></ServicesGlobal>
                  <ServicesGlobal service_img={ServiceJpg} service_title="The Title 2"></ServicesGlobal>
                  <ServicesGlobal service_img={ServceWebp} service_title="The Title 1"></ServicesGlobal>
                  <ServicesGlobal service_img={ServiceJpg} service_title="The Title 2"></ServicesGlobal>
                  <ServicesGlobal service_img="https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg" title='Ac Duct' />
                  <ServicesGlobal service_img={ServceWebp} service_title="The Title 1"></ServicesGlobal>
                  <ServicesGlobal service_img={ServiceJpg} service_title="The Title 2"></ServicesGlobal>
                  <ServicesGlobal service_img={ServceWebp} service_title="The Title 1"></ServicesGlobal>
                  <ServicesGlobal service_img={ServiceJpg} service_title="The Title 2"></ServicesGlobal>
             </Carousel>
            </div>
        </div>

    </div>
  )
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    showDots:false,
    partialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    showDots:false,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    showDots:false,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    showDots:true,
    partialVisibilityGutter: false,
  }
};

export default servicesBlock
