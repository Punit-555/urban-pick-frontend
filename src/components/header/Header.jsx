import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const users = useSelector((state) => state.auth.users);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  const logoutHandler = () => {
    navigate('/');
  };

  const gotoHomePage = () => {
    navigate('/home');
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-top-row">
          <div className="logo-section" onClick={gotoHomePage}>
            <img src={logo} alt="UrbanPick Logo" width={40} height={40} />
            <h3>UrbanPick</h3>
          </div>

          <div className="desktop-nav">
            <ul className="navFlex">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
              <li><Link to="/subscription">Subscription</Link></li>
            </ul>

            <div className="navSearch">
              <input type="search" placeholder="Search" />
              <div className="userIconWrapper">
                <FontAwesomeIcon icon={faUser} onClick={toggleUserDropdown} className="userIcon" />
                {isUserDropdownOpen && (
                  <ul className="dropdownMenu">
                    <li><Link to="/my-profile">My Profile</Link></li>
                    <li><Link to="/">Settings</Link></li>
                    <li><button onClick={logoutHandler}>Logout</button></li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'show' : ''}`}>
          <ul className="mobile-navFlex">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            <li><Link to="/subscription">Subscription</Link></li>
          </ul>
          <div className="mobile-navSearch">
            <input type="search" placeholder="Search" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;