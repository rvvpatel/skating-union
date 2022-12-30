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

function WorldStanding() {


  return (
    <>
     <div class="world-standing is-mobile">
            <div class="container">
              <div class="section-flex d-flex justify-between">
                <div class="heading_v2 position-relative">
                  <h4 class="text-white text-uppercase">world standings</h4>
                  <img class="heading_shape" src={round}/>
                </div>
                <div class="bg-blue-dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Men's Standings
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/">Men's Standings</Dropdown.Item>
                      <Dropdown.Item href="/">Men's Standings</Dropdown.Item>
                      <Dropdown.Item href="/">SMen's Standings</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
              </div>
                <div class="word_standing">
                <Tabs
                      defaultActiveKey="2021/22"
                      id="uncontrolled-tab-example"
                      className="world-tab d-flex"
                    >
                      <Tab eventKey="2021/22" title="2021/22">
                       <StandingTabContent />
                      </Tab>
                      <Tab eventKey="2020/21" title="2020/21">
                      <StandingTabContent />
                      </Tab>
                      <Tab eventKey="2019/20" title="2019/20">
                      <StandingTabContent />
                      </Tab>
                      <Tab eventKey="2018/19" title="2018/19">
                      <StandingTabContent />
                      </Tab>
                      <Tab eventKey="2017/18" title="2017/18">
                      <StandingTabContent />
                      </Tab>
                      <Tab eventKey="2016/17" title="2016/17">
                      <StandingTabContent />
                      </Tab>
                    </Tabs>
                </div>
            </div>
          </div>

    </>
  );
}

export default WorldStanding
