import React from 'react';
import './Header.css';
import Logo from './../../images/logo.png';
import SitLogo from './../../images/LogoMakr-19hz81.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            {/* <nav>
                 <a href="/shop">Shop</a>
                 <a href="/review">Order Review</a>
                 <a href="/manage"> Manage Inventory</a>
            </nav> */}
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={SitLogo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon className='bars-icons' icon={faBars}></FontAwesomeIcon>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 md-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Manegment</a>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
            </div>
            <div className='search-box'>
              <input type="text" value="" placeholder='Type here to Search' />
            </div>
        </div>
    );
};

export default Header;