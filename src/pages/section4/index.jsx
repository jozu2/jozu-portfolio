import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Projects = () => {
  return (
    <>
      <h1 className="title-main">WORKS</h1>
      <div className="projects-container">
        <div className="project-1 box">
          <Link
            to="https://jozu2.github.io/magicKeyboard.github.io/"
            target="_blank"
          >
            {" "}
            <div className="img"></div>
            <div className="title">Magic Keyboard</div>
            <div className="description">
              A keyboard that you can customize and play with it. Experimental
              only. created using vanilla JS and css. WIP
            </div>
          </Link>
        </div>
        <div className="project-2 box">
          <div className="img"></div>
          <div className="title">Sugar Rush Bakery </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dolor at soluta itaque, eius voluptatum.
          </div>
        </div>
        <div className="project-3 box">
          <div className="img"></div>
          <div className="title">Lorem, ipsum.</div>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            sapiente iste optio fugiat nulla ducimus!
          </div>
        </div>
        <div className="project-4 box">
          <div className="img"></div>
          <div className="title">Lorem, ipsum.</div>
          <div className="description">lorem15</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
