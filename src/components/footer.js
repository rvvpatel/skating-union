import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'
import arrow from '../../src/assets/images/bottom-arrow.svg'
import { Search, User } from "./icon";
import { Youtube, Social, Facebook, Call, Fax } from "./icon";


function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  return (
    <>
     <footer>
        <div class="footer-contact-top">
          <div class="container">
          <div class="footer-contact-flex d-flex justify-between">
            <div class="footer_add">
              <p class="text-white font_secondary font-18">
              Avenue Juste-Olivier 17, 1006 <br /> Lausanne, Switzerland
              </p>
            </div>
            <div class="footer_logo text-center ">
              <img src={logo} />
              <div class="footer-contact-footer-flex d-flex ">
                <div class="footer-contact-block d-flex align-center">
                  <div class="footer-contact-icon">
                     <Call />
                  
                  </div>
                  <Link className="text-white" to={`/`}
                      >
                        +41 21 612 66 66
                      </Link>
                 
              
                </div>
                <div class="footer-contact-block d-flex align-center">
                  <div class="footer-contact-icon">
                  <Fax />
                  
                  </div>
                  <Link className="text-white" to={`/`}
                      >
                       +41 21 612 66 77
                      </Link>
                 
              
                </div>
               
              </div>
            </div>
            <div class="social_icon">
              <Link to={`/`}
              className="social_link"
              >
              <Youtube />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Social />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Facebook />
              </Link>
            </div>
          </div>
         
          </div>
        </div>
       <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-flex d-flex  justify-between align-center">
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                        About Us
                      </Link>
              </div>
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                        Figure Skating
                      </Link>
              </div>
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                        Figure Skating
                      </Link>
              </div>
              <div class="footer-bottom-link-block">
                <h4 class="text-white font_primary">Synchronized Skating</h4>
              </div>
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                        Quick Links
                      </Link>
              </div>
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                       Speed Skating
                      </Link>
              </div>
              <div class="footer-bottom-link-block">
              <Link className="text-white" to={`/`}
                      >
                        Short Track Skating
                      </Link>
              </div>
          </div>
          <img class="bottom-arow" src={arrow} />
          <div class="footer-bottom-link-group">
          <Link className="text-white" to={`/`}
                      >
                       Synchronized Skating 
                      </Link>
                      <Link className="text-white" to={`/`}
                      >
                      Skating News
                      </Link>
                      <Link className="text-white" to={`/`}
                      >
                       Calendar of Events
                      </Link>
                      <Link className="text-white" to={`/`}
                      >
                       ISU Communications
                      </Link>
                      <Link className="text-white" to={`/`}
                      >
                       Special Regulations & Rules
                      </Link>
                      <Link className="text-white" to={`/`}
                      >
                       Forms, Reports & Seminars
                      </Link>
          </div>
        </div>
       </div>
       <div class="footer-copyright text-center">
      <p class="font12 text-white font_secondary mb-0">2022 © All rights reserved. International Skating Union - International Skating Union</p>
       </div>
     </footer>
    </>
  );
}

export default Footer;
