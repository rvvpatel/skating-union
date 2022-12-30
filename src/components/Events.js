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
import citizen from '../../src/assets/images/citizen.svg'
import UpcomingEvents from "./UpcomingEvents";
import location from '../../src/assets/images/location.svg'

function Events() {


  return (
    <>
      <div class="section-events position-relative">
        
           <div class="container">
            <div class="section-flex d-flex justify-between">
             <div class="heading_v2 position-relative">
                <h4 class="text-white text-uppercase"> Events</h4>
                <img class="heading_shape" src={round} />
              </div>
              <div class="section-event-heading-right d-flex">
                <img class="event_logo" src={citizen} />
                <div class="event_time_block">
                  <p class="text-uppercase font-14 mb-0">Next event starts In:</p>
                  <div class="event_block d-flex justify-between">
                    <div class="event_block_content">
                        <span class="text-white text-center text-uppercase font12">dAY</span>
                        <h4 class="text-white text-center text-uppercase mb-0">03</h4>
                    </div>
                    <div class="event_block_content">
                        <span class="text-white text-center text-uppercase font12">hour</span>
                        <h4 class="text-white text-center text-uppercase mb-0">08</h4>
                    </div>
                    <div class="event_block_content">
                        <span class="text-white text-center text-uppercase font12">minutes</span>
                        <h4 class="text-white text-center text-uppercase mb-0"> 36</h4>
                    </div>
                    <div class="event_block_content">
                        <span class="text-white text-center text-uppercase font12">SecondS</span>
                        <h4 class="text-white text-center text-uppercase mb-0"> 44</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="upcoming-event-list">
            <h6 class="section-small-heading">Upcoming Event</h6>
            <Row>
              <Col xs={12} lg={6}>
                
                <UpcomingEvents />
                <UpcomingEvents />
                <UpcomingEvents />
                <UpcomingEvents />
              </Col>
              <Col xs={12} lg={6}>  
                <div class="map_block">
                <img src={location} />
                </div>
              </Col>
            </Row>
            </div>
           </div>
          
       
      </div>

    </>
  );
}

export default Events
