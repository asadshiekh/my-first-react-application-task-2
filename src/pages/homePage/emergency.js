import React from 'react'
import { IoCall } from "react-icons/io5";

function emergency() {
  return (
    <div>
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-inner-content">
            <h4>Quick Service On Emergency</h4>
            <p><i className="las la-phone" /><IoCall  className='call_icon_emergency'/> +97158 67 47 123</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default emergency
