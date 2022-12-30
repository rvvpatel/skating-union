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
import eventlogo from '../../src/assets/images/event-logo.svg'
import { Calander, Map, Time } from "./icon";

function UpcomingEvents() {


  return (
    <>
      <div class="upcoming-event position-relative d-flex justify-between align-center">
        <div class="upcoming-left">
           <div class="flex-heading d-flex">
                <img src={eventlogo} />
                <h5>58th ISU Ordinary Congress 2022</h5>
           </div>
           <div class="upcoming-event-date">
              <Calander />
              <span class="text-uppercase">aPRIL 06 - aPRIL 10, 2022</span>
           </div>
           <div class="upcoming-event-map_time d-flex">
              <div class="upcoming-event-map_time-block">
                <Map />
                <span class="text-uppercase">Phuket /THA</span>
              </div>
              <div class="upcoming-event-map_time-block time">
                <Time />
                <span class="text-uppercase">0:00 aM</span>
              </div>
           </div>
        </div>
        <div class="upcoming-right">
        <Link to={`/`}
              className="btn-event buy text-uppercase"
              >buy ticket</Link>
               <Link to={`/`}
              className="btn-event more text-uppercase font-small"
              >Find out more</Link>
        </div>
      </div>

    </>
  );
}

export default UpcomingEvents
