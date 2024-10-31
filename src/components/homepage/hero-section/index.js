import Image from "next/image";
import React from "react";
import heroSectonImg from"@/assets/images/homepage/hero-section.png";
import logo from "@/assets/images/homepage/Logo.svg"
import bottomLeftImg from "@/assets/images/homepage/combined-shape-bottom-left.png"
import topRightImg from "@/assets/images/homepage/Shape-top-right.png"

const HeroSection = () => {
  return (
    <section className="HeroSection">
            <Image className="HeroSection_topRightImg
            " src={topRightImg} alt="topRightImg"/>
        
      <div className="container">
        <div className="outerSpace">
          <div className="HeroSection_text"> 
            <Image src={logo} alt="logo.svg"/>
            <h1>Best solution for startups</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="HeroSection_btns">
                <button className="purpleBtn">GET IN TOUCH</button>
                <button className="grayBtn">CASE STUDIES</button>
            </div>
          </div>

          <div className="HeroSection_mainImage">
            <Image src={heroSectonImg} alt="hero-section.png"/>

            <Image className="HeroSection_bottomLeftImg" src={bottomLeftImg} alt="bottomLeftImg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
