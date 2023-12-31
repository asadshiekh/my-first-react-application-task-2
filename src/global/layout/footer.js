import React from 'react';
import LogoImage from '../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
function footer() {
  return (
    <div>
      <footer>
        <div className="coloumn_one">
          <div className="logo_img">
            <img src={LogoImage} alt="" />
          </div>
          <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
        </div>
        <div className="coloumn_two">
          <div className="footer_listing">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer_listing">
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Linkedin</a></li>
              <li><a href="/">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="coloumn_three">
          <ul>
            <li>
              +971 58 67 47 123
            </li>
            <li>
              info@homecomfort.com
            </li>
          </ul>
          <div className="news_letter">
            <input type="text" placeholder="Enter Email" />
            <button>send</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
