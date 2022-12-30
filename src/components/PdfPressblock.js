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
import { PDF } from "./icon";

function PdfPressblock() {


  return (
    <>

      <Link class="pdf-block-content " to={`/`}
      >
        <div class="pdf_icon">
          <PDF />
        </div>
        <div class="block-content">
          <h5 class="text-uppercase mb-0">ISU World Junior Figure Skating Championships 2022 - Tallinn - Day 3</h5>
          <span class="text-uppercase font-12 date">June 30, 2021</span>
        </div>
      </Link>


    </>
  );
}

export default PdfPressblock
