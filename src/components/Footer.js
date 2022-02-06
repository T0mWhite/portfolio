import React from "react";
import "../styles/css/custom.css";

import GitHub from "../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../assets/images/LI-In-Bug.png";

export default Footer;

function Footer() {
  return (
    <footer className="p-2">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div class="col col-lg-2 text-center">
            <a href="https://github.com/T0mWhite" target="about_blank">
              <img src={GitHub} height="25px" width="25px" alt="github" />
            </a>
          </div>
          <div class="col-sm-auto text-center fs-6">&copy;Tommy White 2022</div>
          <div class="col col-lg-2 text-center">
            <a
              href="https://www.linkedin.com/in/tom-white-942778224/"
              target="about_blank"
            >
              <img src={LinkedIn} height="25px" width="35px" alt="linkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
