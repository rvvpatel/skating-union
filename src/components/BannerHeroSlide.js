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
import accessibility from '../../src/assets/images/accessibility.svg'




function BannerHeroSlide() {

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <>
      <div class="banner-slider">
      <Link to={`/`}
              className="accessbility"
              >
              <img src={accessibility} />
              </Link>
      <Slider {...settings2}>
      <div>
          <div class="BackgroundVideo ">
          <div class="hero-banner-content">
              <div class="container">
                  <div class="hero_inner-content">
                      <img src={bannersmall} />
              <h6>Join our Community
                VIP events, discounts, fan chat 
                and free tickets!</h6>
                <form class="hero_form">
                  <input type="text"  placeholder="Enter Email Address" />
                </form>
                <Link to={`/`}
              className="btn-banner text-white"
              >
              JOIN OUR COMMUNITY
              </Link>
              <div class="banner-content-footer">
                <p>By tapping , you agree to the following <br /> <Link to={`/`}
              className="text-white"
              >
             Privacy Policy
              </Link>  & <Link to={`/`}
              className="text-white"
              >
             Terms & Conditions
              </Link></p>
              </div>
                  </div>
              </div>
            </div>
            <div class="video_wrapper position-relative">
              <video class="w-100" autoPlay loop muted>
                <source src={bgvideo}  />
              </video>
            
            </div>
            
        </div>
      </div>
      <div>
          <div class="BackgroundVideo ">
          <div class="hero-banner-content">
              <div class="container">
                  <div class="hero_inner-content">
                      <img src={bannersmall} />
              <h6>Join our Community
                VIP events, discounts, fan chat 
                and free tickets!</h6>
                <form class="hero_form">
                  <input type="text"  placeholder="Enter Email Address" />
                </form>
                <Link to={`/`}
              className="btn-banner text-white"
              >
              JOIN OUR COMMUNITY
              </Link>
              <div class="banner-content-footer">
                <p>By tapping , you agree to the following <br /> <Link to={`/`}
              className="text-white"
              >
             Privacy Policy
              </Link>  & <Link to={`/`}
              className="text-white"
              >
             Terms & Conditions
              </Link></p>
              </div>
                  </div>
              </div>
            </div>
            <div class="video_wrapper position-relative">
              <video class="w-100" autoPlay loop muted>
                <source src={bgvideo}  />
              </video>
            
            </div>
            
        </div>
      </div>
      <div>
          <div class="BackgroundVideo ">
          <div class="hero-banner-content">
              <div class="container">
                  <div class="hero_inner-content">
                      <img src={bannersmall} />
              <h6>Join our Community
                VIP events, discounts, fan chat 
                and free tickets!</h6>
                <form class="hero_form">
                  <input type="text"  placeholder="Enter Email Address" />
                </form>
                <Link to={`/`}
              className="btn-banner text-white"
              >
              JOIN OUR COMMUNITY
              </Link>
              <div class="banner-content-footer">
                <p>By tapping , you agree to the following <br /> <Link to={`/`}
              className="text-white"
              >
             Privacy Policy
              </Link>  & <Link to={`/`}
              className="text-white"
              >
             Terms & Conditions
              </Link></p>
              </div>
                  </div>
              </div>
            </div>
            <div class="video_wrapper position-relative">
              <video class="w-100" autoPlay loop muted>
                <source src={bgvideo}  />
              </video>
            
            </div>
            
        </div>
      </div>
      <div>
          <div class="BackgroundVideo ">
          <div class="hero-banner-content">
              <div class="container">
                  <div class="hero_inner-content">
                      <img src={bannersmall} />
              <h6>Join our Community
                VIP events, discounts, fan chat 
                and free tickets!</h6>
                <form class="hero_form">
                  <input type="text"  placeholder="Enter Email Address" />
                </form>
                <Link to={`/`}
              className="btn-banner text-white"
              >
              JOIN OUR COMMUNITY
              </Link>
              <div class="banner-content-footer">
                <p>By tapping , you agree to the following <br /> <Link to={`/`}
              className="text-white"
              >
             Privacy Policy
              </Link>  & <Link to={`/`}
              className="text-white"
              >
             Terms & Conditions
              </Link></p>
              </div>
                  </div>
              </div>
            </div>
            <div class="video_wrapper position-relative">
              <video class="w-100" autoPlay loop muted>
                <source src={bgvideo}  />
              </video>
            
            </div>
            
        </div>
      </div>
    </Slider>
      </div>
      {/* <img src={lime} /> */}
    </>
  );
}

export default BannerHeroSlide
