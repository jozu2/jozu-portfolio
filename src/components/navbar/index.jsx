import React from "react";
import "./style.scss";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navs-container">
      <div className={nav ? "container active" : "container shrink"}></div>
      <div className="bg"></div>
      <div className="background">
        <div class={nav ? "menu-btn open" : "menu-btn"} onClick={handleNav}>
          <div class="menu-btn__burger"></div>
        </div>
      </div>
      <ul className={nav ? "menu active" : "menu"}>
        <a href="#home" onClick={handleNav}>
          <li>Home</li>
        </a>
        <a href="#works" onClick={handleNav}>
          <li>Works</li>
        </a>
        <a href="#footer" onClick={handleNav}>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
