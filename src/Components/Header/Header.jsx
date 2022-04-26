import React from "react";
import "./Header.css";

import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";

let F1Logo = require("../../Assets/F1_logo.svg.png");

function Header() {
  return (
    <div className="HeaderWrapper">
      <div className="Header">
        <Image className="thumbnail" src={F1Logo} alt="Formula-1-Logo" />
        <div className="Header-Divs">
          <h1 className="Heading-Text">Formula One Information App</h1>
          <h2 className="Heading-Subtext">Not Licensed... Shh</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
