import React from 'react';
import '../Style/Footer.css';
import logo from '../Images/logo.png';

import SocialMediaIcons from 'react-social-media-icons'
const Footer = ()=>{
    const socialMediaIcons = [
        {
          url: 'https://www.facebook.com/',
          className: 'fa-facebook-f',
        },
        {
          url: 'https://pl.linkedin.com/',
          className: 'fa-linkedin',
        },
        {
          url: 'mailto:mail@mail.com',
          className: 'fa-envelope',
        },
      ];


    return(
        <>
            <div className="footer__social-bar">
                <div className="footer__social-container">
                    <img className = "footer__social-logo" src={logo} alt='logo'></img>
                </div>
                
                <SocialMediaIcons
                    className="footer__social-links"
                    icons={socialMediaIcons}
                    iconColor={'#eee'}
                />
            </div>
            <div >
                <p className="footer__copy">© 2019 Poradnia logopedyczna /dr Jan Kowalski</p> 
            </div>
        </>
    )
}

export default Footer;