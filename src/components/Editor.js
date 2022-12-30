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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import news1 from '../../src/assets/images/news/news-1.png'
import news2 from '../../src/assets/images/news/news-2.png'
import news3 from '../../src/assets/images/news/news-3.png'
import { NewsIcon } from "./icon";


import editor from ".../../../public/video/editor1.mp4";
import podcast from '../../src/assets/images/podcast.png'

import blog from '../../src/assets/images/blogs.png'
import blog2 from '../../src/assets/images/blog2.png'
import videoicon from '../../src/assets/images/video-icon.svg'
import video from '../../src/assets/images/video.svg'
import blogicon from '../../src/assets/images/blogs-icon.svg'



function Editor() {

  return (
    <>
      <div class="editor-block">
        <div class="container">
          <div class="section-flex d-flex justify-between">
            <div class="heading_v2 position-relative">
              <div class="inner-flex d-flex">
                <div>
                  <h4 class="text-white text-uppercase">Editor’s Pick</h4>
                  <img class="heading_shape" src={round} />
                </div>
              </div>
            </div>
            <div class="section-flex-right">
              <Link to={`/`}
                className="btn-text text-white font-16"
              >
                View all
              </Link>
            </div>
          </div>
          <Row>
            <Col xs={12} lg={6}>
              <Link className="edior-block video latest" to={`/`}
              >
                <div class="BackgroundVideo ">
                  <div class="video_wrapper position-relative">
                    <video class="w-100" autoPlay loop muted>
                      <source src={editor} />
                    </video>
                    <div class="video_icon_link text-white">
                      <img src={video} /> Video
                    </div>
                  </div>
                </div>
                <div class="editor-content">
                  <h4>#UpAgain Moments | Speed Skating</h4>
                  <div class="editor-flex-content">
                    <span>08:30</span>
                    <span class="border-line">|</span>
                    <span>May 25, 2022</span>
                  </div>
                </div>
              </Link>

            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col xs={12} lg={6}>
                  <Link className="edior-block podcast least " to={`/`}
                  >
                    <div class="BackgroundVideo ">
                      <div class="video_wrapper position-relative">
                        <img className="post-img" src={podcast} />
                        <div class="video_icon_link editor_icon text-white">
                          <img src={videoicon} /> podcast
                        </div>
                      </div>
                    </div>
                    <div class="editor-content">
                      <h4>#UpAgain Moments | Speed Skating</h4>
                      <div class="editor-flex-content">
                        <span>08:30</span>
                        <span class="border-line">|</span>
                        <span>May 25, 2022</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="edior-block podcast least mt-30" to={`/`}
                  >
                    <div class="BackgroundVideo ">
                      <div class="video_wrapper position-relative">
                        <video class="w-100" autoPlay loop muted>
                          <source src={editor} />
                        </video>
                        <div class="video_icon_link text-white">
                          <img src={video} /> Video
                        </div>
                      </div>
                    </div>
                    <div class="editor-content">
                      <h4>#UpAgain Moments | Speed Skating</h4>
                      <div class="editor-flex-content">
                        <span>08:30</span>
                        <span class="border-line">|</span>
                        <span>May 25, 2022</span>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={12} lg={6}>
                  <Link className="edior-block blog least" to={`/`}
                  >
                    <div class="BackgroundVideo ">
                      <div class="video_wrapper position-relative">
                        <img class="post-img" src={blog} />
                        <div class="video_icon_link editor_icon text-white">
                          <img src={blogicon} /> Blogs
                        </div>
                      </div>
                    </div>
                    <div class="editor-content">
                      <h4>#UpAgain Moments | Speed Skating</h4>
                      <div class="editor-flex-content">
                        <span>08:30</span>
                        <span class="border-line">|</span>
                        <span>May 25, 2022</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="edior-block blog least mt-30" to={`/`}
                  >
                    <div class="BackgroundVideo ">
                      <div class="video_wrapper position-relative">
                        <img class="post-img" src={blog2} />
                        <div class="video_icon_link editor_icon text-white">
                          <img src={blogicon} /> Blogs
                        </div>
                      </div>
                    </div>
                    <div class="editor-content">
                      <h4>#UpAgain Moments | Speed Skating</h4>
                      <div class="editor-flex-content">
                        <span>08:30</span>
                        <span class="border-line">|</span>
                        <span>May 25, 2022</span>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Editor
