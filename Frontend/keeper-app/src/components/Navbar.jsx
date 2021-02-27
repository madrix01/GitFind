import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';
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
        <Link className="nav-links" to="/">Home</Link>
        
      </li>
      <li>
        <Link className="nav-links" to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link className="nav-links" to="/profile/pushpendrahpx">Profile</Link>
      </li>
      <li>
        <Login />
      </li>
    </ul>
  </nav>
}