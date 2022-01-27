import React from "react";

import GitHub from "../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../assets/images/LI-In-Bug.png";

export default Footer;

function Footer() {
  return (
    <footer>
      <nav className="navbar navbar-expand-sm sticky-bottom bg-dark navbar-dark p-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://github.com/T0mWhite" target="about_blank">
                <img src={GitHub} height="35px" width="35px" alt="github" />
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="navbar-brand" href="#about">
                Tommy White
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/tom-white-942778224/"
                target="about_blank"
              >
                <img src={LinkedIn} height="35px" width="40px" alt="linkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
