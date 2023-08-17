import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'

import logo from './img/logo.png'

const Header = () => {
  return(
    <header className="header">

      <div className="header__logo">
        {/* <img src={logo}></img> */}
        LOGO
      </div>

      <div className="header__search">
        <div className="header__search-container">
          <input type="text" placeholder="Search..." className="header__search-input"/>
          <div className="header__search-icon-container">
              <MagnifyingGlassIcon className="header__search-icon" />
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <ShoppingCartIcon className="nav-cart-icon" />
          </li>
          <li className="header__nav-item">
              <img
                className="nav-account-img" 
                src={"https://lh3.googleusercontent.com/ogw/AGvuzYbYN3iKpi6pZVDNSBfh3ysqX6LNAIuovaKmAupW6Q=s32-c-mo"}
              ></img>
            {/* <div className="nav-account-container">
            </div> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export {Header}