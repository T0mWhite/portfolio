import React from "react";
import NavStyles from "./styles/Nav.module.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#about" onClick={() => handlePageChange("About")}>
          Tommy White
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#about"
                onClick={() => handlePageChange("About")}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#projects"
                onClick={() => handlePageChange("Projects")}
              >
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#contact"
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
