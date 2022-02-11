import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <main className="container">
      <section className="card card6">
          <header>
            <a
              href="https://github.com/T0mWhite/dochub"
              target="about_blank"
            >
              Documentation Hub
            </a>
          </header>
          <div className="project-text">
            <p>
              DocHub is a resource for developers to view, rate, and submit programming documentation that is clear and concise. This project is in ongoing development.
            </p>
          </div>
        </section>
      <section className="card card3">
          <header>
            <a
              href="https://github.com/T0mWhite/Text-Editor"
              target="about_blank"
            >
              Text Editor
            </a>
          </header>
          <div className="project-text">
            <p>
              A simple text editor that can be used in the browser as well as installed and used offline. IndexedDB is used to save the text to be retrieved when opening the app at a later date.
            </p>
          </div>
        </section>
        <section className="card card5">
          <header>
            <a
              href="https://github.com/T0mWhite/Social-Media-API"
              target="about_blank"
            >
              Social Network API
            </a>
          </header>
          <div className="project-text">
            <p>
            A skeleton for a social media app. It supplies users with thoughts and reactions to those thoughts, as well as the ability to have friends. All of these items are stored in MongoDB, a noSQL database, and loose relationships are tethered through mongoose.js.
            </p>
          </div>
        </section>
        <section className="card card1">
          <header>
            <a
              href="https://t0mwhite.github.io/HW1---Semantic-HTML/"
              target="about_blank"
            >
              Search Engine Optimization
            </a>
          </header>
          <div className="project-text">
            <p>
              Refactored HTML and CSS to achieve accurate and concise
              search engine results. Brought code-base to accessibility
              standards. Eased maintainability of code through semantic elements
              and descriptive comments.
            </p>
          </div>
        </section>
        <section className="card card2">
          <header>
            <a
              href="https://github.com/T0mWhite/Employee-Tracker"
              target="about_blank"
            >
              Employee Tracker
            </a>
          </header>
          <div className="project-text">
            <p>
              A lightweight application for employers to track and edit
              employees and departments within their company. Through the CLI the user can follow prompts to edit information.
            </p>
          </div>
        </section>
        <section className="card card4">
          <header>
            <a
              href="https://github.com/T0mWhite/Note-Taker"
              target="about_blank"
            >
              Note Taker
            </a>
          </header>
          <div className="project-text">
            <p>A simple app to save notes for later use.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
