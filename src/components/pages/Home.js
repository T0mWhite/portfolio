import React from "react";
import "../../styles/css/portfolio.css";
import HomeImage from "../../assets/images/homeimage.jpg";

export default function Home() {
  return (
    <>
      <main className="home__container">
        <h1>Thomas White</h1>
        <img className="home__card" src={HomeImage} alt="home" />
        <div className="home__text">
          <h2>
            Audiovisual technician turned web developer with extensive experience embracing the challenge of
            learning and troubleshooting new technologies.
          </h2>
        </div>
      </main>
    </>
  );
}
