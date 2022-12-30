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
import PdfISUblock from "./PdfISUblock";
import PdfPressblock from "./PdfPressblock";
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StandingTabContent from "./StandingTabContent";

import round2 from '../../src/assets/images/round-bg2.png'
import add from '../../src/assets/images/add_block.png'


function AddBlock() {


  return (
    <>
  <div class="bg-add position-relative">
    <img src={add} class="bg-left" />
    <img src={add} class="bg-right" />
<div class="container">
<Row>
      <Col xs={12} lg={6}>
      <div class="add-block-flex d-flex justify-between align-center">
                      <div class="heading_v2 position-relative mb-0">
                        <h4 class="text-white text-uppercase">Elearning </h4>
                        <img class="heading_shape" src={round2}/>
                      </div>
                        <Link to={`/`}  className="btn-white">
                              KNOW MORE
                        </Link>
                      </div>
      </Col>
      <Col xs={12} lg={6}>
      <div class="add-block-flex d-flex justify-between align-center right">
                      <div class="heading_v2 position-relative mb-0">
                        <h4 class="text-white text-uppercase">Rules </h4>
                        <img class="heading_shape" src={round2}/>
                      </div>
                        <Link to={`/`}  className="btn-white">
                              KNOW MORE
                        </Link>
                      </div>
      </Col>
     </Row>
</div>
      
  </div>

    </>
  );
}

export default AddBlock
