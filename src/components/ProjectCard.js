import React from "react";
import placeholder from "../assets/images/350x150.png";
export default function ProjectCard() {
  return (
    <div className="card d-flex flex-column" style={{width: "150px"}}>
      <img src={placeholder} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
