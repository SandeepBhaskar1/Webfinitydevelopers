import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <ul>
            <li>About</li>
            <li>Work</li>
            <li><img src="./webfinity-new-logo.svg" alt="Webfinity Developers New Logo" /></li>
            <li>Writing</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
