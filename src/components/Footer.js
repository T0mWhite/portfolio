import React from "react";
import "../styles/css/portfolio.css";

import GitHub from "../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../assets/images/LI-In-Bug.png";

export default Footer;

function Footer() {
  return (
    <div className="navcontainer">
      <footer class="flex-footer">
        <ul>
          <li>
            <a href={"https://github.com/T0mWhite"}>
              <img src={GitHub} alt='GitHub' height="35px" width="35px"></img>
            </a>
          </li>

          <li>
            <a href={"https://www.linkedin.com/in/t0mwhite"}>
              <img src={LinkedIn} alt='linkedIn' height="35px" width="40px"></img>
            </a>
          </li>
        </ul>
      </footer>
      <h3> &copy; Thomas White 2022</h3>
    </div>
  );
}
