import React from 'react';
import LogoImage from '../../assets/images/logo/logo.svg';

function header() {
  return (
    <div>
       <header>
        <div className="logo_img " id>
          <img src={LogoImage} alt="logo main" />
        </div>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              Service
            </li>
            <li>
              Contact
            </li>
            <li className="header_btn">
              +8980003809343
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default header
