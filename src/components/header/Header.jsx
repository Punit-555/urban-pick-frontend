import React, {useState } from 'react';
import logo from '../../assets/logo.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
 
 const users  = useSelector((state) => state).auth.users;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log("User",users);

  const logoutHandler = () => {
   navigate('/')
  }

  const gotoHomePage = () =>{ 
    navigate('/home');
  }

  return (
    <nav>
      <div className='flexbox' onClick={gotoHomePage}>
        <img src={logo} alt="UrbanPick Logo" width={40} height={40} />
        <h3>UrbanPick</h3>
      </div>

      <ul className='navFlex'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/contactUs'}>Contact Us</Link></li>
        <li><Link to ={'/subscription'}>Subscription</Link></li>
      </ul>

      <div className='navSearch'>
        <input type="search" placeholder='Search' />

        <div className="userIconWrapper">
          <FontAwesomeIcon icon={faUser} onClick={toggleMenu} className="userIcon" />

          {openMenu && (
            <ul className="dropdownMenu">
              <li><Link to={'/my-profile'}>My Profile</Link></li>
              <li><Link to={'/'}>Settings</Link></li>
              <li><button onClick={logoutHandler}>Logout</button></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
