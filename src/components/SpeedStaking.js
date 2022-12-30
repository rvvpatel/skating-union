import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'
import arrow from '../../src/assets/images/bottom-arrow.svg'
import { Search, User } from "./icon";
import { Youtube, Social, Facebook, Call, Fax, Twitter, Instagram } from "./icon";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SpeedStaking() {


  return (
    <>
     <div class="speed-staking ">
        <Row>
          <Col xs={12} lg={3}>
            <div class="speed-block text-center">
              <h6 class="text-white font_primary">SYNCHRONIZED 
                SKATING</h6>
            </div>
          </Col>
          <Col xs={12} lg={3}>
          <div class="speed-block text-center speed-social">
              <h4 class="text-white font_primary">Speed Skating</h4>
              <div class="social_icon">
              <Link to={`/`}
              className="social_link"
              >
              <Facebook />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Twitter />
              </Link>
              <Link to={`/`}
              className="social_link"
              >
              <Instagram />
              </Link>
            </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
          <div class="speed-block text-center">
              <h6 class="text-white font_primary">Short track</h6>
            </div>
          </Col>
          <Col xs={12} lg={3}>
          <div class="speed-block text-center">
              <h6 class="text-white font_primary">Figure skating</h6>
            </div>
          </Col>
        </Row>
     </div>

    </>
  );
}

export default SpeedStaking
