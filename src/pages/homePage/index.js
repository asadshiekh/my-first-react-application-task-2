import React from 'react';
import Banner from './banner';
import Services from './services';
import ServicesBlock from './servicesBlock';
import WhoSection from './whoSection';
import AboutUs from './aboutUs';
import ClientReview from './client';
import Emergency from './emergency';
function index() {
  return (
    <div className='main-content'>
     <Banner></Banner>
     <Services></Services>
     <ServicesBlock></ServicesBlock>
     <WhoSection></WhoSection>
     <AboutUs></AboutUs>
     <ClientReview></ClientReview>
     <Emergency></Emergency>
     </div>
  )
}

export default index
