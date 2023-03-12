import React from "react";
import "./style.scss";
import Fade from "react-reveal/Fade";
const AboutMe = () => {
  return (
    <>
      <div className="aboutme-container" id="aboutme">
        <div className="aboutme-content">
          <Fade bottom duration="2500">
            <h1>ABOUT ME</h1>
            <p>
              Hello, I'm Joshua Melendres, a web developer based in phillipines.
              Who have a passion for crafting beautiful and user-friendly
              websites that deliver exceptional user experiences.
              <br />
              <br />
              As a self-taught developer I've honed my skills over the years
              through countless hours of coding and building websites. I
              specialize in front-end development using HTML, CSS, and
              JavaScript, and I'm always looking for ways to expand my knowledge
              and stay up-to-date with the latest web technologies.
            </p>
          </Fade>
        </div>
        <Fade bottom duration="3500">
          <div className="aboutme-picture">
            <div className="image"></div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default AboutMe;
