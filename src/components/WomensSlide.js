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
import { CategoryArrow } from "./icon";


import women1 from '../../src/assets/images/women/women1.png'
import women2 from '../../src/assets/images/women/women2.png'
import women3 from '../../src/assets/images/women/women3.png'

function WomensSlide() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1.1,
          initialSlide: 1.1
        }
      },
    ]
  };

  return (
    <>
      <div class="womens-slide">
      <Slider {...settings}>
      <div>
          <Link class="wom-block text-white" to={`/`}>
          <div class="img_block">
                      <img src={women1} />
                    </div>
                    <div class="heading">
                      <h2>Chiara BALBO</h2>
                    </div>
          </Link>
  
      </div>
      <div>
      <Link class="wom-block text-white" to={`/`}>
      <div class="img_block">
            <img src={women2} />
          </div>
          <div class="heading">
            <h2>Chiara BALBO</h2>
          </div>
      </Link>
     
      </div>
      <div>
      <Link class="wom-block text-white" to={`/`}>
      <div class="img_block">
            <img src={women3} />
          </div>
          <div class="heading">
            <h2>Chiara BALBO</h2>
          </div>
      </Link>
   
      </div>
      <div>
      <Link class="wom-block text-white" to={`/`}>
      <div class="img_block">
            <img src={women1} />
          </div>
          <div class="heading">
            <h2>Chiara BALBO</h2>
          </div>
      </Link>
      
      </div>
      <div>
      <Link class="wom-block text-white" to={`/`}>
      <div class="img_block">
            <img src={women2} />
          </div>
          <div class="heading">
            <h2>Chiara BALBO</h2>
          </div>
      </Link>
    
      </div>
     
    </Slider>
      </div>

    </>
  );
}

export default WomensSlide
