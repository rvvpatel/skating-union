import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'

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

import winner1 from '../../src/assets/images/winner-1.png'
import winner2 from '../../src/assets/images/winner-2.png'
import winner3 from '../../src/assets/images/winner-3.png'


import StandingTable from "./StandingTable";

function StandingTabContent() {


  return (
    <>
     <div class="StandingTabContent">
        <div class="top-three">
          <Row>
            <Col xs={12} lg={4}>
            <div class="top-three-block position-relative">
              <div class="top-ranking-img-block">
                <img src={winner2} />
              </div>
                <h5 class="count mb-0">02</h5>
                <div class="top-three-name single">
                    <p class="mb-0">Yuma KAGIYAMA</p>
                    <div class="block-footer d-flex">
                    <span class="text-blue">3564 </span>
                        <span class="divider">|</span>
                        <span class="text-blue">jpn</span>
                    </div>
                </div>
            </div> 
            </Col>
            <Col xs={12} lg={4}>
            <div class="top-three-block position-relative top-rank">
              <div class="top-ranking-img-block ">
                <img src={winner1} />
              </div>
                <h5 class="count mb-0">01</h5>
                <div class="top-three-name single">
                    <p class="mb-0">Yuma KAGIYAMA</p>
                    <div class="block-footer d-flex">
                    <span class="text-blue">3564 </span>
                        <span class="divider">|</span>
                        <span class="text-blue">jpn</span>
                    </div>
                </div>
            </div> 
            </Col>
            <Col xs={12} lg={4}>
            <div class="top-three-block position-relative">
              <div class="top-ranking-img-block">
                <img src={winner3} />
              </div>
                <h5 class="count mb-0">03</h5>
                <div class="top-three-name single">
                    <p class="mb-0">Yuma KAGIYAMA</p>
                    <div class="block-footer d-flex">
                        <span class="text-blue">3564 </span>
                        <span class="divider">|</span>
                        <span class="text-blue">jpn</span>
                    </div>
                </div>
            </div>
            </Col>
          </Row>
            
            
             
        </div>
          <div class="standing-table_block">
            <StandingTable />
            <div class="standing-bottom">
            <Link to={`/`}  className="btn-border">
            View full Standings
            </Link>
            </div>
          </div>
     </div>

    </>
  );
}

export default StandingTabContent
