import React from "react";
import Headshot from "../../assets/images/Headshot.jpg";

export default function About() {
  return (
    <>
      <main className="about__container">
        <img
          className="about__card"
          src={Headshot}
          height="1080px"
          width="1920px"
          alt="headshot"
        />
        <div className="about__text">
          <p>
            Passionate about functionality and end-user experience, his
            dedicated troubleshooting skills have been developed in the web and
            audio-visual space. A strong independent and group collaborator, he
            has insight to dig deep and solve complex issues and create
            solutions with a focus on functionality and reliability. He has
            recently earned a Certificate in Full Stack Web Development from
            Southern Methodist University.
          </p>
        </div>
        <div>
          <a className="about__text" href={"https://www.linkedin.com/in/t0mwhite"}>
            Resume
          </a>
        </div>
      </main>
    </>
  );
}
