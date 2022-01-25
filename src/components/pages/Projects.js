import React from "react";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div className="display-flex">
      <h1>Projects Page</h1>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
