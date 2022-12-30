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

function PdfBlock() {


  return (
    <>
     <div class="pdf_block">
        <div class="container">
        <Row>
          <Col xs={12} lg={6}>
            <div class="heading_v2 position-relative">
              <h4 class="text-white">ISU COMMUNICATIONS</h4>
              <img class="heading_shape" src={round}/>
            </div>
              <PdfISUblock />
              <PdfISUblock />
              <PdfISUblock />
              <PdfISUblock />
              <div class="pdf_footer">
              <Link to={`/`}  className="video-btn-link">
              View All
            </Link>
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="press_block">
            <div class="heading_v2 position-relative">
              <h4 class="text-white">PRESS RELEASE</h4>
              <img class="heading_shape " src={round}/>
            </div>
              <PdfPressblock />
              <PdfPressblock />
              <PdfPressblock />
              <div class="pdf_footer">
              <Link to={`/`}  className="video-btn-link">
              View All
            </Link>
              </div>
            </div>
          </Col>
        </Row>
        </div>
     </div>

    </>
  );
}

export default PdfBlock
