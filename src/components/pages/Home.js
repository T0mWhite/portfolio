import React from "react";
import "../../styles/css/portfolio.css";
import HomeImage from "../../assets/images/homeimage.jpg";

export default function Home() {
  return (
    <>
      <main className="home__container">
        <h1>Tommy White</h1>
        <img className="home__card" src={HomeImage} alt="A beautiful view" />
        <div className="home__text">
          <h2>
            Former audiovisual technician turned full-stack developer with extensive experience embracing the challenge of
            learning and developing with cutting-edge technologies.
          </h2>
        </div>
      </main>
    </>
  );
}
