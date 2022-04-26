import React from "react";
import "./Header.css";

let F1Logo = require("../../Assets/F1_logo.svg.png");

function Header() {
  return (
    <div className="Header">
      <img className="Header-Image" src={F1Logo} alt="Formula-1-Logo" />
      <div className="Header-Divs">
        <h1 className="Heading-Text">Formula One Information App</h1>
        <h2 className="Heading-Subtext">Not Licensed... Shh</h2>
      </div>
    </div>
  );
}

export default Header;
