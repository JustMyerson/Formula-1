import React from "react";
import "./Footer.css";

import Image from "react-bootstrap/Image";

let GitHub = require("../../Assets/GitHub-Logo.png");

function Footer() {
  return (
    <div className="Footer">
      <button
        className="Github-Button"
        onClick={() =>
          window.open(
            "https://github.com/JustMyerson/Formula-1/tree/main/formula-one",
            "_blank"
          )
        }
      >
        <Image className="Footer-Image" src={GitHub} alt="Github Logo" />
      </button>
      <h3 className="Created-By">Justin Myerson</h3>
    </div>
  );
}

export default Footer;
