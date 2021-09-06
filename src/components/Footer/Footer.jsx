import React from 'react';
import './Footer.css'
import logo from '../../images/unnamed.jpeg';

function Footer () {

    return (
      <div className="container-footer">
        <div className="container-size">
          <div className="footer" >
            <a href="">
              <img className="logo-footer" src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    )
}

export default Footer;