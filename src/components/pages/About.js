import React from "react";
import AboutStyle from '../styles/About.css';

export default function About() {
  return (
    <div>
      {" "}
      <div className="jumbotron jumbotron-fluid">
        <div className="container" id="jumbotron">
          <h1 className="display-3">Tommy White</h1>
          <p className="lead">
            Tommy is a web developer with extensive experience embracing the
            challenge of troubleshooting brand new technologies.
          </p>
        </div>
      </div>
      <div className="justify-content-center">
        <p>
          He has recently earned a Certificate in Full Stack Development from
          Southern Methodist University. Passionate about functionality and
          end-user experience, his dedicated troubleshooting skills have been
          developed in the web and audio-visual space. A strong independent and
          group collaborator, he has insight to dig deep and solve complex
          issues and create solutions with a focus on functionality and
          reliability.
        </p>
      </div>
    </div>
  );
}
