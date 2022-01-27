import React from "react";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <body className="m-5">
      <div className="text-center">
        <h1>Projects</h1>
        <p>Check out my work</p>
      </div>

      <div className="containter">
        <div className="row m-3">
          <div className="col-md-6">
            <ProjectCard />
          </div>
          <div className="col-md-6">
            <ProjectCard />
          </div>
 
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
        </div>
      </div>
    </body>
  );
}
