import React from 'react'

const Footer = (props) =>(
  <footer id="footer">
    <span>&copy; 2016</span>
    <span>{props.siteName}</span>
    <span style={{color: 'red', fontSize: 14}}> UNDER-CONSTRUCTION </span>
  </footer>
);

export default Footer;
