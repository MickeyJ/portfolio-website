import React from 'react'

const Footer = (props) =>(
  <footer id="footer">
    <span>&copy; 2015</span>
    <span>{props.siteName}</span>
    <span style={{color: 'red'}}> UNDER-CONSTRUCTION </span>
  </footer>
);

export default Footer;