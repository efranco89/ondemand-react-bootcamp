import React from "react";
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
        <input type="text" placeholder="Search..." className="header_search-input"/>
        <button className="header__search-button">Search</button>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Option 1</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Option 2</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Option 3</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export {Header}