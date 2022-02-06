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
                <img src={GitHub} height="35px" width="35px"></img>
              </a>
            </li>
            <li>
              <h2> &copy; Thomas White</h2>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tom-white-942778224/">
                <img src={LinkedIn} height="35px" width="40px"></img>
              </a>
            </li>
          </ul>
        </footer>

    </div>

  );
}
