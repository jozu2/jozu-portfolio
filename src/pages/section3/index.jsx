import React from "react";
import "./style.scss";
import { AiOutlineTeam } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
const WhySkills = () => {
  return (
    <>
      <div className="why-skills-container">
        <div className="why-container">
          <h1 className="title">WHY HIRE ME?</h1>
          <div className="why-box-container">
            <div className="box1">
              <div className="logo">
                <AiOutlineTeam />
              </div>
              <h1>TEAMPLAYER</h1>
              <p>
                I believe that my ability to work collaboratively with others,
                my strong communication skills, and my passion for creating
                high-quality work make me an asset to any team.
              </p>
            </div>
            <div className="box2">
              <div className="logo">
                <MdDesignServices />
              </div>
              <h1>PASSION FOR DESIGNING</h1>
              <p>
                My passion for design goes beyond just creating visually
                appealing layouts. I also enjoy solving design problems and
                finding unique solutions that improve user experience.
              </p>
            </div>
            <div className="box3">
              <div className="logo">
                <AiOutlineFileDone />
              </div>
              <h1>PROBLEM SOLVER</h1>
              <p>
                I am a web developer and UI designer who loves solving complex
                problems.I enjoy tackling difficult problems and finding
                innovative ways to overcome them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="myskills-container">
        <h1>MY SKILLS</h1>

        <div className="skills">
          <div className="skill1">
            <div className="img1">
              <IoLogoJavascript />
            </div>
            <p>JAVASCRIPT</p>
          </div>

          <div className="skill2">
            <div className="img1">
              <AiOutlineHtml5 />
            </div>
            <p>HTML5</p>
          </div>

          <div className="skill3">
            <div className="img1">
              <FaReact />
            </div>
            <p>REACT</p>
          </div>

          <div className="skill4">
            <div className="img1">
              <FaSass />
            </div>
            <p>SASS</p>
          </div>

          <div className="skill5">
            <div className="img1">
              <SiAdobephotoshop />
            </div>
            <p>PHOTOSHOP</p>
          </div>

          <div className="skill6">
            <div className="img1">
              <FaCss3Alt />
            </div>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySkills;
