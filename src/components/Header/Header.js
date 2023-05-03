
import React from 'react';
import logo from '../../assets/images/navlogo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="headerLogo">
      <img className="logo" src={logo} alt="Old Mutual" width='140px' height='70px' />
    </div>
  );
};

export default Header;
