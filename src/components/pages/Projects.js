import React from "react";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <>
      <div>
        <h1>Projects</h1>
        <p>Check out my work</p>
      </div>

      <div className="d-flex flex-row flex-wrap container-fluid pt-3 justify-content-center vh-100">
        <div className="col-sm-6 mx-4">
          <ProjectCard />
        </div>
        <div className="col-sm-6 mx-4">
          <ProjectCard />
        </div>
        <div className="col-sm-6 mx-4">
          <ProjectCard />
        </div>
        <div className="col-sm-6 mx-4">
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
