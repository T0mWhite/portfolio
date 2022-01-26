import React from "react";

import GitHub from "../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../assets/images/LI-In-Bug.png";

export default Footer;

function Footer() {
  return (
    <footer>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark p-3">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="https://github.com/T0mWhite" target="about_blank">
                <img src={GitHub} height="35px" width="35px" alt="github" />
              </a>
            </li>
            <li class="nav-item px-5">
              <a class="navbar-brand" href="#about">
                Tommy White
              </a>
            </li>
            <li class="nav-item">
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

    // <div className="nav-wrapper fixed-bottom">
    //   <ul>
    //     <li className="left">
    //       <a href="https://github.com/T0mWhite" target="about_blank">
    //         <img src={GitHub} height="35px" width="35px" alt="github" />
    //       </a>
    //     </li>
    //     <h5 className="brand-logo center">
    //       Tommy White
    //     </h5>
    //     <li className="right">
    // <a
    //   href="https://www.linkedin.com/in/tom-white-942778224/"
    //   target="about_blank"
    // >
    //         <img src={LinkedIn} height="35px" width="40px" alt="linkedIn" />
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
