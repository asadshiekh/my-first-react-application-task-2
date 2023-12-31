import React from 'react'
import Banner from '../contactPage/banner';
import ContactPage from '../contactPage/contactbody';
function index({banner_title}) {
  return (
    <div>
      <Banner banner_title={banner_title}></Banner>
      <ContactPage></ContactPage>
    </div>
  )
}

export default index
