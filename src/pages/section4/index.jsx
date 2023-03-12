import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <Fade bottom duration="1500">
        <h1 className="title-main" id="works">
          WORKS
        </h1>
      </Fade>
      <div className="projects-container">
        <Fade bottom duration="1500">
          <div className="project-3 box">
            <Link to="https://jozu2.github.io/CafePlum/" target="_blank">
              <div className="img"></div>
              <div className="title">Cafe Plum</div>
              <div className="description">
                It's the 1st website that I made using react framework and Sass.
              </div>
            </Link>
          </div>
          <div className="project-2 box">
            <Link to="https://jozu2.github.io/SugarRushBakery/" target="_blank">
              <div className="img"></div>
              <div className="title">SUGAR RUSH BAKERY </div>
              <div className="description">
                I'm currently building this Bakery Website that has a special
                feature which gives an option for the customers to build their
                own 2D/3D Cake.
              </div>
            </Link>
          </div>
          <div className="project-1 box">
            <Link
              to="https://jozu2.github.io/magicKeyboard.github.io/"
              target="_blank"
            >
              <div className="img"></div>
              <div className="title">WEB KEYBOARD</div>
              <div className="description">
                A personalized keyboard that you can customize and play with it.
                Experimental only. Built using vanilla JS and css.
              </div>
            </Link>
          </div>

          <div className="project-4 box">
            <Link to="https://jozu2.github.io/feb2023-clock/" target="_blank">
              <div className="img"></div>
              <div className="title">Digital Web Clock</div>
              <div className="description">
                A web clock built with vanilla js css and html that has a light
                and dark mode feature
              </div>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
