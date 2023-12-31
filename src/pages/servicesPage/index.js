import React from 'react'
import Banner from '../servicesPage/banner';
import ServiceSection from '../servicesPage/service';
function index({banner_title}) {
  return (
    <div>
      <Banner banner_title={banner_title}></Banner>
      <ServiceSection/>
    </div>
  )
}

export default index
