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
import bgvideo from ".../../../public/video/fr.mp4";

function BackgroundVideo() {


  return (
    <>
     <div class="BackgroundVideo ">
      <div class="video_wrapper position-relative">
          <video class="w-100" autoPlay loop muted>
            <source src={bgvideo}  />
          </video>
          <div class="video_wrapper_content text-center">
            <h5 class="font_primary text-white">AcCess ISU Archives</h5>
            <div class="btn-group">
            <Link to={`/`}  className="video-btn-link">
                 View IMAGES
            </Link>
            <Link to={`/`}  className="video-btn-link bg">
            View Videos
            </Link>
            </div>
          </div>
        </div>
     </div>

    </>
  );
}

export default BackgroundVideo
