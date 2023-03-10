import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="background-footer active"></div>
        <div className="container-flex">
          <div className="start-project-container active">
            <div className="title">START A PROJECT</div>
            <p>
              Interested in working together? We Should queue up a time to chat.
            </p>
            <button className="btn active">LET'S DO IT!</button>
          </div>

          <div className="footer-details active">
            <div className="motto">
              "Through every difficulty, to the stars."
            </div>
            <div className="hero-socials active">
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
            <div className="email">webdevjosu@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
