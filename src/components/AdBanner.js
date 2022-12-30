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
import addbanner from '../../src/assets/images/banner-img.png'
import PdfISUblock from "./PdfISUblock";
import PdfPressblock from "./PdfPressblock";

function AdBanner() {


  return (
    <>
    <div className="add">
    <div class="add_banner">
        <img src={addbanner}/>
     </div>
    </div>

    </>
  );
}

export default AdBanner
