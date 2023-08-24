import './css/style.css';
import './css/tablet.css';
import './css/desktop.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__information'>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </div>
      <div className='footer__socialmedia'>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faTiktok} />
        </div>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className='footer__socialmedia-icon'>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
