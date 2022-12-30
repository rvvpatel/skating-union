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
import CountrySlide from "./CountrySlide";
import WomensSlide from "./WomensSlide";

function Athletes() {


  return (
    <>
      <div class="section-athletes position-relative">
        
           <div class="container">
           <div class="heading_v2 position-relative">
              <h4 class="text-white text-uppercase">Athletes</h4>
              <img class="heading_shape" src={round} />
            </div>
           </div>
            < CountrySlide />
            <div class="section-category-slide">
              <div class="container">
              <div class="word_standing">
                <Tabs
                      defaultActiveKey="Men’S"
                      id="uncontrolled-tab-example"
                      className="world-tab d-flex"
                    >
                      <Tab eventKey="Men’S" title="Men’S">
                       <WomensSlide />
                      </Tab>
                      <Tab eventKey="women’s" title="women’s">
                      <WomensSlide />
                      </Tab>
                      <Tab eventKey="pairs" title="pairs">
                      <WomensSlide />
                      </Tab>
                      <Tab eventKey="ice dance" title="ice dance">
                      <WomensSlide />
                      </Tab>
                   
                    </Tabs>
                </div>
              </div>
            </div>
       
      </div>

    </>
  );
}

export default Athletes
