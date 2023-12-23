import React from 'react';
import whoImage from '../../assets/images/home/who_img.jpg';

function aboutUs() {
  return (
    <div>
       <section className="company-section">
        <div className="container">
          <div className="company-inner-content">
            <div className="company-content">
              <div className="content-wraper">
                <h2>Company <span>Authority</span></h2>
                <p>Basically, finding the right person to do up the works is very much important and for that, there are certain things you should keep in mind while appointing a service man. Analyze the best service provider who can perform the works well and give you desired results. You can search for professional home service companies online and get the best company that meets up your demands.</p>
                <br />
                <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
              </div>
            </div>
            <div className="company-image">
              <img src={whoImage} alt='who is'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutUs
