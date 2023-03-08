import React from "react";
import "./style.scss";

const AboutMe = () => {
  return (
    <>
      <div className="aboutme-container">
        <div className="aboutme-content">
          <h1>ABOUT ME</h1>
          <p>
            Hello, I'm Joshua Melendres, a web developer based in phillipines. I
            have a passion for crafting beautiful and user-friendly websites
            that deliver exceptional user experiences. As a self-taught
            developer
            <br />
            <br />
            I've honed my skills over the years through countless hours of
            coding and building websites for clients. I specialize in front-end
            development using HTML, CSS, and JavaScript, and I'm always looking
            for ways to expand my knowledge and stay up-to-date with the latest
            web technologies.
          </p>
        </div>
        <div className="aboutme-picture">
          <div className="image"></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
