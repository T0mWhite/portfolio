import React from "react";

import GitHub from "../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../assets/images/LI-In-Bug.png";

export default Footer;

function Footer() {
  return (
    <div className="nav-wrapper">
      <ul>
        <li className="left">
          <a href="https://github.com/T0mWhite" target="about_blank">
            <img src={GitHub} height="35px" width="35px" alt="github" />
          </a>
        </li>
        <h5 className="brand-logo center">
          Tommy White
        </h5>
        <li className="right">
          <a
            href="https://www.linkedin.com/in/tom-white-942778224/"
            target="about_blank"
          >
            <img src={LinkedIn} height="35px" width="40px" alt="linkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
}
