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

import news1 from '../../src/assets/images/news/news-1.png'
import news2 from '../../src/assets/images/news/news-2.png'
import news3 from '../../src/assets/images/news/news-3.png'
import { NewsIcon } from "./icon";

import Fade from 'react-reveal/Fade';


function News() {

  return (
    <>
 
     <div class="news-block">
    



        <div class="container">
            <div class="section-flex d-flex justify-between">
              
            <div class="heading_v2 position-relative">
              <div class="inner-flex d-flex">
                  <div>
                  <h4 class="text-white text-uppercase">WE ARE ON SOCIAL</h4>
                  <img class="heading_shape" src={round} />
                  </div>
                  <div class="bg-blue-dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Most Recent
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/">Most Recent</Dropdown.Item>
                      <Dropdown.Item href="/">Most Recent</Dropdown.Item>
                      <Dropdown.Item href="/">SMost Recent</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
           <div class="section-flex-right">
              <Link to={`/`}
                    className="btn-text text-white font-16"
                  >
                    View all
                  </Link>
           </div>
          </div>
          <Row>
           <Col xs={12} lg={6}>
              <Link className="news_block-card position-realtive latest" to={`/`} >
              <div class="news_block-card-img">
                    <img src={news1} />
                  </div>
                  <div class="news_block-content d-flex justify-between align-center">
                    <h5 class="text-white">
                    Skater to Coach: A passion for life
                    </h5>
                    <div class="new-content-flex-shape">
                      <span></span>
                    </div>
                  </div>
                  <div class="news-icon">
                  <NewsIcon />
                  </div>
              </Link>
           </Col>
           <Col xs={12} lg={6}>
           <Link className="news_block-card position-realtive" to={`/`} >
              <div class="news_block-card-img">
                    <img src={news2} />
                  </div>
                  <div class="news_block-content d-flex justify-between align-center">
                    <h5 class="text-white">
                    Skater to Coach: A passion for life
                    </h5>
                    <div class="new-content-flex-shape">
                      <span></span>
                    </div>
                  </div>
                  <div class="news-icon">
                  <NewsIcon />
                  </div>
              </Link>
              <Link className="news_block-card position-realtive" to={`/`} >
              <div class="news_block-card-img">
                    <img src={news3} />
                  </div>
                  <div class="news_block-content d-flex justify-between align-center">
                    <h5 class="text-white">
                    Skater to Coach: A passion for life
                    </h5>
                    <div class="new-content-flex-shape">
                      <span></span>
                    </div>
                  </div>
                  <div class="news-icon">
                  <NewsIcon />
                  </div>
              </Link>
            </Col>
          </Row>
        </div>
     </div>

    </>
  );
}

export default News
