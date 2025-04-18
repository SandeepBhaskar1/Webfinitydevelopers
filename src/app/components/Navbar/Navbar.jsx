import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <ul>
            <li>ABOUT</li>
            <li>WORK</li>
            <li><img src="./webfinity.png" alt="Webfinity Developers New Logo" /></li>
            <li>WRITING</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar
