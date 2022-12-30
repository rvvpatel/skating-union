import React from "react";
import TopHeader from "../TopHeader";
import SpeedStaking from "../SpeedStaking";
import BackgroundVideo from "../BackgroundVideo";
import PdfBlock from "../PdfBlock";
import AdBanner from "../AdBanner";
import WorldStanding from "../WorldStanding";
import AddBlock from "../AddBlock";
import Athletes from "../Athletes";
import SocialBlock from "../SocialBlock";
import Events from "../Events";
import BannerHeroSlide from "../BannerHeroSlide";
import SocialIcons from "../SocialIcons";
import News from "../News";
import Editor from "../Editor";

export const Home = () => {
  return (
   <>
      <div class="main_wrapper">
        <div class="page-content">
           
          <SocialIcons />
          <BannerHeroSlide />
          <div className="section-bg">
            <News />
            <Editor />
            <Events />
            <Athletes />
          </div>
          <SocialBlock />
          <AddBlock  />
          <WorldStanding />
          <AdBanner />
          <PdfBlock />
          <BackgroundVideo />
          <SpeedStaking />
          </div>
      </div>
   </>
  );
};
