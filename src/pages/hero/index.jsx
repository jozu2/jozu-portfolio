import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { Link } from "react-router-dom";
import AboutMe from "../section2";
import WhySkills from "../section3";
import Projects from "../section4";
import DarkMode from "../../components/darkmode";

const Hero = () => {
  return (
    <div className="body-container" id="home">
      <div className="hero-container" id="home">
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
          <Link to="https://fb.com/delliorra" target="_blank">
            <BsFacebook />
          </Link>
          <Link to="https://t.me/jowzu" target="_blank">
            <FaTelegramPlane />
          </Link>
          <Link to="https://github.com/jozu2" target="_blank">
            <BsGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/joshua-melendres-155814264/"
            target="_blank"
          >
            <SiIndeed />
          </Link>
        </div>
      </div>

      <AboutMe />
      <WhySkills />
      <Projects />
    </div>
  );
};

export default Hero;
