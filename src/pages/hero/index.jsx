import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { Link } from "react-router-dom";
import AboutMe from "../section2";
import WhySkills from "../section3";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-h1">
          <div className="line-one">
            <span className="small">HELLO, I'M</span>
            <h1 className="large">JOSHUA</h1>
          </div>
          <hr />
          <div className="line-two">
            <h1 className="large">MELENDRES</h1>
            <span className="small">
              WEB DEVELOPER <span className="small block">UI/UX DESIGNER</span>
            </span>
          </div>
        </div>
        <div className="hero-btn">
          <button>DOWNLOAD CV</button>
        </div>
        <div className="hero-socials">
          <Link>
            <BsFacebook />
          </Link>
          <Link>
            <FaTelegramPlane />
          </Link>
          <Link>
            <BsGithub />
          </Link>
          <Link>
            <SiIndeed />
          </Link>
        </div>
      </div>

      <AboutMe />
      <WhySkills />
    </>
  );
};

export default Hero;
