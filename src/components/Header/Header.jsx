import React from 'react';
import './Header.css';
import logo from '../../images/unnamed.jpeg';

function Header () {

    return (
      <div className="container-header">
        <div className="container-size">
          <div className="flex">
            <a href="">
              <img className="logo-header" src={logo} alt="Logo" />
            </a>
              <p>
                menu
              </p>
          </div>
        </div>
      </div>
    )
}

export default Header;