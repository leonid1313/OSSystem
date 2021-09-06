import React from 'react';
import './Header.css';
import logo from '../../images/unnamed.jpeg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header () {

    return (
      <div className="container-header">
        <div className="container-size">
          <div className="flex">
            <a href="">
              <img className="logo-header" src={logo} alt="Logo" />
            </a>
            {/* <div>
              <nav className="nav">
                <input id="nav__toggle" type="checkbox"></input>
                <label className="nav__btn" for="nav__toggle">
                  <span></span>
                </label>
                <ul className="nav__menu">
                  <li className="nav__item">
                    <Link 
                      className="link-about"
                      to={{
                        pathname: `/`,
                      }}
                    >
                      Catalog
                    </Link>
                  </li>
                  <li className="nav__item">
                  <Link 
                    className="link-about"
                    to={{
                      pathname: `/about`,
                      state: data
                    }}
                  >
                    Add card
                  </Link>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    )
}

export default Header;