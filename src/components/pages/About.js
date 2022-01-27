import React from "react";
import styles from "../../styles/css/custom.css";

export default function About() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <h1>Tommy White</h1>
            <p>
              Tommy is a web developer with extensive experience embracing the
              challenge of troubleshooting brand new technologies.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="http://placecorgi.com/640/360"
              className="card-img-top rounded"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="parent container h-100">
        <div className="justify-content-center">
          <p className="p-4">
            Passionate about functionality and end-user experience, his
            dedicated troubleshooting skills have been developed in the web and
            audio-visual space. A strong independent and group collaborator, he
            has insight to dig deep and solve complex issues and create
            solutions with a focus on functionality and reliability. He has
            recently earned a Certificate in Full Stack Web Development from
            Southern Methodist University.
          </p>
        </div>
      </div>
    </>
  );
}
