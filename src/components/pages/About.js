import React from "react";
import Headshot from "../../assets/images/Headshot.jpg";
import Express from "../../assets/images/express.png";

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
          <div className="">
        <details>
            <summary>Front-End</summary>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              height="60px"
              width="60px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              height="60px"
              width="60px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              height="60px"
              width="60px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              height="60px"
              width="60px"
            />
          </details>
          <details>
            <summary>
              Back-End
            </summary>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              height="60px"
              width="60px"
            />
            <img src={Express} height="60px" width="60px" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              height="60px"
              width="60px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              height="60px"
              width="60px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
              height="60px"
              width="60px"
            />
          </details>
        </div>
        </div>
        <div>
          <a className="about__text" href={"https://docs.google.com/document/d/14jv51lQsV4KxF0zR1CGyhtR9aA9X87FTYD_PapEazn8/edit?usp=sharing"}>
            Resume
          </a>
        </div>
      </main>
    </>
  );
}
