import React from 'react';
import logo from '../../assets/logo.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav>
      <div className='flexbox'>
        <img src={logo} alt="UrbanPick Logo" width={40} height={40} />
        <h3>UrbanPick</h3>
      </div>

      <ul className='navFlex'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">My Stuff</a></li>
        <li><a href="#">Subscription</a></li>
      </ul>

      <div className='navSearch'>
        <input type="search" placeholder='Search' />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}

export default Header;
