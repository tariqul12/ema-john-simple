import React from 'react';
import './Header.css';
import Logo from './../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Header;