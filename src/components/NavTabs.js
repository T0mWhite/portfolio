import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          Tommy White
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => handlePageChange("About")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={() => handlePageChange("Projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
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
