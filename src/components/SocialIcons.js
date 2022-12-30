import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'
import round from '../../src/assets/images/round-bg.png'
import { Search, User } from "./icon";
import { Youtube, Social, Facebook, Call, Fax, Twitter, Instagram } from "./icon";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgvideo from ".../../../public/video/fr.mp4";
import bgvideo2 from ".../../../public/video/fr2.mp4";
import PdfISUblock from "./PdfISUblock";
import PdfPressblock from "./PdfPressblock";
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StandingTabContent from "./StandingTabContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import bannersmall from '../../src/assets/images/banner-s-image.svg'





function SocialIcons() {

  return (
    <>
      <div class="fix-social-icons vert-move">
              <div class="social_icon">
              <Link to={`/`}
              className="social_link"
              >
              <Facebook />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Instagram />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Youtube />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Twitter />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Social />
              </Link>
             
            </div>
      </div>
    </>
  );
}

export default SocialIcons
