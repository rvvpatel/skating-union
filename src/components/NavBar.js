import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'
import { Search, User } from "./icon";



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  return (
    <>
     <header>
     <TopHeader />
      <nav className="navbar">
        <div className="nav-container">
        <div className={isActive ? "mm-menu-hidden mm-menu" : "mm-menu-show"}>
            <div className="mm-menu-content">
            <div className="btn_menu d-flex align-center" onClick={ToggleClass}>
              <img src={menu} /> Menu
            </div>
            <div className="mm-primary_menu">
            <div className="btn_menu primary-menu d-flex align-center" onClick={ToggleClass}>
              <img src={close}  className="close-menu" /> Menu
            </div>
              <NavLink exact to="/" className="nav-logo">
              <img src={logo} />
            </NavLink>
            <div className="mobile-top-menu">
            <TopHeader />
            </div>
            </div>
            </div>
          </div>
        <div classname="custom-logo">
        <NavLink exact to="/" className="nav-logo">
            <img src={logo} />
          </NavLink>
        </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <form className="search-form">
                <div className="search-field-container">
                  <input type="text" className="search-field position-relative" />
                  <div className="search-icon">
                  < Search />
                  </div>
                </div>  
              </form>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="btn-login text-white font-12"
                onClick={handleClick}
              >
                <User />LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="btn-ex-login font-12"
                onClick={handleClick}
              >
                EXTRANET Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
     </header>
    </>
  );
}

export default NavBar;
