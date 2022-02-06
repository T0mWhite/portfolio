import React from "react";
import "../../styles/css/portfolio.css";
import HomeImage from "../../assets/images/homeimage.jpg";

export default function Home() {
  return (
    <>
      <main class="home__container">
        <img
          className="home__card"
          src={HomeImage}
          height="250px"
          width="300px"
          alt="headshot"
        />

        <div class="home__text">
          <p>
            Tommy is a web developer with extensive experience embracing the
            challenge of learning and troubleshooting new technologies.
          </p>
        </div>
      </main>
    </>
  );
}
