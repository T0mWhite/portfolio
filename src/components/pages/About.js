import React from "react";
import AboutStyle from "../styles/About.css";

export default function About() {
  return (
    <div>
      <div className="w-75 mt-4 p-4 bg-primary text-white text-center border border-3 border-dark mx-auto shadow-lg">
        <h1>Tommy White</h1>
        <p>
          Tommy is a web developer with extensive experience embracing the
          challenge of troubleshooting brand new technologies.
        </p>
      </div>
      <div className="justify-content-center">
        <p className="p-4">
          Passionate about functionality and end-user experience, his dedicated
          troubleshooting skills have been developed in the web and audio-visual
          space. A strong independent and group collaborator, he has insight to
          dig deep and solve complex issues and create solutions with a focus on
          functionality and reliability. He has recently earned a Certificate in
          Full Stack Web Development from Southern Methodist University.
        </p>

      </div>
    </div>
  );
}
