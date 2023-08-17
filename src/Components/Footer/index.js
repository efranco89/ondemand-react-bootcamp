import React from "react";
import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__information">
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </div>
      <div className="footer__socialmedia">
        <div className="footer_socialmedia-icon">F</div>
        <div className="footer_socialmedia-icon">I</div>
        <div className="footer_socialmedia-icon">T</div>
        <div className="footer_socialmedia-icon">Y</div>
        <div className="footer_socialmedia-icon">L</div>
      </div>
    </footer>
  )
}

export {Footer}