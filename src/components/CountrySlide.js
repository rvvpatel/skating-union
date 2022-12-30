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


import country1 from '../../src/assets/images/country/country1.png'
import country2 from '../../src/assets/images/country/country2.png'
import country3 from '../../src/assets/images/country/country3.png'
import country4 from '../../src/assets/images/country/country4.png'
import country5 from '../../src/assets/images/country/country5.png'
import country6 from '../../src/assets/images/country/country6.png'
import country7 from '../../src/assets/images/country/country7.png'

function CountrySlide() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode:true,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
    ]
  };

  return (
    <>
      <div class="slide_ab">
      <div class="country-slide">
      <Slider {...settings}>
      <div>
        <div class="country-block">
          <img Src={country1} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country2} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country3} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country4} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country5} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country6} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country7} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country1} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
      <div>
      <div class="country-block">
          <img Src={country2} />
          <h3 class="country-block-name text-white text-uppercase">Argentina</h3>
        </div>
      </div>
    </Slider>
      </div>
      </div>

    </>
  );
}

export default CountrySlide
