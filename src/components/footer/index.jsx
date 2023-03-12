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
      <div className="footer-container" id="footer">
        <div className="background-footer active"></div>
        <div className="container-flex">
          <div className="start-project-container active">
            <div className="title">START A PROJECT</div>
            <p>
              Interested in working together? We Should queue up a time to chat.
            </p>
            <a href="mailto:webdevjosu@gmail.com">
              <button className="btn active">Contact Me</button>
            </a>
          </div>

          <div className="footer-details active">
            <div className="motto">
              "Through every difficulty, to the stars."
            </div>
            <div className="hero-socials active">
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
            <div className="email">webdevjosu@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
