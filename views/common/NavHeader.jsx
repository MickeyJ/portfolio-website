import React from 'react'

const NavHeader = (props) =>(
  <section>
    
    <nav id="nav" className="container-fluid">
      <a href="/">Home</a>
      <span>|</span>
      <a href="/contact">Contact</a>
    </nav>
    
    <header id="banner-logo">
      <a href="/">
        {props.siteName}
      </a>
    </header>
    
  </section>
);

export default NavHeader;