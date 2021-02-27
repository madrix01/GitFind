import React from 'react';
import './../styles/navbar.css';

export default function Navbar(props){

    return <nav className="navbar">
    <div className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
            <i className="fa fa-bars"></i>
        </div>
    <a href="#" className="logo">{props.brand}</a>
    <input type="checkbox" id="chkToggle" />
    <ul className="main-nav" id="js-menu">
      <li>
        <a href="#" className="nav-links">Home</a>
      </li>
      <li>
        <a href="#" className="nav-links">Products</a>
      </li>
      <li>
        <a href="#" className="nav-links">About Us</a>
      </li>
      <li>
        <a href="#" className="nav-links">Contact Us</a>
      </li>
      <li>
        <a href="#" className="nav-links">Blog</a>
      </li>
    </ul>
  </nav>
}