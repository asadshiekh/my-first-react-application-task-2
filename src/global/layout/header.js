import React from 'react';
import LogoImage from '../../assets/images/logo/logo.svg';
import { IoMdMenu } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

function header() {
  return (
    <div>
       <header className='desktop_header'>
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
      <header className='mobile_header'>
        <div className='menu'>
          <IoMdMenu  className='menu_icon'/>
        </div>
        <div className="logo_img " id>
          <img src={LogoImage} alt="logo main" />
        </div>
        <div className='number'>
        <IoLogoWhatsapp className='phone_icon'/>
        </div>
      </header>
    </div>
  )
}

export default header
